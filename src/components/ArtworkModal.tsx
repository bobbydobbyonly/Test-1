import React from 'react';
import { Artwork } from '../types';
import { X } from 'lucide-react';

interface ArtworkModalProps {
  artwork: Artwork | null;
  artworks: Artwork[];
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onBuyPrint: (artwork: Artwork) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-4 md:p-8" onClick={onClose}>
      <article className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button onClick={onClose} aria-label="Close artwork" className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-3 text-neutral-700 shadow-sm hover:text-black"><X className="h-5 w-5" /></button>
        <img src={artwork.image} alt={artwork.title} className="block w-full max-h-[75vh] object-contain bg-neutral-100" />
        <div className="mx-auto max-w-3xl space-y-4 px-6 py-8 md:px-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">{artwork.title}</h1>
          <p className="text-sm font-medium text-neutral-500">{artwork.client} • {artwork.year}</p>
          <div className="pt-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Artist Story</h2>
            <p className="mt-2 text-base leading-relaxed text-neutral-700">{artwork.description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};
