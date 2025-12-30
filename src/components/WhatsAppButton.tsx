'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '+251988880317';
  const message = encodeURIComponent('Hello! I would like to inquire about booking a room at Vamos Addis Hotel.');
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="whatsapp-float group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#1A1A1A] px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
      </div>
    </motion.a>
  );
}

