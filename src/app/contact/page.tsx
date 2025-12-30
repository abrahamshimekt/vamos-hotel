'use client';

import { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle } from 'lucide-react';

function ContactContent() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+251 98 888 0317',
      href: 'tel:+251988880317',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'info@vamosaddis.com',
      href: 'mailto:info@vamosaddis.com',
    },
    {
      icon: Globe,
      label: t('contact.website'),
      value: 'vamosaddis.com',
      href: 'https://vamosaddis.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Cameroon St, Bole, Addis Ababa',
      href: 'https://maps.google.com/?q=Vamos+Addis+Hotel',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1A1A1A]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#C4A053]" />
              <span className="text-[#C4A053] text-sm tracking-[0.2em] uppercase font-medium">
                Get in Touch
              </span>
              <div className="w-12 h-[2px] bg-[#C4A053]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We&apos;re here to help. Reach out for reservations, inquiries, or any assistance.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display text-[#1A1A1A] mb-8">
                {t('contact.subtitle')}
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-5 p-5 bg-[#FAF7F2] rounded-xl hover:bg-[#C4A053]/10 transition-colors group"
                  >
                    <div className="w-14 h-14 bg-[#C4A053]/10 group-hover:bg-[#C4A053] rounded-full flex items-center justify-center transition-colors">
                      <info.icon className="w-6 h-6 text-[#C4A053] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[#6B6B6B] text-sm">{info.label}</p>
                      <p className="text-[#1A1A1A] font-medium text-lg">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Check-in/Check-out Times */}
              <div className="bg-[#1A1A1A] rounded-2xl p-8">
                <h3 className="text-xl font-display text-white mb-6 flex items-center gap-3">
                  <Clock className="text-[#C4A053]" size={24} />
                  Hotel Timings
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#C4A053] text-sm mb-1">{t('contact.checkin')}</p>
                    <p className="text-white text-2xl font-display font-semibold">2:00 PM</p>
                  </div>
                  <div>
                    <p className="text-[#C4A053] text-sm mb-1">{t('contact.checkout')}</p>
                    <p className="text-white text-2xl font-display font-semibold">12:00 PM</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm">
                    <strong>Plus Code:</strong> XQRV+WJ Addis Ababa
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FAF7F2] rounded-2xl p-8 lg:p-10"
            >
              <h2 className="text-2xl font-display text-[#1A1A1A] mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-display text-[#1A1A1A] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#6B6B6B]">
                    Thank you for contacting us. We&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4A053] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4A053] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4A053] focus:border-transparent transition-all"
                        placeholder="+251 9XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4A053] focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Room Reservation</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="event">Event Booking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4A053] focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    {t('contact.sendMessage')}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.78!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDM4wrA0Nic0OC4wIkU!5e0!3m2!1sen!2set!4v1600000000000!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
}

