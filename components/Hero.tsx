"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative min-h-screen  section-padding flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-white to-green-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              {t("badge")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">{t("title")}</span>
              <br />
              <span className="text-gradient">{t("subtitle")}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all group"
              >
                {t("cta")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                {t("consultation")}
              </a>
            </div>

       
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <Stat value="15+" label={t("stats.years")} />
              <Stat value="50K+" label={t("stats.patients")} />
              <Stat value="98%" label={t("stats.success")} />
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-slide-up hidden lg:block">
            <div className="relative w-full h-150">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-6xl mb-4">💆‍♂️</div>
                  <p className="text-xl font-semibold">{t("imageText")}</p>
                </div>
              </div>

              <FloatingCard
                className="-top-8 -left-8"
                icon="✓"
                title={t("cards.certified")}
                subtitle={t("cards.certificate")}
              />

              <FloatingCard
                className="-bottom-8 -right-8"
                icon="⭐"
                title={t("cards.natural")}
                subtitle={t("cards.results")}
                delay="1s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold text-main">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function FloatingCard({
  icon,
  title,
  subtitle,
  className,
  delay,
}: {
  icon: string;
  title: string;
  subtitle: string;
  className: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute ${className} bg-white rounded-2xl shadow-xl p-4 animate-float`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white text-xl">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-600">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
