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

    const navItems = [
        { name: '회사소개', href: '/company/greeting' },
        { name: '6대 원칙', href: '#principles' },
        { name: 'AI 피팅', href: '#ai-fitting' },
        { name: '고객후기', href: '#reviews' },
        { name: '오시는 길', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent",
                isScrolled ? "bg-white/95 backdrop-blur-md py-6 border-slate-100" : "bg-transparent py-10"
            )}
        >
            <div className="container mx-auto px-8 flex flex-col items-center">

                {/* Top Row: Logo & Actions */}
                <div className="w-full flex items-center justify-between relative mb-8">

                    {/* Left: Mobile Menu Trigger (Visible only on mobile now) */}
                    <button className="group flex items-center gap-3 md:hidden">
                        <div className={cn(
                            "w-6 h-[1px] transition-all duration-300 bg-slate-900 group-hover:w-8"
                        )} />
                    </button>

                    {/* Left Spacer for Desktop centering balance if needed, or just keep actions right */}
                    <div className="hidden md:block w-[120px]"></div>

                    {/* Center: Logo */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
                        <span className={cn(
                            "font-serif text-3xl md:text-5xl tracking-widest transition-colors duration-500 text-slate-900"
                        )}>
                            N E W T O N E
                        </span>
                        <div className={cn(
                            "h-[1px] w-0 bg-secondary mx-auto mt-1 transition-all duration-500 group-hover:w-full",
                        )} />
                    </Link>

                    {/* Right: Actions */}
                    <div className="flex items-center justify-end gap-6 w-[120px]">
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

                {/* Bottom Row: Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm tracking-wide transition-colors relative group py-1",
                                isScrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-600 hover:text-slate-900"
                            )}
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
