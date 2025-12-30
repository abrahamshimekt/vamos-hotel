'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Award, Users, Clock } from 'lucide-react';

export default function Overview() {
  const { t } = useLanguage();

  const stats = [
    { icon: Star, value: '4.6/5', label: '177+ ' + t('overview.rating') },
    { icon: Award, value: '4-Star', label: 'Hotel' },
    { icon: Users, value: '10K+', label: 'Happy Guests' },
    { icon: Clock, value: '24/7', label: 'Service' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C4A053]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C4A053]/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#C4A053]" />
              <span className="text-[#C4A053] text-sm tracking-[0.2em] uppercase font-medium">
                {t('overview.subtitle')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#1A1A1A] mb-6 leading-tight">
              {t('overview.title')}
            </h2>

            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
              {t('overview.description')}
            </p>

            {/* Rating Stars */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i < 4 ? 'fill-[#C4A053] text-[#C4A053]' : 'fill-[#C4A053]/50 text-[#C4A053]/50'}
                  />
                ))}
              </div>
              <span className="text-[#1A1A1A] font-semibold text-lg">4.6 / 5</span>
              <span className="text-[#6B6B6B]">(177+ {t('overview.rating')})</span>
            </div>

            {/* Booking Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
                <span className="text-sm font-medium text-[#1A1A1A]">Booking.com</span>
                <span className="bg-[#003580] text-white text-xs px-2 py-1 rounded">9.0</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
                <span className="text-sm font-medium text-[#1A1A1A]">TripAdvisor</span>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-[#00AA6C]" />
                  ))}
                </div>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
                <span className="text-sm font-medium text-[#1A1A1A]">Google</span>
                <span className="text-[#FBBC04]">★</span>
                <span className="text-sm">4.6</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#C4A053]/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-[#C4A053]" />
                </div>
                <div className="text-3xl lg:text-4xl font-display font-semibold text-[#1A1A1A] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#6B6B6B] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

