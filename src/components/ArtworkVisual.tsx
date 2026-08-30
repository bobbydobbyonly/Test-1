import React from 'react';
import { Artwork } from '../types';

interface ArtworkVisualProps {
  artwork: Artwork;
  className?: string;
  isHovered?: boolean;
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({ artwork, className = '', isHovered = false }) => {
  if (artwork.image.startsWith('/') || artwork.image.startsWith('data:') || artwork.image.includes('/assets/') || artwork.image.includes('raw.githubusercontent.com')) {
    return <img src={artwork.image} alt={artwork.title} className={`w-full aspect-square object-cover ${className}`} />;
  }
  // Render specific illustrated artboards matching the user's reference image
  switch (artwork.id) {
    case 'trimming-the-tree':
      return (
        <div className={`relative w-full aspect-[3/4] bg-[#2d3a3a] overflow-hidden ${className}`}>
          {/* Detailed Christmas tree scene */}
          <svg viewBox="0 0 400 533" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="treeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1a2e22" />
                <stop offset="100%" stopColor="#0d1b13" />
              </linearGradient>
              <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#cbb89d" />
                <stop offset="100%" stopColor="#a89278" />
              </linearGradient>
            </defs>
            {/* Background Wall */}
            <rect width="400" height="533" fill="url(#wallGrad)" />
            {/* Wallpaper stripes */}
            <path d="M0 0 L400 0 L400 533 L0 533 Z" fill="none" stroke="#968068" strokeWidth="0.5" strokeDasharray="6 12" />

            {/* Giant Pine Tree Silhouette & Needles */}
            <path d="M220 0 L400 0 L400 533 L180 533 C210 400 230 200 220 0 Z" fill="url(#treeGrad)" />
            {/* Pine needle clusters */}
            <g stroke="#2d5a3f" strokeWidth="2" strokeLinecap="round">
              <path d="M250 80 L230 90 M260 120 L220 130 M280 170 L240 185 M300 240 L250 260 M320 320 L260 340 M340 400 L270 430" />
              <path d="M260 60 L245 75 M290 140 L260 155 M310 210 L270 230 M330 290 L280 310 M350 370 L290 395" stroke="#407a56" />
            </g>

            {/* Wooden Ladder */}
            <g stroke="#3a2312" strokeWidth="6" strokeLinecap="round">
              <line x1="120" y1="533" x2="175" y2="100" />
              <line x1="210" y1="533" x2="245" y2="100" />
              {/* Rungs */}
              <line x1="130" y1="480" x2="216" y2="480" strokeWidth="5" />
              <line x1="139" y1="420" x2="222" y2="420" strokeWidth="5" />
              <line x1="148" y1="350" x2="228" y2="350" strokeWidth="5" />
              <line x1="156" y1="280" x2="234" y2="280" strokeWidth="5" />
              <line x1="165" y1="200" x2="240" y2="200" strokeWidth="5" />
              <line x1="172" y1="130" x2="244" y2="130" strokeWidth="5" />
            </g>

            {/* Mother's Green High Heels on Ladder */}
            <g>
              {/* Left leg & shoe */}
              <path d="M165 20 C165 50 160 80 155 105" stroke="#f1c0b0" strokeWidth="16" strokeLinecap="round" />
              <path d="M140 100 L185 100 L190 110 L160 115 L150 120 Z" fill="#2d6a4f" stroke="#1b4332" strokeWidth="2" />
              {/* Green Heel */}
              <rect x="180" y="105" width="6" height="20" fill="#2d6a4f" rx="1" />
              {/* Hem of skirt */}
              <path d="M120 20 C150 25 180 20 210 20 L220 -20 L110 -20 Z" fill="#841c26" />
            </g>

            {/* Older Boy looking up from middle of ladder */}
            <g transform="translate(145, 210)">
              {/* Head */}
              <circle cx="28" cy="40" r="26" fill="#f8cfb8" stroke="#000" strokeWidth="3" />
              {/* Hair */}
              <path d="M6 35 C10 15 30 10 50 20 C54 26 54 36 50 42 C42 22 20 25 10 38 Z" fill="#8c3b1e" stroke="#000" strokeWidth="2" />
              {/* Eyes & Eyebrows */}
              <circle cx="20" cy="38" r="3" fill="#000" />
              <circle cx="36" cy="38" r="3" fill="#000" />
              <path d="M16 30 Q22 28 26 31" stroke="#000" strokeWidth="2" fill="none" />
              <path d="M32 31 Q36 28 42 30" stroke="#000" strokeWidth="2" fill="none" />
              {/* Red striped shirt */}
              <path d="M2 66 C10 58 46 58 54 66 L60 100 L0 100 Z" fill="#c1121f" stroke="#000" strokeWidth="3" />
              <line x1="8" y1="76" x2="48" y2="76" stroke="#fff" strokeWidth="4" />
              <line x1="6" y1="88" x2="52" y2="88" stroke="#fff" strokeWidth="4" />
            </g>

            {/* Younger Boy in foreground looking front */}
            <g transform="translate(100, 320)">
              <circle cx="45" cy="50" r="34" fill="#fbd5c0" stroke="#000" strokeWidth="3.5" />
              {/* Messy Brown Hair */}
              <path d="M15 40 C15 15 45 10 75 25 C82 38 78 52 75 55 C65 24 35 25 20 45 Z" fill="#603813" stroke="#000" strokeWidth="2" />
              {/* Wonder eyes & rosy cheeks */}
              <circle cx="34" cy="48" r="3.5" fill="#000" />
              <circle cx="56" cy="48" r="3.5" fill="#000" />
              <ellipse cx="26" cy="56" rx="6" ry="3" fill="#f28482" opacity="0.6" />
              <ellipse cx="64" cy="56" rx="6" ry="3" fill="#f28482" opacity="0.6" />
              <path d="M42 62 Q45 66 48 62" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Dark jacket */}
              <path d="M5 82 C20 72 70 72 85 82 L95 140 L0 140 Z" fill="#1d2d44" stroke="#000" strokeWidth="3.5" />
            </g>
          </svg>
        </div>
      );

    case 'the-city-is-my-gym':
      return (
        <div className={`relative w-full aspect-square bg-[#ffffff] p-3 flex flex-col justify-between border border-[#e5e5e5] ${className}`}>
          {/* Header */}
          <div className="text-center">
            <h3 className="font-serif text-[13px] tracking-[0.2em] uppercase font-bold text-black border-b border-black pb-1">
              THE NEW YORKER
            </h3>
          </div>
          {/* 8 Gag Cartoons Grid */}
          <div className="grid grid-cols-4 gap-1.5 my-auto">
            {/* 1. Scaffolding pullups */}
            <div className="flex flex-col items-center justify-center p-1 bg-[#f9f9f9] border border-[#eee] aspect-square">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <line x1="5" y1="12" x2="45" y2="12" stroke="#000" strokeWidth="2" />
                <line x1="10" y1="12" x2="10" y2="48" stroke="#000" strokeWidth="1.5" />
                <circle cx="25" cy="18" r="4" fill="#000" />
                <path d="M25 22 L25 34 M20 12 L23 24 M30 12 L27 24 M25 34 L21 44 M25 34 L29 44" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            {/* 2. Subway pole */}
            <div className="flex flex-col items-center justify-center p-1 bg-[#f9f9f9] border border-[#eee] aspect-square">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <line x1="25" y1="4" x2="25" y2="46" stroke="#000" strokeWidth="2" />
                <circle cx="16" cy="16" r="3.5" fill="#000" />
                <path d="M16 20 L16 32 M16 22 L25 20 M16 32 L22 40 M16 32 L10 38" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            {/* 3. Awning Dips */}
            <div className="flex flex-col items-center justify-center p-1 bg-[#f9f9f9] border border-[#eee] aspect-square">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <polygon points="5,15 45,15 40,22 10,22" fill="#333" />
                <circle cx="25" cy="28" r="3.5" fill="#000" />
                <path d="M25 31 L25 40 M15 22 L22 28 M35 22 L28 28 M25 40 L22 46 M25 40 L28 46" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            {/* 4. Park Bench Stretch */}
            <div className="flex flex-col items-center justify-center p-1 bg-[#f9f9f9] border border-[#eee] aspect-square">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <line x1="8" y1="32" x2="42" y2="32" stroke="#000" strokeWidth="2.5" />
                <line x1="12" y1="32" x2="12" y2="44" stroke="#000" strokeWidth="2" />
                <line x1="38" y1="32" x2="38" y2="44" stroke="#000" strokeWidth="2" />
                <circle cx="34" cy="20" r="3.5" fill="#000" />
                <path d="M34 23 L22 30 L10 32" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            {/* 5. Metrocard kiosk */}
            <div className="flex flex-col items-center justify-center p-1 bg-[#f9f9f9] border border-[#eee] aspect-square">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <rect x="8" y="10" width="12" height="34" fill="#666" stroke="#000" strokeWidth="1.5" />
                <circle cx="32" cy="18" r="3.5" fill="#000" />
                <path d="M32 21 L32 32 M32 24 L20 20 M32 32 L26 44 M32 32 L38 44" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            {/* 6. Phone booth dips */}
            <div className="flex flex-col items-center justify-center p-1 bg-[#f9f9f9] border border-[#eee] aspect-square">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <line x1="8" y1="8" x2="8" y2="44" stroke="#000" strokeWidth="2" />
                <line x1="42" y1="8" x2="42" y2="44" stroke="#000" strokeWidth="2" />
                <circle cx="25" cy="18" r="3.5" fill="#000" />
                <path d="M25 21 L25 32 M8 22 L22 24 M42 22 L28 24 M25 32 L22 42 M25 32 L28 42" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            {/* 7. Hydrant shower */}
            <div className="flex flex-col items-center justify-center p-1 bg-[#f9f9f9] border border-[#eee] aspect-square">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <rect x="34" y="26" width="10" height="18" fill="#c1121f" stroke="#000" strokeWidth="1.5" />
                {/* Water spray */}
                <path d="M34 30 C25 25 15 28 8 36" stroke="#52A3CC" strokeWidth="2" strokeDasharray="2 2" fill="none" />
                <circle cx="16" cy="22" r="3.5" fill="#000" />
                <path d="M16 25 L16 36 M16 28 L10 24 M16 28 L22 24 M16 36 L12 45 M16 36 L20 45" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            {/* 8. Fire escape climb */}
            <div className="flex flex-col items-center justify-center p-1 bg-[#f9f9f9] border border-[#eee] aspect-square">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <line x1="38" y1="5" x2="38" y2="45" stroke="#000" strokeWidth="2" />
                <line x1="30" y1="15" x2="46" y2="15" stroke="#000" strokeWidth="1.5" />
                <line x1="30" y1="28" x2="46" y2="28" stroke="#000" strokeWidth="1.5" />
                <circle cx="20" cy="22" r="3.5" fill="#000" />
                <path d="M20 25 L24 35 M20 26 L34 20 M24 35 L34 28" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          {/* Caption & Signature */}
          <div className="text-center pt-1 border-t border-[#eee]">
            <p className="text-[10px] italic font-serif text-black">"THE CITY IS MY GYM" &nbsp; <span className="font-sans not-italic text-[9px] font-bold">j. nguyen</span></p>
          </div>
        </div>
      );

    case 'financial-safety-net':
      return (
        <div className={`relative w-full aspect-square bg-[#7c4d96] overflow-hidden ${className}`}>
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="cyberSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#432857" />
                <stop offset="100%" stopColor="#8758a6" />
              </linearGradient>
              <linearGradient id="deviceGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#cyberSky)" />
            {/* Clifftops on both sides */}
            <path d="M0 240 L110 240 L90 400 L0 400 Z" fill="#2d173e" stroke="#1c0f27" strokeWidth="3" />
            <path d="M290 240 L400 240 L400 400 L310 400 Z" fill="#2d173e" stroke="#1c0f27" strokeWidth="3" />

            {/* Woven Safety Net spanning the chasm */}
            <path d="M100 250 Q200 330 300 250" stroke="#52A3CC" strokeWidth="4" fill="none" />
            <path d="M105 270 Q200 350 295 270" stroke="#52A3CC" strokeWidth="3" fill="none" />
            {/* Grid net lines */}
            <g stroke="#80FFDB" strokeWidth="1.5" opacity="0.8">
              <line x1="130" y1="260" x2="150" y2="340" />
              <line x1="160" y1="275" x2="180" y2="348" />
              <line x1="200" y1="285" x2="205" y2="350" />
              <line x1="240" y1="275" x2="230" y2="348" />
              <line x1="270" y1="260" x2="255" y2="340" />
            </g>

            {/* Falling Person into Net */}
            <g transform="translate(190, 200) rotate(25)">
              <circle cx="15" cy="10" r="10" fill="#fbd5c0" stroke="#000" strokeWidth="2.5" />
              <path d="M15 20 L15 50 M15 30 L-5 20 M15 30 L35 25 M15 50 L0 80 M15 50 L30 75" stroke="#10b981" strokeWidth="7" strokeLinecap="round" />
            </g>

            {/* Flying coins */}
            <circle cx="120" cy="220" r="7" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="140" cy="205" r="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
            <circle cx="280" cy="210" r="6" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />

            {/* Giant Hands holding Cyber Wallet Device at Top */}
            {/* Hands */}
            <path d="M60 -20 C70 40 100 60 130 70 L140 50" stroke="#fbd5c0" strokeWidth="22" strokeLinecap="round" fill="none" />
            <path d="M340 -20 C330 40 300 60 270 70 L260 50" stroke="#fbd5c0" strokeWidth="22" strokeLinecap="round" fill="none" />
            {/* Device */}
            <rect x="110" y="35" width="180" height="90" rx="14" fill="url(#deviceGrad)" stroke="#4c1d95" strokeWidth="5" />
            {/* Screen */}
            <rect x="125" y="48" width="150" height="64" rx="6" fill="#0f172a" />
            {/* Screen UI bars */}
            <rect x="135" y="58" width="60" height="8" rx="2" fill="#52A3CC" />
            <rect x="135" y="72" width="100" height="6" rx="2" fill="#38bdf8" />
            <circle cx="255" cy="80" r="10" fill="#ec4899" />
          </svg>
        </div>
      );

    case 'spring-on-the-block':
      return (
        <div className={`relative w-full aspect-[3/4] bg-[#93c5fd] overflow-hidden ${className}`}>
          <svg viewBox="0 0 400 533" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="springSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#e0f2fe" />
              </linearGradient>
            </defs>
            <rect width="400" height="533" fill="url(#springSky)" />

            {/* Brownstone Architecture on Left */}
            <rect x="0" y="80" width="150" height="453" fill="#b45309" stroke="#78350f" strokeWidth="3" />
            {/* Windows & Stoop */}
            <rect x="25" y="110" width="35" height="55" fill="#fef3c7" stroke="#451a03" strokeWidth="3" />
            <rect x="80" y="110" width="35" height="55" fill="#fef3c7" stroke="#451a03" strokeWidth="3" />
            <rect x="25" y="190" width="35" height="55" fill="#fef3c7" stroke="#451a03" strokeWidth="3" />
            <rect x="80" y="190" width="35" height="55" fill="#fef3c7" stroke="#451a03" strokeWidth="3" />
            {/* Classic Brownstone Stoop Staircase */}
            <polygon points="115,280 150,280 150,420 80,420" fill="#92400e" stroke="#451a03" strokeWidth="2" />

            {/* Tree on Right in full pink blossoms */}
            <path d="M340 120 Q320 280 330 460" stroke="#5c2e0b" strokeWidth="20" strokeLinecap="round" fill="none" />
            {/* Blossom Clouds */}
            <circle cx="320" cy="140" r="55" fill="#fbcfe8" opacity="0.9" />
            <circle cx="360" cy="180" r="50" fill="#f472b6" opacity="0.8" />
            <circle cx="280" cy="190" r="45" fill="#fbcfe8" opacity="0.9" />
            <circle cx="330" cy="240" r="40" fill="#f9a8d4" opacity="0.85" />

            {/* Yellow Forsythia Bush */}
            <circle cx="200" cy="340" r="35" fill="#fde047" />
            <circle cx="230" cy="350" r="30" fill="#eab308" />

            {/* Potted plant in foreground */}
            <polygon points="15,420 55,420 50,470 20,470" fill="#d97706" stroke="#92400e" strokeWidth="2" />
            <circle cx="35" cy="405" r="20" fill="#facc15" />

            {/* Sidewalk & Park green in background */}
            <rect x="150" y="320" width="250" height="213" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M260 260 L400 260 L400 380 L260 380 Z" fill="#86efac" />
            {/* Park wrought iron fence */}
            <path d="M260 320 L400 320" stroke="#1e293b" strokeWidth="3" />
            <line x1="280" y1="290" x2="280" y2="330" stroke="#1e293b" strokeWidth="2" />
            <line x1="310" y1="290" x2="310" y2="330" stroke="#1e293b" strokeWidth="2" />
            <line x1="340" y1="290" x2="340" y2="330" stroke="#1e293b" strokeWidth="2" />
            <line x1="370" y1="290" x2="370" y2="330" stroke="#1e293b" strokeWidth="2" />

            {/* Girl in Coral Shirt with Corgi Walking */}
            <g transform="translate(205, 360)">
              <circle cx="25" cy="15" r="10" fill="#fed7aa" stroke="#000" strokeWidth="2" />
              <path d="M18 10 C20 0 35 2 32 12" stroke="#000" strokeWidth="2" fill="#000" />
              <path d="M15 25 L35 25 L38 55 L12 55 Z" fill="#ef4444" stroke="#000" strokeWidth="2" />
              <line x1="18" y1="55" x2="16" y2="80" stroke="#1e293b" strokeWidth="4" />
              <line x1="32" y1="55" x2="35" y2="80" stroke="#1e293b" strokeWidth="4" />
              {/* Leash */}
              <path d="M35 35 Q48 45 60 55" stroke="#ef4444" strokeWidth="2" fill="none" />
              {/* Corgi */}
              <ellipse cx="68" cy="58" rx="14" ry="9" fill="#d97706" stroke="#000" strokeWidth="2" />
              <circle cx="78" cy="52" r="7" fill="#d97706" stroke="#000" strokeWidth="2" />
              <line x1="60" y1="65" x2="60" y2="74" stroke="#000" strokeWidth="2" />
              <line x1="72" y1="65" x2="72" y2="74" stroke="#000" strokeWidth="2" />
            </g>

            {/* Neighbor Crouching to Pet Dog */}
            <g transform="translate(240, 390)">
              <circle cx="20" cy="15" r="9" fill="#8d5b4c" stroke="#000" strokeWidth="2" />
              <path d="M10 25 L30 25 L32 45 L8 45 Z" fill="#0284c7" stroke="#000" strokeWidth="2" />
              <path d="M8 45 L-5 58 L5 64 L20 48" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      );

    case 'oh-reader-issue-18':
      return (
        <div className={`relative w-full aspect-[3/4] bg-[#f8fafc] p-4 flex flex-col justify-between border border-[#cbd5e1] ${className}`}>
          {/* Magazine Cover Header */}
          <div className="text-center border-b border-[#0f172a] pb-2">
            <span className="text-[9px] tracking-[0.25em] font-bold text-gray-500 uppercase">FOR THE LOVE OF READING</span>
            <h2 className="font-serif text-2xl font-bold text-[#1e3a8a] tracking-tight mt-0.5">Oh Reader</h2>
            <div className="flex justify-between items-center text-[7px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">
              <span>DON'T RIDE THE HORROR ELEVATOR</span>
              <span>READING TO WRITE</span>
              <span>INVADING BOOKTOK</span>
            </div>
          </div>

          {/* Bookstore / Cafe Illustration in Rich Blue */}
          <div className="my-2 bg-[#dbeafe] p-2 border border-[#bfdbfe] flex-1 flex flex-col justify-center">
            <svg viewBox="0 0 200 160" className="w-full h-full">
              {/* Cafe Counter & Barista */}
              <rect x="130" y="20" width="60" height="70" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="1.5" />
              <line x1="130" y1="45" x2="190" y2="45" stroke="#1e3a8a" strokeWidth="1.5" />
              {/* Espresso machine */}
              <rect x="145" y="28" width="20" height="16" fill="#1e3a8a" />

              {/* Round cafe tables & chairs */}
              <circle cx="50" cy="90" r="18" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
              <circle cx="110" cy="110" r="20" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
              <circle cx="165" cy="120" r="16" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />

              {/* People Reading Books at Tables */}
              {/* Person 1 */}
              <circle cx="45" cy="82" r="5" fill="#1e3a8a" />
              <rect x="40" y="87" width="10" height="12" fill="#3b82f6" />
              <path d="M35 90 L40 95 L45 90" stroke="#1e3a8a" strokeWidth="1.5" fill="#fff" />

              {/* Person 2 relaxing in center */}
              <circle cx="110" cy="100" r="6" fill="#1e3a8a" />
              <rect x="104" y="106" width="12" height="14" fill="#dc2626" />
              <path d="M102 110 L110 114 L118 110" stroke="#1e3a8a" strokeWidth="1.5" fill="#fff" />
            </svg>
          </div>

          {/* Footer */}
          <div className="text-center text-[9px] font-bold tracking-widest text-[#1e3a8a] uppercase pt-1 border-t border-[#0f172a]">
            ISSUE 018
          </div>
        </div>
      );

    case 'alfargos-marketplace-38':
      return (
        <div className={`relative w-full aspect-[3/4] bg-[#fefce8] p-3 border-2 border-[#1e1b4b] overflow-hidden flex flex-col justify-between ${className}`}>
          {/* Header Banner */}
          <div className="bg-[#4338ca] text-white text-center py-1 border border-black shadow-sm">
            <h4 className="font-serif font-black text-sm tracking-wider uppercase">ALFARGO'S <span className="bg-yellow-400 text-black px-1 text-[10px]">ISSUE 38</span></h4>
            <p className="text-[8px] uppercase tracking-widest font-sans font-bold text-yellow-200">MARKETPLACE • AT PIER 17 SEAPORT</p>
          </div>

          {/* Captain Figure Illustration */}
          <div className="relative my-1 flex-1 flex items-center justify-center">
            <svg viewBox="0 0 240 220" className="w-full h-full">
              {/* Seagull Caw Speech Bubble */}
              <path d="M190 20 Q210 20 210 35 Q210 48 195 48 L190 56 L190 48 Q170 48 170 35 Q170 20 190 20 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
              <text x="178" y="37" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CAW!</text>

              {/* Captain in Purple Coat with Spyglass */}
              <circle cx="120" cy="50" r="16" fill="#fed7aa" stroke="#000" strokeWidth="2.5" />
              {/* Beard & Glasses */}
              <path d="M110 50 Q120 72 130 50" fill="#374151" stroke="#000" strokeWidth="2" />
              <circle cx="114" cy="46" r="4" stroke="#000" strokeWidth="1.5" fill="none" />
              <circle cx="126" cy="46" r="4" stroke="#000" strokeWidth="1.5" fill="none" />
              {/* Captain Coat */}
              <path d="M95 70 C105 65 135 65 145 70 L165 170 L75 170 Z" fill="#6366f1" stroke="#000" strokeWidth="3" />
              {/* Spyglass / Telescope */}
              <rect x="135" y="65" width="45" height="10" rx="2" transform="rotate(-25 135 65)" fill="#eab308" stroke="#000" strokeWidth="2" />
            </svg>
          </div>

          {/* Comic Strip bottom panels */}
          <div className="grid grid-cols-2 gap-1 border-t-2 border-black pt-1 bg-white p-1">
            <div className="border border-black p-1 text-[8px] font-sans">
              <span className="font-bold block">"Wait a second..."</span>
              <p className="text-[7px] text-gray-600">What is that in the water?</p>
            </div>
            <div className="border border-black p-1 text-[8px] font-sans bg-blue-50">
              <span className="font-bold text-blue-900 block">"Could it be...?"</span>
              <span className="text-[6px] text-blue-700 uppercase font-black">TO BE CONTINUED!</span>
            </div>
          </div>
        </div>
      );

    case 'the-new-yorker-softball':
      return (
        <div className={`relative w-full aspect-[3/4] bg-[#ffffff] p-3 border border-black flex flex-col justify-between ${className}`}>
          {/* Big Comic Style Title */}
          <div className="text-center">
            <span className="text-[9px] font-bold font-serif tracking-[0.2em] block uppercase">THE</span>
            <h2 className="font-sans font-black text-xl italic tracking-tighter text-black transform -rotate-2">
              NEW YORKER!
            </h2>
            <span className="bg-emerald-600 text-white text-[9px] font-black uppercase px-2 py-0.5 tracking-widest inline-block -mt-1">
              SOFTBALL
            </span>
          </div>

          {/* Comic Action Panels */}
          <div className="my-2 space-y-1.5 flex-1 flex flex-col justify-center">
            {/* Top action scene */}
            <div className="border-2 border-black bg-emerald-100 p-1 relative h-36 overflow-hidden">
              <svg viewBox="0 0 200 120" className="w-full h-full">
                {/* Diamond field */}
                <polygon points="100,10 180,60 100,110 20,60" fill="#86efac" stroke="#15803d" strokeWidth="2" />
                {/* Pitcher swinging bat */}
                <circle cx="60" cy="50" r="8" fill="#fed7aa" stroke="#000" strokeWidth="2" />
                <path d="M55 58 L65 58 L70 85 L50 85 Z" fill="#000" />
                {/* Bat with speed lines */}
                <line x1="68" y1="52" x2="110" y2="30" stroke="#000" strokeWidth="4" strokeLinecap="round" />
                {/* Ball flying with swoosh arc */}
                <path d="M70 50 Q120 10 170 35" stroke="#000" strokeWidth="3" strokeDasharray="3 3" fill="none" />
                <circle cx="170" cy="35" r="5" fill="#fff" stroke="#000" strokeWidth="2" />
              </svg>
            </div>

            {/* Bottom reaction split panels */}
            <div className="grid grid-cols-2 gap-1 h-20">
              <div className="border-2 border-black bg-emerald-50 p-1 flex items-center justify-center">
                <span className="font-black text-xl italic text-emerald-800 tracking-wider">POW!</span>
              </div>
              <div className="border-2 border-black bg-yellow-100 p-1 flex items-center justify-center">
                <span className="font-black text-xl italic text-red-600 tracking-wider">WHAM!!</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'inner-compass-game':
      return (
        <div className={`relative w-full aspect-square bg-[#0284c7] p-4 flex flex-col justify-between overflow-hidden ${className}`}>
          {/* Logo Header */}
          <div className="flex justify-between items-start">
            <div className="bg-[#0f172a] text-white px-2 py-1 border border-white inline-block">
              <h3 className="font-sans font-black text-sm tracking-wider uppercase">INNER COMPASS</h3>
            </div>
            <span className="bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 uppercase">AEG</span>
          </div>

          {/* Times Square Neon Vignettes */}
          <div className="my-2 bg-[#0369a1] p-2 border border-[#38bdf8] flex-1 flex flex-col justify-center relative">
            <svg viewBox="0 0 200 140" className="w-full h-full">
              {/* Billboards with emotions */}
              <rect x="10" y="10" width="45" height="35" fill="#ef4444" stroke="#000" strokeWidth="1.5" />
              <circle cx="32" cy="24" r="8" fill="#fed7aa" />
              <rect x="65" y="5" width="60" height="40" fill="#facc15" stroke="#000" strokeWidth="1.5" />
              <circle cx="85" cy="22" r="7" fill="#fed7aa" />
              <circle cx="105" cy="22" r="7" fill="#fed7aa" />
              <rect x="135" y="15" width="55" height="30" fill="#a855f7" stroke="#000" strokeWidth="1.5" />

              {/* Street crowd below */}
              <rect x="0" y="70" width="200" height="70" fill="#0f172a" />
              {/* Walking characters */}
              <circle cx="40" cy="85" r="7" fill="#fed7aa" />
              <rect x="35" y="92" width="10" height="20" fill="#38bdf8" />
              <circle cx="100" cy="80" r="9" fill="#fed7aa" />
              <rect x="93" y="89" width="14" height="26" fill="#f97316" />
              <circle cx="160" cy="85" r="7" fill="#fed7aa" />
              <rect x="155" y="92" width="10" height="20" fill="#10b981" />
            </svg>
          </div>

          {/* Credits */}
          <div className="flex justify-between items-center text-[7px] text-white font-semibold uppercase tracking-wider">
            <span>DANIEL SKJOLD PEDERSEN</span>
            <span className="font-bold text-yellow-300">ART BY JEREMY NGUYEN</span>
          </div>
        </div>
      );

    case 'snow-day-coffee-house':
      return (
        <div className={`relative w-full aspect-[3/4] bg-[#090d16] overflow-hidden ${className}`}>
          <svg viewBox="0 0 400 533" className="w-full h-full object-cover">
            {/* Night Sky & Snow */}
            <rect width="400" height="533" fill="#0b111e" />

            {/* Glowing Warm Cafe Window Frame */}
            <rect x="100" y="80" width="280" height="420" fill="#d97706" opacity="0.3" />
            <rect x="120" y="100" width="240" height="380" fill="#fef08a" stroke="#451a03" strokeWidth="8" />

            {/* Warm Cafe Interior Behind Window */}
            {/* Barista & Warm Amber Lamps */}
            <circle cx="180" cy="150" r="22" fill="#fbbf24" opacity="0.9" />
            <circle cx="300" cy="150" r="22" fill="#fbbf24" opacity="0.9" />
            <rect x="140" y="240" width="60" height="120" fill="#78350f" stroke="#000" strokeWidth="3" />
            {/* Patrons sitting drinking coffee */}
            <circle cx="280" cy="260" r="18" fill="#fed7aa" stroke="#000" strokeWidth="3" />
            <path d="M260 280 L300 280 L310 360 L250 360 Z" fill="#991b1b" stroke="#000" strokeWidth="3" />
            <circle cx="320" cy="275" r="16" fill="#fed7aa" stroke="#000" strokeWidth="3" />
            <path d="M305 295 L335 295 L345 360 L295 360 Z" fill="#1e3a8a" stroke="#000" strokeWidth="3" />

            {/* Snow Covered Bicycle in Foreground */}
            <g transform="translate(140, 360)">
              {/* Back wheel */}
              <circle cx="40" cy="70" r="42" stroke="#000" strokeWidth="5" fill="none" />
              {/* Front wheel */}
              <circle cx="150" cy="70" r="42" stroke="#000" strokeWidth="5" fill="none" />
              {/* Snow on wheels */}
              <path d="M10 50 Q40 30 70 50" stroke="#ffffff" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M120 50 Q150 30 180 50" stroke="#ffffff" strokeWidth="7" fill="none" strokeLinecap="round" />
              {/* Bike frame */}
              <line x1="40" y1="70" x2="90" y2="70" stroke="#0284c7" strokeWidth="6" />
              <line x1="40" y1="70" x2="80" y2="20" stroke="#0284c7" strokeWidth="6" />
              <line x1="90" y1="70" x2="130" y2="20" stroke="#0284c7" strokeWidth="6" />
              <line x1="80" y1="20" x2="130" y2="20" stroke="#0284c7" strokeWidth="6" />
              <line x1="130" y1="20" x2="150" y2="70" stroke="#0284c7" strokeWidth="6" />
              {/* Handlebars & Seat */}
              <path d="M120 10 L140 10 L145 0" stroke="#000" strokeWidth="5" strokeLinecap="round" />
              <path d="M70 15 L90 15" stroke="#000" strokeWidth="7" strokeLinecap="round" />
            </g>

            {/* Heavy Falling Snowflakes */}
            <g fill="#ffffff">
              <circle cx="40" cy="40" r="3" />
              <circle cx="90" cy="120" r="4" />
              <circle cx="60" cy="220" r="2.5" />
              <circle cx="30" cy="340" r="3.5" />
              <circle cx="110" cy="40" r="2.5" />
              <circle cx="170" cy="90" r="3.5" />
              <circle cx="230" cy="30" r="4" />
              <circle cx="310" cy="70" r="3" />
              <circle cx="370" cy="130" r="4.5" />
              <circle cx="200" cy="210" r="3" />
              <circle cx="340" cy="270" r="4" />
              <circle cx="280" cy="380" r="3" />
              <circle cx="370" cy="440" r="3.5" />
              <circle cx="140" cy="490" r="3" />
            </g>
          </svg>
        </div>
      );

    case 'cruising-altitude':
      return (
        <div className={`relative w-full aspect-[3/4] bg-[#2e1065] p-3 flex flex-col justify-between overflow-hidden ${className}`}>
          <svg viewBox="0 0 400 500" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="cabinNight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#3b0764" />
              </linearGradient>
            </defs>
            <rect width="400" height="500" fill="url(#cabinNight)" />

            {/* Airplane Overhead Bins & Seats */}
            <rect x="0" y="0" width="400" height="70" fill="#4c1d95" stroke="#1e1b4b" strokeWidth="4" />
            {/* Seat Backs */}
            <rect x="30" y="160" width="100" height="200" rx="20" fill="#6b21a8" stroke="#3b0764" strokeWidth="4" />
            <rect x="150" y="160" width="100" height="200" rx="20" fill="#6b21a8" stroke="#3b0764" strokeWidth="4" />
            <rect x="270" y="160" width="100" height="200" rx="20" fill="#6b21a8" stroke="#3b0764" strokeWidth="4" />

            {/* Passenger 1 (Left - Cheerful hands up) */}
            <g transform="translate(45, 120)">
              <circle cx="35" cy="40" r="24" fill="#fed7aa" stroke="#000" strokeWidth="3" />
              <circle cx="28" cy="38" r="3" fill="#000" />
              <circle cx="42" cy="38" r="3" fill="#000" />
              <path d="M28 48 Q35 55 42 48" stroke="#000" strokeWidth="2.5" fill="none" />
              {/* Arms raised */}
              <path d="M10 80 L-10 10 L-5 0" stroke="#f43f5e" strokeWidth="12" strokeLinecap="round" />
              <path d="M60 80 L80 10 L75 0" stroke="#f43f5e" strokeWidth="12" strokeLinecap="round" />
              <rect x="10" y="70" width="50" height="80" fill="#f43f5e" stroke="#000" strokeWidth="3" />
            </g>

            {/* Passenger 2 (Middle - Sleeping with eye mask & headphones) */}
            <g transform="translate(165, 130)">
              <circle cx="35" cy="40" r="24" fill="#fed7aa" stroke="#000" strokeWidth="3" />
              {/* Turquoise Sleeping Mask */}
              <rect x="16" y="32" width="38" height="16" rx="6" fill="#06b6d4" stroke="#000" strokeWidth="2" />
              {/* Headband / headphones */}
              <path d="M12 36 C12 10 58 10 58 36" stroke="#0284c7" strokeWidth="6" fill="none" />
              <rect x="10" y="70" width="50" height="80" fill="#38bdf8" stroke="#000" strokeWidth="3" />
            </g>

            {/* Passenger 3 (Right - Eating snacks in cozy red scarf) */}
            <g transform="translate(285, 125)">
              <circle cx="35" cy="40" r="24" fill="#8d5b4c" stroke="#000" strokeWidth="3" />
              <circle cx="28" cy="38" r="3" fill="#000" />
              <circle cx="42" cy="38" r="3" fill="#000" />
              {/* Cozy red scarf */}
              <path d="M15 60 Q35 75 55 60 Q40 85 20 80 Z" fill="#dc2626" stroke="#000" strokeWidth="2" />
              <rect x="15" y="75" width="45" height="75" fill="#ec4899" stroke="#000" strokeWidth="3" />
            </g>

            {/* Tray Tables & Snacks */}
            <rect x="20" y="350" width="360" height="20" rx="4" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
          </svg>
        </div>
      );

    case 'santa-monica-game':
      return (
        <div className={`relative w-full aspect-square bg-[#fef08a] p-4 flex flex-col justify-between overflow-hidden ${className}`}>
          {/* Seagulls in Sky */}
          <div className="flex justify-between items-start">
            <svg viewBox="0 0 80 30" className="w-16 h-6 text-gray-700">
              <path d="M5 20 Q15 5 25 20 Q35 5 45 20" stroke="#000" strokeWidth="2" fill="none" />
            </svg>
            <span className="bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 uppercase">AEG</span>
          </div>

          {/* Script Hand Lettering "Santa Monica" */}
          <div className="text-center my-auto">
            <h2 className="font-serif italic font-extrabold text-3xl md:text-4xl text-[#ef4444] tracking-tight drop-shadow-sm transform -rotate-3">
              Santa Monica
            </h2>
            <div className="w-24 h-1 bg-[#06b6d4] mx-auto mt-1 rounded-full"></div>
          </div>

          {/* Beach Boardwalk Scene */}
          <div className="bg-[#fed7aa] p-2 border-t-2 border-[#ea580c] relative">
            <svg viewBox="0 0 200 60" className="w-full h-full">
              {/* Blue Ocean */}
              <rect x="0" y="0" width="200" height="25" fill="#38bdf8" />
              <path d="M0 25 Q50 30 100 25 Q150 20 200 25 L200 60 L0 60 Z" fill="#fde047" />
              {/* Pier & Ferris Wheel in Distance */}
              <circle cx="160" cy="15" r="10" stroke="#ef4444" strokeWidth="1.5" fill="none" />
              <line x1="160" y1="5" x2="160" y2="25" stroke="#ef4444" strokeWidth="1" />
              {/* Beach Umbrellas */}
              <path d="M40 38 Q50 30 60 38 Z" fill="#ef4444" stroke="#000" strokeWidth="1" />
              <line x1="50" y1="38" x2="50" y2="48" stroke="#000" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Credits */}
          <div className="flex justify-between items-center text-[7px] text-gray-800 font-bold uppercase tracking-wider pt-1 border-t border-gray-300">
            <span>A GAME BY JOSH WOOD</span>
            <span className="text-[#0284c7]">ART BY JEREMY NGUYEN</span>
          </div>
        </div>
      );

    case 'brooklyn-stoop-summer':
    default:
      return (
        <div className={`relative w-full aspect-[3/4] bg-[#fee2e2] overflow-hidden ${className}`}>
          <img
            src={artwork.image}
            alt={artwork.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
            referrerPolicy="no-referrer"
          />
        </div>
      );
  }
};
