'use client';

import { MessageCircle, Send, Instagram } from 'lucide-react';

export default function FloatingSocials() {
  return (
    <div className="fixed right-5 bottom-1/3 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/905551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/username"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-sky-500 hover:bg-sky-600 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110"
      >
        <Send className="w-7 h-7 text-white" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110"
      >
        <Instagram className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
