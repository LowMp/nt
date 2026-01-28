'use client';

import { motion } from 'framer-motion';

export default function GreetingPage() {
    return (
        <div className="space-y-12 text-slate-700 leading-relaxed font-light text-lg">

            {/* Page Title / Philosophy Header - Optional inside content or just start with content */}
            <div className="text-center md:text-left mb-16 space-y-4">
                <span className="block text-secondary text-sm font-medium tracking-[0.2em] uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Philosophy
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    진정한 기술은<br />
                    <span className="italic text-slate-500">드러나지 않습니다.</span>
                </h2>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-serif text-2xl text-slate-900 mb-6">
                    품격 있는 당신의 삶을 위하여,<br />
                    NEWTONE을 시작합니다.
                </h3>
                <p className="mb-6">
                    안녕하십니까, NEWTONE 대표입니다.
                </p>
                <p className="mb-6">
                    저는 지난 30여 년간 소리를 다루는 장인들의 곁에서, 보청기가 단순한 의료기기가 아닌
                    한 사람의 인생을 다시 연결하는 중요한 매개체임을 배우며 자랐습니다.
                    들리지 않던 소리가 들리게 될 때의 그 벅찬 감동과, 다시 대화가 이어질 때의 안도감을
                    수없이 목격하며 NEWTONE의 철학을 완성했습니다.
                </p>
            </div>

            <div className="w-full h-[1px] bg-slate-200 my-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }} />

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="mb-6">
                    NEWTONE은 <strong>'보이지 않는 곳에서 가장 빛나는 기술'</strong>을 지향합니다.
                </p>
                <p className="mb-6">
                    우리는 단순히 소리를 증폭시키는 것을 넘어, 사용자의 품격을 지키고 삶의 질을 높이는 데 집중합니다.
                    100% 맞춤형으로 제작되는 Phantom Shell은 착용했다는 사실조차 잊게 만드는 편안함을 제공하며,
                    독자적인 AI Sound Processing 기술은 소음 속에서도 당신이 원하는 목소리만을 선명하게 정제해냅니다.
                </p>
                <p className="mb-6">
                    우리의 기술은 겉으로 드러나지 않습니다. 다만 당신의 일상 속에서 조용히, 그리고 완벽하게 작동할 것입니다.
                    NEWTONE은 기술을 앞세우기보다 사람을 먼저 생각하는 마음으로,
                    당신의 삶 속에 오래도록 남는 가치를 전해드리겠습니다.
                </p>
                <p>
                    감사합니다.
                </p>
            </div>

            <div className="pt-12 text-right animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <p className="font-serif text-xl text-slate-900 mb-2">NEWTONE CEO</p>
                <div className="font-script text-3xl text-secondary">Signature</div>
            </div>

        </div>
    );
}
