'use client';

import { useTranslations } from 'next-intl';
import { Scissors, Sparkles, Heart, Brush, Eye, ArrowRight } from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: t('service1.title'),
      description: t('service1.desc'),
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t('service2.title'),
      description: t('service2.desc'),
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('service3.title'),
      description: t('service3.desc'),
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: t('service4.title'),
      description: t('service4.desc'),
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('service5.title'),
      description: t('service5.desc'),
      gradient: 'from-green-600 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-linear-to-br from-emerald-50 via-white to-green-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            {t('subtitle')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover-lift cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform"
              >
                {t('learnMore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] " />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('cta.title')}
              </h3>
              <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
                {t('cta.desc')}
              </p>

              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
              >
                {t('cta.button')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}