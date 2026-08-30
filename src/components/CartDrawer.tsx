import React, { useState } from 'react';
import { CartItem } from '../types';
import confetti from 'canvas-confetti';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, ArrowRight, Shield } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onNavigateToShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToShop,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  // Form states for simulated checkout
  const [shippingInfo, setShippingInfo] = useState({
    name: 'Art Collector',
    email: 'collector@studio.com',
    address: '142 Bedford Ave, Apt 4B',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11211',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const shipping = subtotal > 75 || items.length === 0 ? 0 : 5.0;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'NEWYORKER10' || clean === 'ILLUSTRATE10' || clean === 'JEREMY10') {
      setAppliedDiscount(10);
      setPromoMessage('10% Collector Discount Applied!');
    } else {
      setPromoMessage('Invalid promo code. Try "NEWYORKER10"');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `JN-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmed(orderNumber);
    setIsCheckingOut(false);
    onClearCart();

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cart-drawer-panel"
        className="w-full max-w-md bg-white h-full flex flex-col justify-between shadow-2xl p-6 md:p-8 animate-in slide-in-from-right duration-200 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-neutral-900" />
            <h2 className="text-lg font-bold tracking-tight text-neutral-900">
              Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            id="close-cart-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        {orderConfirmed ? (
          <div className="my-auto text-center space-y-4 py-8">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-neutral-900">
              Order Confirmed!
            </h3>
            <p className="text-xs text-neutral-400 font-mono">
              Receipt Reference: #{orderConfirmed}
            </p>
            <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
              Your archival order is being prepared and signed in Jeremy Nguyen’s studio. A tracking link will be sent to your email.
            </p>
            <button
              onClick={() => {
                setOrderConfirmed(null);
                onClose();
              }}
              className="bg-neutral-900 text-white text-xs font-bold py-3 px-6 rounded-full hover:bg-neutral-800 transition-colors shadow-xs"
            >
              Continue Exploring
            </button>
          </div>
        ) : isCheckingOut ? (
          /* Checkout Form Stage */
          <form onSubmit={handleCompleteOrder} className="my-auto space-y-4 py-4">
            <h3 className="text-sm font-bold text-neutral-900 pb-1">
              Shipping & Delivery
            </h3>

            <div className="space-y-2.5 text-xs">
              <div>
                <label className="font-semibold block text-[11px] text-neutral-600 mb-1">
                  Recipient Name
                </label>
                <input
                  required
                  type="text"
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                  className="w-full bg-neutral-50 rounded-xl p-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="font-semibold block text-[11px] text-neutral-600 mb-1">
                  Email for Tracking
                </label>
                <input
                  required
                  type="email"
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  className="w-full bg-neutral-50 rounded-xl p-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="font-semibold block text-[11px] text-neutral-600 mb-1">
                  Street Address
                </label>
                <input
                  required
                  type="text"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  className="w-full bg-neutral-50 rounded-xl p-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="font-semibold block text-[11px] text-neutral-600 mb-1">
                    City
                  </label>
                  <input
                    required
                    type="text"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    className="w-full bg-neutral-50 rounded-xl p-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="font-semibold block text-[11px] text-neutral-600 mb-1">
                    State
                  </label>
                  <input
                    required
                    type="text"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                    className="w-full bg-neutral-50 rounded-xl p-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="font-semibold block text-[11px] text-neutral-600 mb-1">
                    ZIP
                  </label>
                  <input
                    required
                    type="text"
                    value={shippingInfo.zip}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                    className="w-full bg-neutral-50 rounded-xl p-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3">
              <div className="flex justify-between text-sm font-bold text-neutral-900 mb-3">
                <span>Total Amount</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold py-3.5 px-4 rounded-full transition-all shadow-xs cursor-pointer"
              >
                Confirm & Place Order (${total.toFixed(2)})
              </button>
              <button
                type="button"
                onClick={() => setIsCheckingOut(false)}
                className="w-full text-center text-xs text-neutral-500 hover:text-neutral-900 font-semibold mt-2"
              >
                ← Back to Cart Items
              </button>
            </div>
          </form>
        ) : items.length === 0 ? (
          <div className="my-auto text-center space-y-4 py-12">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-neutral-900">
                Your Bag is Empty
              </h3>
              <p className="text-xs text-neutral-500">
                Explore limited art prints, published board games, and original books.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onNavigateToShop();
              }}
              className="bg-neutral-900 text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-neutral-800 transition-colors shadow-xs"
            >
              Browse Art Prints →
            </button>
          </div>
        ) : (
          /* Item List */
          <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
            {items.map((item) => (
              <div key={item.cartItemId} className="bg-neutral-50 rounded-2xl p-3.5 flex items-start justify-between gap-3">
                <div className="flex-1 space-y-0.5">
                  <h4 className="font-bold text-xs text-neutral-900 leading-snug">
                    {item.title}
                  </h4>
                  {item.sizeLabel && (
                    <div className="text-[10px] text-neutral-500">
                      Size: {item.sizeLabel}
                    </div>
                  )}
                  {item.frameLabel && (
                    <div className="text-[10px] text-neutral-500">
                      Frame: {item.frameLabel}
                    </div>
                  )}
                  <div className="text-xs font-bold text-neutral-900 pt-0.5">
                    ${item.price.toFixed(2)} each
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex flex-col items-end space-y-2">
                  <div className="flex items-center bg-white rounded-full p-0.5 shadow-2xs text-xs">
                    <button
                      onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-neutral-100"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 font-bold font-mono text-neutral-800">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-neutral-100"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.cartItemId)}
                    className="text-neutral-400 hover:text-red-500 p-1 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer / Summary (when items exist and not in confirmation) */}
        {!orderConfirmed && !isCheckingOut && items.length > 0 && (
          <div className="pt-4 space-y-4">
            {/* Promo Code input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo Code (NEWYORKER10)"
                className="flex-1 bg-neutral-50 rounded-xl px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
              <button
                type="submit"
                className="bg-neutral-900 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-neutral-800 transition-colors shadow-xs"
              >
                Apply
              </button>
            </form>
            {promoMessage && (
              <p className="text-[10px] font-semibold text-emerald-600">{promoMessage}</p>
            )}

            {/* Calculations */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-neutral-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Collector Discount (10%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-500">
                <span>Studio Archival Shipping</span>
                <span>{shipping === 0 ? 'FREE (Over $75)' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-neutral-900 pt-2 border-t border-neutral-100">
                <span>Estimated Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              id="proceed-to-checkout-btn"
              onClick={() => setIsCheckingOut(true)}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold py-3.5 px-4 rounded-full flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-98 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

