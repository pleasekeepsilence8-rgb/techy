import React, { useState } from 'react';
import { AlponaDivider, AlponaMandala } from './AlponaMotifs';
import { BookOpen, Calendar, Award, CheckCircle2, Send, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  enquiryModalOpen: boolean;
  setEnquiryModalOpen: (open: boolean) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  enquiryModalOpen: _enquiryModalOpen,
  setEnquiryModalOpen: _setEnquiryModalOpen,
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianPhone: '',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    preferredStream: 'Science & All Subjects',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.guardianPhone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      // Auto reset after 6 seconds
      setFormSubmitted(false);
      setFormData({
        studentName: '',
        guardianPhone: '',
        board: 'WBCHSE',
        classLevel: 'Class 10',
        preferredStream: 'Science & All Subjects',
      });
    }, 6000);
  };

  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#E6DCB8]">
      {/* Decorative background Alpona mandalas */}
      <div className="absolute -top-12 -left-12 pointer-events-none opacity-20">
        <AlponaMandala className="w-96 h-96" color="#B83B0E" opacity={0.18} />
      </div>
      <div className="absolute -bottom-16 -right-16 pointer-events-none opacity-20">
        <AlponaMandala className="w-80 h-80" color="#D4AC0D" opacity={0.25} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bengali Tagline Kicker with Cultural Styling */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="font-bengali text-lg sm:text-2xl font-bold text-[#B83B0E] tracking-normal mb-2">
            “বিদ্যোৎসাহী শিক্ষার্থীদের ভবিষ্যৎ গড়ার প্রতিষ্ঠান”
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1D11] tracking-tight leading-tight text-balance">
            Nurturing Scholastic Brilliance Across CBSE, ICSE &amp; WBCHSE
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5A4738] max-w-2xl mx-auto leading-relaxed">
            Kolkata’s revered coaching sanctum for Class 5 to Class 12. Grounded in profound pedagogical traditions, individual mentorship, and rigorous board exam mastery.
          </p>
          <AlponaDivider className="my-5" color="#B83B0E" />
        </div>

        {/* 2-Column Split: Visual Campus & Quick Admission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
          {/* Left Column: Campus Photo & Quick CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#F8F4ED] rounded-2xl border border-[#E6DCB8] p-4 sm:p-6 shadow-xs relative overflow-hidden">
            <div className="relative rounded-xl overflow-hidden aspect-video border border-[#E0D4B2] shadow-inner mb-6 group">
              <img
                src="/src/assets/images/hero_bengali_academy_1792993521545.jpg"
                alt="Techno Institute heritage Kolkata coaching center facade"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1D11]/85 via-[#2C1D11]/25 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                <div className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                  Academic Headquarters · College Street Corridor
                </div>
                <h2 className="text-lg sm:text-xl font-bold font-display text-white mt-1">
                  Classical Heritage Meets Modern Scientific Pedagogy
                </h2>
                <p className="text-xs sm:text-sm text-stone-200 mt-1 line-clamp-2">
                  Air-conditioned smart halls, physical science experimental wings, and dedicated faculty rooms.
                </p>
              </div>
            </div>

            {/* Quick Portal Switcher CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => onNavigate('notes')}
                className="flex items-center gap-3 p-3.5 bg-white hover:bg-[#FBEFEA] border border-[#E6DCB8] hover:border-[#B83B0E] rounded-xl text-left transition-all group shadow-xs cursor-pointer"
              >
                <div className="p-2 bg-[#F7EBE3] text-[#B83B0E] rounded-lg group-hover:bg-[#B83B0E] group-hover:text-white transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2C1D11] group-hover:text-[#B83B0E]">
                    Study Notes
                  </div>
                  <div className="text-[11px] text-[#7A695B]">
                    CBSE / ICSE / WB
                  </div>
                </div>
              </button>

              <button
                onClick={() => onNavigate('routine')}
                className="flex items-center gap-3 p-3.5 bg-white hover:bg-[#FBEFEA] border border-[#E6DCB8] hover:border-[#B83B0E] rounded-xl text-left transition-all group shadow-xs cursor-pointer"
              >
                <div className="p-2 bg-[#FBF3D9] text-[#9A7D0A] rounded-lg group-hover:bg-[#D4AC0D] group-hover:text-white transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2C1D11] group-hover:text-[#B83B0E]">
                    Live Routine
                  </div>
                  <div className="text-[11px] text-[#7A695B]">
                    Weekly &amp; Exams
                  </div>
                </div>
              </button>

              <button
                onClick={() => onNavigate('guardian')}
                className="flex items-center gap-3 p-3.5 bg-white hover:bg-[#FBEFEA] border border-[#E6DCB8] hover:border-[#B83B0E] rounded-xl text-left transition-all group shadow-xs cursor-pointer"
              >
                <div className="p-2 bg-[#E7F3EC] text-[#1E7E44] rounded-lg group-hover:bg-[#1E7E44] group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2C1D11] group-hover:text-[#B83B0E]">
                    Guardian Portal
                  </div>
                  <div className="text-[11px] text-[#7A695B]">
                    Track Ward Scores
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Quick Admission Enquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E6DCB8] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DCB8]">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#2C1D11]">
                    Admission Enquiry
                  </h3>
                  <p className="text-xs text-[#7A695B] font-bengali">
                    নতুন শিক্ষাবর্ষ ২০২৬-২৭ ভর্তি তথ্য
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#FBEFEA] text-[#B83B0E] rounded-md border border-[#F3D5C9]">
                  Batches Open
                </span>
              </div>

              {formSubmitted ? (
                <div className="my-8 p-5 bg-[#F4F9F5] border border-[#A5D6B4] rounded-xl text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#1E7E44] mx-auto mb-2" />
                  <h4 className="font-bold text-base text-[#1E7E44]">
                    Enquiry Registered Successfully!
                  </h4>
                  <p className="text-xs text-[#3A6046] mt-2 leading-relaxed">
                    Dhanyabad! Our Academic Registrar will contact you on <span className="font-semibold">{formData.guardianPhone}</span> within 24 working hours with curriculum syllabus and batch schedule.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      Student’s Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Soumya Sengupta"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B83B0E] focus:border-transparent text-[#2C1D11]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      Guardian’s Mobile Number (10 digits)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98300 12345"
                      value={formData.guardianPhone}
                      onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B83B0E] focus:border-transparent text-[#2C1D11]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                        Curriculum Board
                      </label>
                      <select
                        value={formData.board}
                        onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                      >
                        <option value="WBCHSE">WBCHSE / WBBSE</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE / ISC</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                        Class Level
                      </label>
                      <select
                        value={formData.classLevel}
                        onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                      >
                        {['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                          <option key={cls} value={cls}>{cls}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      Subject Focus
                    </label>
                    <select
                      value={formData.preferredStream}
                      onChange={(e) => setFormData({ ...formData, preferredStream: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                    >
                      <option value="Science & All Subjects">All Subjects &amp; Science Stream (Recommended)</option>
                      <option value="Pure Mathematics & Physics">Pure Mathematics &amp; Physics Specialist</option>
                      <option value="Biology & Chemistry">Bio-Medical &amp; Chemistry Focus</option>
                      <option value="Languages & Humanities">Bengali, English &amp; Social Sciences</option>
                      <option value="Computer Science & Coding">Computer Science &amp; Python Prep</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-2.5 px-4 bg-[#B83B0E] hover:bg-[#9E2E09] active:bg-[#782005] text-white text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Request</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#E6DCB8] text-center">
              <span className="text-xs text-[#7A695B]">
                Direct Desk: <a href="tel:+913322419088" className="font-semibold text-[#B83B0E] hover:underline">+91 (033) 2241-9088</a> · Shyambazar &amp; College St.
              </span>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-[#E6DCB8] text-center shadow-2xs">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#B83B0E] tabular-nums">
              34+ Years
            </div>
            <div className="text-xs font-medium text-[#5A4738] mt-1">
              Unbroken Legacy of Teaching (Estd. 1991)
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E6DCB8] text-center shadow-2xs">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#D4AC0D] tabular-nums">
              98.4%
            </div>
            <div className="text-xs font-medium text-[#5A4738] mt-1">
              First Division &amp; Star Marks in 2026
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E6DCB8] text-center shadow-2xs">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#2C1D11] tabular-nums">
              3 Boards
            </div>
            <div className="text-xs font-medium text-[#5A4738] mt-1">
              Full Syllabus Coverage: CBSE, ICSE, WBCHSE
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E6DCB8] text-center shadow-2xs">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#1E7E44] tabular-nums">
              14,000+
            </div>
            <div className="text-xs font-medium text-[#5A4738] mt-1">
              Distinguished Scholars &amp; Alumni Network
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
