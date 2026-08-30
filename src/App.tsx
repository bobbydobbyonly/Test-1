import React, { useState, useEffect } from 'react';
import { ViewMode, Artwork, CartItem } from './types';
import { ARTWORKS } from './data/artworks';
import { Sidebar } from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';
import { GalleryGrid } from './components/GalleryGrid';
import { ArtworkModal } from './components/ArtworkModal';
import { ArtPrintsView } from './components/ArtPrintsView';
import { OtherGoodsView } from './components/OtherGoodsView';
import { CommissionsView } from './components/CommissionsView';
import { AboutModal } from './components/AboutModal';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('gallery');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('jn_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('jn_cart_items', JSON.stringify(cartItems));
    } catch {
      // safe fallback
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.cartItemId === item.cartItemId);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += item.quantity;
        return copy;
      }
      return [item, ...prev];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleQuickBuyPrint = (artwork: Artwork) => {
    setSelectedArtwork(null);
    setCurrentView('prints');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArtwork = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-white text-black font-sans selection:bg-[#52A3CC] selection:text-white">
      {/* Mobile Top Header Navigation */}
      <MobileHeader
        currentView={currentView}
        onSelectView={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Dual-Zone Container */}
      <div className="flex w-full min-h-screen">
        {/* Desktop Fixed Left Sidebar */}
        <Sidebar
          currentView={currentView}
          onSelectView={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Right Content Stage (Offset by 240px sidebar on large displays) */}
        <main
          id="main-stage"
          className="flex-1 lg:ml-[240px] px-4 sm:px-8 md:px-12 py-8 md:py-12 max-w-7xl"
        >
          {currentView === 'gallery' && (
            <GalleryGrid
              artworks={ARTWORKS}
              onSelectArtwork={handleSelectArtwork}
              onQuickBuyPrint={handleQuickBuyPrint}
            />
          )}

          {currentView === 'prints' && (
            <ArtPrintsView
              onAddToCart={handleAddToCart}
              onOpenCart={() => setIsCartOpen(true)}
            />
          )}

          {currentView === 'goods' && (
            <OtherGoodsView
              onAddToCart={handleAddToCart}
              onOpenCart={() => setIsCartOpen(true)}
            />
          )}

          {currentView === 'commissions' && <CommissionsView />}

          {currentView === 'about' && (
            <AboutModal
              onBackToGallery={() => setCurrentView('gallery')}
              onGoToCommissions={() => setCurrentView('commissions')}
            />
          )}
        </main>
      </div>

      {/* High-Resolution Artwork Lightbox Modal */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          artworks={ARTWORKS}
          onClose={() => setSelectedArtwork(null)}
          onSelectArtwork={handleSelectArtwork}
          onBuyPrint={handleQuickBuyPrint}
        />
      )}

      {/* Slide-out Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigateToShop={() => setCurrentView('prints')}
      />
    </div>
  );
}
