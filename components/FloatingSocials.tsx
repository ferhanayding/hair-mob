'use client';

import { Send, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingSocials() {
  return (
    <div className="fixed right-5 bottom-1/3 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/905551234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          group
          w-14 h-14
          bg-white
          rounded-full
          shadow-lg
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
        "
      >
        <FaWhatsapp
          className="
            w-7 h-7
            text-gray-400
            transition-all
            duration-300
            group-hover:text-[#25D366]
            group-hover:scale-110
          "
        />
      </a>


      {/* Telegram */}
      <a
        href="https://t.me/username"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="
          group
          w-14 h-14
          bg-white
          rounded-full
          shadow-lg
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
        "
      >
        <Send
          className="
            w-7 h-7
            text-gray-400
            transition-all
            duration-300
            group-hover:text-[#229ED9]
            group-hover:scale-110
          "
        />
      </a>


      {/* Instagram */}
      <a
        href="https://instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          group
          w-14 h-14
          bg-white
          rounded-full
          shadow-lg
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
        "
      >
        <Instagram
          className="
            w-7 h-7
            text-gray-400
            transition-all
            duration-300
            group-hover:text-[#E4405F]
            group-hover:scale-110
          "
        />
      </a>


      {/* MAX */}
      <a
        href="https://max.ru/u/f9LHodD0cOIvuAIyuzUToUidLTw5dVGi6hJanDcALgChczlO75uJhJ4sGFo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MAX"
        className="
          group
          w-14 h-14
          bg-white
          rounded-full
          shadow-lg
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
          overflow-hidden
        "
      >
        <img
          src="https://logo-teka.com/wp-content/uploads/2025/07/max-messenger-sign-logo.png"
          alt="MAX"
          width={36}
          height={36}
          className="
            w-9
            h-9
            object-contain
            grayscale
            opacity-60
            transition-all
            duration-300
            group-hover:grayscale-0
            group-hover:opacity-100
            group-hover:scale-110
          "
        />
      </a>

    </div>
  );
}