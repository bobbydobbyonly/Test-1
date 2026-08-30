import { Artwork } from '../types';
import meowthArt from '../assets/meowth-tom-and-jerry-art.png';
import meowthPrint from '../assets/meowth-tom-and-jerry-art-print.jpg';

export const ARTWORKS: Artwork[] = [
  {
    id: 'meowth-tom-and-jerry',
    title: 'Meowth (Tom and Jerry Edition)',
    client: 'Jo Studio 38',
    category: 'comics',
    year: 2026,
    image: meowthArt,
    additionalImages: [meowthPrint],
    aspectRatio: 'square',
    description: 'A playful Meowth fan-art illustration inspired by Tom and Jerry. Use the image controls to view the finished art print.',
    technique: 'Digital illustration',
    hasPrint: true,
    printPrice: 0,
    tags: ['fan art', 'meowth', 'tom and jerry', 'art print'],
    dimensions: 'Original artwork and printed copy',
    colors: ['#B5CEF5', '#A4A7C8', '#F4C74E', '#E65A42']
  }
];
