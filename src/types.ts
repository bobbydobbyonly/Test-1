export type ViewMode = 'gallery' | 'prints' | 'goods' | 'commissions' | 'about';

export type ArtworkCategory = 'all' | 'editorial' | 'comics' | 'games' | 'covers' | 'personal';

export interface Artwork {
  id: string;
  title: string;
  client: string;
  category: ArtworkCategory;
  year: number;
  image: string;
  additionalImages?: string[];
  aspectRatio: 'tall' | 'square' | 'portrait' | 'wide' | 'panoramic';
  description: string;
  technique: string;
  hasPrint: boolean;
  printPrice?: number;
  tags: string[];
  dimensions?: string;
  colors?: string[];
}

export interface PrintItem {
  id: string;
  title: string;
  artworkId: string;
  image: string;
  description: string;
  edition: string;
  paperType: string;
  basePrice: number; // For 8x10
  sizes: {
    label: string;
    dimensions: string;
    price: number;
    inStock: boolean;
  }[];
  frameOptions: {
    id: 'none' | 'black-metal' | 'natural-wood' | 'white-matte';
    name: string;
    extraPrice: number;
  }[];
  badge?: string;
}

export interface OtherGoodItem {
  id: string;
  title: string;
  category: 'boardgames' | 'books' | 'apparel' | 'collectibles';
  subtitle: string;
  publisher?: string;
  price: number;
  image: string;
  images?: string[];
  description: string;
  specs: string[];
  inStock: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  cartItemId: string;
  productId: string;
  title: string;
  type: 'print' | 'good';
  sizeLabel?: string;
  frameLabel?: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CommissionFormState {
  clientName: string;
  clientEmail: string;
  clientCompany: string;
  projectType: 'editorial' | 'book-cover' | 'board-game' | 'commercial' | 'private';
  usageScope: 'personal' | 'editorial' | 'commercial' | 'buyout';
  budgetRange: string;
  timeline: string;
  description: string;
  dimensionsPref: string;
  agreeToTerms: boolean;
}
