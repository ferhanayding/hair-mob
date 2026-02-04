'use client';

import { useTranslations } from 'next-intl';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      text: t('testimonial1.text'),
      name: t('testimonial1.name'),
      role: t('testimonial1.role'),
      rating: 5,
      image: '👨‍💼'
    },
    {
      text: t('testimonial2.text'),
      name: t('testimonial2.name'),
      role: t('testimonial2.role'),
      rating: 5,
      image: '👩‍🏫'
    },
    {
      text: t('testimonial3.text'),
      name: t('testimonial3.name'),
      role: t('testimonial3.role'),
      rating: 5,
      image: '👨‍🔧'
    }
  ];

  return (
    <section className="section-padding   bg-white">
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover-lift animate-scale-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-16 h-16 text-emerald-600" />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-b-2xl" />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: '🏆', text: 'FDA Onaylı' },
            { icon: '⭐', text: '5 Yıldız' },
            { icon: '🔒', text: 'Güvenli' },
            { icon: '✓', text: 'Garanti' }
          ].map((badge, index) => (
            <div
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <div className="font-semibold text-gray-900">{badge.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}