"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

 const features = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: t("features.painless.title"),
    description: t("features.painless.desc"),
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: t("features.certified.title"),
    description: t("features.certified.desc"),
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: t("features.team.title"),
    description: t("features.team.desc"),
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: t("features.fast.title"),
    description: t("features.fast.desc"),
  },
];


  return (
    <section id="about" className="section-padding bg-white ">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative animate-slide-up">
            <div className="relative h-125 rounded-3xl overflow-hidden shadow-2xl">
              {/* Image Placeholder - Replace with actual image */}
              <div className="w-full h-full bg-linear-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🏥</div>
                 <p className="text-2xl font-semibold text-emerald-700">
  {t("clinic")}
</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-gray-900 text-2xl font-bold">15+</span>
                </div>
                <div>
               <div className="text-2xl font-bold text-gray-900">
  {t("experience.years")}
</div>
<div className="text-sm text-gray-600">
  {t("experience.label")}
</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              {t("badge")}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("title")}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t("description")}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group"
                >
                  <div className="shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 hover:bg-emerald-50 gradient-primary text-main rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {t("learnMore")}
              <CheckCircle className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
