'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { beforeAfterCases } from '@/data/beforeAfter';

interface CaseItem {
    before: string;
    after: string;
    position?: string;
}



export default function BeforeAfterLuxury() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const cases: CaseItem[] = beforeAfterCases;
    const activeItem = activeIndex !== null ? cases[activeIndex] : null;

    const next = () => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex + 1) % cases.length);
    };

    const prev = () => {
        if (activeIndex === null) return;
        setActiveIndex(
            (activeIndex - 1 + cases.length) % cases.length
        );
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveIndex(null);
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [activeIndex]);

    return (
        <section className="section-padding bg-gray-800 to-black">
            <SectionHeader
                color="white"
                title="Before and After"
                subtitle="See the Transformation"
                description="Discover the incredible results of our hair restoration treatments." />


            <div className="container-custom">


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                            onClick={() => setActiveIndex(index)}
                        >
                            <ReactCompareSlider
                                className="w-full h-full"
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={item.before}
                                        alt="Before"
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: item.position || "center",
                                        }}
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={item.after}
                                        alt="After"
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: item.position || "center",
                                        }}
                                    />
                                }
                            />
                        </motion.div>
                    ))}
                </div>

                {/* MODAL */}
                <AnimatePresence>
                    {activeItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.85 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.85 }}
                                transition={{ duration: 0.3 }}
                                className="relative  max-w-full max-h-screen bg-white rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <div className="w-full h-screen max-h-[90vh] flex items-center justify-center ">
                                    <ReactCompareSlider
                                        // handle={<div className="w-12 h-12 bg-emerald-600 shadow-2xl rounded-full border-4 border-white" />}
                                        itemOne={
                                            <ReactCompareSliderImage
                                                src={activeItem.before}
                                                alt="Before"
                                                style={{
                                                    objectFit: "contain",
                                                    objectPosition: activeItem.position || "center",
                                                    maxHeight: "90vh",
                                                }}
                                            />
                                        }
                                        itemTwo={
                                            <ReactCompareSliderImage
                                                src={activeItem.after}
                                                alt="After"
                                                style={{
                                                    objectFit: "contain",
                                                    objectPosition: activeItem.position || "center",
                                                    maxHeight: "90vh",
                                                }}
                                            />
                                        }
                                    />
                                </div>

                                {/* CLOSE */}
                                <button
                                    onClick={() => setActiveIndex(null)}
                                    className="absolute cursor-pointer top-4 right-4 bg-white/90 p-3 rounded-full shadow-lg hover:scale-110 transition z-50"
                                >
                                    <X size={20} />
                                </button>

                                {/* NAV */}
                                <button
                                    onClick={prev}
                                    className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:scale-110 transition z-50"
                                >
                                    <ChevronLeft size={24} />
                                </button>

                                <button
                                    onClick={next}
                                    className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:scale-110 transition z-50"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}