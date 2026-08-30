import React from 'react';
import { Artwork } from '../types';

export const ArtworkVisual: React.FC<{ artwork: Artwork; className?: string }> = ({ artwork, className = '' }) => <img src={artwork.image} alt={artwork.title} className={`w-full aspect-square object-cover ${className}`} />;
