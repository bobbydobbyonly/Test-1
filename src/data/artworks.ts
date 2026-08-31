import { Artwork } from '../types';

const image = (filename: string) => `https://raw.githubusercontent.com/bobbydobbyonly/Test-1/main/${filename}`;

export const ARTWORKS: Artwork[] = [
  {
    id: 'meowth-tom-and-jerry', title: 'Meowth (Tom and Jerry Edition)', client: 'Jo Studio 38', category: 'comics', year: 2026,
    image: image('Meowth-Tom-and-Jerry-Art.PNG'), aspectRatio: 'square', description: 'A playful Meowth fan-art illustration inspired by Tom and Jerry.', technique: 'Digital illustration', hasPrint: false, tags: ['fan art'], dimensions: 'Digital artwork'
  },
  ...['IMG_8023.JPG', 'IMG_8024.JPG', 'IMG_8055.JPG', 'IMG_8058.JPG', 'IMG_8068.JPG', 'IMG_8203.PNG', 'photo_2026-08-31_21-53-18.jpg'].map((filename, index) => ({
    id: `jo-artwork-${index + 1}`,
    title: `Artwork ${index + 1}`,
    client: 'Jo Studio 38',
    category: 'personal' as const,
    year: 2026,
    image: image(filename),
    aspectRatio: 'square' as const,
    description: 'Artwork by Jo Studio 38.',
    technique: 'Digital artwork',
    hasPrint: false,
    tags: ['jo studio 38'],
  })),
];
