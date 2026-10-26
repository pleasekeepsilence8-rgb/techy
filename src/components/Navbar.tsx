import React, { useState } from 'react';
import { InstituteCrest, AlponaBorder } from './AlponaMotifs';
import { Menu, X, GraduationCap, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onEnquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onEnquireClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'notes', label: 'Study Notes' },
    { id: 'routine', label: 'Routine Manager' },
    { id: 'guardian', label: 'Guardian Portal' },
    { id: 'admin', label: 'Teacher Panel' },
    { id: 'about', label: 'About & Contact' },
  ];

  const handleNav = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E6DCB8] shadow-xs">
      {/* Top Bar: Strict 3-Zone Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Crest */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B83B0E] rounded-md"
        >
          <InstituteCrest size={46} className="shrink-0 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2C1D11] whitespace-nowrap leading-none group-hover:text-[#B83B0E] transition-colors">
              Techno Institute
            </span>
            <span className="font-bengali text-xs text-[#B83B0E] font-medium tracking-wide mt-1">
              টেকনো ইনস্টিটিউট · Estd. 1991
            </span>
          </div>
        </button>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3B32]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative py-1.5 whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B83B0E] rounded-sm ${
                  isActive
                    ? 'text-[#B83B0E] font-semibold'
                    : 'text-[#4A3B32] hover:text-[#B83B0E]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B83B0E] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onEnquireClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#B83B0E] hover:bg-[#9E2E09] active:bg-[#782005] rounded-md shadow-xs transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B83B0E]"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Admission 2026-27</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-[#2C1D11] hover:text-[#B83B0E] hover:bg-[#F3EBE0] rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Traditional Alpona Motif Border along base of navbar */}
      <AlponaBorder className="w-full h-3.5 opacity-80" color="#B83B0E" />

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6DCB8] bg-[#FDFBF7] px-4 pt-3 pb-5 shadow-lg space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-[#F4E8DC] text-[#B83B0E] font-semibold'
                  : 'text-[#2C1D11] hover:bg-[#F8F3EC] hover:text-[#B83B0E]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#E6DCB8]/60">
            <button
              onClick={() => {
                onEnquireClick();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B83B0E] rounded-md shadow-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Quick Admission Enquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
