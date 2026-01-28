'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SubHeroProps {
    title: string;
    subtitle?: string;
    image?: string; // Future use for background image
}

export function SubHero({ title, subtitle = "NEWTONE" }: SubHeroProps) {
    return (
        <section className="relative w-full h-[300px] bg-[#2c2c2c] overflow-hidden flex items-center justify-center mt-[100px] md:mt-[140px]">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90" />

            <div className="relative z-10 text-center text-white space-y-4">
                <span className="block text-secondary text-xs md:text-sm font-medium tracking-[0.3em] uppercase opacity-80 animate-fade-in-up">
                    {subtitle}
                </span>
                <h1 className="font-serif text-3xl md:text-5xl tracking-widest animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {title}
                </h1>
                <div className="w-[1px] h-12 bg-secondary/50 mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }} />
            </div>
        </section>
    );
}
