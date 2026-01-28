'use client';

import { motion } from 'framer-motion';

const items = [
    {
        category: "Signature Manufacturing",
        title: "Technology",
        desc: "0.01mm의 오차도 허용하지 않는 장인정신으로 빚어낸 소리의 걸작, 팬텀 쉘.",
        image: "bg-slate-100" // Placeholder class
    },
    {
        category: "Global Network",
        title: "Distribution",
        desc: "전 세계를 연결하는 독보적인 인프라로 언제 어디서나 최상의 서비스를 제공합니다.",
        image: "bg-slate-200"
    },
    {
        category: "Private Concierge",
        title: "Service",
        desc: "오직 당신만을 위한 1:1 전담 케어, 생애주기에 맞춘 품격 있는 청각 솔루션.",
        image: "bg-slate-300"
    }
];

export function BusinessCards() {
    return (
        <section className="bg-[#fdfaf6] py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h3 className="text-secondary uppercase tracking-[0.3em] text-sm font-medium mb-4">Values</h3>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-900">Privilege of Newtone</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-slate-100">
                                <div className={`absolute inset-0 ${item.image} transition-transform duration-700 group-hover:scale-105`} />
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-500" />

                                {/* Number */}
                                <div className="absolute top-6 right-6 font-serif text-4xl text-slate-900/10">
                                    0{idx + 1}
                                </div>
                            </div>

                            <div className="text-center px-4">
                                <div className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">{item.category}</div>
                                <h3 className="font-serif text-3xl text-slate-900 mb-4 group-hover:text-primary/80 transition-colors">{item.title}</h3>
                                <p className="text-slate-500 font-light leading-relaxed text-sm max-w-xs mx-auto">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
