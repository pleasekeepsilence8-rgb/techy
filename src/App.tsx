import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NotesRepository } from './components/NotesRepository';
import { RoutineManager } from './components/RoutineManager';
import { GuardianDashboard } from './components/GuardianDashboard';
import { AdminTeacherPortal } from './components/AdminTeacherPortal';
import { AboutAndContact } from './components/AboutAndContact';
import { Footer } from './components/Footer';
import {
  INITIAL_STUDY_NOTES,
  INITIAL_ROUTINE,
  INITIAL_EXAMS,
  INITIAL_TASKS,
  INITIAL_STUDENTS,
} from './data/mockData';
import { NoteItem, RoutineSlot, PersonalTask, StudentProfile, SubjectType } from './types';
import { X, CheckCircle2, Send, GraduationCap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Notes state with LocalStorage persistence
  const [notes, setNotes] = useState<NoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('techno_institute_notes');
      return saved ? JSON.parse(saved) : INITIAL_STUDY_NOTES;
    } catch {
      return INITIAL_STUDY_NOTES;
    }
  });

  // Routine state with LocalStorage persistence
  const [routineSlots, setRoutineSlots] = useState<RoutineSlot[]>(() => {
    try {
      const saved = localStorage.getItem('techno_institute_routine');
      return saved ? JSON.parse(saved) : INITIAL_ROUTINE;
    } catch {
      return INITIAL_ROUTINE;
    }
  });

  // Tasks state with LocalStorage persistence
  const [tasks, setTasks] = useState<PersonalTask[]>(() => {
    try {
      const saved = localStorage.getItem('techno_institute_tasks');
      return saved ? JSON.parse(saved) : INITIAL_TASKS;
    } catch {
      return INITIAL_TASKS;
    }
  });

  // Students state with LocalStorage persistence
  const [students, setStudents] = useState<StudentProfile[]>(() => {
    try {
      const saved = localStorage.getItem('techno_institute_students');
      return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
    } catch {
      return INITIAL_STUDENTS;
    }
  });

  const [selectedStudentId, setSelectedStudentId] = useState<string>(
    'std-ayan-mukhopadhyay'
  );

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('techno_institute_notes', JSON.stringify(notes));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [notes]);

  useEffect(() => {
    try {
      localStorage.setItem('techno_institute_routine', JSON.stringify(routineSlots));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [routineSlots]);

  useEffect(() => {
    try {
      localStorage.setItem('techno_institute_tasks', JSON.stringify(tasks));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [tasks]);

  useEffect(() => {
    try {
      localStorage.setItem('techno_institute_students', JSON.stringify(students));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [students]);

  // Handlers
  const handleAddNote = (newNote: NoteItem) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleAddRoutineSlot = (newSlot: RoutineSlot) => {
    setRoutineSlots((prev) => [...prev, newSlot]);
  };

  const handleSaveTasks = (newTasks: PersonalTask[]) => {
    setTasks(newTasks);
  };

  const handleUpdateStudentMarks = (
    studentId: string,
    subject: SubjectType,
    marks: number,
    remarks: string
  ) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id !== studentId) return student;

        // Check if subject exists
        const subjectExists = student.subjectsMarks.some((s) => s.subject === subject);
        let updatedSubjectMarks = [...student.subjectsMarks];

        const grade =
          marks >= 90
            ? 'AA (Outstanding)'
            : marks >= 80
            ? 'A+ (Excellent)'
            : marks >= 70
            ? 'A (Very Good)'
            : 'B+ (Good)';

        if (subjectExists) {
          updatedSubjectMarks = updatedSubjectMarks.map((s) =>
            s.subject === subject
              ? {
                  ...s,
                  marksObtained: marks,
                  grade,
                  teacherFeedback: remarks,
                }
              : s
          );
        } else {
          updatedSubjectMarks.push({
            subject,
            marksObtained: marks,
            maxMarks: 100,
            classAverage: 70,
            highestMarks: Math.max(marks, 92),
            grade,
            teacherFeedback: remarks,
          });
        }

        // Recalculate aggregate percentage
        const totalMarksObtained = updatedSubjectMarks.reduce(
          (acc, cur) => acc + cur.marksObtained,
          0
        );
        const newAggregate =
          Math.round((totalMarksObtained / (updatedSubjectMarks.length * 100)) * 10000) / 100;

        // Add new teacher remark entry
        const newRemark = {
          id: `rem-${Date.now()}`,
          date: new Date().toISOString().split('T')[0],
          teacherName: 'Assigned Department Head',
          designation: 'Senior Faculty',
          subject,
          remark: remarks,
          category: marks >= 85 ? ('Commendable' as const) : ('Needs Focus' as const),
        };

        return {
          ...student,
          aggregatePercentage: newAggregate,
          subjectsMarks: updatedSubjectMarks,
          teacherRemarks: [newRemark, ...student.teacherRemarks],
        };
      })
    );
  };

  // Modal Admission Form state
  const [modalFormData, setModalFormData] = useState({
    name: '',
    phone: '',
    email: '',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    notes: '',
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
    setTimeout(() => {
      setModalSubmitted(false);
      setEnquiryModalOpen(false);
      setModalFormData({
        name: '',
        phone: '',
        email: '',
        board: 'WBCHSE',
        classLevel: 'Class 10',
        notes: '',
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C1D11] selection:bg-[#B83B0E] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onEnquireClick={() => setEnquiryModalOpen(true)}
      />

      {/* Main Content Router / View */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onNavigate={setActiveTab}
              enquiryModalOpen={enquiryModalOpen}
              setEnquiryModalOpen={setEnquiryModalOpen}
            />
            <NotesRepository notes={notes.slice(0, 6)} />
            <div className="text-center pb-12 bg-[#FDFBF7]">
              <button
                onClick={() => setActiveTab('notes')}
                className="px-6 py-2.5 bg-[#2C1D11] text-amber-200 text-xs font-bold rounded-lg shadow-sm hover:bg-[#B83B0E] hover:text-white transition-colors cursor-pointer"
              >
                Explore All {notes.length} Study Notes &amp; Previous Year Papers &rarr;
              </button>
            </div>
            <RoutineManager
              routineSlots={routineSlots}
              exams={INITIAL_EXAMS}
              tasks={tasks}
              onSaveTasks={handleSaveTasks}
            />
            <GuardianDashboard
              students={students}
              selectedStudentId={selectedStudentId}
              onSelectStudent={setSelectedStudentId}
            />
            <AboutAndContact />
          </>
        )}

        {activeTab === 'notes' && <NotesRepository notes={notes} />}

        {activeTab === 'routine' && (
          <RoutineManager
            routineSlots={routineSlots}
            exams={INITIAL_EXAMS}
            tasks={tasks}
            onSaveTasks={handleSaveTasks}
          />
        )}

        {activeTab === 'guardian' && (
          <GuardianDashboard
            students={students}
            selectedStudentId={selectedStudentId}
            onSelectStudent={setSelectedStudentId}
          />
        )}

        {activeTab === 'admin' && (
          <AdminTeacherPortal
            onAddNote={handleAddNote}
            onAddRoutineSlot={handleAddRoutineSlot}
            students={students}
            onUpdateStudentMarks={handleUpdateStudentMarks}
          />
        )}

        {activeTab === 'about' && <AboutAndContact />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={setActiveTab} />

      {/* Modal: Quick Admission Enquiry */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl border border-[#E6DCB8] w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 bg-[#FDFBF7] border-b border-[#E6DCB8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#B83B0E]" />
                <h3 className="font-display text-base font-bold text-[#2C1D11]">
                  Techno Institute &bull; Admission Enquiry 2026-27
                </h3>
              </div>
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="p-1 rounded-lg text-[#7A695B] hover:text-[#2C1D11] hover:bg-[#EFE7DC]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {modalSubmitted ? (
                <div className="p-6 bg-[#F4F9F5] border border-[#A5D6B4] rounded-xl text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#1E7E44] mx-auto mb-2" />
                  <h4 className="font-bold text-base text-[#1E7E44]">
                    Enquiry Submitted!
                  </h4>
                  <p className="text-xs text-[#3A6046] mt-2">
                    Our academic counselor will contact you shortly with the syllabus, batch schedule, and fee prospectus.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayan Mukhopadhyay"
                      value={modalFormData.name}
                      onChange={(e) => setModalFormData({ ...modalFormData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        value={modalFormData.phone}
                        onChange={(e) => setModalFormData({ ...modalFormData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="guardian@domain.com"
                        value={modalFormData.email}
                        onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                        Curriculum Board
                      </label>
                      <select
                        value={modalFormData.board}
                        onChange={(e) => setModalFormData({ ...modalFormData, board: e.target.value })}
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
                        value={modalFormData.classLevel}
                        onChange={(e) => setModalFormData({ ...modalFormData, classLevel: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                      >
                        {['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                          <option key={cls} value={cls}>{cls}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      Academic Aspirations or Inquiries
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific batch timings or subject requirements..."
                      value={modalFormData.notes}
                      onChange={(e) => setModalFormData({ ...modalFormData, notes: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#B83B0E] hover:bg-[#9E2E09] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Admission Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
