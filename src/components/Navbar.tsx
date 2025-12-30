'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '#rooms', label: t('nav.rooms') },
    { href: '#amenities', label: t('nav.amenities') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`transition-all duration-300 ${isScrolled ? 'text-[#C4A053]' : 'text-white'}`}>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-display font-semibold tracking-wide">
                  Vamos Addis
                </span>
                <span className="text-xs tracking-[0.3em] uppercase opacity-80">
                  H O T E L
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:opacity-70 ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'አማ' : 'EN'}</span>
            </button>

            {/* Book Now Button */}
            <Link
              href="#booking"
              className="btn-primary text-sm uppercase tracking-wider"
            >
              {t('nav.bookNow')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#1A1A1A] text-lg font-medium py-2 hover:text-[#C4A053] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-[#1A1A1A] text-lg font-medium py-2"
              >
                <Globe size={20} />
                <span>{language === 'en' ? 'አማርኛ' : 'English'}</span>
              </button>

              <Link
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block btn-primary text-center mt-4"
              >
                {t('nav.bookNow')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

