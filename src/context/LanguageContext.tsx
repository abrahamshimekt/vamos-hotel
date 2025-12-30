'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'am';

interface Translations {
  [key: string]: {
    en: string;
    am: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', am: 'መነሻ' },
  'nav.rooms': { en: 'Rooms', am: 'ክፍሎች' },
  'nav.amenities': { en: 'Amenities', am: 'አገልግሎቶች' },
  'nav.gallery': { en: 'Gallery', am: 'ማዕከለ ስዕላት' },
  'nav.contact': { en: 'Contact', am: 'ያግኙን' },
  'nav.bookNow': { en: 'Book Now', am: 'አሁን ይያዙ' },

  // Hero Section
  'hero.headline': { en: 'Experience Comfort & Luxury in the Heart of Bole', am: 'በቦሌ ልብ ውስጥ ምቾት እና ቅንጦትን ይለማመዱ' },
  'hero.subheadline': { en: '4-Star Hotel • Near Bole International Airport • Exceptional Service', am: '4-ኮከብ ሆቴል • ከቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ አጠገብ • ልዩ አገልግሎት' },
  'hero.checkAvailability': { en: 'Check Availability', am: 'ቦታ ያረጋግጡ' },
  'hero.bookNow': { en: 'Book Now', am: 'አሁን ይያዙ' },

  // Overview
  'overview.title': { en: 'Welcome to Vamos Addis Hotel', am: 'እንኳን ወደ ቫሞስ አዲስ ሆቴል በደህና መጡ' },
  'overview.subtitle': { en: 'ቫሞስ አዲስ ሆቴል', am: 'Vamos Addis Hotel' },
  'overview.description': { en: 'Vamos Addis Hotel is a modern 4-star hotel located in Bole, Addis Ababa, offering exceptional comfort, outstanding customer service, and convenient access to Bole International Airport, shopping malls, and major attractions.', am: 'ቫሞስ አዲስ ሆቴል በቦሌ፣ አዲስ አበባ የሚገኝ ዘመናዊ 4-ኮከብ ሆቴል ሲሆን ልዩ ምቾት፣ ጥሩ የደንበኛ አገልግሎት እና ወደ ቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ፣ የገበያ ማዕከሎች እና ዋና ዋና መስህቦች ምቹ መዳረሻን ይሰጣል።' },
  'overview.rating': { en: 'reviews', am: 'ግምገማዎች' },

  // Rooms
  'rooms.title': { en: 'Our Rooms', am: 'ክፍሎቻችን' },
  'rooms.subtitle': { en: 'Comfortable Stays for Every Guest', am: 'ለእያንዳንዱ እንግዳ ምቹ ማረፊያ' },
  'rooms.from': { en: 'From', am: 'ከ' },
  'rooms.perNight': { en: '/ night', am: '/ በሌሊት' },
  'rooms.seeRooms': { en: 'See All Rooms', am: 'ሁሉንም ክፍሎች ይመልከቱ' },
  'rooms.bookRoom': { en: 'Book This Room', am: 'ይህን ክፍል ይያዙ' },
  'rooms.standard': { en: 'Standard Room', am: 'መደበኛ ክፍል' },
  'rooms.deluxe': { en: 'Deluxe Room', am: 'ዴሉክስ ክፍል' },
  'rooms.suite': { en: 'Executive Suite', am: 'የሥራ አስፈጻሚ ስዊት' },
  'rooms.family': { en: 'Family Room', am: 'የቤተሰብ ክፍል' },

  // Amenities
  'amenities.title': { en: 'Hotel Amenities', am: 'የሆቴል አገልግሎቶች' },
  'amenities.subtitle': { en: 'Everything You Need for a Perfect Stay', am: 'ለፍጹም ማረፊያ የሚያስፈልግዎት ሁሉ' },
  'amenities.wifi': { en: 'Free Wi-Fi', am: 'ነፃ ዋይፋይ' },
  'amenities.breakfast': { en: 'Free Breakfast', am: 'ነፃ ቁርስ' },
  'amenities.parking': { en: 'Free Parking', am: 'ነፃ ማቆሚያ' },
  'amenities.pool': { en: 'Swimming Pool', am: 'የዋና ገንዳ' },
  'amenities.accessible': { en: 'Accessible Facilities', am: 'ተደራሽ መገልገያዎች' },
  'amenities.frontDesk': { en: '24/7 Front Desk', am: '24/7 የእንግዳ ተቀባይ' },

  // Location
  'location.title': { en: 'Location', am: 'አድራሻ' },
  'location.subtitle': { en: 'Find Us in the Heart of Bole', am: 'በቦሌ ልብ ውስጥ ያግኙን' },
  'location.address': { en: 'Cameroon St, Bole, Addis Ababa', am: 'ካሜሩን ጎዳና፣ ቦሌ፣ አዲስ አበባ' },
  'location.airport': { en: 'Close to Bole International Airport', am: 'ከቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ አጠገብ' },
  'location.cathedral': { en: 'Near Medhane Alem Cathedral', am: 'ከመድሃኔ ዓለም ቤተ ክርስቲያን አጠገብ' },
  'location.shopping': { en: 'Close to shopping malls & restaurants', am: 'ከገበያ ማዕከሎች እና ምግብ ቤቶች አጠገብ' },

  // Reviews
  'reviews.title': { en: 'Guest Reviews', am: 'የእንግዳ ግምገማዎች' },
  'reviews.subtitle': { en: 'What Our Guests Say', am: 'እንግዶቻችን ምን ይላሉ' },

  // Gallery
  'gallery.title': { en: 'Gallery', am: 'ማዕከለ ስዕላት' },
  'gallery.subtitle': { en: 'Explore Our Hotel', am: 'ሆቴላችንን ያስሱ' },
  'gallery.rooms': { en: 'Rooms', am: 'ክፍሎች' },
  'gallery.exterior': { en: 'Exterior', am: 'የውጭ ገጽታ' },
  'gallery.amenities': { en: 'Amenities', am: 'አገልግሎቶች' },
  'gallery.food': { en: 'Food & Drinks', am: 'ምግብ እና መጠጦች' },

  // CTA
  'cta.title': { en: 'Book Your Stay at Vamos Addis Hotel Today', am: 'ዛሬ በቫሞስ አዲስ ሆቴል ማረፊያዎን ይያዙ' },
  'cta.bookNow': { en: 'Book Now', am: 'አሁን ይያዙ' },
  'cta.contactUs': { en: 'Contact Us', am: 'ያግኙን' },

  // Contact
  'contact.title': { en: 'Contact Us', am: 'ያግኙን' },
  'contact.subtitle': { en: 'Get in Touch', am: 'ያነጋግሩን' },
  'contact.phone': { en: 'Phone', am: 'ስልክ' },
  'contact.email': { en: 'Email', am: 'ኢሜይል' },
  'contact.website': { en: 'Website', am: 'ድረ-ገጽ' },
  'contact.checkin': { en: 'Check-in', am: 'መግቢያ' },
  'contact.checkout': { en: 'Check-out', am: 'መውጫ' },
  'contact.sendMessage': { en: 'Send Message', am: 'መልእክት ይላኩ' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', am: 'መብቱ በህግ የተጠበቀ ነው።' },
  'footer.quickLinks': { en: 'Quick Links', am: 'ፈጣን አገናኞች' },
  'footer.contactInfo': { en: 'Contact Info', am: 'የእውቂያ መረጃ' },
  'footer.followUs': { en: 'Follow Us', am: 'ይከተሉን' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

