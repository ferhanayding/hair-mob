"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";
import { contactInfo } from "@/data/contact";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setIsSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setSent(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error(error);

      setError(
        "Mesaj gönderilemedi. Lütfen tekrar deneyin."
      );

    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#F7F3F1]
        py-24
        lg:py-32
      "
    >

      {/* Background */}

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


      <div className="container-custom relative z-10">

        {/* Header */}

        <div className="max-w-3xl mx-auto mb-14">

          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
          />

        </div>


        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.8fr_1.2fr]
            gap-8
            lg:gap-12
            max-w-6xl
            mx-auto
          "
        >

          {/* =====================================================
              LEFT
          ====================================================== */}

          <div className="space-y-5">

            {/* Contact info */}

            <div
              className="
                bg-white
                rounded-[26px]
                p-7
                sm:p-8
                shadow-[0_20px_60px_rgba(60,45,40,0.08)]
                border
                border-[#5B4A46]/5
              "
            >

              <div className="flex items-center gap-3 mb-8">

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-[#8f917a]/10
                    flex
                    items-center
                    justify-center
                    text-[#8f917a]
                  "
                >
                  <Mail className="w-5 h-5" />
                </div>

                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-[#5B4A46]
                  "
                >
                  {t("infoTitle")}
                </h3>

              </div>


              <div className="space-y-7">

                {/* Phone */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[#F7F3F1]
                      flex
                      items-center
                      justify-center
                      text-[#8f917a]
                      shrink-0
                    "
                  >
                    <Phone className="w-5 h-5" />
                  </div>

                  <div>

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-wider
                        text-[#8f917a]
                        mb-1
                      "
                    >
                      {t("phoneLabel")}
                    </div>

                    <a
                      href={`tel:${contactInfo.phoneRaw}`}
                      className="
                        text-[#5B4A46]
                        font-medium
                        hover:text-[#8f917a]
                        transition-colors
                      "
                    >
                      {contactInfo.phone}
                    </a>

                  </div>

                </div>


                {/* Email */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[#F7F3F1]
                      flex
                      items-center
                      justify-center
                      text-[#8f917a]
                      shrink-0
                    "
                  >
                    <Mail className="w-5 h-5" />
                  </div>

                  <div>

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-wider
                        text-[#8f917a]
                        mb-1
                      "
                    >
                      {t("emailLabel")}
                    </div>

                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="
                        text-[#5B4A46]
                        font-medium
                        break-all
                        hover:text-[#8f917a]
                        transition-colors
                      "
                    >
                      {contactInfo.email}
                    </a>

                  </div>

                </div>


                {/* Address */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[#F7F3F1]
                      flex
                      items-center
                      justify-center
                      text-[#8f917a]
                      shrink-0
                    "
                  >
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-wider
                        text-[#8f917a]
                        mb-1
                      "
                    >
                      {t("addressLabel")}
                    </div>

                    <p className="text-[#5B4A46] font-medium">
                      {contactInfo.address}
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Working hours */}

            <div
              className="
                rounded-[26px]
                bg-[#5B4A46]
                p-7
                sm:p-8
                text-white
                shadow-[0_20px_60px_rgba(60,45,40,0.15)]
              "
            >

              <div className="flex items-center gap-3 mb-7">

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    text-[#C49A55]
                  "
                >
                  <Clock className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-semibold">
                  {t("hours.title")}
                </h3>

              </div>


              <div className="space-y-4">

                <div
                  className="
                    flex
                    justify-between
                    gap-4
                    pb-3
                    border-b
                    border-white/10
                    text-sm
                  "
                >
                  <span className="text-white/60">
                    {t("hours.weekdays")}
                  </span>

                  <span className="font-medium">
                    {t("hours.weekdaysTime")}
                  </span>
                </div>


                <div
                  className="
                    flex
                    justify-between
                    gap-4
                    pb-3
                    border-b
                    border-white/10
                    text-sm
                  "
                >
                  <span className="text-white/60">
                    {t("hours.saturday")}
                  </span>

                  <span className="font-medium">
                    {t("hours.saturdayTime")}
                  </span>
                </div>


                <div
                  className="
                    flex
                    justify-between
                    gap-4
                    text-sm
                  "
                >
                  <span className="text-white/60">
                    {t("hours.sunday")}
                  </span>

                  <span className="font-medium">
                    {t("hours.closed")}
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              FORM
          ====================================================== */}

          <div>

            <form
              onSubmit={handleSubmit}
              className="
                bg-white
                rounded-[26px]
                p-7
                sm:p-9
                lg:p-10
                shadow-[0_20px_60px_rgba(60,45,40,0.08)]
                border
                border-[#5B4A46]/5
              "
            >

              <div className="mb-8">

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-[#5B4A46]
                  "
                >
                  {t("title")}
                </h3>

              </div>


              <div className="space-y-5">

                {/* Name */}

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t("placeholders.name")}
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-[#F7F3F1]
                    border
                    border-transparent
                    outline-none
                    text-[#5B4A46]
                    placeholder:text-[#9A908B]
                    transition-all
                    focus:bg-white
                    focus:border-[#8f917a]/40
                    focus:ring-4
                    focus:ring-[#8f917a]/10
                  "
                />


                {/* Email */}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t("placeholders.email")}
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-[#F7F3F1]
                    border
                    border-transparent
                    outline-none
                    text-[#5B4A46]
                    placeholder:text-[#9A908B]
                    transition-all
                    focus:bg-white
                    focus:border-[#8f917a]/40
                    focus:ring-4
                    focus:ring-[#8f917a]/10
                  "
                />


                {/* Phone */}

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 968 474 00 03"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-[#F7F3F1]
                    border
                    border-transparent
                    outline-none
                    text-[#5B4A46]
                    placeholder:text-[#9A908B]
                    transition-all
                    focus:bg-white
                    focus:border-[#8f917a]/40
                    focus:ring-4
                    focus:ring-[#8f917a]/10
                  "
                />


                {/* Service */}

                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder={t("placeholders.service")}
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-[#F7F3F1]
                    border
                    border-transparent
                    outline-none
                    text-[#5B4A46]
                    placeholder:text-[#9A908B]
                    transition-all
                    focus:bg-white
                    focus:border-[#8f917a]/40
                    focus:ring-4
                    focus:ring-[#8f917a]/10
                  "
                />


                {/* Message */}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder={t("placeholders.message")}
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-[#F7F3F1]
                    border
                    border-transparent
                    outline-none
                    resize-none
                    text-[#5B4A46]
                    placeholder:text-[#9A908B]
                    transition-all
                    focus:bg-white
                    focus:border-[#8f917a]/40
                    focus:ring-4
                    focus:ring-[#8f917a]/10
                  "
                />


                {/* Success */}

                {sent && (
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      p-4
                      rounded-xl
                      bg-[#8f917a]/10
                      text-[#5B4A46]
                      text-sm
                    "
                  >
                    <CheckCircle className="w-5 h-5 text-[#8f917a]" />
                    Mesajınız başarıyla gönderildi.
                  </div>
                )}


                {/* Error */}

                {error && (
                  <div
                    className="
                      p-4
                      rounded-xl
                      bg-red-50
                      text-red-600
                      text-sm
                    "
                  >
                    {error}
                  </div>
                )}


                {/* Submit */}

                <button
                  type="submit"
                  disabled={isSending}
                  className="
                    group
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-8
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
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                    disabled:hover:translate-y-0
                  "
                >

                  <Send
                    className="
                      w-5
                      h-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  {isSending
                    ? "Gönderiliyor..."
                    : t("send")}

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}