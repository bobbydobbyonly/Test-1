import React, { useState } from 'react';
import { ViewMode } from '../types';
import { AvatarIcon } from './AvatarIcon';
import { Menu, X, ShoppingBag, Instagram } from 'lucide-react';

interface MobileHeaderProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  currentView,
  onSelectView,
  cartCount,
  onOpenCart,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { id: ViewMode; label: string }[] = [
    { id: 'gallery', label: 'All Artworks' },
    { id: 'about', label: 'This is Me!' },
  ];

  const handleNavClick = (view: ViewMode) => {
    onSelectView(view);
    setMenuOpen(false);
  };

  return (
    <header
      id="mobile-header"
      className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md px-5 py-3.5 flex items-center justify-between"
    >
      {/* Brand / Logo */}
      <button
        id="mobile-logo-btn"
        onClick={() => handleNavClick('gallery')}
        className="flex items-center space-x-3 focus:outline-none"
      >
        <AvatarIcon size={40} />
        <div className="text-left">
          <h1 className="text-sm font-extrabold tracking-tight text-neutral-900 leading-tight">
            Jo
          </h1>
          <p className="text-[11px] text-neutral-500 font-medium">
            Aspiring Artist
          </p>
        </div>
      </button>

      {/* Right controls: Cart & Menu Hamburger */}
      <div className="flex items-center space-x-1.5">
        <button
          id="mobile-cart-btn"
          onClick={onOpenCart}
          className="relative p-2 text-neutral-700 hover:text-black focus:outline-none rounded-full hover:bg-neutral-100 transition-colors"
          title="Shopping Bag"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span
              id="mobile-cart-badge"
              className="absolute top-1 right-1 bg-neutral-900 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full"
            >
              {cartCount}
            </span>
          )}
        </button>

        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-neutral-700 hover:text-black focus:outline-none rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown / Overlay */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          className="absolute top-full left-0 right-0 bg-white p-6 shadow-xl rounded-b-2xl flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-bold tracking-wide px-4 py-2.5 rounded-full transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/jo_studio38?igsi=MXR4b2g0MXNhZzIzNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
            <a href="https://www.tiktok.com/@jo_studio38?_r=1" target="_blank" rel="noreferrer" className="text-[11px] hover:text-neutral-900">TikTok @jo_studio38</a>
          </div>
        </div>
      )}
    </header>
  );
};
