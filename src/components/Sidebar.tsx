import React, { useState } from 'react';
import { ViewMode } from '../types';
import { AvatarIcon } from './AvatarIcon';
import { ShoppingBag, Check, Copy, Instagram } from 'lucide-react';

interface SidebarProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onSelectView,
  cartCount,
  onOpenCart,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('jeremywinsagain@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navItems: { id: ViewMode; label: string }[] = [
    { id: 'gallery', label: 'All Artworks' },
    { id: 'about', label: 'This is Me!' },
    { id: 'prints', label: 'Art Prints' },
    { id: 'goods', label: 'Books & Games' },
    { id: 'commissions', label: 'Commissions' },
  ];

  return (
    <aside
      id="desktop-sidebar"
      className="hidden lg:flex flex-col justify-between w-[240px] shrink-0 min-h-screen px-7 py-10 bg-white fixed left-0 top-0 bottom-0 z-30 select-none"
    >
      {/* Top Section: Avatar & Primary Nav */}
      <div className="flex flex-col items-start space-y-7">
        {/* Avatar / Portrait Button */}
        <button
          id="sidebar-avatar-btn"
          onClick={() => onSelectView('gallery')}
          className="group cursor-pointer text-left focus:outline-none transition-transform duration-200 hover:scale-105 active:scale-95"
          title="Return to Gallery"
        >
          <AvatarIcon size={110} />
          <div className="mt-3">
            <h2 className="font-extrabold text-base tracking-tight text-neutral-900 leading-tight">
              Jeremy Nguyen
            </h2>
            <p className="text-xs text-neutral-500 font-medium">
              Cartoonist & Illustrator
            </p>
          </div>
        </button>

        {/* Navigation Links */}
        <nav id="sidebar-nav" className="flex flex-col space-y-1 w-full pt-1">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onSelectView(item.id)}
                className={`text-left text-sm font-semibold tracking-wide transition-all duration-150 px-3.5 py-2 rounded-full focus:outline-none flex items-center justify-between ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bag / Cart Shortcut */}
        <button
          id="sidebar-cart-btn"
          onClick={onOpenCart}
          className="flex items-center justify-between text-xs font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors px-3.5 py-2.5 rounded-full w-full"
        >
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4 text-neutral-800" />
            <span>Shopping Bag</span>
          </div>
          {cartCount > 0 && (
            <span
              id="sidebar-cart-badge"
              className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Bottom Section: Socials, Copyright, Email */}
      <div id="sidebar-footer" className="flex flex-col space-y-3.5 text-neutral-400 text-xs">
        {/* Social Icons */}
        <div className="flex items-center space-x-3 text-neutral-700">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            id="social-x-link"
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-800 transition-colors"
            title="Follow on X / Twitter"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            id="social-ig-link"
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-800 transition-colors"
            title="Follow on Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Email with copy button */}
        <div className="relative group">
          <button
            id="copy-email-btn"
            onClick={handleCopyEmail}
            className="text-left text-[11px] text-neutral-500 hover:text-neutral-900 transition-colors break-all flex items-center gap-1.5 focus:outline-none"
            title="Click to copy email address"
          >
            <span>jeremywinsagain@gmail.com</span>
            {copiedEmail ? (
              <Check className="w-3 h-3 text-emerald-600 shrink-0" />
            ) : (
              <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            )}
          </button>
          {copiedEmail && (
            <div className="absolute -top-7 left-0 bg-neutral-900 text-white text-[10px] px-2.5 py-0.5 rounded-md whitespace-nowrap shadow-sm">
              Copied!
            </div>
          )}
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-neutral-400">
          © {new Date().getFullYear()} Jeremy Nguyen
        </p>
      </div>
    </aside>
  );
};

