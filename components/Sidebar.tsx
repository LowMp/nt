'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

const menuItems = [
    { name: '인사말', href: '/company/greeting' },
    { name: '브랜드 스토리', href: '/company/story' }, // Placeholder
    { name: '오시는 길', href: '/company/location' }, // Placeholder
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full md:w-[240px] shrink-0">
            <div className="sticky top-32">
                <h3 className="font-serif text-xl text-slate-900 mb-8 pb-4 border-b border-slate-200">
                    Company
                </h3>
                <nav className="flex flex-col space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "group flex items-center justify-between py-3 px-2 text-sm transition-all duration-300",
                                    isActive
                                        ? "text-slate-900 font-medium bg-slate-50"
                                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50/50"
                                )}
                            >
                                <span className={cn(
                                    "tracking-wide",
                                    isActive && "text-slate-900"
                                )}>
                                    {item.name}
                                </span>
                                <ChevronRight className={cn(
                                    "w-3 h-3 transition-transform duration-300 opacity-0 -translate-x-2",
                                    (isActive || "group-hover:opacity-100 group-hover:translate-x-0") && "opacity-100 translate-x-0"
                                )} />
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
