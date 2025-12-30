'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '#rooms', label: t('nav.rooms') },
    { href: '#amenities', label: t('nav.amenities') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-display font-semibold text-[#C4A053]">
                Vamos Addis
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase opacity-60">
                H O T E L
              </p>
              <p className="text-lg text-white/80 mt-1">ቫሞስ አዲስ ሆቴል</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              A modern 4-star hotel in Bole, Addis Ababa, offering exceptional comfort and outstanding service near Bole International Airport.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#C4A053] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C4A053] shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Cameroon St, Bole<br />Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#C4A053] shrink-0" />
                <a href="tel:+251988880317" className="text-white/60 hover:text-[#C4A053] text-sm transition-colors">
                  +251 98 888 0317
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C4A053] shrink-0" />
                <a href="mailto:info@vamosaddis.com" className="text-white/60 hover:text-[#C4A053] text-sm transition-colors">
                  info@vamosaddis.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#C4A053] shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Check-in: 2:00 PM<br />Check-out: 12:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">
              {t('footer.followUs')}
            </h4>
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#C4A053] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#C4A053] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#C4A053] transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>

            {/* Rating Badge */}
            <div className="bg-[#2D2D2D] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#C4A053] text-2xl font-display font-bold">4.6</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? 'text-[#C4A053]' : 'text-[#C4A053]/50'}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-white/60 text-xs">Based on 177+ guest reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Vamos Addis Hotel. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

