"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Phone } from "lucide-react";
import { Link, useRouter, usePathname } from "@/app/i18n/navigation";
import Image from "next/image";
import { contactInfo } from "@/data/contact";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Sayfa ilk açıldığında mevcut scroll konumunu kontrol et
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#before-after", label: t("beforeAfter") },
    { href: "#contact", label: t("contact") },
  ];

  const languages = [
    { code: "tr", name: "TR", flag: "🇹🇷" },
    { code: "en", name: "EN", flag: "🇬🇧" },
    { code: "ru", name: "RU", flag: "🇷🇺" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
          }
        `}
      >
        <div className="w-full px-6 lg:px-8">
          <div
            className={`
              flex items-center justify-between
              gap-4
              transition-all duration-500
              ${isScrolled ? "py-3" : "py-5"}
            `}
          >

            {/* ================= LOGO ================= */}
            <Link
              href="/"
              className="flex items-center shrink-0"
            >
              <Image
                src={
                  isScrolled
                    ? "/logo/logoblack.png"
                    : "/logo/logowhite.png"
                }
                alt="MOB Hair Clinic"
                width={300}
                height={90}
                priority
                className={`
                  w-auto object-contain
                  transition-all duration-500
                  ${isScrolled ? "h-12 lg:h-14" : "h-14 lg:h-16"}
                `}
              />
            </Link>


            {/* ================= CENTER ================= */}
            <div className="hidden xl:flex items-center gap-3">

              {/* TELEFON */}
              <div
                className={`
                  flex items-center
                  rounded-full
                  px-5 py-3
                  transition-all duration-300
                  ${isScrolled
                    ? "bg-gray-100 text-gray-800"
                    : "bg-white/15 backdrop-blur-md border border-white/20 text-white"
                  }
                `}
              >
                <Phone className="w-4 h-4 mr-2" />

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm font-semibold whitespace-nowrap"
                >
                  {contactInfo.phone}
                </a>
              </div>


              {/* DANIŞMANLIK */}
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center
                  rounded-full
                  px-5 py-3
                  text-sm font-semibold
                  whitespace-nowrap
                  transition-all duration-300
                  ${isScrolled
                    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    : "bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25"
                  }
                `}
              >
                {t("getAnalysis")}
              </a>

            </div>


            {/* ================= RIGHT ================= */}
            <div className="hidden lg:flex items-center gap-3">

              {/* DİL ADACIĞI */}
              <div
                className={`
                  flex items-center
                  rounded-full
                  p-1
                  transition-all duration-300
                
                `}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      router.replace(pathname, {
                        locale: lang.code,
                        scroll: false,
                      });
                    }}
                    className={`
                      px-3 py-2
                      rounded-full
                      text-xs font-semibold
                      transition-all duration-300
                      ${locale === lang.code
                        ? isScrolled
                          ? "bg-white text-gray-900 shadow-sm"
                          : "bg-white text-gray-900"
                        : isScrolled
                          ? "text-gray-600 hover:bg-white/70"
                          : "text-white hover:bg-white/20"
                      }
                    `}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>


              {/* ================= NAVIGATION ================= */}
              <nav
                className={`
                  flex items-center
                  rounded-full
                  p-1.5
                  transition-all duration-500
                 
                `}
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`
                      px-4 py-2.5
                      rounded-full
                      text-sm font-medium
                      whitespace-nowrap
                      transition-all duration-300
                      ${isScrolled
                        ? "text-gray-700 hover:bg-white hover:text-gray-950"
                        : "text-white hover:bg-white/20"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>



              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Menüyü aç"
                className={`
                  lg:hidden 
                  flex items-center justify-center
                  w-12 h-12
                  rounded-full
                  shrink-0
                  transition-all duration-300
                  ${isScrolled
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    : "bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25"
                  }
                `}
              >
                <Menu className="w-5 h-5" />
              </button>

            </div>


            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menüyü aç"
              className={`
                  lg:hidden
                
                
                flex items-center justify-center
                w-11 h-11
                rounded-full
                shrink-0
                transition-all duration-300
                ${isScrolled
                  ? "bg-gray-100 text-gray-900"
                  : "bg-white/15 backdrop-blur-md border border-white/20 text-white"
                }
              `}
            >
              <Menu className="w-5 h-5" />
            </button>

          </div>
        </div>
      </header>


      {/* ================= MOBILE MENU ================= */}
      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
    fixed inset-0 z-[100]
    transition-all duration-500
    ${isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
  `}
      >
        {/* Kırık beyaz arka plan */}
        <div className="absolute inset-0 bg-[#F7F3F1]" />

        <div
          className={`
      relative
      h-full
      flex flex-col
      items-center
      justify-center
      px-6
      transition-transform duration-500
      ${isMobileMenuOpen
              ? "translate-y-0"
              : "-translate-y-10"
            }
    `}
        >

          {/* KAPAT */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Menüyü kapat"
            className="
        absolute
        top-6
        right-6
        flex
        items-center
        justify-center
        w-12
        h-12
        rounded-full
        bg-[#CFA7A2]
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:bg-[#bd918c]
      "
          >
            <X className="w-5 h-5" />
          </button>


          {/* LOGO */}
          <div className="mb-12">
            <Image
              src="/logo/logo.png"
              alt="MOB Hair Clinic"
              width={260}
              height={80}
              className="
          w-auto
          h-16
          object-contain
        "
            />
          </div>


          {/* MENÜ */}
          <nav className="w-full max-w-sm flex flex-col gap-3">

            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
            group
            flex
            items-center
            justify-between
            w-full
            px-6
            py-4
            rounded-2xl
            bg-white
            border
            border-[#E9DEDB]
            text-[#514840]
            text-lg
            font-medium
            shadow-sm
            transition-all
            duration-300
            hover:bg-[#CFA7A2]
            hover:text-white
            hover:border-[#CFA7A2]
            hover:translate-x-1
          "
              >
                <span>{item.label}</span>

                <span
                  className="
              text-[#CFA7A2]
              group-hover:text-white
              transition-colors
              duration-300
            "
                >
                  →
                </span>
              </a>
            ))}

          </nav>


          {/* ALT BÖLÜM */}
          <div className="mt-8 flex flex-col items-center gap-5">

            {/* DİLLER */}
            <div
              className="
          flex
          items-center
          gap-1
          p-1
          rounded-full
          bg-white
          border
          border-[#E9DEDB]
          shadow-sm
        "
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    router.replace(pathname, {
                      locale: lang.code,
                      scroll: false,
                    });

                    setIsMobileMenuOpen(false);
                  }}
                  className={`
              px-4
              py-2
              rounded-full
              text-xs
              font-semibold
              transition-all
              duration-300
              ${locale === lang.code
                      ? "bg-[#CFA7A2] text-white shadow-sm"
                      : "text-[#514840] hover:bg-[#F0E7E5]"
                    }
            `}
                >
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>


            {/* DANIŞMANLIK */}
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="
          flex
          items-center
          justify-center
          gap-2
          px-8
          py-4
          rounded-full
          bg-[#CFA7A2]
          text-white
          font-semibold
          shadow-lg
          shadow-[#CFA7A2]/20
          transition-all
          duration-300
          hover:bg-[#bd918c]
          hover:scale-[1.03]
        "
            >
              <Phone className="w-4 h-4" />
              {t("getAnalysis")}
              <span>↗</span>
            </a>

          </div>

        </div>
      </div>
    </>
  );
}