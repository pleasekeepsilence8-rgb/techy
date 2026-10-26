import React from 'react';
import { AlponaBorder, InstituteCrest, AlponaMandala } from './AlponaMotifs';
import { MapPin, Phone, Mail, Clock, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24170E] text-[#E8DFD8] relative overflow-hidden border-t-4 border-[#B83B0E]">
      {/* Subtle Alpona Mandala watermark in background */}
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-5">
        <AlponaMandala className="w-96 h-96" color="#D4AC0D" opacity={1} />
      </div>
      <div className="absolute -top-16 -right-16 pointer-events-none opacity-5">
        <AlponaMandala className="w-96 h-96" color="#B83B0E" opacity={1} />
      </div>

      {/* Traditional Alpona Header Border atop footer */}
      <AlponaBorder className="w-full h-4 opacity-75" color="#D4AC0D" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#3D291C]">
          {/* Column 1: Crest & About (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <InstituteCrest size={46} />
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white block">
                  Techno Institute
                </span>
                <span className="font-bengali text-xs text-amber-300 font-medium">
                  টেকনো ইনস্টিটিউট · Estd. 1991
                </span>
              </div>
            </div>

            <p className="text-xs text-[#C5B7AC] leading-relaxed max-w-sm">
              Premier academic coaching institution for CBSE, ICSE, and WBCHSE boards (Classes 5–12). Dedicated to cultivating intellectual rigor, scientific inquiry, and cultural excellence in Bengal.
            </p>

            <div className="font-bengali text-xs text-amber-300 font-semibold pt-1">
              &ldquo;বিদ্যোৎসাহী শিক্ষার্থীদের ভবিষ্যৎ গড়ার প্রতিষ্ঠান&rdquo;
            </div>

            <div className="pt-2 text-[11px] text-[#A6978B] flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#D4AC0D]" />
              <span>Affiliated Educational Coaching Center (Reg. No: WB-EDU-1991-042)</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 font-classical">
              Portals &amp; Academics
            </div>
            <ul className="space-y-2 text-xs text-[#C5B7AC]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home &amp; Admissions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('notes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study Notes Repository (CBSE / ICSE / WB)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('routine')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Weekly Routine &amp; Exam Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guardian')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Guardian Portal (Ward Progress)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admin')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Teacher &amp; Faculty Console
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Faculty &amp; Location Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 font-classical">
              College Street Campus
            </div>

            <div className="space-y-2 text-xs text-[#C5B7AC]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B83B0E] shrink-0 mt-0.5" />
                <span>14/2 College Street, Academic Corridor, Kolkata 700073 (Opp. Presidency University)</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AC0D] shrink-0" />
                <span>+91 (033) 2241-9088 / +91 98301-24789</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1E7E44] shrink-0" />
                <span>desk@technoinstitute.edu.in</span>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-[#3D291C]">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Operating Hours:</span>
                  <span>Mon&ndash;Sat: 7:30 AM &ndash; 8:30 PM<br />Sun: 8:00 AM &ndash; 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A796C] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Techno Institute. All Rights Reserved. Crafted with traditional Bengali aesthetic heritage.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Traditional Alpona Inverted Border along bottom */}
      <AlponaBorder className="w-full h-3 opacity-50" color="#B83B0E" inverted={true} />
    </footer>
  );
};
