'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="booking" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/85" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-[#C4A053]" />
            <div className="w-3 h-3 bg-[#C4A053] rotate-45" />
            <div className="w-16 h-[1px] bg-[#C4A053]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            {t('cta.title')}
          </h2>

          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Reserve your luxurious stay at Vamos Addis Hotel. Experience Ethiopian hospitality at its finest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+251988880317"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-base uppercase tracking-wider min-w-[200px]"
            >
              {t('cta.bookNow')}
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="btn-secondary text-base uppercase tracking-wider min-w-[200px] inline-block text-center"
              >
                {t('cta.contactUs')}
              </Link>
            </motion.div>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/60">
            <a href="tel:+251988880317" className="hover:text-[#C4A053] transition-colors">
              📞 +251 98 888 0317
            </a>
            <span>📍 Bole, Addis Ababa</span>
            <span>✨ 4-Star Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

