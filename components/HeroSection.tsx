'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-[#fffbf7]">
            {/* Background Gradients - Light */}
            <div className="absolute inset-0 z-0 bg-[#fffbf7]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fffbf7] via-[#fffbf7]/80 to-transparent z-10" />

                {/* Right Side Image Container */}
                <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] h-full z-0 flex items-center justify-center bg-[#fdfbf7]">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#fffbf7]/10 to-[#fffbf7] z-10" />
                        {/* Product Image - Sharp and Clear */}
                        <img
                            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2671&auto=format&fit=crop"
                            alt="Newtone Hearing Aid Product"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-8 relative z-20 h-full flex items-center">
                <div className="max-w-3xl pt-20">
                    {/* Top Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-8 pl-1 flex items-center gap-4"
                    >
                        <div className="w-12 h-[1px] bg-secondary"></div>
                        <span className="text-secondary tracking-[0.4em] text-sm uppercase font-medium">
                            The Art of Listening
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="font-serif text-6xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] text-slate-800"
                    >
                        Life,<br />
                        <span className="font-light italic text-slate-500">Amplified.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-xl font-light text-slate-600 leading-relaxed max-w-lg mb-12 pl-2"
                    >
                        품격 있는 당신의 대화를 위해.<br />
                        뉴톤은 보이지 않는 곳에서 가장 선명하게 빛납니다.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="pl-2"
                    >
                        <button className="group bg-transparent border border-slate-300 text-slate-800 px-10 py-4 font-serif text-lg hover:bg-slate-800 hover:text-white transition-all duration-500 flex items-center gap-4">
                            <span>Discover Collection</span>
                            <span className="block w-0 h-[1px] bg-white group-hover:w-8 transition-all duration-500"></span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Text */}
            <div className="absolute bottom-12 left-12 text-slate-400 text-[10px] tracking-[0.3em] uppercase hidden md:block rotate-90 origin-left">
                Scroll to Explore
            </div>
        </section>
    );
}
