"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Users,
  Target,
} from "lucide-react";
import Image from "next/image";

const cases = [
  {
    before: "/before-after/1before.jpg",
    after: "/before-after/1after.jpg",
  },
  {
    before: "/before-after/2before.jpg",
    after: "/before-after/2after.jpg",
  },
  {
    before: "/before-after/3before.jpg",
    after: "/before-after/3after.jpg",
  },
  {
    before: "/before-after/4before.jpg",
    after: "/before-after/4after.jpg",
  },
];

export default function Hero() {
  const t = useTranslations("hero");

  const [activeCase, setActiveCase] = useState(0);

  const currentCase = cases[activeCase];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const previousCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % cases.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
      bg-[#8f917a]
        
        text-white
      "
    >

      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            w-[700px]
            h-[700px]
            rounded-full
            bg-white/10
            -right-[250px]
            top-[80px]
          "
        />

        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-white/5
            left-[35%]
            bottom-[-250px]
          "
        />

        <div
          className="
            absolute
            w-[450px]
            h-[450px]
            rounded-full
            border
            border-white/10
            right-[12%]
            top-[15%]
          "
        />
      </div>

      <div
        className="
          container-custom
          relative
          z-10
          min-h-screen
          flex
          items-center
          pt-32
          pb-16
        "
      >
        <div
          className="
            w-full
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]
            gap-10
            lg:gap-4
            items-center
          "
        >

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="relative z-20 max-w-2xl">

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                mb-6
                px-5
                py-2.5
                rounded-full
                bg-white/10
                backdrop-blur-sm
                text-sm
                font-medium
              "
            >
              {t("badge")}
            </div>

            {/* Title */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-[64px]
                xl:text-[72px]
                leading-[1.02]
                tracking-[-0.03em]
                font-medium
              "
            >
              {t("title")}

              <br />

              <span className="text-white/70">
                {t("subtitle")}
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-xl
                text-base
                sm:text-lg
                lg:text-xl
                leading-relaxed
                text-white/80
              "
            >
              {t("description")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-9">

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-4
                  rounded-full
                  bg-[#F7F3F1]
                  text-[#5B4A46]
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:bg-white
                "
              >
                {t("cta")}

                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-4
                  rounded-full
                  bg-white/10
                  backdrop-blur-sm
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-white/20
                  hover:scale-[1.03]
                "
              >
                <MessageCircle className="w-5 h-5" />

                {t("consultation")}
              </a>

            </div>

          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div
            className="
              relative
              min-h-[560px]
              lg:min-h-[680px]
              flex
              items-center
              justify-center
            "
          >

            {/* Large background circle */}
            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                lg:w-[650px]
                lg:h-[650px]
                rounded-full
                bg-white/10
                right-[-80px]
                top-1/2
                -translate-y-1/2
              "
            />




            {/* =================================================
                HERO PERSON
            ================================================== */}
            <div
              className="
                absolute
                z-10
                left-[8%]
                top-[-10%]
                w-[360px]
                h-[600px]
                lg:w-[750px]
                lg:h-[650px]
              "
            >
              <Image
                src="/hero/hero.png"
                alt={t("imageText")}
                fill
                priority
                className="
                  object-contain
                  object-bottom
                  drop-shadow-[0_30px_50px_rgba(60,35,30,0.25)]
                "
              />
            </div>
            {/* HERO INFO BAR */}
            <div
              className="
    absolute
    z-30
    bottom-0
    left-1/2
    -translate-x-1/2
    w-[calc(100%-2rem)]
    max-w-[700px]
  "
            >
              <div
                className="
      bg-[#F7F3F1]
      rounded-[20px]
      shadow-[0_15px_50px_rgba(50,35,30,0.18)]
      px-5
      py-5
      md:px-8
      md:py-6
    "
              >
                <div
                  className="
        grid
        grid-cols-2
        lg:grid-cols-4
        items-center
      "
                >
                  <HeroInfo
                    icon={<ShieldCheck />}
                    value="9+"
                    label={t("info.years")}
                    border
                  />

                  <HeroInfo
                    icon={<Users />}
                    value="6000+"
                    label={t("info.patients")}
                    border
                  />

                  <HeroInfo
                    icon={<Target />}
                    value="8500"
                    label={t("info.grafts")}
                    subLabel={t("info.graftsSub")}
                    border
                  />

                  <HeroInfo
                    icon={<ShieldCheck />}
                    value={t("info.guarantee")}
                    label={t("info.guaranteeSub")}
                  />
                </div>
              </div>
            </div>


            {/* =================================================
                BEFORE / AFTER
            ================================================== */}






          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-[#CFA7A2]/40
          to-transparent
          pointer-events-none
        "
      />

    </section >
  );
}


/* ============================================================
   STAT
============================================================ */


function HeroInfo({
  icon,
  value,
  label,
  subLabel,
  border = false,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  subLabel?: string;
  border?: boolean;
}) {
  return (
    <div
      className={`
        flex
        items-center
        justify-center
        gap-3
        px-4
        py-3
        min-h-[72px]

        ${border ? "lg:border-r border-[#D8CEC7]" : ""}
      `}
    >

      {/* ICON */}
      <div
        className="
          shrink-0
          w-10
          h-10
          md:w-12
          md:h-12
          flex
          items-center
          justify-center
          text-[#C49A55]
        "
      >
        {icon}
      </div>


      {/* TEXT */}
      <div className="text-left">

        <div
          className="
            text-[#171717]
            text-lg
            md:text-xl
            font-semibold
            leading-tight
          "
        >
          {value}
        </div>

        <div
          className="
            text-[#393331]
            text-xs
            md:text-sm
            font-medium
            mt-1
            leading-tight
          "
        >
          {label}
        </div>

        {subLabel && (
          <div
            className="
              text-[#77706C]
              text-[11px]
              md:text-xs
              mt-0.5
            "
          >
            {subLabel}
          </div>
        )}

      </div>

    </div>
  );
}