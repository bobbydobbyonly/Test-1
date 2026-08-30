import React, { useState, useMemo } from 'react';
import { Artwork, ArtworkCategory } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { Search, Eye, ShoppingCart, Sparkles } from 'lucide-react';

interface GalleryGridProps {
  artworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
  onQuickBuyPrint: (artwork: Artwork) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  artworks,
  onSelectArtwork,
  onQuickBuyPrint,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories: { id: ArtworkCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'comics', label: 'Fan Art' },
  ];

  const filteredArtworks = useMemo(() => {
    return artworks.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [artworks, selectedCategory, searchQuery]);

  return (
    <div id="gallery-container" className="w-full">
      {/* Top Filter and Search Bar */}
      <div
        id="gallery-filter-bar"
        className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        {/* Category Pill Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Minimal Search Input */}
        <div className="relative w-full md:w-60">
          <input
            id="artwork-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search illustrations..."
            className="w-full bg-neutral-100 border-none text-xs rounded-full px-4 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 placeholder:text-neutral-400 transition-all"
          />
          <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-neutral-400 hover:text-neutral-900"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Gallery Grid: Smooth floating cards without rigid box borders */}
      {filteredArtworks.length === 0 ? (
        <div
          id="gallery-empty-state"
          className="text-center py-20 bg-neutral-50 rounded-3xl p-8"
        >
          <p className="text-sm font-bold text-neutral-800">
            No artworks found matching "{searchQuery}"
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            Try a different search or browse all work.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 text-xs bg-neutral-900 text-white font-semibold px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div
          id="gallery-grid"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 items-start"
        >
          {filteredArtworks.map((artwork) => {
            const isHovered = hoveredId === artwork.id;
            return (
              <div
                key={artwork.id}
                id={`artwork-card-${artwork.id}`}
                className="group relative cursor-pointer flex flex-col transition-all duration-300"
                onMouseEnter={() => setHoveredId(artwork.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectArtwork(artwork)}
              >
                {/* Artwork Canvas / Visual */}
                <div className="w-full relative rounded-2xl overflow-hidden bg-neutral-100 shadow-xs group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <ArtworkVisual
                    artwork={artwork}
                    isHovered={isHovered}
                    className="w-full"
                  />

                  {/* Print Badge */}
                  {artwork.hasPrint && (
                    <div className="absolute top-3 left-3 bg-neutral-900/90 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full shadow-xs pointer-events-none">
                      Print Available
                    </div>
                  )}

                  {/* Hover Floating Action Bar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectArtwork(artwork);
                        }}
                        className="flex-1 bg-white/95 hover:bg-white text-neutral-900 text-xs font-bold py-2 px-3 rounded-full flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Artwork</span>
                      </button>
                      {artwork.hasPrint && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onQuickBuyPrint(artwork);
                          }}
                          className="bg-neutral-900/90 hover:bg-neutral-900 text-white text-xs font-bold p-2 rounded-full shadow-md transition-all active:scale-95"
                          title="Order Art Print"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Minimalist Caption Underneath Artwork */}
                <div className="pt-3 px-1 flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-neutral-900 truncate tracking-tight group-hover:text-neutral-600 transition-colors">
                      {artwork.title}
                    </h3>
                    <p className="text-xs text-neutral-500 truncate">
                      {artwork.client} • {artwork.year}
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-neutral-400 shrink-0">
                    {artwork.technique?.split(' ')[0] || ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
