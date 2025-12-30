import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vamos Addis Hotel | 4-Star Luxury Hotel in Bole, Addis Ababa",
  description: "Experience comfort & luxury at Vamos Addis Hotel (ቫሞስ አዲስ ሆቴል), a modern 4-star hotel in Bole, Addis Ababa. Near Bole International Airport with exceptional service, free Wi-Fi, pool & breakfast.",
  keywords: "hotel in Addis Ababa, Bole hotel, 4-star hotel Ethiopia, luxury hotel Addis Ababa, Vamos Addis Hotel, ቫሞስ አዲስ ሆቴል, airport hotel Ethiopia",
  openGraph: {
    title: "Vamos Addis Hotel | 4-Star Luxury Hotel in Bole, Addis Ababa",
    description: "Modern 4-star hotel in Bole, Addis Ababa. Near airport, exceptional service & comfort.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
