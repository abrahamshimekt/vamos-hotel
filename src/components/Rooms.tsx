'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Wifi, Wind, Tv, Coffee, Bath, BedDouble } from 'lucide-react';

const rooms = [
  {
    id: 1,
    nameKey: 'rooms.standard',
    price: 5330,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['wifi', 'ac', 'tv'],
    size: '25 m²',
    beds: '1 Queen Bed',
  },
  {
    id: 2,
    nameKey: 'rooms.deluxe',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['wifi', 'ac', 'tv', 'minibar'],
    size: '35 m²',
    beds: '1 King Bed',
  },
  {
    id: 3,
    nameKey: 'rooms.suite',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['wifi', 'ac', 'tv', 'minibar', 'bathtub'],
    size: '50 m²',
    beds: '1 King Bed + Sofa',
  },
  {
    id: 4,
    nameKey: 'rooms.family',
    price: 9500,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['wifi', 'ac', 'tv', 'minibar'],
    size: '45 m²',
    beds: '2 Queen Beds',
  },
];

const featureIcons: { [key: string]: typeof Wifi } = {
  wifi: Wifi,
  ac: Wind,
  tv: Tv,
  minibar: Coffee,
  bathtub: Bath,
};

export default function Rooms() {
  const { t } = useLanguage();

  return (
    <section id="rooms" className="py-20 lg:py-32 bg-white">
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
              Accommodation
            </span>
            <div className="w-12 h-[2px] bg-[#C4A053]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-[#1A1A1A] mb-4">
            {t('rooms.title')}
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100"
            >
              {/* Room Image */}
              <div className="relative h-56 img-zoom">
                <img
                  src={room.image}
                  alt={t(room.nameKey)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#C4A053] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {room.size}
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-[#1A1A1A] mb-2">
                  {t(room.nameKey)}
                </h3>

                <div className="flex items-center gap-2 text-[#6B6B6B] text-sm mb-4">
                  <BedDouble size={16} />
                  <span>{room.beds}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-3 mb-6">
                  {room.features.map((feature) => {
                    const Icon = featureIcons[feature];
                    return Icon ? (
                      <div
                        key={feature}
                        className="w-8 h-8 bg-[#FAF7F2] rounded-full flex items-center justify-center"
                        title={feature}
                      >
                        <Icon size={16} className="text-[#C4A053]" />
                      </div>
                    ) : null;
                  })}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-[#6B6B6B] text-sm">{t('rooms.from')}</span>
                  <span className="text-2xl font-display font-bold text-[#1A1A1A]">
                    ETB {room.price.toLocaleString()}
                  </span>
                  <span className="text-[#6B6B6B] text-sm">{t('rooms.perNight')}</span>
                </div>

                {/* Book Button */}
                <button className="w-full py-3 bg-[#1A1A1A] text-white font-medium rounded-lg hover:bg-[#C4A053] transition-colors duration-300">
                  {t('rooms.bookRoom')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Rooms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-[#C4A053] font-medium hover:gap-4 transition-all duration-300"
          >
            {t('rooms.seeRooms')}
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

