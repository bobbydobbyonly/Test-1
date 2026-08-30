import React, { useState } from 'react';
import { PrintItem, CartItem } from '../types';
import { PRINT_ITEMS } from '../data/products';
import { ARTWORKS } from '../data/artworks';
import { ArtworkVisual } from './ArtworkVisual';
import { ShoppingBag, Check, ShieldCheck, Truck, Sparkles } from 'lucide-react';

interface ArtPrintsViewProps {
  onAddToCart: (item: CartItem) => void;
  onOpenCart: () => void;
}

export const ArtPrintsView: React.FC<ArtPrintsViewProps> = ({ onAddToCart, onOpenCart }) => {
  const [selectedPrint, setSelectedPrint] = useState<PrintItem>(PRINT_ITEMS[0]);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [selectedFrameId, setSelectedFrameId] = useState<string>('none');
  const [addedToast, setAddedToast] = useState(false);

  const activeSize = selectedPrint.sizes[selectedSizeIndex] || selectedPrint.sizes[0];
  const activeFrame =
    selectedPrint.frameOptions.find((f) => f.id === selectedFrameId) ||
    selectedPrint.frameOptions[0];

  const currentTotalPrice = activeSize.price + activeFrame.extraPrice;

  // Find corresponding artwork to render the exact visual
  const matchingArtwork = ARTWORKS.find((a) => a.id === selectedPrint.artworkId) || ARTWORKS[0];

  const handleAddToCart = () => {
    const newItem: CartItem = {
      cartItemId: `${selectedPrint.id}-${activeSize.label}-${activeFrame.id}-${Date.now()}`,
      productId: selectedPrint.id,
      title: selectedPrint.title,
      type: 'print',
      sizeLabel: activeSize.label,
      frameLabel: activeFrame.name,
      price: currentTotalPrice,
      quantity: 1,
      image: selectedPrint.image,
    };
    onAddToCart(newItem);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div id="art-prints-view" className="w-full space-y-12 animate-in fade-in duration-200">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
            Studio Archival Editions
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
            Limited Art Prints
          </h1>
          <p className="text-sm text-neutral-600 max-w-xl mt-1.5 leading-relaxed">
            Museum-grade 12-color archival giclée prints on 310gsm 100% cotton rag paper. Each piece is hand-signed or studio-embossed by Jeremy Nguyen in Brooklyn, New York.
          </p>
        </div>

        {/* Quality Guarantees */}
        <div className="flex items-center gap-5 text-xs text-neutral-600">
          <div className="flex items-center gap-1.5 bg-neutral-100 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-neutral-900" />
            <span className="font-medium">100+ Yr Archival</span>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-100 px-3 py-1.5 rounded-full">
            <Truck className="w-4 h-4 text-neutral-900" />
            <span className="font-medium">Studio Shipping</span>
          </div>
        </div>
      </div>

      {/* Featured Print Customizer Stage */}
      <div
        id="print-configurator-card"
        className="bg-neutral-50 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xs"
      >
        {/* Left: Live Frame & Artwork Preview Stage */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-sm relative">
            {/* Virtual Frame Container */}
            <div
              className={`p-2 rounded-xl transition-all duration-300 ${
                selectedFrameId === 'black-metal'
                  ? 'border-[12px] border-[#18181b] shadow-xl'
                  : selectedFrameId === 'natural-wood'
                  ? 'border-[14px] border-[#c49a6c] shadow-xl'
                  : selectedFrameId === 'white-matte'
                  ? 'border-[14px] border-[#ffffff] ring-1 ring-neutral-200 shadow-xl'
                  : 'border border-neutral-100 shadow-xs'
              }`}
            >
              <div className="bg-white p-2 rounded-lg overflow-hidden">
                <ArtworkVisual artwork={matchingArtwork} className="w-full rounded-md" />
              </div>
            </div>

            {/* Frame metadata tag */}
            <div className="text-center mt-3 text-[11px] text-neutral-500 font-mono">
              Live Preview: {activeSize.label} • {activeFrame.name}
            </div>
          </div>
        </div>

        {/* Right: Print Selector & Customizer */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            {selectedPrint.badge && (
              <span className="bg-neutral-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-block mb-2">
                {selectedPrint.badge}
              </span>
            )}
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              {selectedPrint.title}
            </h2>
            <div className="text-2xl font-extrabold text-neutral-900 mt-1">
              ${currentTotalPrice.toFixed(2)}
              {activeFrame.extraPrice > 0 && (
                <span className="text-xs font-normal text-neutral-500 ml-2">
                  (${activeSize.price} print + ${activeFrame.extraPrice} frame)
                </span>
              )}
            </div>
            <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
              {selectedPrint.description}
            </p>
            <div className="text-[11px] text-neutral-400 mt-1">
              {selectedPrint.paperType} • {selectedPrint.edition}
            </div>
          </div>

          {/* Size Options */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-neutral-800 block">
              1. Choose Paper Size
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {selectedPrint.sizes.map((size, idx) => {
                const isSelected = selectedSizeIndex === idx;
                return (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`text-left p-3 rounded-2xl text-xs transition-all focus:outline-none ${
                      isSelected
                        ? 'bg-neutral-900 text-white shadow-xs font-bold'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <div className="font-bold">{size.label?.split(' ')[0] || size.label}</div>
                    <div className="text-[10px] opacity-75">{size.label?.match(/\((.*?)\)/)?.[1] || ''}</div>
                    <div className="font-semibold mt-1">${size.price}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Frame Options */}
          <div className="space-y-2 pt-1">
            <label className="text-xs font-bold text-neutral-800 block">
              2. Custom Framing
            </label>
            <div className="space-y-1.5">
              {selectedPrint.frameOptions.map((frame) => {
                const isSelected = selectedFrameId === frame.id;
                return (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrameId(frame.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs text-left transition-all focus:outline-none ${
                      isSelected
                        ? 'bg-neutral-900 text-white shadow-xs font-bold'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{frame.name}</span>
                    <span>{frame.extraPrice === 0 ? 'Included' : `+$${frame.extraPrice}`}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add to Cart CTA */}
          <div className="space-y-2.5 pt-2">
            <button
              id="add-print-to-bag-btn"
              onClick={handleAddToCart}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold py-3.5 px-6 rounded-full flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-98 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Shopping Bag • ${currentTotalPrice.toFixed(2)}</span>
            </button>

            {addedToast && (
              <div className="bg-emerald-600 text-white p-3 rounded-full text-xs font-bold flex items-center justify-between px-4 animate-in fade-in">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> Added to your bag!
                </span>
                <button
                  onClick={onOpenCart}
                  className="underline hover:text-emerald-100 text-xs font-bold"
                >
                  View Bag →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Catalog Grid of All Available Prints */}
      <div className="space-y-6 pt-2">
        <h3 className="text-lg font-extrabold tracking-tight text-neutral-900">
          All Available Prints ({PRINT_ITEMS.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINT_ITEMS.map((item) => {
            const isCurrentSelected = selectedPrint.id === item.id;
            const itemArt = ARTWORKS.find((a) => a.id === item.artworkId) || ARTWORKS[0];
            return (
              <div
                key={item.id}
                id={`print-catalog-${item.id}`}
                onClick={() => {
                  setSelectedPrint(item);
                  setSelectedSizeIndex(0);
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className={`group cursor-pointer rounded-2xl p-3 bg-white transition-all duration-300 ${
                  isCurrentSelected
                    ? 'ring-2 ring-neutral-900 shadow-md'
                    : 'hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div className="w-full relative aspect-square bg-neutral-100 rounded-xl overflow-hidden">
                  <ArtworkVisual artwork={itemArt} className="w-full h-full object-cover" />
                  {item.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-neutral-900/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3 px-1 space-y-0.5">
                  <h4 className="font-bold text-sm text-neutral-900 truncate group-hover:text-neutral-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex justify-between items-center text-xs font-semibold text-neutral-700 pt-0.5">
                    <span>From ${item.basePrice}</span>
                    <span className="text-sky-600 group-hover:underline text-[11px]">
                      Customize & Order →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

