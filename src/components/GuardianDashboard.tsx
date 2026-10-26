import React, { useState } from 'react';
import { StudentProfile, SubjectType } from '../types';
import { AlponaDivider, AlponaMandala, InstituteCrest } from './AlponaMotifs';
import {
  Users,
  Award,
  CalendarCheck,
  TrendingUp,
  FileCheck2,
  Printer,
  ChevronDown,
  MessageSquare,
  Sparkles,
  BookMarked,
  CheckCircle,
  AlertCircle,
  X,
} from 'lucide-react';

interface GuardianDashboardProps {
  students: StudentProfile[];
  selectedStudentId: string;
  onSelectStudent: (id: string) => void;
}

export const GuardianDashboard: React.FC<GuardianDashboardProps> = ({
  students,
  selectedStudentId,
  onSelectStudent,
}) => {
  const [activeSubjectFilter, setActiveSubjectFilter] = useState<SubjectType | 'All'>('All');
  const [showReportCardModal, setShowReportCardModal] = useState(false);
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  const currentStudent = students.find((s) => s.id === selectedStudentId) || students[0];

  const subjectsToDisplay = activeSubjectFilter === 'All'
    ? currentStudent.subjectsMarks
    : currentStudent.subjectsMarks.filter((s) => s.subject === activeSubjectFilter);

  // Calculate highest and lowest subjects
  const sortedSubjects = [...currentStudent.subjectsMarks].sort((a, b) => b.marksObtained - a.marksObtained);
  const topSubject = sortedSubjects[0];
  const lowestSubject = sortedSubjects[sortedSubjects.length - 1];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="guardian-dashboard" className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B83B0E]">
            Guardian Oversight &amp; Performance Metrics · অভিভাবক পোর্টাল
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2C1D11] mt-1">
            Guardian &amp; Parent Dashboard
          </h2>
          <p className="text-sm text-[#5A4738] mt-2">
            Real-time academic evaluation, attendance compliance, monthly test percentiles, and personalized mentor evaluations.
          </p>
          <AlponaDivider className="my-4" color="#B83B0E" />
        </div>

        {/* WARD SELECTOR (For parents with multiple children enrolled) */}
        <div className="bg-white rounded-2xl border border-[#E6DCB8] p-5 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FBEFEA] text-[#B83B0E] rounded-xl">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#B83B0E] uppercase tracking-wider">
                  Enrolled Ward Selector (শিক্ষার্থী নির্বাচন)
                </div>
                <div className="text-sm text-[#5A4738]">
                  Select child to view verified academic records:
                </div>
              </div>
            </div>

            {/* Ward Selector Button Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {students.map((std) => {
                const isSelected = std.id === currentStudent.id;
                return (
                  <button
                    key={std.id}
                    onClick={() => onSelectStudent(std.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#B83B0E] text-white shadow-xs'
                        : 'bg-[#F6F1EA] text-[#4A3B32] hover:bg-[#EFE7DC] hover:text-[#2C1D11]'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-amber-300' : 'bg-[#B83B0E]'
                      }`}
                    />
                    <span>{std.name}</span>
                    <span className="opacity-80 text-[10px]">
                      ({std.board} {std.classLevel})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* STUDENT PROFILE IDENTITY BANNER */}
        <div className="bg-gradient-to-r from-[#2C1D11] via-[#432A19] to-[#2C1D11] rounded-2xl p-6 text-white shadow-md mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 pointer-events-none opacity-15 flex items-center pr-4">
            <AlponaMandala className="w-72 h-72 text-amber-300" opacity={0.3} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B83B0E] to-[#D4AC0D] p-1 shadow-md shrink-0 flex items-center justify-center text-white font-display text-2xl font-bold">
                {currentStudent.name.charAt(0)}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {currentStudent.name}
                  </h3>
                  {currentStudent.bengaliName && (
                    <span className="font-bengali text-amber-300 text-sm font-medium">
                      ({currentStudent.bengaliName})
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-300 mt-1">
                  <span>Roll No: <strong className="text-white font-mono">{currentStudent.rollNo}</strong></span>
                  <span>·</span>
                  <span>Board: <strong className="text-white">{currentStudent.board}</strong></span>
                  <span>·</span>
                  <span>Class: <strong className="text-white">{currentStudent.classLevel}</strong></span>
                  <span>·</span>
                  <span>Section: <strong className="text-white">{currentStudent.section}</strong></span>
                </div>

                <div className="text-xs text-amber-200/90 mt-1.5 flex items-center gap-2">
                  <span>Guardian: {currentStudent.guardianName} ({currentStudent.guardianRelation})</span>
                  <span>·</span>
                  <span>Contact: {currentStudent.guardianPhone}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions & Official Report Card trigger */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setShowReportCardModal(true)}
                className="px-4 py-2 bg-[#D4AC0D] hover:bg-[#B8940A] text-[#2C1D11] text-xs font-bold rounded-lg shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>View Official Report Card</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg border border-white/20 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Dossier</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 CORE KPI METRICS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Metric 1: Overall Attendance */}
          <div className="bg-white p-5 rounded-xl border border-[#E6DCB8] shadow-2xs">
            <div className="flex items-center justify-between text-xs text-[#7A695B]">
              <span className="font-semibold uppercase tracking-wider">Attendance Rate</span>
              <CalendarCheck className="w-4 h-4 text-[#1E7E44]" />
            </div>
            <div className="font-display text-3xl font-bold text-[#1E7E44] mt-2 tabular-nums">
              {currentStudent.overallAttendance}%
            </div>
            <div className="text-xs text-[#5A4738] mt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#1E7E44]" />
              <span>Above mandatory 85% requirement</span>
            </div>
          </div>

          {/* Metric 2: Aggregate Average */}
          <div className="bg-white p-5 rounded-xl border border-[#E6DCB8] shadow-2xs">
            <div className="flex items-center justify-between text-xs text-[#7A695B]">
              <span className="font-semibold uppercase tracking-wider">Aggregate Marks</span>
              <TrendingUp className="w-4 h-4 text-[#B83B0E]" />
            </div>
            <div className="font-display text-3xl font-bold text-[#B83B0E] mt-2 tabular-nums">
              {currentStudent.aggregatePercentage}%
            </div>
            <div className="text-xs text-[#5A4738] mt-1">
              Top subject: <strong className="text-[#2C1D11]">{topSubject?.subject} ({topSubject?.marksObtained}%)</strong>
            </div>
          </div>

          {/* Metric 3: Class Batch Rank */}
          <div className="bg-white p-5 rounded-xl border border-[#E6DCB8] shadow-2xs">
            <div className="flex items-center justify-between text-xs text-[#7A695B]">
              <span className="font-semibold uppercase tracking-wider">Class Standing</span>
              <Award className="w-4 h-4 text-[#D4AC0D]" />
            </div>
            <div className="font-display text-3xl font-bold text-[#2C1D11] mt-2 tabular-nums">
              Rank #{currentStudent.classRank}
            </div>
            <div className="text-xs text-[#5A4738] mt-1">
              Out of {currentStudent.totalBatchStudents} enrolled candidates
            </div>
          </div>

          {/* Metric 4: Diagnostic Tests Completed */}
          <div className="bg-white p-5 rounded-xl border border-[#E6DCB8] shadow-2xs">
            <div className="flex items-center justify-between text-xs text-[#7A695B]">
              <span className="font-semibold uppercase tracking-wider">Quizzes Taken</span>
              <Sparkles className="w-4 h-4 text-[#D4AC0D]" />
            </div>
            <div className="font-display text-3xl font-bold text-[#2C1D11] mt-2 tabular-nums">
              {currentStudent.recentQuizzes.length} Tests
            </div>
            <div className="text-xs text-[#5A4738] mt-1">
              Average Percentile: <strong className="text-[#1E7E44]">94.8th</strong>
            </div>
          </div>
        </div>

        {/* INTERACTIVE DATA VISUALIZATION: SUBJECT COMPARATIVE BARS */}
        <div className="bg-white rounded-2xl border border-[#E6DCB8] p-6 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E6DCB8] gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-[#2C1D11]">
                Subject-wise Examination Performance
              </h3>
              <p className="text-xs text-[#7A695B]">
                Interactive comparison: Marks Obtained (Terracotta) vs Class Highest (Gold) vs Class Average (Muted). Hover bars for detailed marking breakdown.
              </p>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-[#B83B0E]" />
                <span className="font-medium text-[#2C1D11]">Student Marks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-[#D4AC0D]" />
                <span className="font-medium text-[#2C1D11]">Highest in Batch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-[#D9CBBA]" />
                <span className="font-medium text-[#2C1D11]">Class Average</span>
              </div>
            </div>
          </div>

          {/* SVG Comparative Chart */}
          <div className="mt-6 overflow-x-auto pb-4">
            <div className="min-w-[640px]">
              <div className="space-y-4">
                {currentStudent.subjectsMarks.map((subj, idx) => {
                  const isHovered = hoveredBarIndex === idx;
                  return (
                    <div
                      key={subj.subject}
                      onMouseEnter={() => setHoveredBarIndex(idx)}
                      onMouseLeave={() => setHoveredBarIndex(null)}
                      className={`p-3 rounded-xl transition-all ${
                        isHovered ? 'bg-[#FDF8F5] border border-[#B83B0E]/30' : 'bg-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <div className="flex items-center gap-2">
                          <strong className="text-[#2C1D11] text-sm">{subj.subject}</strong>
                          <span className="text-[#7A695B]">·</span>
                          <span className="text-xs font-semibold text-[#B83B0E]">{subj.grade}</span>
                        </div>
                        <div className="text-xs text-[#5A4738] tabular-nums font-mono">
                          <span className="font-bold text-[#B83B0E] text-sm">{subj.marksObtained}</span>/100
                          <span className="text-[#7A695B] ml-2">(Batch Peak: {subj.highestMarks} · Avg: {subj.classAverage})</span>
                        </div>
                      </div>

                      {/* Multi-tier Comparative Horizontal Bar */}
                      <div className="relative w-full h-5 bg-[#F6F1EA] rounded-md overflow-hidden flex items-center">
                        {/* Class Average Reference marker */}
                        <div
                          className="absolute top-0 bottom-0 bg-[#D9CBBA] rounded-md"
                          style={{ width: `${subj.classAverage}%` }}
                          title={`Class Average: ${subj.classAverage}%`}
                        />
                        {/* Highest Marks bar */}
                        <div
                          className="absolute top-0 bottom-0 bg-[#D4AC0D]/50 rounded-md"
                          style={{ width: `${subj.highestMarks}%` }}
                          title={`Highest in Batch: ${subj.highestMarks}%`}
                        />
                        {/* Student Marks bar (Hero) */}
                        <div
                          className="absolute top-0 bottom-0 bg-[#B83B0E] rounded-md transition-all duration-500 shadow-xs flex items-center justify-end pr-2"
                          style={{ width: `${subj.marksObtained}%` }}
                        >
                          <span className="text-[10px] font-bold text-white tabular-nums">
                            {subj.marksObtained}%
                          </span>
                        </div>
                      </div>

                      {/* Teacher Feedback snippet */}
                      {isHovered && (
                        <div className="mt-2 text-xs text-[#5A4738] bg-white p-2.5 rounded-lg border border-[#E6DCB8] flex items-center gap-2">
                          <MessageSquare className="w-3.5 h-3.5 text-[#B83B0E] shrink-0" />
                          <span>Mentor Feedback: &ldquo;{subj.teacherFeedback}&rdquo;</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 2-COLUMN SPLIT: ATTENDANCE TRENDS & TEACHER REMARKS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column: Monthly Attendance Log */}
          <div className="bg-white rounded-2xl border border-[#E6DCB8] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DCB8]">
                <div className="flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-[#1E7E44]" />
                  <h3 className="font-display text-base font-bold text-[#2C1D11]">
                    Monthly Attendance Regularity
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#1E7E44] bg-[#F4F9F5] px-2.5 py-1 rounded-md border border-[#C5E8D1]">
                  Compliant ({currentStudent.overallAttendance}%)
                </span>
              </div>

              <p className="text-xs text-[#7A695B] mt-2 mb-4">
                Detailed record of working lectures and attendance sessions across recent academic terms:
              </p>

              <div className="space-y-3">
                {currentStudent.monthlyAttendance.map((att) => (
                  <div key={att.month} className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EFE7DC]">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#2C1D11]">{att.month}</span>
                      <span className="font-mono text-[#1E7E44] font-bold tabular-nums">
                        {att.percentage}% ({att.presentDays}/{att.totalDays} days)
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#EFE7DC] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1E7E44] rounded-full"
                        style={{ width: `${att.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E6DCB8] text-[11px] text-[#7A695B]">
              *Biometric card logging verified at Techno Institute entrance terminal.
            </div>
          </div>

          {/* Right Column: Teacher Remarks & Guidance Log */}
          <div className="bg-white rounded-2xl border border-[#E6DCB8] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DCB8]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#B83B0E]" />
                  <h3 className="font-display text-base font-bold text-[#2C1D11]">
                    Faculty Observations &amp; Remarks
                  </h3>
                </div>
                <span className="text-xs text-[#7A695B]">Official Dossier</span>
              </div>

              <div className="mt-4 space-y-3">
                {currentStudent.teacherRemarks.map((remark) => (
                  <div
                    key={remark.id}
                    className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EFE7DC] space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-[#2C1D11]">{remark.teacherName}</strong>
                        <span className="text-[#7A695B] block text-[11px]">{remark.designation} ({remark.subject})</span>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          remark.category === 'Commendable'
                            ? 'bg-[#E7F3EC] text-[#1E7E44] border border-[#C5E8D1]'
                            : 'bg-[#FDF3D9] text-[#9A7D0A] border border-[#F2E1A6]'
                        }`}
                      >
                        {remark.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#4A3B32] leading-relaxed italic pt-1">
                      &ldquo;{remark.remark}&rdquo;
                    </p>

                    <div className="text-[10px] text-[#7A695B] text-right pt-1">
                      Logged on: {remark.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E6DCB8] flex items-center justify-between text-xs">
              <span className="text-[#7A695B]">Parent-Teacher Meet: Scheduled Nov 15</span>
              <button
                onClick={() => alert(`Appointment request submitted to Dean office for ${currentStudent.name}. We will confirm the time-slot via SMS.`)}
                className="text-[#B83B0E] font-semibold hover:underline cursor-pointer"
              >
                Request 1-on-1 Session
              </button>
            </div>
          </div>
        </div>

        {/* RECENT QUIZZES AND SPEED TESTS */}
        <div className="bg-white rounded-2xl border border-[#E6DCB8] p-6 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-[#E6DCB8]">
            <div>
              <h3 className="font-display text-base font-bold text-[#2C1D11]">
                Recent Chapter-wise Quizzes &amp; Mock Scorecard
              </h3>
              <p className="text-xs text-[#7A695B]">
                Weekly diagnostic tests conducted in examination wings
              </p>
            </div>
            <span className="text-xs text-[#5A4738] tabular-nums font-mono">
              Total {currentStudent.recentQuizzes.length} tests recorded
            </span>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#E6DCB8] text-[#7A695B]">
                  <th className="py-2.5 font-semibold">Test Name</th>
                  <th className="py-2.5 font-semibold">Date</th>
                  <th className="py-2.5 font-semibold">Subject</th>
                  <th className="py-2.5 font-semibold text-right">Score</th>
                  <th className="py-2.5 font-semibold text-right">Percentile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2EADB]">
                {currentStudent.recentQuizzes.map((quiz) => (
                  <tr key={quiz.id} className="hover:bg-[#FAF7F2] transition-colors">
                    <td className="py-2.5 font-medium text-[#2C1D11]">{quiz.testName}</td>
                    <td className="py-2.5 text-[#7A695B] tabular-nums">{quiz.date}</td>
                    <td className="py-2.5 text-[#B83B0E] font-medium">{quiz.subject}</td>
                    <td className="py-2.5 text-right font-mono font-bold text-[#2C1D11] tabular-nums">
                      {quiz.score}/{quiz.total}
                    </td>
                    <td className="py-2.5 text-right font-mono font-bold text-[#1E7E44] tabular-nums">
                      {quiz.percentile}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MODAL: OFFICIAL ACADEMIC REPORT CARD */}
        {showReportCardModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl border-2 border-[#D4AC0D] w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
              <div className="p-4 bg-[#FDFBF7] border-b border-[#E6DCB8] flex items-center justify-between">
                <span className="text-xs font-bold text-[#B83B0E] uppercase tracking-wider">
                  Verified Academic Grade Sheet · প্রাতিষ্ঠানিক মূল্যায়ন পত্র
                </span>
                <button
                  onClick={() => setShowReportCardModal(false)}
                  className="p-1 rounded-lg text-[#7A695B] hover:text-[#2C1D11] hover:bg-[#EFE7DC]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Printable Official Certificate Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#FDFBF7] relative">
                <div className="border-4 border-double border-[#B83B0E]/60 p-6 sm:p-8 rounded-xl bg-white relative">
                  {/* Watermark Mandala */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                    <AlponaMandala className="w-96 h-96" color="#B83B0E" opacity={0.8} />
                  </div>

                  {/* Header */}
                  <div className="text-center pb-6 border-b-2 border-[#B83B0E]/40 mb-6 relative z-10">
                    <InstituteCrest size={56} className="mx-auto mb-2" />
                    <h2 className="font-display text-2xl font-bold text-[#2C1D11] tracking-tight">
                      TECHNO INSTITUTE OF ACADEMICS
                    </h2>
                    <p className="font-bengali text-sm text-[#B83B0E] font-semibold mt-0.5">
                      টেকনো ইনস্টিটিউট · ঐতিহ্যবাহী মূল্যায়ন পত্র
                    </p>
                    <p className="text-xs text-[#7A695B] mt-1">
                      College Street Campus · Kolkata 700073 · Affiliated Prep Center for WBCHSE, CBSE &amp; ICSE
                    </p>
                  </div>

                  {/* Student Details */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-[#FBF9F5] p-4 rounded-xl border border-[#E6DCB8] mb-6 relative z-10">
                    <div>
                      <span className="text-[#7A695B] block text-[11px]">Candidate Name:</span>
                      <strong className="text-[#2C1D11] text-sm">{currentStudent.name}</strong>
                      <div className="font-bengali text-xs text-[#B83B0E]">{currentStudent.bengaliName}</div>
                    </div>
                    <div>
                      <span className="text-[#7A695B] block text-[11px]">Enrollment Roll:</span>
                      <strong className="text-[#2C1D11] font-mono">{currentStudent.rollNo}</strong>
                      <div className="text-[#7A695B] text-[11px]">{currentStudent.academicYear}</div>
                    </div>
                    <div>
                      <span className="text-[#7A695B] block text-[11px]">Curriculum &amp; Class:</span>
                      <strong className="text-[#2C1D11]">{currentStudent.board} · {currentStudent.classLevel}</strong>
                      <div className="text-[#7A695B] text-[11px]">{currentStudent.section}</div>
                    </div>
                    <div>
                      <span className="text-[#7A695B] block text-[11px]">Batch Rank:</span>
                      <strong className="text-[#1E7E44] text-sm">#{currentStudent.classRank}</strong>
                      <div className="text-[#7A695B] text-[11px]">of {currentStudent.totalBatchStudents} Students</div>
                    </div>
                  </div>

                  {/* Marks Table */}
                  <div className="relative z-10">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="bg-[#FAF7F2] text-[#2C1D11] border-y border-[#D9CBBA]">
                          <th className="py-2 px-3 font-bold">Subject</th>
                          <th className="py-2 px-3 font-bold text-center">Max</th>
                          <th className="py-2 px-3 font-bold text-center">Marks Scored</th>
                          <th className="py-2 px-3 font-bold text-center">Grade</th>
                          <th className="py-2 px-3 font-bold">Remarks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EFE7DC]">
                        {currentStudent.subjectsMarks.map((subj) => (
                          <tr key={subj.subject}>
                            <td className="py-2 px-3 font-semibold text-[#2C1D11]">{subj.subject}</td>
                            <td className="py-2 px-3 text-center text-[#7A695B] tabular-nums">100</td>
                            <td className="py-2 px-3 text-center font-bold text-[#B83B0E] font-mono tabular-nums">
                              {subj.marksObtained}
                            </td>
                            <td className="py-2 px-3 text-center font-semibold text-[#2C1D11]">
                              {subj.grade}
                            </td>
                            <td className="py-2 px-3 text-[#5A4738] text-[11px]">
                              {subj.teacherFeedback}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-[#FAF7F2] font-bold text-[#2C1D11] border-t-2 border-[#B83B0E]">
                          <td className="py-2.5 px-3">Aggregate Average</td>
                          <td className="py-2.5 px-3 text-center">100%</td>
                          <td className="py-2.5 px-3 text-center text-[#B83B0E] font-mono text-sm tabular-nums">
                            {currentStudent.aggregatePercentage}%
                          </td>
                          <td className="py-2.5 px-3 text-center text-[#1E7E44]">Star Marks</td>
                          <td className="py-2.5 px-3 text-xs text-[#1E7E44]">
                            Verified Distinction
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* Signatures & Seal */}
                  <div className="mt-8 pt-6 border-t border-[#D9CBBA] flex items-center justify-between text-xs relative z-10">
                    <div className="text-center">
                      <div className="w-32 h-0.5 bg-[#7A695B] mb-1 mx-auto" />
                      <div className="font-semibold text-[#2C1D11]">Guardian Signature</div>
                      <div className="text-[10px] text-[#7A695B]">{currentStudent.guardianName}</div>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#B83B0E] flex items-center justify-center mx-auto mb-1 text-[9px] text-[#B83B0E] font-bold text-center uppercase tracking-tighter">
                        Techno<br />Official<br />Seal
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-32 h-0.5 bg-[#7A695B] mb-1 mx-auto" />
                      <div className="font-semibold text-[#2C1D11]">Dr. Debjani Mukherjee</div>
                      <div className="text-[10px] text-[#7A695B]">Academic Dean &amp; Controller</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#FDFBF7] border-t border-[#E6DCB8] flex items-center justify-between">
                <span className="text-xs text-[#7A695B]">
                  Authenticated electronically via Student Enrollment Database
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowReportCardModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#5A4738] hover:bg-[#EFE7DC] rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#B83B0E] hover:bg-[#9E2E09] rounded-lg shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Formal Report</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
