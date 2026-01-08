import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { BusinessCards } from '@/components/BusinessCards';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary/30">
      <Header />
      <HeroSection />

      {/* Introduction Quote */}
      <section className="py-32 md:py-48 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl md:text-5xl text-slate-900 leading-tight mb-8">
            "진정한 기술은<br />드러나지 않습니다."
          </h3>
          <div className="w-[1px] h-20 bg-secondary mx-auto mb-8" />
          <p className="text-slate-500 font-light text-lg leading-relaxed">
            착용했다는 사실조차 잊게 만드는 편안함.<br />
            뉴톤은 당신의 품격을 조용히 지켜드립니다.
          </p>
        </div>
      </section>

      {/* Feature Section 1: Product Visual (Left) - Text (Right) */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

            {/* Visual */}
            <div className="flex-1 w-full animate-fade-in-up">
              <div className="relative aspect-[4/3] bg-white shadow-2xl shadow-slate-200/50 p-12 flex items-center justify-center">
                {/* Product Image Placeholder */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-transform duration-700 hover:scale-105" />
                <div className="relative z-10 text-center">
                  <div className="w-64 h-64 bg-[#fffbf7] border border-secondary/20 rounded-full mx-auto mb-8 flex items-center justify-center text-slate-900 font-serif text-8xl shadow-2xl shadow-slate-200">
                    N
                  </div>
                  <div className="text-slate-400 font-serif italic text-xl">The Phantom Series</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Masterpiece</div>
              <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-8 leading-tight">
                Phantom<br />Shell_
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-12 max-w-md">
                오직 당신의 귀 모양에 맞춰 설계된 100% 맞춤형 핏.<br />
                특수 나노 코팅으로 완성된 매끄러운 표면은<br />
                오랜 시간 착용해도 깃털처럼 가볍습니다.
              </p>

              <ul className="space-y-6 border-l border-slate-200 pl-8">
                <li className="flex flex-col">
                  <span className="font-serif text-3xl text-slate-900 mb-1">0.01mm</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Precision Fit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Text (Left) - Visual (Right) - Lifestyle Focus */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

            {/* Text */}
            <div className="flex-1 order-2 lg:order-1 lg:text-right flex flex-col items-end">
              <div className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Lifestyle</div>
              <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-8 leading-tight">
                Clear<br />Moment_
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-12 max-w-md">
                소중한 사람과의 대화, 클래식 공연장의 선율.<br />
                뉴톤의 AI 사운드 프로세싱은 소음을 제거하고<br />
                당신이 듣고 싶은 소리만을 선명하게 정제합니다.
              </p>

              <ul className="space-y-6 border-r border-slate-200 pr-8">
                <li className="flex flex-col">
                  <span className="font-serif text-3xl text-slate-900 mb-1">AI Chip</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Noise Cancellation</span>
                </li>
              </ul>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BusinessCards />

      {/* Footer: Minimal Luxury Light */}
      <footer className="bg-[#fffbf7] text-slate-900 py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <div className="font-serif text-3xl tracking-widest mb-12 text-secondary">N E W T O N E</div>

          <div className="flex flex-wrap justify-center gap-12 text-sm text-slate-500 font-medium uppercase tracking-wider mb-16">
            <a href="#" className="hover:text-secondary transition-colors">Our Story</a>
            <a href="#" className="hover:text-secondary transition-colors">The Collection</a>
            <a href="#" className="hover:text-secondary transition-colors">Private Lounge</a>
            <a href="#" className="hover:text-secondary transition-colors">Contact</a>
          </div>

          <div className="text-xs text-slate-400 font-light">
            &copy; 2026 Newtone Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
