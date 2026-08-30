import { PrintItem, OtherGoodItem } from '../types';

export const PRINT_ITEMS: PrintItem[] = [
  {
    id: 'print-trimming-the-tree',
    title: 'Trimming the Tree — Fine Art Giclée',
    artworkId: 'trimming-the-tree',
    image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1000&q=80',
    description: 'Museum-quality archival giclée print on 310gsm 100% cotton rag paper with subtle texture. Signed and numbered in pencil by Jeremy Nguyen in a limited edition of 150.',
    edition: 'Limited edition of 150 (Signed & Numbered)',
    paperType: 'Hahnemühle Photo Rag 310gsm 100% Cotton',
    basePrice: 45,
    badge: 'Popular',
    sizes: [
      { label: 'Small (8 × 10 in)', dimensions: '8 × 10 inches / 20.3 × 25.4 cm', price: 45, inStock: true },
      { label: 'Medium (11 × 14 in)', dimensions: '11 × 14 inches / 27.9 × 35.6 cm', price: 65, inStock: true },
      { label: 'Large (18 × 24 in)', dimensions: '18 × 24 inches / 45.7 × 61.0 cm', price: 95, inStock: true },
    ],
    frameOptions: [
      { id: 'none', name: 'Unframed (Ships flat or in heavy tube)', extraPrice: 0 },
      { id: 'black-metal', name: 'Matte Black Aluminum Gallery Frame', extraPrice: 40 },
      { id: 'natural-wood', name: 'Natural Maple Solid Wood Frame', extraPrice: 50 },
      { id: 'white-matte', name: 'Clean White Gallery Frame with Mat', extraPrice: 45 },
    ]
  },
  {
    id: 'print-city-gym',
    title: 'The City Is My Gym — The New Yorker Cartoon Print',
    artworkId: 'the-city-is-my-gym',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    description: 'Official archival reproduction of the beloved 8-panel New Yorker cartoon. Crisp black archival pigment ink on warm white fine art cotton paper.',
    edition: 'Open archival edition (Blind embossed studio seal)',
    paperType: 'Somerset Velvet 280gsm 100% Cotton Fine Art Paper',
    basePrice: 40,
    badge: 'New Yorker Official',
    sizes: [
      { label: 'Standard Square (12 × 12 in)', dimensions: '12 × 12 inches / 30.5 × 30.5 cm', price: 40, inStock: true },
      { label: 'Large Square (16 × 16 in)', dimensions: '16 × 16 inches / 40.6 × 40.6 cm', price: 60, inStock: true },
      { label: 'Collector Square (20 × 20 in)', dimensions: '20 × 20 inches / 50.8 × 50.8 cm', price: 85, inStock: true },
    ],
    frameOptions: [
      { id: 'none', name: 'Unframed', extraPrice: 0 },
      { id: 'black-metal', name: 'Matte Black Aluminum Gallery Frame', extraPrice: 35 },
      { id: 'natural-wood', name: 'Natural Maple Solid Wood Frame', extraPrice: 45 },
    ]
  },
  {
    id: 'print-spring-block',
    title: 'Spring on the Block — Brooklyn Brownstone Edition',
    artworkId: 'spring-on-the-block',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1000&q=80',
    description: 'Lush spring colors on heavy cotton paper. Features vivid cherry blossoms, yellow forsythia, and Brooklyn street life with embossed artist signature.',
    edition: 'Limited edition of 200 (Hand numbered)',
    paperType: 'Moab Entrada Rag Bright 300gsm',
    basePrice: 55,
    sizes: [
      { label: 'Medium (11 × 14 in)', dimensions: '11 × 14 inches / 27.9 × 35.6 cm', price: 55, inStock: true },
      { label: 'Large (18 × 24 in)', dimensions: '18 × 24 inches / 45.7 × 61.0 cm', price: 95, inStock: true },
      { label: 'Exhibition (24 × 32 in)', dimensions: '24 × 32 inches / 61.0 × 81.3 cm', price: 140, inStock: true },
    ],
    frameOptions: [
      { id: 'none', name: 'Unframed', extraPrice: 0 },
      { id: 'black-metal', name: 'Matte Black Aluminum Gallery Frame', extraPrice: 45 },
      { id: 'natural-wood', name: 'Natural Maple Solid Wood Frame', extraPrice: 55 },
    ]
  },
  {
    id: 'print-snow-day',
    title: 'Snow Day at the Coffee House — Evening Edition',
    artworkId: 'snow-day-coffee-house',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
    description: 'Deep velvet blacks and warm golden window glows. Printed using 12-color archival pigment ink that will not fade for 100+ years.',
    edition: 'Limited edition of 100 (Signed & Numbered)',
    paperType: 'Canson Infinity Platine Fibre Rag 310gsm',
    basePrice: 50,
    badge: 'Low Stock',
    sizes: [
      { label: 'Small (8 × 12 in)', dimensions: '8 × 12 inches / 20.3 × 30.5 cm', price: 50, inStock: true },
      { label: 'Medium (12 × 18 in)', dimensions: '12 × 18 inches / 30.5 × 45.7 cm', price: 75, inStock: true },
      { label: 'Large (16 × 24 in)', dimensions: '16 × 24 inches / 40.6 × 61.0 cm', price: 110, inStock: true },
    ],
    frameOptions: [
      { id: 'none', name: 'Unframed', extraPrice: 0 },
      { id: 'black-metal', name: 'Matte Black Aluminum Gallery Frame', extraPrice: 40 },
      { id: 'natural-wood', name: 'Natural Maple Solid Wood Frame', extraPrice: 50 },
    ]
  },
  {
    id: 'print-santa-monica',
    title: 'Santa Monica Boardwalk — Retro Coast Art Print',
    artworkId: 'santa-monica-game',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    description: 'The iconic pastel art from the Santa Monica board game. Features beachside tourists, palm trees, the pier wheel, and custom retro typography.',
    edition: 'Open studio edition',
    paperType: 'Epson Enhanced Matte 250gsm',
    basePrice: 45,
    sizes: [
      { label: 'Square Medium (12 × 12 in)', dimensions: '12 × 12 inches / 30.5 × 30.5 cm', price: 45, inStock: true },
      { label: 'Square Large (18 × 18 in)', dimensions: '18 × 18 inches / 45.7 × 45.7 cm', price: 75, inStock: true },
    ],
    frameOptions: [
      { id: 'none', name: 'Unframed', extraPrice: 0 },
      { id: 'natural-wood', name: 'Natural Maple Solid Wood Frame', extraPrice: 45 },
      { id: 'white-matte', name: 'Clean White Gallery Frame', extraPrice: 40 },
    ]
  },
  {
    id: 'print-alfargos',
    title: "Alfargo's Seaport Market Poster",
    artworkId: 'alfargos-marketplace-38',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    description: 'Vintage comic poster featuring hand-drawn typography and comic book panels. Printed on heavy archival cream paper.',
    edition: 'Limited edition of 250',
    paperType: 'French Paper Speckletone Cream 270gsm',
    basePrice: 45,
    sizes: [
      { label: 'Standard (16 × 24 in)', dimensions: '16 × 24 inches / 40.6 × 61.0 cm', price: 45, inStock: true },
    ],
    frameOptions: [
      { id: 'none', name: 'Unframed', extraPrice: 0 },
      { id: 'black-metal', name: 'Matte Black Aluminum Gallery Frame', extraPrice: 40 },
    ]
  }
];

