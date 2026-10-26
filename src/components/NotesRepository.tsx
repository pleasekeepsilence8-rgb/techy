import React, { useState } from 'react';
import { NoteItem, BoardType, ClassLevel, SubjectType } from '../types';
import { AlponaDivider } from './AlponaMotifs';
import {
  Search,
  Download,
  Eye,
  FileText,
  Check,
  X,
  BookOpen,
  UserCheck,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';

interface NotesRepositoryProps {
  notes: NoteItem[];
}

export const NotesRepository: React.FC<NotesRepositoryProps> = ({ notes }) => {
  const [selectedBoard, setSelectedBoard] = useState<BoardType | 'All'>('All');
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'All'>('All');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePreviewNote, setActivePreviewNote] = useState<NoteItem | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const boards: (BoardType | 'All')[] = ['All', 'WBCHSE', 'CBSE', 'ICSE'];
  const classLevels: (ClassLevel | 'All')[] = [
    'All',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12',
  ];
  const subjects: (SubjectType | 'All')[] = [
    'All',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'English',
    'Bengali',
    'History',
    'Geography',
  ];

  // Filter notes
  const filteredNotes = notes.filter((note) => {
    if (selectedBoard !== 'All' && note.board !== selectedBoard) return false;
    if (selectedClass !== 'All' && note.classLevel !== selectedClass) return false;
    if (selectedSubject !== 'All' && note.subject !== selectedSubject) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = note.title.toLowerCase().includes(q);
      const matchChapter = note.chapter.toLowerCase().includes(q);
      const matchDesc = note.description.toLowerCase().includes(q);
      const matchAuthor = note.author.toLowerCase().includes(q);
      const matchBengali = note.bengaliTitle?.toLowerCase().includes(q);
      if (!matchTitle && !matchChapter && !matchDesc && !matchAuthor && !matchBengali) {
        return false;
      }
    }
    return true;
  });

  const handleDownload = (note: NoteItem) => {
    setDownloadSuccessId(note.id);
    // Create an authentic text/pdf simulation download file
    const content = `TECHNO INSTITUTE - ACADEMIC STUDY REPOSITORY
=====================================================
Title: ${note.title}
Board: ${note.board} | ${note.classLevel} | Subject: ${note.subject}
Chapter: ${note.chapter}
Faculty: ${note.author} (${note.authorDesignation})
Published Date: ${note.uploadDate} | Pages: ${note.pages}

SUMMARY & KEY SYLLABUS:
${note.description}

CORE CONCEPTS & TOPICS:
${note.keyTopics.map((t, idx) => `${idx + 1}. ${t}`).join('\n')}

SAMPLE EXAMINATION QUESTIONS & MODEL RUBRIC:
${note.sampleQuestionsSnippet || 'Comprehensive board solutions provided in study module.'}

=====================================================
Copyright © Techno Institute, College Street, Kolkata 700073.
All Rights Reserved. For enrolled student circulation only.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `TechnoInstitute_${note.board}_${note.classLevel.replace(' ', '')}_${note.subject}_${note.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadSuccessId(null);
    }, 3000);
  };

  return (
    <section id="notes-repository" className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B83B0E]">
            Digital Academic Archives · পাঠ্য সংকলন
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2C1D11] mt-1">
            Study Notes &amp; Resource Repository
          </h2>
          <p className="text-sm text-[#5A4738] mt-2">
            Filter high-yield pedagogical notes, solved board papers, and chapter synopses authored by senior faculty.
          </p>
          <AlponaDivider className="my-4" color="#B83B0E" />
        </div>

        {/* Multi-Level Interactive Filter Controls */}
        <div className="bg-white rounded-2xl border border-[#E6DCB8] p-5 shadow-xs mb-8 space-y-4">
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A695B]" />
            <input
              type="text"
              placeholder="Search by chapter, topic (e.g. Sreedhar Acharya, Charles Law, বহুরূপী)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#7A695B] hover:text-[#B83B0E]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Level 1: Board Selector (Segmented buttons) */}
          <div>
            <div className="text-xs font-semibold text-[#5A4738] mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#B83B0E]" />
              <span>Select Board:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {boards.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBoard(b)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedBoard === b
                      ? 'bg-[#B83B0E] text-white shadow-xs font-semibold'
                      : 'bg-[#F6F1EA] text-[#4A3B32] hover:bg-[#EFE7DC]'
                  }`}
                >
                  {b === 'All' ? 'All Boards (সকল বোর্ড)' : b}
                </button>
              ))}
            </div>
          </div>

          {/* Level 2: Class Level Selector */}
          <div>
            <div className="text-xs font-semibold text-[#5A4738] mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#B83B0E]" />
              <span>Select Class Level (শ্রেণি):</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {classLevels.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedClass === cls
                      ? 'bg-[#2C1D11] text-amber-200 font-semibold shadow-xs'
                      : 'bg-[#F6F1EA] text-[#4A3B32] hover:bg-[#EFE7DC]'
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          {/* Level 3: Subject Tabs */}
          <div>
            <div className="text-xs font-semibold text-[#5A4738] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AC0D]" />
              <span>Subject Filter:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {subjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedSubject === sub
                      ? 'bg-[#D4AC0D] text-[#2C1D11] font-bold shadow-xs'
                      : 'bg-white border border-[#E6DCB8] text-[#5A4738] hover:border-[#B83B0E]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Results Counter & Active Criteria */}
          <div className="pt-2 border-t border-[#E6DCB8] flex flex-wrap items-center justify-between text-xs text-[#7A695B] gap-2">
            <div>
              Showing <span className="font-semibold text-[#B83B0E] tabular-nums">{filteredNotes.length}</span> curated document{filteredNotes.length === 1 ? '' : 's'}
              {selectedBoard !== 'All' && <span> for <strong>{selectedBoard}</strong></span>}
              {selectedClass !== 'All' && <span> · <strong>{selectedClass}</strong></span>}
              {selectedSubject !== 'All' && <span> · <strong>{selectedSubject}</strong></span>}
            </div>
            {(selectedBoard !== 'All' || selectedClass !== 'All' || selectedSubject !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedBoard('All');
                  setSelectedClass('All');
                  setSelectedSubject('All');
                  setSearchQuery('');
                }}
                className="text-xs text-[#B83B0E] hover:underline font-medium cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E6DCB8] p-12 text-center max-w-lg mx-auto">
            <FileText className="w-12 h-12 text-[#B83B0E]/40 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-[#2C1D11]">
              No Notes Found
            </h3>
            <p className="text-xs text-[#7A695B] mt-1">
              No notes match your exact combination of filters. Try selecting "All" or adjusting the search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-xl border border-[#E6DCB8] p-5 shadow-xs hover:shadow-md hover:border-[#B83B0E]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-[#7A695B] mb-2 font-medium">
                    <span className="text-[#B83B0E] font-bold">{note.board}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.classLevel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#2C1D11]">{note.subject}</span>
                  </div>

                  {/* Title & Bengali Subtitle */}
                  <h3 className="font-display text-base font-bold text-[#2C1D11] group-hover:text-[#B83B0E] transition-colors leading-snug line-clamp-2">
                    {note.title}
                  </h3>
                  {note.bengaliTitle && (
                    <p className="font-bengali text-xs text-[#7A695B] mt-1 line-clamp-1">
                      {note.bengaliTitle}
                    </p>
                  )}

                  {/* Chapter */}
                  <div className="mt-2 text-xs font-semibold text-[#B83B0E] bg-[#FBEFEA] px-2.5 py-1 rounded inline-block">
                    {note.chapter}
                  </div>

                  {/* Brief description */}
                  <p className="text-xs text-[#5A4738] mt-3 line-clamp-3 leading-relaxed">
                    {note.description}
                  </p>

                  {/* Key Topics bullets */}
                  <div className="mt-3 pt-3 border-t border-[#F2EADB]">
                    <div className="text-[11px] font-semibold text-[#7A695B] uppercase tracking-wider mb-1">
                      Key Concepts Covered:
                    </div>
                    <ul className="space-y-0.5">
                      {note.keyTopics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="text-xs text-[#4A3B32] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AC0D]" />
                          <span className="truncate">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Strip: Author & Action Buttons */}
                <div className="mt-5 pt-3 border-t border-[#E6DCB8]">
                  <div className="flex items-center justify-between text-[11px] text-[#7A695B] mb-3">
                    <div className="flex items-center gap-1 truncate max-w-[160px]">
                      <UserCheck className="w-3.5 h-3.5 text-[#B83B0E] shrink-0" />
                      <span className="truncate font-medium">{note.author}</span>
                    </div>
                    <div className="flex items-center gap-1 tabular-nums">
                      <FileText className="w-3.5 h-3.5 text-[#7A695B]" />
                      <span>{note.pages} pages ({note.fileSize})</span>
                    </div>
                  </div>

                  {/* Dual Action Buttons: Preview & Download */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActivePreviewNote(note)}
                      className="px-3 py-2 bg-[#F6F1EA] hover:bg-[#EFE7DC] text-[#2C1D11] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#B83B0E]" />
                      <span>Preview</span>
                    </button>

                    <button
                      onClick={() => handleDownload(note)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                        downloadSuccessId === note.id
                          ? 'bg-[#1E7E44] text-white'
                          : 'bg-[#B83B0E] hover:bg-[#9E2E09] text-white shadow-xs'
                      }`}
                    >
                      {downloadSuccessId === note.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Saved!</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal: Document Preview */}
        {activePreviewNote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl border border-[#E6DCB8] w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-[#E6DCB8] bg-[#FDFBF7] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#7A695B]">
                    <span className="text-[#B83B0E] font-bold">{activePreviewNote.board}</span>
                    <span>·</span>
                    <span>{activePreviewNote.classLevel}</span>
                    <span>·</span>
                    <span>{activePreviewNote.subject}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#2C1D11] mt-0.5">
                    {activePreviewNote.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActivePreviewNote(null)}
                  className="p-1.5 rounded-lg text-[#7A695B] hover:text-[#2C1D11] hover:bg-[#EFE7DC] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Document Mock Viewer Body */}
              <div className="flex-1 overflow-y-auto p-6 bg-[#FAF7F2] space-y-6">
                {/* Header Page Replica */}
                <div className="bg-white p-6 rounded-xl border border-[#E6DCB8] shadow-xs">
                  <div className="border-b border-[#E6DCB8] pb-4 mb-4 text-center">
                    <div className="font-display text-xl font-bold text-[#B83B0E]">
                      TECHNO INSTITUTE OF ACADEMICS
                    </div>
                    <div className="text-xs text-[#7A695B]">
                      14/2 College Street, Academic Corridor, Kolkata 700073
                    </div>
                    <div className="font-bengali text-xs text-[#D4AC0D] font-medium mt-1">
                      বিশেষ স্টাডি মেটেরিয়াল ও প্রশ্নব্যাংক সংকলন
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#FBF9F5] p-3 rounded-lg border border-[#EFE7DC] mb-4">
                    <div>
                      <span className="text-[#7A695B] block">Course:</span>
                      <strong className="text-[#2C1D11]">{activePreviewNote.board} {activePreviewNote.classLevel}</strong>
                    </div>
                    <div>
                      <span className="text-[#7A695B] block">Subject:</span>
                      <strong className="text-[#2C1D11]">{activePreviewNote.subject}</strong>
                    </div>
                    <div>
                      <span className="text-[#7A695B] block">Faculty:</span>
                      <strong className="text-[#2C1D11]">{activePreviewNote.author}</strong>
                    </div>
                    <div>
                      <span className="text-[#7A695B] block">Pages:</span>
                      <strong className="text-[#2C1D11] tabular-nums">{activePreviewNote.pages} ({activePreviewNote.fileSize})</strong>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display text-base font-bold text-[#2C1D11] mb-2">
                      Chapter Synopsis &amp; Syllabus Context:
                    </h4>
                    <p className="text-sm text-[#4A3B32] leading-relaxed">
                      {activePreviewNote.description}
                    </p>
                  </div>

                  <div className="mt-5">
                    <h4 className="font-display text-base font-bold text-[#2C1D11] mb-2">
                      Core Formulations &amp; Concepts:
                    </h4>
                    <div className="space-y-2">
                      {activePreviewNote.keyTopics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#332418]">
                          <span className="font-bold text-[#B83B0E]">{i + 1}.</span>
                          <span className="leading-relaxed">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {activePreviewNote.sampleQuestionsSnippet && (
                    <div className="mt-5 p-3.5 bg-[#F6F1EA] rounded-lg border border-[#E6DCB8]">
                      <div className="text-xs font-bold text-[#B83B0E] uppercase tracking-wider mb-1">
                        Board Exemplar Question Excerpt:
                      </div>
                      <p className="text-xs font-mono text-[#2C1D11] leading-relaxed">
                        {activePreviewNote.sampleQuestionsSnippet}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#FDFBF7] border-t border-[#E6DCB8] flex items-center justify-between">
                <span className="text-xs text-[#7A695B]">
                  Verified for Board Examinations 2026-2027
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActivePreviewNote(null)}
                    className="px-4 py-2 text-xs font-medium text-[#4A3B32] hover:bg-[#EFE7DC] rounded-lg transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                  <button
                    onClick={() => handleDownload(activePreviewNote)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#B83B0E] hover:bg-[#9E2E09] rounded-lg flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Full Note</span>
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
