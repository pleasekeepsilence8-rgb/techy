export type BoardType = 'CBSE' | 'ICSE' | 'WBCHSE';

export type ClassLevel = 
  | 'Class 5'
  | 'Class 6'
  | 'Class 7'
  | 'Class 8'
  | 'Class 9'
  | 'Class 10'
  | 'Class 11'
  | 'Class 12';

export type SubjectType =
  | 'Mathematics'
  | 'Physics'
  | 'Chemistry'
  | 'Biology'
  | 'Computer Science'
  | 'English'
  | 'Bengali'
  | 'History'
  | 'Geography';

export interface NoteItem {
  id: string;
  title: string;
  bengaliTitle?: string;
  board: BoardType;
  classLevel: ClassLevel;
  subject: SubjectType;
  chapter: string;
  author: string;
  authorDesignation: string;
  uploadDate: string;
  pages: number;
  fileSize: string;
  downloadsCount: number;
  description: string;
  pdfUrl?: string;
  keyTopics: string[];
  sampleQuestionsSnippet?: string;
}

export interface RoutineSlot {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  timeSlot: string;
  board: BoardType;
  classLevel: ClassLevel;
  subject: SubjectType;
  teacher: string;
  room: string;
  batchType: 'Regular Class' | 'Doubt Clearing' | 'Lab/Practical' | 'Special Board Exam Prep';
  topic: string;
}

export interface ExamEvent {
  id: string;
  title: string;
  board: BoardType;
  classLevel: ClassLevel;
  subject: SubjectType;
  date: string;
  time: string;
  duration: string;
  totalMarks: number;
  syllabus: string;
  hall: string;
}

export interface PersonalTask {
  id: string;
  title: string;
  subject: SubjectType;
  deadline: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  notes?: string;
}

export interface SubjectMarkRecord {
  subject: SubjectType;
  marksObtained: number;
  maxMarks: number;
  classAverage: number;
  highestMarks: number;
  grade: string;
  teacherFeedback: string;
}

export interface QuizRecord {
  id: string;
  testName: string;
  date: string;
  subject: SubjectType;
  score: number;
  total: number;
  percentile: number;
}

export interface TeacherRemark {
  id: string;
  date: string;
  teacherName: string;
  designation: string;
  subject: SubjectType;
  remark: string;
  category: 'Commendable' | 'Needs Focus' | 'General Guidance';
}

export interface AttendanceRecord {
  month: string;
  presentDays: number;
  totalDays: number;
  percentage: number;
}

export interface StudentProfile {
  id: string;
  name: string;
  bengaliName?: string;
  rollNo: string;
  avatarSeed: string;
  board: BoardType;
  classLevel: ClassLevel;
  section: string;
  academicYear: string;
  stream?: string;
  guardianName: string;
  guardianRelation: string;
  guardianPhone: string;
  overallAttendance: number;
  classRank: number;
  totalBatchStudents: number;
  aggregatePercentage: number;
  subjectsMarks: SubjectMarkRecord[];
  recentQuizzes: QuizRecord[];
  teacherRemarks: TeacherRemark[];
  monthlyAttendance: AttendanceRecord[];
}
