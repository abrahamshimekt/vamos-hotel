'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Wifi, UtensilsCrossed, Car, Waves, Accessibility, Clock } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    labelKey: 'amenities.wifi',
    description: 'High-speed internet throughout the hotel',
  },
  {
    icon: UtensilsCrossed,
    labelKey: 'amenities.breakfast',
    description: 'Complimentary breakfast buffet daily',
  },
  {
    icon: Car,
    labelKey: 'amenities.parking',
    description: 'Secure on-site parking for guests',
  },
  {
    icon: Waves,
    labelKey: 'amenities.pool',
    description: 'Outdoor swimming pool with lounge area',
  },
  {
    icon: Accessibility,
    labelKey: 'amenities.accessible',
    description: 'Wheelchair accessible rooms & facilities',
  },
  {
    icon: Clock,
    labelKey: 'amenities.frontDesk',
    description: 'Round-the-clock assistance & concierge',
  },
];

export default function Amenities() {
  const { t } = useLanguage();

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23C4A053' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#C4A053]" />
            <span className="text-[#C4A053] text-sm tracking-[0.2em] uppercase font-medium">
              Services
            </span>
            <div className="w-12 h-[2px] bg-[#C4A053]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            {t('amenities.title')}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('amenities.subtitle')}
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#2D2D2D] rounded-2xl p-8 hover:bg-[#C4A053] transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-[#C4A053]/20 group-hover:bg-white/20 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500">
                  <amenity.icon className="w-8 h-8 text-[#C4A053] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {t(amenity.labelKey)}
                  </h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors duration-500">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

