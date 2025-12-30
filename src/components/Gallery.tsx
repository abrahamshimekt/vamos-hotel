'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = {
  rooms: [
    { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Standard Room' },
    { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Deluxe Room' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Executive Suite' },
  ],
  exterior: [
    { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Hotel Exterior' },
    { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Pool Area' },
    { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Entrance' },
  ],
  amenities: [
    { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Lobby' },
    { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Swimming Pool' },
    { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Bedroom' },
  ],
  food: [
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Restaurant' },
    { src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Breakfast' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Ethiopian Cuisine' },
  ],
};

type CategoryKey = keyof typeof galleryImages;

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('rooms');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories: { key: CategoryKey; labelKey: string }[] = [
    { key: 'rooms', labelKey: 'gallery.rooms' },
    { key: 'exterior', labelKey: 'gallery.exterior' },
    { key: 'amenities', labelKey: 'gallery.amenities' },
    { key: 'food', labelKey: 'gallery.food' },
  ];

  const allImages = galleryImages[activeCategory];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#C4A053]" />
            <span className="text-[#C4A053] text-sm tracking-[0.2em] uppercase font-medium">
              Photos
            </span>
            <div className="w-12 h-[2px] bg-[#C4A053]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-[#C4A053] text-white'
                  : 'bg-[#2D2D2D] text-white/70 hover:bg-[#3D3D3D] hover:text-white'
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="wait">
            {allImages.map((image, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white p-2 z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white p-2 z-10"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={allImages[currentImageIndex].src}
              alt={allImages[currentImageIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

