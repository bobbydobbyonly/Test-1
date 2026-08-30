import React, { useState, useEffect } from 'react';
import { ViewMode, Artwork } from './types';
import { ARTWORKS } from './data/artworks';
import { Sidebar } from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';
import { GalleryGrid } from './components/GalleryGrid';
import { ArtworkModal } from './components/ArtworkModal';
import { AboutModal } from './components/AboutModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('gallery');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

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
        cartCount={0}
        onOpenCart={() => {}}
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
          cartCount={0}
          onOpenCart={() => {}}
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
              onQuickBuyPrint={() => {}}
            />
          )}


          {currentView === 'about' && (
            <AboutModal
              onBackToGallery={() => setCurrentView('gallery')}
              onGoToCommissions={() => {}}
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
          onBuyPrint={() => {}}
        />
      )}

    </div>
  );
}
