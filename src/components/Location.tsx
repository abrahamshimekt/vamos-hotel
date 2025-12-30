'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Plane, Church, ShoppingBag } from 'lucide-react';

const highlights = [
  {
    icon: Plane,
    labelKey: 'location.airport',
    distance: '5 min drive',
  },
  {
    icon: Church,
    labelKey: 'location.cathedral',
    distance: '10 min walk',
  },
  {
    icon: ShoppingBag,
    labelKey: 'location.shopping',
    distance: '5 min walk',
  },
];

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 lg:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Find Us
            </span>
            <div className="w-12 h-[2px] bg-[#C4A053]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-[#1A1A1A] mb-4">
            {t('location.title')}
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
            {t('location.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.78!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDM4wrA0Nic0OC4wIkU!5e0!3m2!1sen!2set!4v1600000000000!5m2!1sen!2set"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#C4A053]/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-[#C4A053]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-[#1A1A1A] mb-2">
                    Address
                  </h3>
                  <p className="text-[#6B6B6B] text-lg">
                    {t('location.address')}
                  </p>
                  <p className="text-[#6B6B6B] text-sm mt-1">
                    Plus Code: XQRV+WJ Addis Ababa
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#C4A053]/10 rounded-full flex items-center justify-center shrink-0">
                    <highlight.icon className="w-6 h-6 text-[#C4A053]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1A1A1A] font-medium">
                      {t(highlight.labelKey)}
                    </p>
                    <p className="text-[#6B6B6B] text-sm">{highlight.distance}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Get Directions Button */}
            <motion.a
              href="https://www.google.com/maps/dir/?api=1&destination=Vamos+Addis+Hotel+Bole+Addis+Ababa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 btn-primary"
            >
              <MapPin size={18} />
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