export const OTHER_GOODS: OtherGoodItem[] = [
  {
    id: 'game-santa-monica',
    title: 'Santa Monica Board Game',
    category: 'boardgames',
    subtitle: 'Designed by Josh Wood • Illustrated by Jeremy Nguyen',
    publisher: 'Alderac Entertainment Group (AEG)',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1000&q=80',
    description: 'In Santa Monica, you are trying to create the most appealing neighborhood in Southern California. Build out the beach and boardwalk with volleyball courts, food trucks, surfers, tourists, and locals. Features over 100+ unique card illustrations by Jeremy Nguyen.',
    specs: [
      '2–4 Players • 35–45 Min • Ages 14+',
      'Includes 100+ fully illustrated beach and boardwalk cards',
      'Wooden meeple tourists, locals, and camera tokens',
      'Cloth sand dollar token bag & rulebook'
    ],
    inStock: true,
    isBestseller: true
  },
  {
    id: 'game-inner-compass',
    title: 'Inner Compass Board Game',
    category: 'boardgames',
    subtitle: 'Designed by Daniel Skjold Pedersen & Asger Granerud • Art by Jeremy Nguyen',
    publisher: 'Alderac Entertainment Group (AEG)',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80',
    description: 'Navigate the busy city grid while reflecting on emotions, interactions, and mindful daily life. Gorgeous illustrated board with vibrant city vignettes, billboards, and pedestrians.',
    specs: [
      '2–4 Players • 30–45 Min • Ages 10+',
      'Modular 4-quadrant city board with custom tokens',
      'Over 60 custom illustrated emotion cards',
      'Published by AEG'
    ],
    inStock: true
  },
  {
    id: 'book-oh-reader-18',
    title: 'Oh Reader Magazine — Issue 018',
    category: 'books',
    subtitle: 'For the Love of Reading • Cover & Interior by Jeremy Nguyen',
    publisher: 'Oh Reader Publishing',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    description: 'A collectible 160-page tactile quarterly magazine celebrating the culture of reading and book lovers. Features Jeremy Nguyen\'s cover illustration and an 8-page illustrated essay on indie bookstores.',
    specs: [
      '160 pages, heavy uncoated paper stock',
      'Foil-stamped spine, perfect bound',
      'Ad-free literary journalism and essays'
    ],
    inStock: true,
    isBestseller: true
  },
  {
    id: 'book-stranger-in-city',
    title: 'Stranger in the City: Collected Cartoons & Essays',
    category: 'books',
    subtitle: 'First Edition Hardcover by Jeremy Nguyen',
    publisher: 'Chronicle Books / Independent Press',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80',
    description: 'A 208-page deluxe hardcover compilation of Jeremy Nguyen\'s most popular cartoons from The New Yorker, humorous personal essays, behind-the-scenes sketchbooks, and rejected cartoon pitches.',
    specs: [
      '208 pages, full color offset printing',
      'Embossed linen cloth hardcover with dust jacket',
      'Foreword by fellow New Yorker cartoonists',
      'Includes signed bookplate'
    ],
    inStock: true
  },
  {
    id: 'merch-city-gym-tote',
    title: 'The City Is My Gym — Heavyweight Canvas Tote',
    category: 'apparel',
    subtitle: '100% Organic Heavyweight Cotton (14 oz)',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    description: 'Durable, heavy-duty 14oz unbleached natural cotton canvas tote screenprinted with "The City Is My Gym" vignette cartoon. Reinforced shoulder straps and inner zipped pocket for keys and phone.',
    specs: [
      'Dimensions: 16" W × 15" H × 5" Gusset bottom',
      'Hand screenprinted in Brooklyn with water-based black ink',
      'Holds 30+ lbs of books, groceries, or sketching gear',
      'Machine washable cold'
    ],
    inStock: true
  },
  {
    id: 'pin-subway-gymnast',
    title: 'Subway Pole Gymnast & NYC Pigeon Enamel Pin Duo',
    category: 'collectibles',
    subtitle: 'Hard Enamel with Black Nickel Finish & Rubber Clutches',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    description: 'Pair of custom hard enamel pins based on Jeremy\'s viral cartoon characters. Packaged on custom backing card with illustrated gold foil details.',
    specs: [
      'Subway Gymnast: 1.5" tall, Black Nickel plated',
      'NYC Pigeon: 1.0" wide, cloisonné enamel',
      'Double rubber pin backs for secure fastening',
      'Custom gold foil stamped backing card'
    ],
    inStock: true
  }
];
