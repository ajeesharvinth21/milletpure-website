"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0px_4px_20px_rgba(78,93,52,0.08)] transition-all duration-300 flex items-center ${
        isScrolled ? "h-16" : "h-20"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
        {/* Brand Logo */}
        <div className="font-headline-md text-headline-md text-primary italic cursor-pointer">
          MilletPure
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Shop All
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Health Benefits
          </a>
          <a
            className="font-body-md text-body-md text-primary border-b-2 border-secondary font-bold pb-1"
            href="#"
          >
            Our Story
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Recipes
          </a>
        </nav>

        {/* Right Icons & Actions */}
        <div className="flex items-center gap-4">
          <span
            className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary transition-colors"
            title="Cart"
          >
            shopping_cart
          </span>
          <span
            className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary transition-colors"
            title="Profile"
          >
            person
          </span>
          
          {/* Mobile Hamburger menu */}
          <button
            className="md:hidden flex items-center justify-center p-1 text-on-surface-variant hover:text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-surface shadow-lg border-t border-outline-variant/20 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-margin-mobile gap-4">
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary py-1 border-b border-outline-variant/10 transition-colors"
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop All
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary py-1 border-b border-outline-variant/10 transition-colors"
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Health Benefits
          </a>
          <a
            className="font-body-md text-body-md text-primary font-bold py-1 border-b border-outline-variant/10 transition-colors"
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary py-1 transition-colors"
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Recipes
          </a>
        </div>
      </div>
    </header>
  );
}
