'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, Search } from 'lucide-react';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent",
                isScrolled ? "bg-white/95 backdrop-blur-md py-4 border-slate-100" : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto px-8 flex items-center justify-between">

                {/* Left: Menu Trigger (Luxury Hamburger) */}
                <button className="group flex items-center gap-3">
                    <div className={cn(
                        "w-8 h-[1px] transition-all duration-300 bg-slate-900 group-hover:w-12"
                    )} />
                    <span className={cn(
                        "tracking-widest text-xs uppercase font-medium transition-colors hidden md:block text-slate-800"
                    )}>Menu</span>
                </button>

                {/* Center: Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
                    <span className={cn(
                        "font-serif text-3xl md:text-4xl tracking-widest transition-colors duration-500 text-slate-900"
                    )}>
                        N E W T O N E
                    </span>
                    <div className={cn(
                        "h-[2px] w-0 bg-secondary mx-auto mt-1 transition-all duration-500 group-hover:w-full",
                    )} />
                </Link>

                {/* Right: Actions */}
                <div className="flex items-center gap-6">
                    <button className={cn(
                        "tracking-widest text-xs uppercase font-medium transition-colors hidden md:block",
                        isScrolled ? "text-slate-900 hover:text-secondary" : "text-slate-900/800 hover:text-secondary"
                    )}>
                        Concierge
                    </button>
                    <button className={cn(
                        "transition-colors",
                        isScrolled ? "text-slate-900" : "text-slate-900/800"
                    )}>
                        <Search className="w-5 h-5 stroke-[1.5]" />
                    </button>
                </div>
            </div>
        </header>
    );
}
