"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Phone, Languages } from "lucide-react";
import { Link, useRouter } from "@/app/i18n/navigation";
import { usePathname } from "@/app/i18n/navigation";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-lg py-3"
        : "bg-white/95 backdrop-blur-md py-4"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">EH</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">Elite Hair</h1>
              <p className="text-xs text-emerald-600">Clinic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { code: "tr", name: "Türkçe", flag: "🇹🇷" },
                { code: "en", name: "English", flag: "🇬🇧" },
                { code: "ru", name: "Русский", flag: "🇷🇺" },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setIsScrolled(true ? true : false);
                    router.replace(pathname, {
                      locale: lang.code,
                      scroll: false,
                    })
                  }
                  }
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${locale === lang.code
                    ? "bg-emerald-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {lang.flag} {lang.code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center bg-main space-x-2 gradient-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{t("getAnalysis")}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t animate-slide-down">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Language Selector */}
            <div className="flex items-center space-x-2 mt-4 px-4">
              {[
                { code: "tr", name: "Türkçe", flag: "🇹🇷" },
                { code: "en", name: "English", flag: "🇬🇧" },
                { code: "ru", name: "Русский", flag: "🇷🇺" },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    router.replace("/", { locale: lang.code });
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium cursor transition-all ${locale === lang.code
                    ? "bg-emerald-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black justify-center space-x-2 gradient-primary text-white px-6 py-3 rounded-lg font-semibold mt-4 mx-4"
            >
              <Phone className="w-4 h-4" />
              <span>{t("getAnalysis")}</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
