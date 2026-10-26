import React, { useState } from 'react';
import { FACULTY_MEMBERS } from '../data/mockData';
import { AlponaDivider, AlponaMandala } from './AlponaMotifs';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  GraduationCap,
  ShieldCheck,
  Send,
  CheckCircle2,
  Navigation,
} from 'lucide-react';

export const AboutAndContact: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 5000);
  };

  return (
    <section id="about-and-contact" className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B83B0E]">
            Institution Heritage &amp; Faculty · পরিচিতি ও যোগাযোগ
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2C1D11] mt-1">
            About Techno Institute &amp; Location
          </h2>
          <p className="text-sm text-[#5A4738] mt-2">
            Founded in 1991 at the scholarly heart of Kolkata&apos;s College Street academic corridor.
          </p>
          <AlponaDivider className="my-4" color="#B83B0E" />
        </div>

        {/* 2-Column Split: Story & Classroom Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DCB8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#B83B0E] uppercase tracking-wider mb-2 font-classical">
                Tradition of Excellence Since 1991
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2C1D11] leading-snug">
                The Confluence of Classical Bengal Pedagogy &amp; Modern Analytical Training
              </h3>
              <p className="text-sm text-[#4A3B32] mt-4 leading-relaxed">
                Techno Institute was established with a singular devotion: to democratize premier education across Bengal. For over three decades, we have mentored young aspirants for WBCHSE (Higher Secondary &amp; Madhyamik), CBSE, and ICSE examinations.
              </p>
              <p className="text-sm text-[#4A3B32] mt-3 leading-relaxed">
                Our pedagogical philosophy avoids rote learning. In every classroom, master teachers break down fundamental theorems through visual blackboard derivations, comprehensive bilingual question papers, and weekly diagnostic drills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#E6DCB8]">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#B83B0E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs text-[#2C1D11] block">WBCHSE &amp; CBSE Affiliated</strong>
                  <span className="text-[11px] text-[#7A695B]">Recognized curriculum prep center</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#D4AC0D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs text-[#2C1D11] block">1:1 Mentor Guidance</strong>
                  <span className="text-[11px] text-[#7A695B]">Weekly Saturday doubt sessions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#E6DCB8] shadow-xs group min-h-[320px]">
            <img
              src="/src/assets/images/classroom_interactive_seminar_1792993522071.jpg"
              alt="High school students learning in Techno Institute classroom"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1D11]/90 via-[#2C1D11]/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Live Classroom Seminar · Hall A
              </span>
              <h4 className="font-display text-lg font-bold text-white mt-1">
                Rigorous Board Concept Drill in Session
              </h4>
              <p className="text-xs text-stone-200 mt-1">
                Professors conducting blackboard mathematical formulations with individualized batch attention.
              </p>
            </div>
          </div>
        </div>

        {/* RENOWNED FACULTY DEPARTMENTS */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="font-display text-xl font-bold text-[#2C1D11]">
              Distinguished Academic Council &amp; Chairs
            </h3>
            <p className="text-xs text-[#7A695B] font-bengali">
              যাদবপুর, প্রেসিডেন্সি ও কলকাতা বিশ্ববিদ্যালয়ের স্বনামধন্য অধ্যাপকবৃন্দ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACULTY_MEMBERS.map((faculty, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#E6DCB8] shadow-xs hover:border-[#B83B0E] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FBEFEA] text-[#B83B0E] flex items-center justify-center font-display text-lg font-bold mb-3 border border-[#F3D5C9]">
                    {faculty.name.split(' ')[1]?.charAt(0) || faculty.name.charAt(0)}
                  </div>
                  <h4 className="font-display text-base font-bold text-[#2C1D11] leading-tight">
                    {faculty.name}
                  </h4>
                  <div className="font-bengali text-xs text-[#B83B0E] mt-0.5 font-medium">
                    {faculty.bengaliName}
                  </div>
                  <div className="text-xs font-semibold text-[#5A4738] mt-2">
                    {faculty.role}
                  </div>
                  <div className="text-[11px] text-[#7A695B] mt-1 font-mono">
                    {faculty.degrees}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2EADB] text-[11px] text-[#5A4738]">
                  <span className="font-medium text-[#2C1D11] block">Mentorship Area:</span>
                  <span className="text-[#7A695B]">{faculty.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT & LOCATION MAP INTERACTIVE CARD */}
        <div className="bg-white rounded-2xl border border-[#E6DCB8] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Details & Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2C1D11]">
                  Campus Corridors &amp; Visiting Hours
                </h3>
                <p className="text-xs text-[#7A695B] mt-1">
                  Guardians and scholars are welcome for admission counseling and faculty consultation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#FBEFEA] text-[#B83B0E] rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-[#2C1D11] block text-sm">Principal Campus</strong>
                    <span className="text-[#5A4738] leading-relaxed block mt-0.5">
                      14/2 College Street (Opposite Presidency University Main Gate),<br />
                      Academic Corridor, Kolkata 700073, West Bengal
                    </span>
                    <span className="text-[11px] text-[#B83B0E] block mt-1 font-medium">
                      Metro Transit: Mahatma Gandhi Road &amp; Central Metro Station (3 mins walk)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#FDF3D9] text-[#9A7D0A] rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-[#2C1D11] block text-sm">Operating Hours (অফিস সময়)</strong>
                    <div className="text-[#5A4738] mt-1 space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span>Monday &ndash; Saturday:</span>
                        <strong className="text-[#2C1D11] tabular-nums">7:30 AM &ndash; 8:30 PM</strong>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sunday (Mock Exams &amp; Doubt Clearing):</span>
                        <strong className="text-[#2C1D11] tabular-nums">8:00 AM &ndash; 2:00 PM</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#E7F3EC] text-[#1E7E44] rounded-lg shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-[#2C1D11] block text-sm">Helpdesk &amp; Registry</strong>
                    <div className="text-[#5A4738] mt-1 space-y-0.5">
                      <div>Desk: <a href="tel:+913322419088" className="font-semibold text-[#B83B0E] hover:underline">+91 (033) 2241-9088</a></div>
                      <div>Helpline: <a href="tel:+919830124789" className="font-semibold text-[#B83B0E] hover:underline">+91 98301-24789</a></div>
                      <div>Email: <a href="mailto:admissions@technoinstitute.edu.in" className="text-[#B83B0E] hover:underline">admissions@technoinstitute.edu.in</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Location Map Blueprint */}
            <div className="lg:col-span-7 bg-[#FAF7F2] rounded-xl border border-[#E6DCB8] p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-[#E6DCB8] text-xs">
                <div className="flex items-center gap-1.5 font-bold text-[#2C1D11]">
                  <Navigation className="w-3.5 h-3.5 text-[#B83B0E]" />
                  <span>College Street Hub Navigation Blueprint</span>
                </div>
                <span className="text-[11px] text-[#7A695B]">Pin Code: 700073</span>
              </div>

              {/* Styled Vector Map Placeholder */}
              <div className="my-3 rounded-lg overflow-hidden border border-[#E0D4B2] bg-[#F4EFE6] p-4 relative min-h-[220px] flex items-center justify-center">
                {/* Grid map pattern */}
                <div className="absolute inset-0 opacity-15">
                  <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#B83B0E 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                </div>

                {/* Major streets & landmark badges */}
                <div className="relative z-10 text-center max-w-sm">
                  <div className="w-10 h-10 rounded-full bg-[#B83B0E] text-white flex items-center justify-center mx-auto mb-2 shadow-md">
                    <MapPin className="w-5 h-5 animate-bounce" />
                  </div>
                  <strong className="font-display text-sm text-[#2C1D11] block">
                    TECHNO INSTITUTE CAMPUS
                  </strong>
                  <div className="text-xs text-[#5A4738] mt-1">
                    14/2 College Street, Kolkata &bull; Opposite Gate 2, Presidency
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[10px]">
                    <span className="px-2 py-0.5 bg-white text-[#2C1D11] rounded border border-[#D9CBBA]">
                      MG Road Metro (250m)
                    </span>
                    <span className="px-2 py-0.5 bg-white text-[#2C1D11] rounded border border-[#D9CBBA]">
                      Calcutta University (150m)
                    </span>
                    <span className="px-2 py-0.5 bg-white text-[#2C1D11] rounded border border-[#D9CBBA]">
                      Coffee House (100m)
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <div>
                {submitted ? (
                  <div className="p-3 bg-[#F4F9F5] border border-[#A5D6B4] rounded-lg text-center text-xs text-[#1E7E44] font-medium flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Your message has been dispatched to the Academic Counselor desk!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name & Contact No."
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs bg-white border border-[#D9CBBA] rounded-lg focus:ring-1 focus:ring-[#B83B0E] text-[#2C1D11]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-1.5 bg-[#B83B0E] hover:bg-[#9E2E09] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <Send className="w-3 h-3" />
                      <span>Inquire</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
