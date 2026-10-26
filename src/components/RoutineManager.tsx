import React, { useState } from 'react';
import { RoutineSlot, ExamEvent, PersonalTask, BoardType, ClassLevel } from '../types';
import { AlponaDivider } from './AlponaMotifs';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Plus,
  Trash2,
  CheckCircle,
  Circle,
  Printer,
  CalendarDays,
  Target,
  Sparkles,
  AlertCircle,
} from 'lucide-react';

interface RoutineManagerProps {
  routineSlots: RoutineSlot[];
  exams: ExamEvent[];
  tasks: PersonalTask[];
  onSaveTasks: (tasks: PersonalTask[]) => void;
}

export const RoutineManager: React.FC<RoutineManagerProps> = ({
  routineSlots,
  exams,
  tasks,
  onSaveTasks,
}) => {
  const [activeDay, setActiveDay] = useState<string>('Monday');
  const [selectedBoard, setSelectedBoard] = useState<BoardType | 'All'>('WBCHSE');
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'All'>('Class 10');
  const [activeTab, setActiveTab] = useState<'routine' | 'exams' | 'tasks'>('routine');

  // New task form state
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskSubject, setNewTaskSubject] = useState<any>('Mathematics');
  const [newTaskDeadline, setNewTaskDeadline] = useState('2026-11-05');
  const [newTaskPriority, setNewTaskPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [showTaskForm, setShowTaskForm] = useState(false);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Filter routine slots
  const filteredRoutine = routineSlots.filter((slot) => {
    if (slot.day !== activeDay) return false;
    if (selectedBoard !== 'All' && slot.board !== selectedBoard) return false;
    if (selectedClass !== 'All' && slot.classLevel !== selectedClass) return false;
    return true;
  });

  // Task Handlers
  const handleToggleTask = (taskId: string) => {
    const updated = tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t));
    onSaveTasks(updated);
  };

  const handleDeleteTask = (taskId: string) => {
    const updated = tasks.filter((t) => t.id !== taskId);
    onSaveTasks(updated);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: PersonalTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle.trim(),
      subject: newTaskSubject,
      deadline: newTaskDeadline,
      completed: false,
      priority: newTaskPriority,
    };
    onSaveTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    setShowTaskForm(false);
  };

  const handlePrintRoutine = () => {
    window.print();
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <section id="routine-manager" className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B83B0E]">
            Academic Calendar &amp; Scheduling · সময়সারণী
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2C1D11] mt-1">
            Routine &amp; Timetable Manager
          </h2>
          <p className="text-sm text-[#5A4738] mt-2">
            Weekly live coaching schedule, upcoming Board simulation test dates, and personalized study targets.
          </p>
          <AlponaDivider className="my-4" color="#B83B0E" />
        </div>

        {/* Top Segmented Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-[#F4EDE2] border border-[#E6DCB8] rounded-xl gap-1">
            <button
              onClick={() => setActiveTab('routine')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'routine'
                  ? 'bg-white text-[#B83B0E] shadow-xs'
                  : 'text-[#5A4738] hover:text-[#2C1D11]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Weekly Class Timetable</span>
            </button>
            <button
              onClick={() => setActiveTab('exams')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'exams'
                  ? 'bg-white text-[#B83B0E] shadow-xs'
                  : 'text-[#5A4738] hover:text-[#2C1D11]'
              }`}
            >
              <CalendarDays className="w-4 h-4" />
              <span>Exam Schedule ({exams.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'tasks'
                  ? 'bg-white text-[#B83B0E] shadow-xs'
                  : 'text-[#5A4738] hover:text-[#2C1D11]'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Student Goal Tracker</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-[#B83B0E] text-white rounded-full">
                {completedCount}/{tasks.length}
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: WEEKLY ROUTINE */}
        {activeTab === 'routine' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-xl border border-[#E6DCB8] shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-[#5A4738]">Board:</span>
                  <select
                    value={selectedBoard}
                    onChange={(e) => setSelectedBoard(e.target.value as any)}
                    className="px-2.5 py-1.5 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg text-[#2C1D11] focus:ring-1 focus:ring-[#B83B0E]"
                  >
                    <option value="All">All Boards</option>
                    <option value="WBCHSE">WBCHSE</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-[#5A4738]">Class:</span>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value as any)}
                    className="px-2.5 py-1.5 text-xs bg-[#FDFBF7] border border-[#D9CBBA] rounded-lg text-[#2C1D11] focus:ring-1 focus:ring-[#B83B0E]"
                  >
                    <option value="All">All Classes</option>
                    <option value="Class 10">Class 10 (Madhyamik / ICSE)</option>
                    <option value="Class 12">Class 12 (Higher Secondary)</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 8">Class 8</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handlePrintRoutine}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#2C1D11] bg-[#F6F1EA] hover:bg-[#EFE7DC] border border-[#E0D4B2] rounded-lg transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#B83B0E]" />
                <span>Print Timetable</span>
              </button>
            </div>

            {/* Day of Week Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              {daysOfWeek.map((day) => {
                const countForDay = routineSlots.filter((s) => s.day === day).length;
                return (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      activeDay === day
                        ? 'bg-[#B83B0E] text-white shadow-xs'
                        : 'bg-white border border-[#E6DCB8] text-[#5A4738] hover:bg-[#FBEFEA] hover:text-[#B83B0E]'
                    }`}
                  >
                    {day}
                    <span className="ml-1.5 opacity-80 text-[10px]">({countForDay})</span>
                  </button>
                );
              })}
            </div>

            {/* Schedule List */}
            {filteredRoutine.length === 0 ? (
              <div className="bg-white rounded-xl border border-[#E6DCB8] p-10 text-center">
                <Clock className="w-10 h-10 text-[#7A695B]/40 mx-auto mb-2" />
                <h4 className="font-display text-base font-bold text-[#2C1D11]">
                  No Classes Scheduled on {activeDay} for Selected Filter
                </h4>
                <p className="text-xs text-[#7A695B] mt-1">
                  Try switching the board or class level, or select another day of the week.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredRoutine.map((slot) => (
                  <div
                    key={slot.id}
                    className="bg-white rounded-xl border border-[#E6DCB8] p-5 shadow-xs hover:border-[#B83B0E]/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Time & Board Info */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FBEFEA] text-[#B83B0E] px-3.5 py-2 rounded-lg text-center shrink-0 border border-[#F3D5C9]">
                        <Clock className="w-4 h-4 mx-auto mb-1 text-[#B83B0E]" />
                        <div className="text-xs font-bold whitespace-nowrap tabular-nums">
                          {slot.timeSlot}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium text-[#7A695B] mb-1">
                          <span className="text-[#B83B0E] font-bold">{slot.board}</span>
                          <span>·</span>
                          <span>{slot.classLevel}</span>
                          <span>·</span>
                          <span className="px-2 py-0.5 bg-[#F6F1EA] text-[#2C1D11] rounded text-[11px] font-semibold">
                            {slot.batchType}
                          </span>
                        </div>

                        <h3 className="font-display text-base font-bold text-[#2C1D11]">
                          {slot.subject}: {slot.topic}
                        </h3>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-[#5A4738] mt-2">
                          <div className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-[#B83B0E]" />
                            <span className="font-medium">{slot.teacher}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#D4AC0D]" />
                            <span>{slot.room}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="self-end md:self-center shrink-0">
                      <span className="text-xs px-3 py-1.5 bg-[#F4F9F5] text-[#1E7E44] border border-[#C5E8D1] rounded-lg font-semibold inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#1E7E44]" />
                        Active Batch
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: EXAM SCHEDULE */}
        {activeTab === 'exams' && (
          <div className="space-y-6">
            <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <strong className="font-semibold block mb-0.5">Official Techno Institute Examination Guidelines:</strong>
                All students must report to their allotted Examination Hall at least 20 minutes prior with Institute ID card and geometry instrument box. Negative marks apply to competitive format papers.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {exams.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-white rounded-xl border border-[#E6DCB8] p-5 shadow-xs hover:border-[#B83B0E] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#7A695B] mb-2 font-medium">
                      <div className="flex items-center gap-2">
                        <span className="text-[#B83B0E] font-bold">{exam.board}</span>
                        <span>·</span>
                        <span>{exam.classLevel}</span>
                        <span>·</span>
                        <span className="font-semibold text-[#2C1D11]">{exam.subject}</span>
                      </div>
                      <span className="text-xs font-bold text-[#D4AC0D] bg-[#FDF8E8] px-2.5 py-0.5 rounded border border-[#F2E1A6] tabular-nums">
                        {exam.totalMarks} Marks
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-[#2C1D11] leading-snug">
                      {exam.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs bg-[#FAF7F2] p-3 rounded-lg border border-[#EFE7DC] mt-3">
                      <div>
                        <span className="text-[#7A695B] block text-[11px]">Date &amp; Time:</span>
                        <strong className="text-[#2C1D11]">{exam.date}</strong>
                        <div className="text-[#5A4738] text-[11px]">{exam.time}</div>
                      </div>
                      <div>
                        <span className="text-[#7A695B] block text-[11px]">Venue &amp; Duration:</span>
                        <strong className="text-[#2C1D11]">{exam.hall}</strong>
                        <div className="text-[#5A4738] text-[11px]">{exam.duration}</div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-[11px] font-semibold text-[#7A695B] uppercase tracking-wider mb-1">
                        Syllabus Covered:
                      </div>
                      <p className="text-xs text-[#5A4738] leading-relaxed">
                        {exam.syllabus}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E6DCB8] flex items-center justify-between text-xs">
                    <span className="text-[#7A695B]">Hall Admit Pass: Mandatory</span>
                    <span className="font-semibold text-[#B83B0E]">Room Seat # Assigned</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PERSONAL TASK / STUDY GOAL MANAGER */}
        {activeTab === 'tasks' && (
          <div className="space-y-6">
            {/* Task Progress Meter */}
            <div className="bg-white p-5 rounded-xl border border-[#E6DCB8] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E6DCB8]">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#2C1D11]">
                    Student Personal Goal Tracker
                  </h3>
                  <p className="text-xs text-[#7A695B]">
                    Plan weekly problem-sets, formula revisions, and mock drills. Persists automatically to your browser storage.
                  </p>
                </div>
                <button
                  onClick={() => setShowTaskForm(!showTaskForm)}
                  className="px-4 py-2 bg-[#B83B0E] hover:bg-[#9E2E09] text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-xs cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>{showTaskForm ? 'Cancel' : 'Add New Study Goal'}</span>
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#5A4738]">Completion Velocity</span>
                  <span className="font-bold text-[#B83B0E] tabular-nums">
                    {completedCount} of {tasks.length} Goals Achieved ({progressPercent}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#F6F1EA] rounded-full overflow-hidden border border-[#E6DCB8]/50">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4AC0D] to-[#B83B0E] transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Add Task Form */}
            {showTaskForm && (
              <form
                onSubmit={handleAddTask}
                className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E0D4B2] space-y-3"
              >
                <div className="font-display text-sm font-bold text-[#2C1D11]">
                  Create New Academic Milestone
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Solve 10 Trigonometry board questions from previous years..."
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D9CBBA] rounded-lg focus:ring-2 focus:ring-[#B83B0E] text-[#2C1D11]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#5A4738] mb-1">
                      Subject
                    </label>
                    <select
                      value={newTaskSubject}
                      onChange={(e) => setNewTaskSubject(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-[#D9CBBA] rounded-lg"
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
                    <label className="block text-[11px] font-semibold text-[#5A4738] mb-1">
                      Target Target Date
                    </label>
                    <input
                      type="date"
                      value={newTaskDeadline}
                      onChange={(e) => setNewTaskDeadline(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-[#D9CBBA] rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#5A4738] mb-1">
                      Priority Level
                    </label>
                    <select
                      value={newTaskPriority}
                      onChange={(e) => setNewTaskPriority(e.target.value as any)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-[#D9CBBA] rounded-lg"
                    >
                      <option value="High">High (Immediate)</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowTaskForm(false)}
                    className="px-3 py-1.5 text-xs text-[#5A4738] hover:bg-[#EFE7DC] rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs font-semibold bg-[#B83B0E] text-white rounded-lg shadow-xs hover:bg-[#9E2E09]"
                  >
                    Save Goal
                  </button>
                </div>
              </form>
            )}

            {/* Task Item List */}
            <div className="space-y-2.5">
              {tasks.length === 0 ? (
                <div className="bg-white rounded-xl border border-[#E6DCB8] p-8 text-center text-xs text-[#7A695B]">
                  No study goals added yet. Click &quot;Add New Study Goal&quot; above to begin tracking.
                </div>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`bg-white rounded-xl border transition-all p-4 flex items-center justify-between gap-3 shadow-2xs ${
                      task.completed
                        ? 'border-[#C5E8D1] bg-[#F7FCF9]'
                        : 'border-[#E6DCB8] hover:border-[#B83B0E]/60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => handleToggleTask(task.id)}
                        className="mt-0.5 text-[#B83B0E] focus:outline-none cursor-pointer"
                        aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
                      >
                        {task.completed ? (
                          <CheckCircle className="w-5 h-5 text-[#1E7E44]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#7A695B] hover:text-[#B83B0E]" />
                        )}
                      </button>

                      <div>
                        <div
                          className={`text-sm font-semibold text-[#2C1D11] ${
                            task.completed ? 'line-through text-[#7A695B]' : ''
                          }`}
                        >
                          {task.title}
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-[#7A695B] mt-1">
                          <span className="font-medium text-[#B83B0E]">{task.subject}</span>
                          <span>·</span>
                          <span>Due: {task.deadline}</span>
                          <span>·</span>
                          <span
                            className={`font-semibold ${
                              task.priority === 'High'
                                ? 'text-red-700'
                                : task.priority === 'Medium'
                                ? 'text-amber-700'
                                : 'text-slate-600'
                            }`}
                          >
                            {task.priority} Priority
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="p-1.5 text-[#7A695B] hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      aria-label="Delete task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
