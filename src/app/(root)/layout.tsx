import MobileNav from '@/components/shared/MobileNav';
import SideBar from '@/components/shared/Sidebar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <SideBar />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Mobile Nav */}
        <div className="block md:hidden">
          <MobileNav />
        </div>

        {/* Main Content Area */}
        <section className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </section>
      </div>
    </main>
  );
};

export default layout;
