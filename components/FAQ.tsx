"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = t.raw("items");

  return (
    <section
      id="faq"
      className="relative section-padding bg-linear-to-br from-emerald-50 via-white to-green-50"
    >
      <div className="container-custom max-w-4xl mx-auto">

  
            <SectionHeader title={t('badge')} subtitle={t('title')} description={t('description')} />
        <div className="space-y-5">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md border border-emerald-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center cursor-pointer justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {item.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}