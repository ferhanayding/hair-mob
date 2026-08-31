"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  CheckCircle,
  Award,
  Users,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  const features = [
    {
      icon: CheckCircle,
      title: t("features.painless.title"),
      description: t("features.painless.desc"),
    },
    {
      icon: Award,
      title: t("features.certified.title"),
      description: t("features.certified.desc"),
    },
    {
      icon: Users,
      title: t("features.team.title"),
      description: t("features.team.desc"),
    },
    {
      icon: Zap,
      title: t("features.fast.title"),
      description: t("features.fast.desc"),
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#F7F3F1]
        py-24
        lg:py-32
      "
    >

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#8f917a]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-60
            -right-40
            w-[600px]
            h-[600px]
            rounded-full
            bg-[#C49A55]/10
            blur-3xl
          "
        />

      </div>


      <div className="container-custom relative z-10">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]
            gap-14
            lg:gap-20
            items-center
          "
        >

          {/* =====================================================
              LEFT — IMAGE
          ====================================================== */}

          <div className="relative">

            <div
              className="
                relative
                h-[500px]
                sm:h-[600px]
                lg:h-[680px]
                rounded-[32px]
                overflow-hidden
                shadow-[0_30px_80px_rgba(60,45,40,0.15)]
              "
            >

              <Image
                src="/about/about.jpg"
                alt={t("clinic")}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#302724]/45
                  via-transparent
                  to-transparent
                "
              />

              {/* Image label */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  flex
                  items-end
                  justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-white/70
                      text-xs
                      tracking-[0.2em]
                      uppercase
                      mb-2
                    "
                  >
                    {t("clinic")}
                  </p>

                  <p
                    className="
                      text-white
                      text-xl
                      sm:text-2xl
                      font-medium
                    "
                  >
                    Excellence in Hair Restoration
                  </p>

                </div>

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white/15
                    backdrop-blur-md
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <ArrowUpRight className="w-5 h-5" />
                </div>

              </div>

            </div>


            {/* =================================================
                EXPERIENCE CARD
            ================================================= */}

            <div
              className="
                absolute
                -bottom-7
                -right-5
                sm:-right-8
                bg-white
                rounded-[22px]
                shadow-[0_20px_50px_rgba(60,45,40,0.16)]
                px-5
                py-5
                sm:px-7
                sm:py-6
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#8f917a]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <span
                    className="
                      text-white
                      text-xl
                      font-semibold
                    "
                  >
                    15+
                  </span>

                </div>

                <div>

                  <div
                    className="
                      text-2xl
                      font-semibold
                      text-[#5B4A46]
                    "
                  >
                    {t("experience.years")}
                  </div>

                  <div
                    className="
                      text-sm
                      text-[#8f817c]
                    "
                  >
                    {t("experience.label")}
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}

          <div>

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                mb-6
                px-4
                py-2
                rounded-full
                bg-[#8f917a]/10
                text-[#5B4A46]
                text-sm
                font-medium
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#C49A55]
                "
              />

              {t("badge")}

            </div>


            {/* Title */}

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-[68px]
                leading-[1.02]
                tracking-[-0.04em]
                font-medium
                text-[#5B4A46]
                max-w-xl
              "
            >
              {t("title")}
            </h2>


            {/* Description */}

            <p
              className="
                mt-7
                max-w-xl
                text-base
                sm:text-lg
                leading-relaxed
                text-[#6E6561]
              "
            >
              {t("description")}
            </p>


            {/* Decorative line */}

            <div className="flex items-center gap-4 my-10">

              <div
                className="
                  w-16
                  h-px
                  bg-[#C49A55]
                "
              />

              <span
                className="
                  text-xs
                  tracking-[0.2em]
                  uppercase
                  text-[#8f917a]
                "
              >
                {t("clinic")}
              </span>

            </div>


            {/* =================================================
                FEATURES
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-8
                gap-y-7
              "
            >

              {features.map((feature, index) => {

                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      flex
                      items-start
                      gap-4
                    "
                  >

                    <div
                      className="
                        shrink-0
                        w-11
                        h-11
                        rounded-full
                        bg-white
                        border
                        border-[#5B4A46]/10
                        flex
                        items-center
                        justify-center
                        text-[#8f917a]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:bg-[#8f917a]
                        group-hover:text-white
                        group-hover:scale-110
                      "
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>

                      <h3
                        className="
                          font-semibold
                          text-[#5B4A46]
                          mb-1.5
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          text-sm
                          leading-relaxed
                          text-[#7A716D]
                        "
                      >
                        {feature.description}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>


            {/* =================================================
                BUTTON
            ================================================= */}

            <div className="mt-10">

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-[#5B4A46]
                  text-white
                  font-medium
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#8f917a]
                  hover:shadow-xl
                  hover:-translate-y-1
                "
              >

                {t("learnMore")}

                <span
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight className="w-4 h-4" />
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}