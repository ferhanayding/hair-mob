'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const t = useTranslations('contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = t('whatsappMessage', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    });

    const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-linear-to-br from-emerald-50 via-white to-green-50"
    >
      <div className="container-custom">

        
        <SectionHeader title={t('title')} subtitle={t('subtitle')} /> 
      
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CONTACT INFO */}
          <div className="space-y-8">

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('infoTitle')}
              </h3>

              <div className="space-y-6">

                {/* PHONE */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {t('phoneLabel')}
                    </div>
                    <a
                      href={`tel:${contactInfo.phoneRaw}`}
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {t('emailLabel')}
                    </div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {t('addressLabel')}
                    </div>
                    <p className="text-gray-600">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* WORKING HOURS */}
            <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                {t('hours.title')}
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>{t('hours.weekdays')}</span>
                  <span className="font-semibold">
                    {t('hours.weekdaysTime')}
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>{t('hours.saturday')}</span>
                  <span className="font-semibold">
                    {t('hours.saturdayTime')}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>{t('hours.sunday')}</span>
                  <span className="font-semibold">
                    {t('hours.closed')}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* FORM */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('placeholders.name')}
                  className="w-full px-4 py-3 bg-gray-50 border rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('placeholders.email')}
                  className="w-full px-4 py-3 bg-gray-50 border rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 968 474 00 03"
                  className="w-full px-4 py-3 bg-gray-50 border rounded-lg"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t('placeholders.message')}
                  className="w-full px-4 py-3 bg-gray-50 border rounded-lg resize-none"
                />

                <button
                  type="submit"
                  className="group relative cursor-pointer w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    {t('send')}
                  </span>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
