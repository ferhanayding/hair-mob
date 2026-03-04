'use client';

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Phone } from "lucide-react";
import { Link, useRouter } from "@/app/i18n/navigation";
import { usePathname } from "@/app/i18n/navigation";
import Image from "next/image";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#before-after", label: t("beforeAfter") },
    { href: "#contact", label: t("contact") },
  ];

  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${isScrolled
        ? "bg-gray-800 shadow-xl py-2.5"
        : "bg-gray-800  py-4"
        }`}
    >
      <div className="container-custom flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <div
          // className={`rounded-full transition-all duration-300`}
          >
            <Image
              src="/logo/logo.PNG"
              alt="Elite Hair Clinic"
              width={80}
              height={80}
            // className="rounded-full"
            />
          </div>
          <div className="hidden md:block">
            <h1
              className={` font-bold transition-colors duration-300 ${isScrolled ? "text-white  " : "text-gray-200"
                }`}
            >
              MOB Hair
            </h1>
            <p
              className={`text-xs font-medium transition-colors duration-300 ${isScrolled ? "text-emerald-400" : "text-gray-400"
                }`}
            >
              Clinic
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative  transition-all duration-300 font-medium group ${isScrolled ? "text-gray-200  " : "text-gray-300 "
                } hover:text-emerald-400`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  router.replace(pathname, { locale: lang.code, scroll: false });
                }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${locale === lang.code
                  ? "bg-emerald-600 text-white"
                  : "bg-white/10 text-gray-200 hover:bg-emerald-500 hover:text-white"
                  }`}
              >
                {lang.flag} {lang.code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/905551234567"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:flex items-center px-6 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 ${isScrolled
              ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg"
              : "bg-white/20 hover:bg-white/30 text-gray-200 shadow-none"
              }`}
          >
            <Phone className="w-4 h-4 mr-2" />
            {t("getAnalysis")}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-gray-200" : "text-gray-300"
              } hover:text-emerald-400`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen z-40 transition-all duration-300 ${isMobileMenuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto bg-black/90 backdrop-blur-md"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-semibold hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="flex space-x-3 mt-6">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  router.replace(pathname, { locale: lang.code, scroll: false });
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${locale === lang.code
                  ? "bg-emerald-500 text-white"
                  : "bg-white/10 text-gray-200 hover:bg-emerald-500 hover:text-white"
                  }`}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/905551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <Phone className="w-4 h-4 mr-2" />
            {t("getAnalysis")}
          </a>
        </div>
      </div>
    </header>
  );
}