'use client';

import { IoLogoWhatsapp } from 'react-icons/io5';

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!whatsappNumber) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 dark:shadow-green-500/20 hover:scale-110 transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <IoLogoWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}
