'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function BeforeAfter() {
  const t = useTranslations('beforeAfter');
  const [activeIndex, setActiveIndex] = useState(0);

  const cases = [
    {
      before: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
      after: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
      age: '32',
      grafts: '4500',
      method: 'Sapphire FUE'
    },
    {
      before: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
      after: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
      age: '28',
      grafts: '3800',
      method: 'DHI Plus'
    },
    {
      before: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
      after: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
      age: '35',
      grafts: '5200',
      method: 'Sapphire FUE'
    },
    {
      before: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
      after: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
      age: '29',
      grafts: '4000',
      method: 'DHI Plus'
    }
  ];

  return (
    <section id="before-after" className="section-padding  bg-linear-to-br from-gray-50 to-emerald-50">
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

        <div className="max-w-5xl mx-auto mb-12 animate-scale-in">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📷</div>
                    <p className="text-xl font-semibold text-gray-600">  {t('beforePhoto')}
</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                  {t('before')}
                </div>
              </div>

              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-xl font-semibold text-emerald-600">  {t('afterPhoto')}
</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold">
                  {t('after')}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-r from-emerald-600 to-green-600">
              <div className="grid grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-3xl font-bold mb-1">{cases[activeIndex].age}</div>
                  <div className="text-emerald-100 text-sm"> {t('stats.age')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">{cases[activeIndex].grafts}</div>
                  <div className="text-emerald-100 text-sm">  {t('stats.grafts')}
</div>
                </div>
                <div>
                  <div className="text-lg font-bold mb-1">{cases[activeIndex].method}</div>
                  <div className="text-emerald-100 text-sm">  {t('stats.method')}
</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {cases.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square rounded-2xl overflow-hidden transition-all hover-lift ${
                activeIndex === index ? 'ring-4 ring-emerald-600' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-200 flex items-center justify-center">
                <div className="text-4xl">🧑</div>
              </div>
              {activeIndex === index && (
                <div className="absolute inset-0 bg-emerald-600/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">  {t('cta.text')}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 gradient-primary text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
          >
         {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}