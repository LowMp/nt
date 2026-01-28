import { SubHero } from '@/components/SubHero';
import { Sidebar } from '@/components/Sidebar';

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#fdfaf6] min-h-screen">
            {/* 1. Banner below header */}
            <SubHero title="COMPANY" subtitle="NEWTONE" />

            {/* 2. Main Content Area with Sidebar */}
            <div className="container mx-auto px-8 py-20 flex flex-col md:flex-row gap-12 lg:gap-20">
                {/* Left Side: Sidebar */}
                <Sidebar />

                {/* Right Side: Page Content */}
                <main className="flex-1 min-w-0">
                    {children}
                </main>
            </div>
        </div>
    );
}
