'use client';

import {
  Scissors,
  Sparkles,
  Heart,
  Brush,
  Eye,
  ArrowUpRight,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Scissors,
      title: t('service1.title'),
      description: t('service1.desc'),
    },
    {
      icon: Sparkles,
      title: t('service2.title'),
      description: t('service2.desc'),
    },
    {
      icon: Heart,
      title: t('service3.title'),
      description: t('service3.desc'),
    },
    {
      icon: Brush,
      title: t('service4.title'),
      description: t('service4.desc'),
    },
    {
      icon: Eye,
      title: t('service5.title'),
      description: t('service5.desc'),
    },
  ];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        lg:py-32
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-[-250px]
            right-[-200px]
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
            bottom-[-300px]
            left-[-200px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-[#C49A55]/10
            blur-3xl
          "
        />

      </div>


      <div className="container-custom relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-16
            lg:mb-20
          "
        >

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

            {t('subtitle')}

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
            "
          >
            {t('title')}
          </h2>


          {/* Decorative line */}

          <div className="flex items-center justify-center gap-4 mt-8">

            <div
              className="
                w-14
                h-px
                bg-[#C49A55]
              "
            />

            <div
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#8f917a]
              "
            />

            <div
              className="
                w-14
                h-px
                bg-[#C49A55]
              "
            />

          </div>

        </div>


        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            lg:gap-6
          "
        >

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`
                  group
                  relative
                  bg-[#F7F3F1]
                  rounded-[26px]
                  p-7
                  sm:p-8
                  min-h-[300px]
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  border
                  border-[#5B4A46]/5
                  shadow-[0_15px_50px_rgba(60,45,40,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(60,45,40,0.12)]
                `}
              >

                {/* Decorative number */}

                <div
                  className="
                    absolute
                    top-5
                    right-6
                    text-6xl
                    font-semibold
                    text-[#5B4A46]/[0.035]
                    select-none
                    transition-all
                    duration-500
                    group-hover:text-[#C49A55]/10
                  "
                >
                  0{index + 1}
                </div>


                {/* Icon */}

                <div
                  className="
                    relative
                    w-14
                    h-14
                    rounded-2xl
                    bg-white
                    border
                    border-[#5B4A46]/10
                    flex
                    items-center
                    justify-center
                    text-[#8f917a]
                    shadow-sm
                    transition-all
                    duration-500
                    group-hover:bg-[#8f917a]
                    group-hover:text-white
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <Icon className="w-6 h-6" />
                </div>


                {/* Content */}

                <div className="relative mt-8">

                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      font-semibold
                      text-[#5B4A46]
                      mb-3
                      transition-colors
                      duration-300
                      group-hover:text-[#8f917a]
                    "
                  >
                    {service.title}
                  </h3>


                  <p
                    className="
                      text-sm
                      sm:text-base
                      leading-relaxed
                      text-[#756C68]
                      max-w-sm
                    "
                  >
                    {service.description}
                  </p>

                </div>


                {/* Bottom link */}

                <a
                  href="#contact"
                  className="
                    relative
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    w-fit
                    text-sm
                    font-medium
                    text-[#5B4A46]
                    transition-all
                    duration-300
                    group-hover:text-[#8f917a]
                  "
                >

                  <span>
                    {t('learnMore')}
                  </span>

                  <span
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-white
                      border
                      border-[#5B4A46]/10
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:bg-[#8f917a]
                      group-hover:text-white
                      group-hover:border-[#8f917a]
                    "
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>

                </a>

              </div>
            );
          })}

        </div>


        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="mt-16 lg:mt-20">

          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              bg-[#5B4A46]
              px-7
              py-12
              sm:px-12
              sm:py-14
              lg:px-16
              lg:py-16
              shadow-[0_25px_70px_rgba(60,45,40,0.18)]
            "
          >

            {/* Decorative circles */}

            <div
              className="
                absolute
                -right-24
                -top-24
                w-72
                h-72
                rounded-full
                border
                border-white/10
              "
            />

            <div
              className="
                absolute
                -right-10
                -top-10
                w-44
                h-44
                rounded-full
                border
                border-[#C49A55]/20
              "
            />

            <div
              className="
                absolute
                -left-20
                -bottom-32
                w-64
                h-64
                rounded-full
                bg-[#8f917a]/10
                blur-2xl
              "
            />


            <div
              className="
                relative
                z-10
                flex
                flex-col
                lg:flex-row
                items-start
                lg:items-center
                justify-between
                gap-10
              "
            >

              <div className="max-w-2xl">

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-5
                    text-[#C49A55]
                    text-xs
                    tracking-[0.2em]
                    uppercase
                    font-medium
                  "
                >

                  <span
                    className="
                      w-8
                      h-px
                      bg-[#C49A55]
                    "
                  />

                  {t('subtitle')}

                </div>


                <h3
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    leading-tight
                    font-medium
                    text-white
                  "
                >
                  {t('cta.title')}
                </h3>


                <p
                  className="
                    mt-5
                    text-base
                    sm:text-lg
                    leading-relaxed
                    text-white/65
                    max-w-xl
                  "
                >
                  {t('cta.desc')}
                </p>

              </div>


              {/* CTA BUTTON */}

              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  shrink-0
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-white
                  text-[#5B4A46]
                  font-medium
                  shadow-xl
                  transition-all
                  duration-300
                  hover:bg-[#8f917a]
                  hover:text-white
                  hover:-translate-y-1
                "
              >

                {t('cta.button')}

                <span
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-[#5B4A46]/10
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-white/15
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