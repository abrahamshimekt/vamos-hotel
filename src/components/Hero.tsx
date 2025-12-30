'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="gradient-overlay absolute inset-0" />
        {/* Decorative Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4A053' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-[#C4A053]" />
            <span className="text-[#C4A053] text-sm tracking-[0.3em] uppercase">
              Bole, Addis Ababa
            </span>
            <div className="w-16 h-[1px] bg-[#C4A053]" />
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-display font-medium leading-tight mb-6">
            {t('hero.headline')}
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-lg md:text-xl mb-4">
            {t('hero.subheadline')}
          </p>

          {/* Amharic Name */}
          <p className="text-[#C4A053] text-2xl md:text-3xl font-display mb-10">
            ቫሞስ አዲስ ሆቴል
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-base uppercase tracking-wider min-w-[200px]"
            >
              {t('hero.checkAvailability')}
            </motion.a>
            <motion.a
              href="#rooms"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-base uppercase tracking-wider min-w-[200px]"
            >
              {t('hero.bookNow')}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/60 cursor-pointer hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Bottom Decorative Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />
    </section>
  );
}

