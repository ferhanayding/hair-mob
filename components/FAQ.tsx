"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  ChevronDown,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = t.raw("items");

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#F7F3F1]
        py-24
        lg:py-32
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            -top-40
            -right-40
            w-[550px]
            h-[550px]
            rounded-full
            bg-[#8f917a]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-60
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#C49A55]/10
            blur-3xl
          "
        />

      </div>


      <div className="container-custom relative z-10 max-w-5xl mx-auto">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-3xl mx-auto">

          <SectionHeader
            title={t("badge")}
            subtitle={t("title")}
            description={t("description")}
          />

        </div>


        {/* =====================================================
            FAQ LIST
        ====================================================== */}

        <div className="mt-14 space-y-4">

          {items.map((item: any, index: number) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  transition-all
                  duration-500
                  ${isOpen
                    ? "bg-white border-[#8f917a]/30 shadow-[0_20px_50px_rgba(60,45,40,0.10)]"
                    : "bg-white/70 border-[#5B4A46]/8 hover:bg-white hover:border-[#8f917a]/20 hover:shadow-[0_15px_40px_rgba(60,45,40,0.07)]"
                  }
                `}
              >

                {/* =================================================
                    QUESTION
                ================================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  aria-expanded={isOpen}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    px-6
                    py-6
                    sm:px-8
                    sm:py-7
                    text-left
                    cursor-pointer
                  "
                >

                  <div className="flex items-center gap-5">

                    {/* Number */}

                    <div
                      className={`
                        shrink-0
                        hidden
                        sm:flex
                        w-10
                        h-10
                        rounded-full
                        items-center
                        justify-center
                        text-xs
                        font-semibold
                        transition-all
                        duration-300
                        ${isOpen
                          ? "bg-[#8f917a] text-white"
                          : "bg-[#F7F3F1] text-[#8f917a]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    {/* Question */}

                    <span
                      className={`
                        text-base
                        sm:text-lg
                        font-semibold
                        leading-snug
                        transition-colors
                        duration-300
                        ${isOpen
                          ? "text-[#5B4A46]"
                          : "text-[#5B4A46] group-hover:text-[#8f917a]"
                        }
                      `}
                    >
                      {item.question}
                    </span>

                  </div>


                  {/* Arrow */}

                  <div
                    className={`
                      shrink-0
                      w-10
                      h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      ${isOpen
                        ? "bg-[#5B4A46] text-white rotate-180"
                        : "bg-[#F7F3F1] text-[#8f917a] group-hover:bg-[#8f917a] group-hover:text-white"
                      }
                    `}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>

                </button>


                {/* =================================================
                    ANSWER
                ================================================= */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out
                    ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div
                      className="
                        px-6
                        sm:px-8
                        pb-7
                        sm:pb-8
                        pl-6
                        sm:pl-[92px]
                      "
                    >

                      <div
                        className="
                          h-px
                          w-full
                          bg-[#5B4A46]/8
                          mb-6
                        "
                      />

                      <p
                        className="
                          max-w-3xl
                          text-sm
                          sm:text-base
                          leading-7
                          text-[#756C68]
                        "
                      >
                        {item.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* =====================================================
            BOTTOM INFO
        ====================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-6
            px-6
            sm:px-8
            py-6
            rounded-[22px]
            bg-[#5B4A46]
            shadow-[0_20px_50px_rgba(60,45,40,0.12)]
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-11
                h-11
                rounded-full
                bg-white/10
                border
                border-white/10
                flex
                items-center
                justify-center
                text-[#C49A55]
              "
            >
              <HelpCircle className="w-5 h-5" />
            </div>

            <div>

              <p
                className="
                  text-white
                  font-medium
                  text-sm
                "
              >
                {t("title")}
              </p>

              <p
                className="
                  text-white/55
                  text-xs
                  mt-1
                "
              >
                {t("description")}
              </p>

            </div>

          </div>


          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white
              whitespace-nowrap
              transition-all
              duration-300
              hover:text-[#C49A55]
            "
          >

            {t("badge")}

            <span
              className="
                w-8
                h-8
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                transition-all
                duration-300
                group-hover:bg-[#8f917a]
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight className="w-4 h-4" />
            </span>

          </a>

        </div>

      </div>

    </section>
  );
}