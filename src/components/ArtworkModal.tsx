import React, { useEffect, useState } from 'react';
import { Artwork } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { X, ChevronLeft, ChevronRight, Share2, Check, ShoppingCart, ZoomIn, ZoomOut } from 'lucide-react';

interface ArtworkModalProps {
  artwork: Artwork | null;
  artworks: Artwork[];
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onBuyPrint: (artwork: Artwork) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  artworks,
  onClose,
  onSelectArtwork,
  onBuyPrint,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!artwork) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork, artworks]);

  if (!artwork) return null;

  const currentIndex = artworks.findIndex((item) => item.id === artwork.id);
  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectArtwork(artworks[currentIndex - 1]);
    } else {
      onSelectArtwork(artworks[artworks.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < artworks.length - 1) {
      onSelectArtwork(artworks[currentIndex + 1]);
    } else {
      onSelectArtwork(artworks[0]);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      id="artwork-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="artwork-modal-card"
        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl flex flex-col lg:flex-row shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-neutral-700 hover:text-black hover:bg-white flex items-center justify-center shadow-sm transition-all focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Artwork Stage */}
        <div
          id="artwork-stage"
          className="relative lg:w-3/5 bg-neutral-100 flex items-center justify-center p-6 md:p-10 min-h-[380px]"
        >
          <div
            className={`w-full max-w-lg transition-transform duration-300 ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <ArtworkVisual artwork={artwork} className="rounded-xl shadow-lg" />
          </div>

          {/* Zoom Toggle Pill */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-800 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1.5 hover:bg-white transition-colors"
          >
            {isZoomed ? (
              <>
                <ZoomOut className="w-3.5 h-3.5" /> <span>Reset Zoom</span>
              </>
            ) : (
              <>
                <ZoomIn className="w-3.5 h-3.5" /> <span>Zoom</span>
              </>
            )}
          </button>

          {/* Navigation Arrows */}
          <button
            id="modal-prev-btn"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-neutral-700 hover:text-black hover:bg-white flex items-center justify-center shadow-md transition-all active:scale-95"
            title="Previous artwork (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            id="modal-next-btn"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-neutral-700 hover:text-black hover:bg-white flex items-center justify-center shadow-md transition-all active:scale-95"
            title="Next artwork (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side: Editorial Information & Purchasing */}
        <div id="artwork-info-pane" className="lg:w-2/5 p-7 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-sky-600">
                <span className="capitalize">{artwork.category}</span>
                <span className="text-neutral-400 font-mono text-[11px]">
                  {currentIndex + 1} of {artworks.length}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 mt-1">
                {artwork.title}
              </h2>
              <p className="text-xs font-medium text-neutral-500 mt-0.5">
                {artwork.client} • {artwork.year}
              </p>
            </div>

            {/* Description */}
            <div className="py-2 space-y-1.5">
              <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                Artist Story
              </h4>
              <p className="text-xs leading-relaxed text-neutral-700">
                {artwork.description}
              </p>
            </div>

            {/* Technical Specs */}
            <div className="space-y-1.5 text-xs bg-neutral-50 p-3.5 rounded-2xl">
              <div className="flex justify-between py-0.5">
                <span className="text-neutral-500 font-medium">Medium</span>
                <span className="text-neutral-800 font-semibold text-right">{artwork.technique}</span>
              </div>
              {artwork.dimensions && (
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-500 font-medium">Format</span>
                  <span className="text-neutral-800 font-semibold">{artwork.dimensions}</span>
                </div>
              )}
              {artwork.colors && (
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-neutral-500 font-medium">Palette</span>
                  <div className="flex items-center space-x-1.5">
                    {artwork.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full inline-block shadow-2xs"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {artwork.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-100 text-neutral-600 text-[10px] font-medium px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Print Ordering */}
          <div className="space-y-2.5 pt-2">
            {artwork.hasPrint ? (
              <button
                id="buy-print-from-modal-btn"
                onClick={() => onBuyPrint(artwork)}
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold py-3 px-4 rounded-full flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-98"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Order Art Print (${artwork.printPrice || 45})</span>
              </button>
            ) : (
              <div className="bg-neutral-50 p-3 rounded-2xl text-center text-xs text-neutral-500 font-medium">
                Original editorial commission • Prints not available
              </div>
            )}

            <div className="flex gap-2">
              <button
                id="share-artwork-btn"
                onClick={handleShare}
                className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-2.5 px-3 rounded-full flex items-center justify-center space-x-2 transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 text-xs font-semibold py-2.5 px-4 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

