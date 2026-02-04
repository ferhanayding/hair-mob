'use client';

import { useTranslations } from 'next-intl';
import { Award, Users, TrendingUp, Globe } from 'lucide-react';

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: '15+',
      label: t('years'),
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '50K+',
      label: t('patients'),
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '98%',
      label: t('success'),
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: '45+',
      label: t('countries'),
      gradient: 'from-teal-500 to-emerald-600'
    }
  ];

  return (
    <section className=" section-padding gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] " />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <div className="text-main">
                  {stat.icon}
                </div>
              </div>

              <div className="text-4xl md:text-5xl font-bold text-main mb-2">
                {stat.number}
              </div>

              <div className="text-main text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-main rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-main rounded-full blur-3xl" />
    </section>
  );
}