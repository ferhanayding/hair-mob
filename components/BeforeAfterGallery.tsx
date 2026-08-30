'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";
import {
    X,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { beforeAfterCases } from "@/data/beforeAfter";

interface CaseItem {
    before: string;
    after: string;
    position?: string;
    age?: string;
    grafts?: string;
    method?: string;
}

export default function BeforeAfterLuxury() {
    const t = useTranslations("beforeAfter");

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const cases: CaseItem[] = beforeAfterCases;

    const activeItem =
        activeIndex !== null ? cases[activeIndex] : null;

    const next = () => {
        if (activeIndex === null) return;

        setActiveIndex(
            (activeIndex + 1) % cases.length
        );
    };

    const prev = () => {
        if (activeIndex === null) return;

        setActiveIndex(
            (activeIndex - 1 + cases.length) % cases.length
        );
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null);
            }

            if (e.key === "ArrowRight") {
                next();
            }

            if (e.key === "ArrowLeft") {
                prev();
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, [activeIndex]);

    return (
        <section
            id="before-after"
            className="
                relative
                overflow-hidden
                bg-[#F7F3F1]
                py-24
                lg:py-32
            "
        >

            {/* =====================================================
                BACKGROUND DECORATION
            ====================================================== */}

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
                        bottom-[-300px]
                        left-[-200px]
                        w-[600px]
                        h-[600px]
                        rounded-full
                        bg-[#C49A55]/10
                        blur-3xl
                    "
                />

                {/* İnce dekoratif çizgi */}
                <div
                    className="
                        absolute
                        top-1/2
                        left-0
                        w-[30%]
                        h-px
                        bg-[#5B4A46]/10
                    "
                />

            </div>


            {/* =====================================================
                MAIN
            ====================================================== */}

            <div
                className="
                    container-custom
                    relative
                    z-10
                "
            >

                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-[0.75fr_1.25fr]
                        gap-12
                        lg:gap-16
                        items-center
                    "
                >

                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="relative">

                        {/* Small label */}

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
                            <Sparkles className="w-4 h-4 text-[#C49A55]" />

                            {t("subtitle")}
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
                            {t("title")}
                        </h2>


                        {/* Description */}

                        <p
                            className="
                                mt-7
                                max-w-md
                                text-base
                                sm:text-lg
                                leading-relaxed
                                text-[#6E6561]
                            "
                        >
                            Gerçek hastalarımızdan elde edilen
                            doğal saç ekimi sonuçlarını inceleyin.
                            Her vaka, doğru planlama ve kişiye özel
                            uygulamanın sonucunu gösteriyor.
                        </p>


                        {/* Decorative line */}

                        <div className="flex items-center gap-4 mt-10">

                            <div
                                className="
                                    w-14
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
                                    font-medium
                                "
                            >
                                {t("before")} / {t("after")}
                            </span>

                        </div>


                        {/* Scroll hint */}

                        <div
                            className="
                                hidden
                                lg:flex
                                items-center
                                gap-3
                                mt-14
                                text-sm
                                text-[#8f917a]
                            "
                        >
                            <div
                                className="
                                    w-10
                                    h-10
                                    rounded-full
                                    border
                                    border-[#8f917a]/30
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <ArrowUpRight className="w-4 h-4" />
                            </div>

                            <span>
                                Sonuçları keşfedin
                            </span>
                        </div>

                    </div>


                    {/* =================================================
                        RIGHT SIDE — HORIZONTAL SCROLL
                    ================================================= */}

                    <div className="relative min-w-0">

                        {/* Fade on right */}

                        <div
                            className="
                                absolute
                                right-0
                                top-0
                                bottom-0
                                w-20
                                bg-gradient-to-l
                                from-[#F7F3F1]
                                to-transparent
                                z-20
                                pointer-events-none
                            "
                        />


                        <div
                            className="
                                flex
                                gap-5
                                overflow-x-auto
                                pb-8
                                pr-8
                                snap-x
                                snap-mandatory
                                scrollbar-hide
                            "
                        >

                            {cases.map((item, index) => (

                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        margin: "-80px",
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    onClick={() =>
                                        setActiveIndex(index)
                                    }
                                    className="
                                        group
                                        relative
                                        shrink-0
                                        w-[280px]
                                        sm:w-[320px]
                                        lg:w-[350px]
                                        snap-start
                                        cursor-pointer
                                    "
                                >

                                    {/* IMAGE CARD */}

                                    <div
                                        className="
                                            relative
                                            aspect-[4/5]
                                            overflow-hidden
                                            rounded-[26px]
                                            bg-white
                                            shadow-[0_20px_60px_rgba(60,45,40,0.15)]
                                            ring-1
                                            ring-[#5B4A46]/5
                                        "
                                    >

                                        <ReactCompareSlider
                                            className="w-full h-full"
                                            itemOne={
                                                <ReactCompareSliderImage
                                                    src={item.before}
                                                    alt={t("beforePhoto")}
                                                    style={{
                                                        objectFit: "cover",
                                                        objectPosition:
                                                            item.position ||
                                                            "center",
                                                    }}
                                                />
                                            }
                                            itemTwo={
                                                <ReactCompareSliderImage
                                                    src={item.after}
                                                    alt={t("afterPhoto")}
                                                    style={{
                                                        objectFit: "cover",
                                                        objectPosition:
                                                            item.position ||
                                                            "center",
                                                    }}
                                                />
                                            }
                                        />


                                        {/* TOP LABEL */}

                                        <div
                                            className="
                                                absolute
                                                top-4
                                                left-4
                                                right-4
                                                z-20
                                                flex
                                                justify-between
                                                items-center
                                                pointer-events-none
                                            "
                                        >

                                            <div
                                                className="
                                                    px-3
                                                    py-1.5
                                                    rounded-full
                                                    bg-black/45
                                                    backdrop-blur-md
                                                    text-white
                                                    text-[10px]
                                                    tracking-[0.12em]
                                                    font-medium
                                                "
                                            >
                                                {t("before")}
                                                {" / "}
                                                {t("after")}
                                            </div>


                                            <div
                                                className="
                                                    w-9
                                                    h-9
                                                    rounded-full
                                                    bg-white/90
                                                    backdrop-blur-md
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-[#5B4A46]
                                                    shadow-lg
                                                    transition-transform
                                                    duration-300
                                                    group-hover:scale-110
                                                "
                                            >
                                                <ArrowUpRight
                                                    className="w-4 h-4"
                                                />
                                            </div>

                                        </div>


                                        {/* BOTTOM GRADIENT */}

                                        <div
                                            className="
                                                absolute
                                                inset-x-0
                                                bottom-0
                                                h-32
                                                bg-gradient-to-t
                                                from-black/40
                                                to-transparent
                                                pointer-events-none
                                            "
                                        />

                                    </div>






                                </motion.div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                MODAL
            ====================================================== */}

            <AnimatePresence>

                {activeItem && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            fixed
                            inset-0
                            z-[100]
                            bg-[#171717]/90
                            backdrop-blur-xl
                            flex
                            items-center
                            justify-center
                            p-3
                            sm:p-6
                        "
                        onClick={() => setActiveIndex(null)}
                    >

                        <motion.div
                            initial={{
                                scale: 0.92,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            exit={{
                                scale: 0.92,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="
                                relative
                                w-full
                                max-w-6xl
                                h-[90vh]
                                bg-[#F7F3F1]
                                rounded-[26px]
                                overflow-hidden
                                shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                            "
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                        >

                            {/* IMAGE */}

                            <div
                                className="
                                    w-full
                                    h-full
                                    flex
                                    items-center
                                    justify-center
                                    p-3
                                    sm:p-6
                                "
                            >

                                <ReactCompareSlider
                                    className="
                                        w-full
                                        h-full
                                        rounded-2xl
                                        overflow-hidden
                                    "
                                    itemOne={
                                        <ReactCompareSliderImage
                                            src={activeItem.before}
                                            alt={t("beforePhoto")}
                                            style={{
                                                objectFit: "contain",
                                                objectPosition:
                                                    activeItem.position ||
                                                    "center",
                                                maxHeight: "100%",
                                            }}
                                        />
                                    }
                                    itemTwo={
                                        <ReactCompareSliderImage
                                            src={activeItem.after}
                                            alt={t("afterPhoto")}
                                            style={{
                                                objectFit: "contain",
                                                objectPosition:
                                                    activeItem.position ||
                                                    "center",
                                                maxHeight: "100%",
                                            }}
                                        />
                                    }
                                />

                            </div>


                            {/* CLOSE */}

                            <button
                                onClick={() =>
                                    setActiveIndex(null)
                                }
                                className="
                                    absolute
                                    top-4
                                    right-4
                                    z-50
                                    w-11
                                    h-11
                                    rounded-full
                                    bg-white/95
                                    text-[#5B4A46]
                                    flex
                                    items-center
                                    justify-center
                                    shadow-xl
                                    transition-all
                                    hover:scale-110
                                    cursor-pointer
                                "
                            >
                                <X className="w-5 h-5" />
                            </button>


                            {/* PREVIOUS */}

                            <button
                                onClick={prev}
                                className="
                                    absolute
                                    left-3
                                    sm:left-5
                                    top-1/2
                                    -translate-y-1/2
                                    z-50
                                    w-11
                                    h-11
                                    rounded-full
                                    bg-white/95
                                    text-[#5B4A46]
                                    flex
                                    items-center
                                    justify-center
                                    shadow-xl
                                    transition-all
                                    hover:scale-110
                                    cursor-pointer
                                "
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>


                            {/* NEXT */}

                            <button
                                onClick={next}
                                className="
                                    absolute
                                    right-3
                                    sm:right-5
                                    top-1/2
                                    -translate-y-1/2
                                    z-50
                                    w-11
                                    h-11
                                    rounded-full
                                    bg-white/95
                                    text-[#5B4A46]
                                    flex
                                    items-center
                                    justify-center
                                    shadow-xl
                                    transition-all
                                    hover:scale-110
                                    cursor-pointer
                                "
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>


                            {/* COUNTER */}

                            <div
                                className="
                                    absolute
                                    bottom-5
                                    left-1/2
                                    -translate-x-1/2
                                    z-50
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-black/60
                                    backdrop-blur-md
                                    text-white
                                    text-xs
                                    font-medium
                                "
                            >
                                {(activeIndex ?? 0) + 1}
                                {" / "}
                                {cases.length}
                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>
    );
}