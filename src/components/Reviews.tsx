'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Michael Johnson',
    location: 'United States',
    avatar: 'M',
    rating: 5,
    text: 'Best customer care ever. The manager always checked on us to make sure we had everything we needed. Excellent service!',
    platform: 'Google',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    location: 'United Kingdom',
    avatar: 'S',
    rating: 5,
    text: 'Great hotel for couples and close to the airport. The rooms are spacious and clean. Would definitely recommend!',
    platform: 'Booking.com',
  },
  {
    id: 3,
    name: 'Alemayehu Bekele',
    location: 'Ethiopia',
    avatar: 'A',
    rating: 5,
    text: 'Modern facilities and excellent location in Bole. The breakfast was amazing with both Ethiopian and continental options.',
    platform: 'TripAdvisor',
  },
  {
    id: 4,
    name: 'Chen Wei',
    location: 'China',
    avatar: 'C',
    rating: 4,
    text: 'Very comfortable stay. Staff was helpful and friendly. Perfect location for business travelers visiting Addis.',
    platform: 'Google',
  },
];

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-white">
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
              Testimonials
            </span>
            <div className="w-12 h-[2px] bg-[#C4A053]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-[#1A1A1A] mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF7F2] rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#C4A053]/20">
                <Quote size={48} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < review.rating ? 'fill-[#C4A053] text-[#C4A053]' : 'text-gray-300'}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#1A1A1A] text-lg mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C4A053] text-white rounded-full flex items-center justify-center font-display text-xl font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{review.name}</p>
                  <p className="text-[#6B6B6B] text-sm">{review.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-sm text-[#6B6B6B] bg-white px-3 py-1 rounded-full">
                    {review.platform}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-gray-200"
        >
          <p className="text-[#6B6B6B] text-sm">Featured on:</p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-[#6B6B6B]">
              <div className="w-8 h-8 bg-[#4285F4] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="font-medium">Google</span>
            </div>
            <div className="flex items-center gap-2 text-[#6B6B6B]">
              <div className="w-8 h-8 bg-[#00AA6C] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">TA</span>
              </div>
              <span className="font-medium">TripAdvisor</span>
            </div>
            <div className="flex items-center gap-2 text-[#6B6B6B]">
              <div className="w-8 h-8 bg-[#003580] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <span className="font-medium">Booking.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

