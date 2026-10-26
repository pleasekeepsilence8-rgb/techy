import React, { useState } from 'react';
import { NoteItem, RoutineSlot, StudentProfile, BoardType, ClassLevel, SubjectType } from '../types';
import { AlponaDivider } from './AlponaMotifs';
import {
  UploadCloud,
  CheckCircle2,
  CalendarPlus,
  Edit3,
  BookOpen,
  Award,
  Sparkles,
  Save,
} from 'lucide-react';

interface AdminTeacherPortalProps {
  onAddNote: (note: NoteItem) => void;
  onAddRoutineSlot: (slot: RoutineSlot) => void;
  students: StudentProfile[];
  onUpdateStudentMarks: (
    studentId: string,
    subject: SubjectType,
    marks: number,
    remarks: string
  ) => void;
}

export const AdminTeacherPortal: React.FC<AdminTeacherPortalProps> = ({
  onAddNote,
  onAddRoutineSlot,
  students,
  onUpdateStudentMarks,
}) => {
  const [activePanelTab, setActivePanelTab] = useState<'notes' | 'scores' | 'routine'>('notes');
  const [successBanner, setSuccessBanner] = useState<string | null>(null);

  // Form states for Upload Notes
  const [noteForm, setNoteForm] = useState({
    title: '',
    bengaliTitle: '',
    board: 'WBCHSE' as BoardType,
    classLevel: 'Class 10' as ClassLevel,
    subject: 'Mathematics' as SubjectType,
    chapter: '',
    author: 'Prof. Somnath Banerjee',
    authorDesignation: 'M.Sc (Jadavpur), Head of Math',
    pages: 18,
    fileSize: '3.2 MB',
    description: '',
    keyTopics: 'Derivations, Board previous 10-year questions, Formula cheatsheet',
    sampleQuestionsSnippet: '',
  });

  // Form states for Enter Student Marks
  const [scoreForm, setScoreForm] = useState({
    studentId: students[0]?.id || '',
    subject: 'Physics' as SubjectType,
    marksObtained: 90,
    maxMarks: 100,
    teacherFeedback: 'Outstanding analytical clarity and step-wise derivation shown.',
  });

  // Form states for Routine Update
  const [routineForm, setRoutineForm] = useState({
    day: 'Monday' as any,
    timeSlot: '04:00 PM - 05:30 PM',
    board: 'WBCHSE' as BoardType,
    classLevel: 'Class 10' as ClassLevel,
    subject: 'Mathematics' as SubjectType,
    teacher: 'Prof. Somnath Banerjee',
    room: 'Hall A (Aryabhata Room)',
    batchType: 'Special Board Exam Prep' as any,
    topic: '',
  });

  const showNotification = (msg: string) => {
    setSuccessBanner(msg);
    setTimeout(() => {
      setSuccessBanner(null);
    }, 5000);
  };

  // Submit Note
  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteForm.title || !noteForm.chapter) return;

    const newNote: NoteItem = {
      id: `note-${Date.now()}`,
      title: noteForm.title,
      bengaliTitle: noteForm.bengaliTitle || undefined,
      board: noteForm.board,
      classLevel: noteForm.classLevel,
      subject: noteForm.subject,
      chapter: noteForm.chapter,
      author: noteForm.author,
      authorDesignation: noteForm.authorDesignation,
      uploadDate: new Date().toISOString().split('T')[0],
      pages: Number(noteForm.pages) || 12,
      fileSize: noteForm.fileSize || '2.5 MB',
      downloadsCount: 1,
      description: noteForm.description || 'Verified study module for board examination preparation.',
      keyTopics: noteForm.keyTopics.split(',').map((t) => t.trim()).filter(Boolean),
      sampleQuestionsSnippet: noteForm.sampleQuestionsSnippet || undefined,
    };

    onAddNote(newNote);
    showNotification(`New note "${newNote.title}" uploaded to the Study Notes repository successfully!`);
    setNoteForm({
      ...noteForm,
      title: '',
      bengaliTitle: '',
      chapter: '',
      description: '',
      sampleQuestionsSnippet: '',
    });
  };

  // Submit Student Score
  const handleScoreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const student = students.find((s) => s.id === scoreForm.studentId);
    if (!student) return;

    onUpdateStudentMarks(
      scoreForm.studentId,
      scoreForm.subject,
      Number(scoreForm.marksObtained),
      scoreForm.teacherFeedback
    );

    showNotification(
      `Updated ${scoreForm.subject} marks to ${scoreForm.marksObtained}/100 for ${student.name}. Guardian portal updated instantly!`
    );
  };

  // Submit Routine Slot
  const handleRoutineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!routineForm.topic) return;

    const newSlot: RoutineSlot = {
      id: `rot-${Date.now()}`,
      day: routineForm.day,
      timeSlot: routineForm.timeSlot,
      board: routineForm.board,
      classLevel: routineForm.classLevel,
      subject: routineForm.subject,
      teacher: routineForm.teacher,
      room: routineForm.room,
      batchType: routineForm.batchType,
      topic: routineForm.topic,
    };

    onAddRoutineSlot(newSlot);
    showNotification(
      `New schedule slot for ${newSlot.subject} (${newSlot.day}) added to Live Routine!`
    );
    setRoutineForm({
      ...routineForm,
      topic: '',
    });
  };

  return (
    <section id="admin-panel" className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B83B0E]">
            Faculty Management Suite · শিক্ষক ও প্রশাসক বিভাগ
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2C1D11] mt-1">
            Teacher &amp; Administrator Console
          </h2>
          <p className="text-sm text-[#5A4738] mt-2">
            Publish syllabus study notes, post routine schedule updates, and evaluate student test scores with real-time sync.
          </p>
          <AlponaDivider className="my-4" color="#B83B0E" />
        </div>

        {/* Global Success Notification */}
        {successBanner && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-[#F4F9F5] border border-[#A5D6B4] rounded-xl flex items-center gap-3 text-xs text-[#1E7E44] shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#1E7E44] shrink-0" />
            <span className="font-medium">{successBanner}</span>
          </div>
        )}

        {/* Segmented Mode Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-[#F4EDE2] border border-[#E6DCB8] rounded-xl gap-1">
            <button
              onClick={() => setActivePanelTab('notes')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activePanelTab === 'notes'
                  ? 'bg-white text-[#B83B0E] shadow-xs'
                  : 'text-[#5A4738] hover:text-[#2C1D11]'
              }`}
            >
              <UploadCloud className="w-4 h-4" />
              <span>Publish Study Notes</span>
            </button>

            <button
              onClick={() => setActivePanelTab('scores')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activePanelTab === 'scores'
                  ? 'bg-white text-[#B83B0E] shadow-xs'
                  : 'text-[#5A4738] hover:text-[#2C1D11]'
              }`}
            >
              <Edit3 className="w-4 h-4" />
              <span>Record Student Test Scores</span>
            </button>

            <button
              onClick={() => setActivePanelTab('routine')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activePanelTab === 'routine'
                  ? 'bg-white text-[#B83B0E] shadow-xs'
                  : 'text-[#5A4738] hover:text-[#2C1D11]'
              }`}
            >
              <CalendarPlus className="w-4 h-4" />
              <span>Schedule Timetable Slot</span>
            </button>
          </div>
        </div>

        {/* TAB 1: UPLOAD STUDY NOTES */}
        {activePanelTab === 'notes' && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E6DCB8] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 pb-4 border-b border-[#E6DCB8] mb-6">
              <div className="p-2.5 bg-[#FBEFEA] text-[#B83B0E] rounded-xl">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#2C1D11]">
                  Upload New Pedagogical Material
                </h3>
                <p className="text-xs text-[#7A695B]">
                  Material is instantly indexed in the student repository filterable by Board, Class, and Subject.
                </p>
              </div>
            </div>

            <form onSubmit={handleNoteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                  Document Title (English / Standard) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Guide: Ray Optics & Dispersion of Light"
                  value={noteForm.title}
                  onChange={(e) => setNoteForm({ ...noteForm, title: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                  Bengali Title (বাংলা শিরোনাম - ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  placeholder="e.g. আলোর প্রতিসরণ ও লেন্সের সূত্রাবলী"
                  value={noteForm.bengaliTitle}
                  onChange={(e) => setNoteForm({ ...noteForm, bengaliTitle: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11] font-bengali"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Board
                  </label>
                  <select
                    value={noteForm.board}
                    onChange={(e) => setNoteForm({ ...noteForm, board: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  >
                    <option value="WBCHSE">WBCHSE</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Class Level
                  </label>
                  <select
                    value={noteForm.classLevel}
                    onChange={(e) => setNoteForm({ ...noteForm, classLevel: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  >
                    {['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Subject
                  </label>
                  <select
                    value={noteForm.subject}
                    onChange={(e) => setNoteForm({ ...noteForm, subject: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Bengali">Bengali</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Chapter / Unit Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Unit 4: Optics & Refraction"
                    value={noteForm.chapter}
                    onChange={(e) => setNoteForm({ ...noteForm, chapter: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Faculty Contributor
                  </label>
                  <input
                    type="text"
                    value={noteForm.author}
                    onChange={(e) => setNoteForm({ ...noteForm, author: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                  Chapter Synopsis / Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key learning outcomes, derivations included, and Board exam question trends..."
                  value={noteForm.description}
                  onChange={(e) => setNoteForm({ ...noteForm, description: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                  Key Topics (Comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Snell Law, Total Internal Reflection, Lens Formula, Numerical sets"
                  value={noteForm.keyTopics}
                  onChange={(e) => setNoteForm({ ...noteForm, keyTopics: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                  Sample Exam Question Snippet (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Prove that 1/f = (μ - 1)(1/R1 - 1/R2) for a thin convex lens."
                  value={noteForm.sampleQuestionsSnippet}
                  onChange={(e) => setNoteForm({ ...noteForm, sampleQuestionsSnippet: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#B83B0E] hover:bg-[#9E2E09] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>Publish Note to Student Repository</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 2: RECORD STUDENT TEST SCORES */}
        {activePanelTab === 'scores' && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#E6DCB8] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 pb-4 border-b border-[#E6DCB8] mb-6">
              <div className="p-2.5 bg-[#FDF3D9] text-[#9A7D0A] rounded-xl">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#2C1D11]">
                  Enter Verified Examination Marks
                </h3>
                <p className="text-xs text-[#7A695B]">
                  Records update the Student Profile and Guardian Dossier with instant average and rank recalibration.
                </p>
              </div>
            </div>

            <form onSubmit={handleScoreSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                  Select Enrolled Student *
                </label>
                <select
                  value={scoreForm.studentId}
                  onChange={(e) => setScoreForm({ ...scoreForm, studentId: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                >
                  {students.map((std) => (
                    <option key={std.id} value={std.id}>
                      {std.name} ({std.board} - {std.classLevel}) · Roll: {std.rollNo}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Subject *
                  </label>
                  <select
                    value={scoreForm.subject}
                    onChange={(e) => setScoreForm({ ...scoreForm, subject: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Bengali">Bengali</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Marks Obtained (out of 100) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={scoreForm.marksObtained}
                    onChange={(e) => setScoreForm({ ...scoreForm, marksObtained: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11] font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                  Teacher Remarks &amp; Feedback Recommendation
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Provide precise academic feedback (e.g., exceptional step-wise formulation, focus needed on ray diagrams)..."
                  value={scoreForm.teacherFeedback}
                  onChange={(e) => setScoreForm({ ...scoreForm, teacherFeedback: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#B83B0E] hover:bg-[#9E2E09] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Commit Marks to Student Record</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 3: POST ROUTINE SCHEDULE */}
        {activePanelTab === 'routine' && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#E6DCB8] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 pb-4 border-b border-[#E6DCB8] mb-6">
              <div className="p-2.5 bg-[#E7F3EC] text-[#1E7E44] rounded-xl">
                <CalendarPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#2C1D11]">
                  Add Timetable Slot / Special Class
                </h3>
                <p className="text-xs text-[#7A695B]">
                  Broadcast live lecture slot to the interactive weekly schedule for students.
                </p>
              </div>
            </div>

            <form onSubmit={handleRoutineSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Day of Week *
                  </label>
                  <select
                    value={routineForm.day}
                    onChange={(e) => setRoutineForm({ ...routineForm, day: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  >
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Time Slot *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 05:00 PM - 06:30 PM"
                    value={routineForm.timeSlot}
                    onChange={(e) => setRoutineForm({ ...routineForm, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Board
                  </label>
                  <select
                    value={routineForm.board}
                    onChange={(e) => setRoutineForm({ ...routineForm, board: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  >
                    <option value="WBCHSE">WBCHSE</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Class Level
                  </label>
                  <select
                    value={routineForm.classLevel}
                    onChange={(e) => setRoutineForm({ ...routineForm, classLevel: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  >
                    {['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Subject
                  </label>
                  <select
                    value={routineForm.subject}
                    onChange={(e) => setRoutineForm({ ...routineForm, subject: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Bengali">Bengali</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Assigned Teacher
                  </label>
                  <input
                    type="text"
                    required
                    value={routineForm.teacher}
                    onChange={(e) => setRoutineForm({ ...routineForm, teacher: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    Assigned Hall / Room
                  </label>
                  <input
                    type="text"
                    required
                    value={routineForm.room}
                    onChange={(e) => setRoutineForm({ ...routineForm, room: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                  Topic / Lecture Focus *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sreedhar Acharya derivation and Board 10-year question solving"
                  value={routineForm.topic}
                  onChange={(e) => setRoutineForm({ ...routineForm, topic: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#B83B0E] hover:bg-[#9E2E09] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>Publish Schedule to Routine</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
