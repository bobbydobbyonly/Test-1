import React, { useState } from 'react';
import { OtherGoodItem, CartItem } from '../types';
import { OTHER_GOODS } from '../data/products';
import { ARTWORKS } from '../data/artworks';
import { ArtworkVisual } from './ArtworkVisual';
import { ShoppingBag, Check, Package, Sparkles } from 'lucide-react';

interface OtherGoodsViewProps {
  onAddToCart: (item: CartItem) => void;
  onOpenCart: () => void;
}

export const OtherGoodsView: React.FC<OtherGoodsViewProps> = ({ onAddToCart, onOpenCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Goods' },
    { id: 'boardgames', label: 'Board Games' },
    { id: 'books', label: 'Books & Zines' },
    { id: 'apparel', label: 'Apparel & Bags' },
    { id: 'collectibles', label: 'Pins & Merch' },
  ];

  const filteredGoods = OTHER_GOODS.filter((good) => {
    if (activeCategory === 'all') return true;
    return good.category === activeCategory;
  });

  const handleAddGoodToCart = (good: OtherGoodItem) => {
    const newItem: CartItem = {
      cartItemId: `${good.id}-${Date.now()}`,
      productId: good.id,
      title: good.title,
      type: 'good',
      price: good.price,
      quantity: 1,
      image: good.image,
    };
    onAddToCart(newItem);
    setAddedId(good.id);
    setTimeout(() => setAddedId(null), 2500);
  };

  // Helper to render artwork visuals for products matching artworks
  const renderGoodVisual = (good: OtherGoodItem) => {
    if (good.id === 'game-santa-monica') {
      const art = ARTWORKS.find((a) => a.id === 'santa-monica-game')!;
      return <ArtworkVisual artwork={art} className="w-full h-full" />;
    }
    if (good.id === 'game-inner-compass') {
      const art = ARTWORKS.find((a) => a.id === 'inner-compass-game')!;
      return <ArtworkVisual artwork={art} className="w-full h-full" />;
    }
    if (good.id === 'book-oh-reader-18') {
      const art = ARTWORKS.find((a) => a.id === 'oh-reader-issue-18')!;
      return <ArtworkVisual artwork={art} className="w-full h-full" />;
    }
    return (
      <img
        src={good.image}
        alt={good.title}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    );
  };

  return (
    <div id="other-goods-view" className="w-full space-y-10 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
            Official Publications & Merch
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
            Games, Books & Goods
          </h1>
          <p className="text-sm text-neutral-600 max-w-xl mt-1.5 leading-relaxed">
            Published tabletop games, collected cartoon books, literary magazine issues, heavy cotton tote bags, and enamel pins designed and illustrated by Jeremy Nguyen.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all focus:outline-none ${
                activeCategory === cat.id
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredGoods.map((good) => {
          const isJustAdded = addedId === good.id;
          return (
            <div
              key={good.id}
              id={`good-card-${good.id}`}
              className="bg-white rounded-3xl p-4 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Visual */}
              <div>
                <div className="relative aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden">
                  {renderGoodVisual(good)}
                  {good.isBestseller && (
                    <span className="absolute top-2.5 left-2.5 bg-neutral-900/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      Bestseller
                    </span>
                  )}
                  {good.publisher && (
                    <span className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {good.publisher}
                    </span>
                  )}
                </div>

                {/* Info Container */}
                <div className="p-3 pt-4 space-y-2.5">
                  <div>
                    <span className="text-[11px] font-semibold text-sky-600 capitalize block">
                      {good.category}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-neutral-900 mt-0.5">
                      {good.title}
                    </h3>
                    <p className="text-xs font-medium text-neutral-500">
                      {good.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {good.description}
                  </p>

                  {/* Specs List */}
                  <div className="bg-neutral-50 rounded-xl p-3 space-y-1 text-[11px] text-neutral-600">
                    {good.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-neutral-900 font-bold">•</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Purchase Footer */}
              <div className="p-3 pt-2 mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xl font-extrabold text-neutral-900">
                    ${good.price.toFixed(2)}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600">
                    In Stock • Ready to Ship
                  </span>
                </div>

                <button
                  id={`add-good-${good.id}`}
                  onClick={() => handleAddGoodToCart(good)}
                  className={`w-full text-xs font-bold py-3 px-4 rounded-full flex items-center justify-center space-x-2 transition-all active:scale-98 cursor-pointer ${
                    isJustAdded
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-xs'
                  }`}
                >
                  {isJustAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag • ${good.price.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

