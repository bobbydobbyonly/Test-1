import { Artwork } from '../types';

export const ARTWORKS: Artwork[] = [
  {
    id: 'meowth-tom-and-jerry',
    title: 'Meowth (Tom and Jerry Edition)',
    client: 'Jo Studio 38',
    category: 'comics',
    year: 2026,
    image: 'https://raw.githubusercontent.com/bobbydobbyonly/Test-1/main/Meowth-Tom-and-Jerry-Art.PNG',
    additionalImages: ['https://raw.githubusercontent.com/bobbydobbyonly/Test-1/main/Meowth-Tom-and-Jerry-Art-Prints.jpg'],
    aspectRatio: 'square',
    description: 'A playful Meowth fan-art illustration inspired by Tom and Jerry.',
    technique: 'Digital illustration',
    hasPrint: true,
    printPrice: 0,
    tags: ['fan art', 'meowth', 'tom and jerry', 'art print'],
    dimensions: 'Original artwork and printed copy',
    colors: ['#B5CEF5', '#A4A7C8', '#F4C74E', '#E65A42']
  }
];
