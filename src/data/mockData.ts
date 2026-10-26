import { NoteItem, RoutineSlot, ExamEvent, PersonalTask, StudentProfile } from '../types';

export const INITIAL_STUDY_NOTES: NoteItem[] = [
  // WBCHSE Science & Arts
  {
    id: 'note-wbchse-10-math',
    title: 'Quadratic Equations with One Variable (একচলবিশিষ্ট দ্বিঘাত সমীকরণ)',
    bengaliTitle: 'একচলবিশিষ্ট দ্বিঘাত সমীকরণ ও শ্রীধর আচার্যের সূত্র',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapter: 'Chapter 1: Quadratic Equations',
    author: 'Prof. Somnath Banerjee',
    authorDesignation: 'M.Sc (Jadavpur), 22 yrs WB Board Ex-Examiner',
    uploadDate: '2026-10-18',
    pages: 18,
    fileSize: '3.4 MB',
    downloadsCount: 428,
    description: 'Comprehensive derivation of Sreedhar Acharya formula, nature of roots (discriminant b² - 4ac analysis), Madhyamik 10-year previous questions solved with step-by-step marking rubrics.',
    keyTopics: ['Discriminant conditions', 'Formation of equations from roots', 'Real-life word problems', 'Madhyamik 2015-2025 analysis'],
    sampleQuestionsSnippet: '1. If the roots of ax² + bx + c = 0 are in ratio m:n, prove that mnb² = (m+n)²ac. [Madhyamik 2021]'
  },
  {
    id: 'note-wbchse-10-phy',
    title: 'Behavior of Gases & Chemical Calculations (গ্যাসের আচরণ ও রাসায়নিক গণনা)',
    bengaliTitle: 'গ্যাসের আচরণ: বয়েল ও চার্লসের সূত্রাবলী',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Physics',
    chapter: 'Unit 2: Thermal Physics & Gas Laws',
    author: 'Dr. Subir Roychoudhury',
    authorDesignation: 'Ph.D (Presidency College / CU), Senior Physical Science Faculty',
    uploadDate: '2026-10-14',
    pages: 22,
    fileSize: '4.1 MB',
    downloadsCount: 512,
    description: 'Boyle’s Law, Charles’s Law, absolute zero temperature graphical analysis on Kelvin scale, Ideal Gas Equation (PV = nRT) derivations, and numerical problem bank for WBCHSE Madhyamik.',
    keyTopics: ['P-V & V-T isotherm curves', 'Avogadro’s Hypothesis', 'Gram-molecular volume concepts', 'Vapour density vs molecular mass relation'],
    sampleQuestionsSnippet: 'Show graphically how PV varies with P at constant temperature. What is the slope of the curve? [3 Marks]'
  },
  {
    id: 'note-wbchse-10-ben',
    title: 'Bengali Literature: "বহুরূপী" (সুবোধ ঘোষ) & সাধু-চলিত রীতি ব্যাকরণ',
    bengaliTitle: 'সুবোধ ঘোষের "বহুরূপী" ছোটগল্পের চরিত্র বিশ্লেষণ ও সমাস',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Bengali',
    chapter: 'সাহিত্য সঞ্চয়ন: গদ্যাংশ',
    author: 'Dr. Debjani Mukherjee',
    authorDesignation: 'M.A., Ph.D (Calcutta University), Gold Medalist',
    uploadDate: '2026-10-10',
    pages: 14,
    fileSize: '2.8 MB',
    downloadsCount: 389,
    description: 'হরিদার চরিত্র বিশ্লেষণ, বৈরাগী সাজে জগদীশবাবুর বাড়ি যাওয়ার দৃশ্যটির তাৎপর্য, বঙ্গানুবাদ নির্দেশিকা ও দ্বন্দ্ব, কর্মধারয়, তৎপুরুষ সমাসের নিয়মাবলী।',
    keyTopics: ['হরিদার চারিত্রিক দ্বন্দ্ব', 'জগদীশবাবুর রূপোর থালা ও সন্ন্যাসী প্রসঙ্গ', 'কারক ও বিভক্তি নির্ণয়', 'প্রতিবেদন রচনা নির্দেশিকা'],
    sampleQuestionsSnippet: '"হরিদার জীবনে সত্যিই একটা নাটকীয় বৈচিত্র্য আছে"— হরিদার জীবনের নাটকীয় বৈচিত্র্যের পরিচয় দাও। [৫ নম্বর]'
  },
  {
    id: 'note-wbchse-10-bio',
    title: 'Cell Division, Reproduction & Chromosome Anatomy (কোষ বিভাজন ও ক্রোমোজোম)',
    bengaliTitle: 'কোষ চক্র, মাইটোসিস ও মিয়োসিস বিভাজন তুলনামূলক চার্ট',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Biology',
    chapter: 'Unit 2: Continuity of Life',
    author: 'Dr. Ananya Sen',
    authorDesignation: 'M.Sc, M.Ed (Presidency University)',
    uploadDate: '2026-10-05',
    pages: 26,
    fileSize: '5.2 MB',
    downloadsCount: 604,
    description: 'High-resolution diagrammatic guide on Chromosome morphology (centromere, telomere), Prophase to Telophase stages in animal and plant cells, and genetic crossover in Meiosis-I.',
    keyTopics: ['Cell cycle G1, S, G2 checkpoints', 'Cytokinesis differences', 'Significance of Meiosis in variation', 'Madhyamik schematic diagrams'],
    sampleQuestionsSnippet: 'Draw a neat labelled diagram of Metaphase stage of mitotic cell division in a plant cell. [5 Marks]'
  },
  {
    id: 'note-wbchse-12-chem',
    title: 'Solid State & Solutions: Colligative Properties (দ্রবণ ও কঠিন অবস্থা)',
    bengaliTitle: 'দ্রবণের সংখ্যাগত ধর্ম ও ভ্যান্ট হফ গুণক',
    board: 'WBCHSE',
    classLevel: 'Class 12',
    subject: 'Chemistry',
    chapter: 'Unit 1 & 2: Physical Chemistry',
    author: 'Prof. Anirban Ganguly',
    authorDesignation: 'M.Sc (IIT KGP), 18 yrs Board Coaching Veteran',
    uploadDate: '2026-09-28',
    pages: 30,
    fileSize: '6.4 MB',
    downloadsCount: 745,
    description: 'Raoult’s Law deviations, Osmotic Pressure, elevation in boiling point, depression in freezing point, Van’t Hoff factor anomalies, and 50+ WBCHSE Higher Secondary standard numericals.',
    keyTopics: ['Non-ideal solution graphs', 'Reverse osmosis application', 'Abnormal molecular weight calculations', 'HS 2018-2025 question bank'],
    sampleQuestionsSnippet: 'Calculate the boiling point elevation of 0.1 molal BaCl2 aqueous solution assuming 85% dissociation. (Kb = 0.52 K kg/mol) [3 Marks]'
  },

  // CBSE Science, Math & Humanities
  {
    id: 'note-cbse-10-math',
    title: 'CBSE Class 10: Real Numbers & Polynomials Master Sheet',
    bengaliTitle: 'রিয়েল নাম্বারস ও পলিনোমিয়ালসের সূত্রাবলি',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    chapter: 'Units 1 & 2: Number Systems & Algebra',
    author: 'Prof. Somnath Banerjee',
    authorDesignation: 'M.Sc (Jadavpur)',
    uploadDate: '2026-10-12',
    pages: 16,
    fileSize: '2.9 MB',
    downloadsCount: 680,
    description: 'Fundamental Theorem of Arithmetic, irrationality proofs of √2, √3, 3+2√5, geometric meaning of zeroes of polynomials, and relationship between zeroes and coefficients with CBSE Exemplar problems.',
    keyTopics: ['Irrationality proofs', 'Zeroes of quadratic & cubic polynomials', 'Case-study based questions', 'CBSE 2024-2025 Board questions'],
    sampleQuestionsSnippet: 'Prove that √5 is irrational. Hence show that (3 + 2√5) is also irrational. [CBSE 2023 3-Marks]'
  },
  {
    id: 'note-cbse-12-phy',
    title: 'CBSE Class 12: Electrostatics & Current Electricity (NCERT Drill)',
    bengaliTitle: 'ইলেকট্রোস্ট্যাটিক্স ও কারেন্ট ইলেকট্রিসিটি নোটস',
    board: 'CBSE',
    classLevel: 'Class 12',
    subject: 'Physics',
    chapter: 'Chapters 1-3: Electrostatics & Circuits',
    author: 'Dr. Subir Roychoudhury',
    authorDesignation: 'Ph.D (CU / Presidency)',
    uploadDate: '2026-10-02',
    pages: 34,
    fileSize: '7.8 MB',
    downloadsCount: 890,
    description: 'Gauss’s Theorem applications, electric dipole in uniform field, capacitors in series-parallel with dielectrics, Kirchhoff’s laws loop calculations, and Wheatstone bridge sensitivity analysis.',
    keyTopics: ['Gauss Law cylindrical and planar symmetry', 'Dielectric polarization', 'Potentiometer principles', 'Assertion-Reasoning sets'],
    sampleQuestionsSnippet: 'Derive expression for electric field intensity at a point on the equatorial line of an electric dipole. [CBSE 5 Marks]'
  },
  {
    id: 'note-cbse-10-eng',
    title: 'First Flight: "A Letter to God" & "Nelson Mandela: Long Walk to Freedom"',
    bengaliTitle: 'ইংরেজি সাহিত্য ও রচনা কৌশল',
    board: 'CBSE',
    classLevel: 'Class 10',
    subject: 'English',
    chapter: 'Literature Reader Prose 1 & 2',
    author: 'Mrs. Sharmistha Sen',
    authorDesignation: 'M.A. English (Jadavpur), Cambridge Certified Trainer',
    uploadDate: '2026-09-22',
    pages: 12,
    fileSize: '1.9 MB',
    downloadsCount: 310,
    description: 'Character sketch of Lencho, situational irony notes, Mandela’s philosophical reflections on freedom and courage, with formal letter writing (Letter to Editor / Complaint) templates.',
    keyTopics: ['Irony of the post office employees', 'Mandela’s definition of courage', 'Formal letter format 2026', 'Reference to context MCQs'],
    sampleQuestionsSnippet: 'Why did Lencho call the post office employees "a bunch of crooks"? Analyze the psychological irony. [4 Marks]'
  },
  {
    id: 'note-cbse-11-cs',
    title: 'Python Programming Essentials & Data Handling (Lists, Tuples, Dictionaries)',
    bengaliTitle: 'পাইথন প্রোগ্রামিং ও ডাটা হ্যান্ডলিং গাইড',
    board: 'CBSE',
    classLevel: 'Class 11',
    subject: 'Computer Science',
    chapter: 'Unit 2: Computational Thinking & Programming',
    author: 'Er. Ritwik Chatterjee',
    authorDesignation: 'B.Tech (IIEST Shibpur), Senior Coding Faculty',
    uploadDate: '2026-10-09',
    pages: 24,
    fileSize: '3.1 MB',
    downloadsCount: 470,
    description: 'Mutable vs immutable structures, slicing mechanisms, nested dictionary traversal, list comprehensions, algorithms for sorting (Bubble, Insertion), and code tracing outputs.',
    keyTopics: ['List memory referencing', 'Dictionary comprehension', 'Time complexity basics', 'Dry run and bug spotting snippets'],
    sampleQuestionsSnippet: 'Write a Python program to read a text file and count the frequency of 4-letter words ignoring case.'
  },

  // ICSE Class 8 - 10
  {
    id: 'note-icse-10-chem',
    title: 'ICSE Chemistry: Periodic Properties, Chemical Bonding & Metallurgy',
    bengaliTitle: 'আইসিএসই রসায়ন: পর্যায় সারণি ও ধাতুবিদ্যা',
    board: 'ICSE',
    classLevel: 'Class 10',
    subject: 'Chemistry',
    chapter: 'Chapters 1, 2 & 7: Inorganic Chemistry',
    author: 'Prof. Anirban Ganguly',
    authorDesignation: 'M.Sc (IIT KGP)',
    uploadDate: '2026-10-15',
    pages: 28,
    fileSize: '5.6 MB',
    downloadsCount: 520,
    description: 'Periodic trends across periods and down groups (Electronegativity, Ionization Energy, Atomic radii), coordinate covalent bonds in ammonium & hydronium ions, and Hall-Héroult extraction of Aluminium.',
    keyTopics: ['Electron dot diagrams', 'Polar vs non-polar covalent bonds', 'Bayer’s process equations', 'ICSE specimen test paper analysis'],
    sampleQuestionsSnippet: 'Draw the electron-dot structure for hydronium ion (H3O+) indicating the lone pair and coordinate bond. [3 Marks]'
  },
  {
    id: 'note-icse-10-his',
    title: 'ICSE History: First War of Independence 1857 & Mass Movements (1919-1947)',
    bengaliTitle: 'ইতিহাস: ১৮৫৭ সালের মহাবিদ্রোহ ও জাতীয়তাবাদী আন্দোলন',
    board: 'ICSE',
    classLevel: 'Class 10',
    subject: 'History',
    chapter: 'Indian National Movement: Units 1 to 4',
    author: 'Prof. Kalyan Brata Das',
    authorDesignation: 'M.A. History (Calcutta University), Author of Board Reference Text',
    uploadDate: '2026-10-08',
    pages: 20,
    fileSize: '4.3 MB',
    downloadsCount: 395,
    description: 'Causes of the Revolt of 1857 (Military, Religious, Economic, Doctrine of Lapse), Non-Cooperation Movement, Civil Disobedience, Quit India Movement 1942, and Indian Independence Act 1947.',
    keyTopics: ['Enfield rifle cartridge issue', 'Rowlatt Act & Jallianwala Bagh', 'Simon Commission protest', 'Subhas Chandra Bose & INA role'],
    sampleQuestionsSnippet: 'State any four military causes of the First War of Independence 1857. [ICSE 2022 4-Marks]'
  },
  {
    id: 'note-icse-9-geo',
    title: 'ICSE Class 9: Earthquakes, Volcanoes & Weathering of Rocks',
    bengaliTitle: 'ভূগোল: ভূমিকম্প, আগ্নেয়গিরি ও শিলার আববিকার',
    board: 'ICSE',
    classLevel: 'Class 9',
    subject: 'Geography',
    chapter: 'Physical Geography: Landforms',
    author: 'Mrs. Madhuparna Bose',
    authorDesignation: 'M.Sc Geography (Presidency College)',
    uploadDate: '2026-09-18',
    pages: 18,
    fileSize: '3.8 MB',
    downloadsCount: 280,
    description: 'Plate tectonics theory, seismic wave velocity (P-waves vs S-waves), Pacific Ring of Fire volcanic formations, mechanical vs chemical weathering (carbonation, hydration, oxidation).',
    keyTopics: ['Focus vs Epicenter definitions', 'Shield vs Composite volcanoes', 'Biological weathering effects', 'Topographic map legend reading'],
    sampleQuestionsSnippet: 'Explain why S-waves cannot travel through the outer core of the Earth. What does this indicate? [3 Marks]'
  },

  // Lower middle classes (Class 6 - 8)
  {
    id: 'note-wbchse-8-math',
    title: 'Class 8 Mathematics: Factorization & Algebraic Identities (উৎপাদকে বিশ্লেষণ)',
    bengaliTitle: 'বীজগণিত: সূত্র প্রয়োগ ও উৎপাদকে বিশ্লেষণ',
    board: 'WBCHSE',
    classLevel: 'Class 8',
    subject: 'Mathematics',
    chapter: 'অধ্যায় ৫: বীজগাণিতিক সূত্রাবলী',
    author: 'Prof. Somnath Banerjee',
    authorDesignation: 'M.Sc (Jadavpur)',
    uploadDate: '2026-10-01',
    pages: 12,
    fileSize: '2.2 MB',
    downloadsCount: 310,
    description: 'Detailed breakdown of (a+b)², (a-b)², a²-b², and (a+b+c)² formula proofs, middle-term split factoring, and speed calculation shortcuts for junior school competition exams.',
    keyTopics: ['Identity geometric visualizations', 'Middle term split steps', 'Common mistakes guide', 'Practice set with answers'],
    sampleQuestionsSnippet: 'Resolve into factors: x⁴ + 4x²y² + 16y⁴.'
  },
  {
    id: 'note-cbse-6-sci',
    title: 'CBSE Class 6 Science: Food Components, Sorting Materials & Light Shadows',
    bengaliTitle: 'ষষ্ঠ শ্রেণি বিজ্ঞান: পুষ্টি উপাদান ও আলোর প্রতিফলন',
    board: 'CBSE',
    classLevel: 'Class 6',
    subject: 'Biology',
    chapter: 'Chapters 1-3: Foundations of Everyday Science',
    author: 'Dr. Ananya Sen',
    authorDesignation: 'M.Sc, M.Ed',
    uploadDate: '2026-09-15',
    pages: 15,
    fileSize: '3.0 MB',
    downloadsCount: 220,
    description: 'Balanced diet pyramids, carbohydrate/protein tests with iodine & copper sulfate, transparent vs translucent materials, and pinhole camera image characteristics.',
    keyTopics: ['Deficiency diseases chart', 'Opaque objects and shadows', 'Food source classification', 'Fun hands-on home experiments'],
    sampleQuestionsSnippet: 'How will you test for the presence of starch in a given food sample? Describe in 3 steps.'
  }
];

export const INITIAL_ROUTINE: RoutineSlot[] = [
  // Monday
  {
    id: 'rot-mon-1',
    day: 'Monday',
    timeSlot: '04:00 PM - 05:30 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    teacher: 'Prof. Somnath Banerjee',
    room: 'Hall A (Aryabhata Room)',
    batchType: 'Regular Class',
    topic: 'Quadratic Equations: Sreedhar Acharya & Application Problems'
  },
  {
    id: 'rot-mon-2',
    day: 'Monday',
    timeSlot: '05:45 PM - 07:15 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Physics',
    teacher: 'Dr. Subir Roychoudhury',
    room: 'Hall A (Aryabhata Room)',
    batchType: 'Regular Class',
    topic: 'Gas Laws: Boyle & Charles Numerical Drill with Graphs'
  },
  {
    id: 'rot-mon-3',
    day: 'Monday',
    timeSlot: '05:00 PM - 06:30 PM',
    board: 'CBSE',
    classLevel: 'Class 12',
    subject: 'Physics',
    teacher: 'Dr. Subir Roychoudhury',
    room: 'Hall B (Ramanujan Room)',
    batchType: 'Regular Class',
    topic: 'Current Electricity: Kirchhoff Laws in Complex Networks'
  },
  // Tuesday
  {
    id: 'rot-tue-1',
    day: 'Tuesday',
    timeSlot: '04:00 PM - 05:30 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Bengali',
    teacher: 'Dr. Debjani Mukherjee',
    room: 'Hall C (Rabindra Kaksha)',
    batchType: 'Regular Class',
    topic: 'বহুরূপী গল্প বিশ্লেষণ ও সমাস নির্ণয় কৌশল'
  },
  {
    id: 'rot-tue-2',
    day: 'Tuesday',
    timeSlot: '05:45 PM - 07:15 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Biology',
    teacher: 'Dr. Ananya Sen',
    room: 'Bio-Science Seminar Hall',
    batchType: 'Regular Class',
    topic: 'Cell Cycle & Mitosis Stages Lab Demonstration'
  },
  {
    id: 'rot-tue-3',
    day: 'Tuesday',
    timeSlot: '06:00 PM - 07:30 PM',
    board: 'CBSE',
    classLevel: 'Class 12',
    subject: 'Chemistry',
    teacher: 'Prof. Anirban Ganguly',
    room: 'Hall B (Ramanujan Room)',
    batchType: 'Regular Class',
    topic: 'Solutions: Colligative Properties & Van’t Hoff Factor'
  },
  // Wednesday
  {
    id: 'rot-wed-1',
    day: 'Wednesday',
    timeSlot: '04:00 PM - 05:30 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Chemistry',
    teacher: 'Prof. Anirban Ganguly',
    room: 'Hall A (Aryabhata Room)',
    batchType: 'Regular Class',
    topic: 'Periodic Table Trends & Chemical Bonding Equations'
  },
  {
    id: 'rot-wed-2',
    day: 'Wednesday',
    timeSlot: '05:45 PM - 07:00 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    teacher: 'Prof. Somnath Banerjee',
    room: 'Hall A (Aryabhata Room)',
    batchType: 'Doubt Clearing',
    topic: 'Weekly Doubt Solving: Trigonometric Identities & Geometry Theorems'
  },
  // Thursday
  {
    id: 'rot-thu-1',
    day: 'Thursday',
    timeSlot: '04:30 PM - 06:00 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'History',
    teacher: 'Prof. Kalyan Brata Das',
    room: 'Hall C (Rabindra Kaksha)',
    batchType: 'Regular Class',
    topic: 'ইতিহাস: প্রতিরোধ ও বিদ্রোহ—চুয়াড় ও সাঁওতাল বিদ্রোহ'
  },
  {
    id: 'rot-thu-2',
    day: 'Thursday',
    timeSlot: '06:15 PM - 07:30 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Geography',
    teacher: 'Mrs. Madhuparna Bose',
    room: 'Hall C (Rabindra Kaksha)',
    batchType: 'Regular Class',
    topic: 'ভারতের প্রাকৃতিক পরিবেশ: ভূপ্রকৃতি ও নদনদী মানচিত্র চিহ্নিতকরণ'
  },
  // Friday
  {
    id: 'rot-fri-1',
    day: 'Friday',
    timeSlot: '04:00 PM - 05:30 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'English',
    teacher: 'Mrs. Sharmistha Sen',
    room: 'Hall A (Aryabhata Room)',
    batchType: 'Regular Class',
    topic: 'Writing Skills: Formal Letters, Editorial & Process Writing'
  },
  {
    id: 'rot-fri-2',
    day: 'Friday',
    timeSlot: '05:45 PM - 07:15 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Physics',
    teacher: 'Dr. Subir Roychoudhury',
    room: 'Hall A (Aryabhata Room)',
    batchType: 'Special Board Exam Prep',
    topic: 'Light & Optics: Refraction Through Prism & Lenses Formulas'
  },
  // Saturday
  {
    id: 'rot-sat-1',
    day: 'Saturday',
    timeSlot: '02:00 PM - 04:30 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    teacher: 'Prof. Somnath Banerjee',
    room: 'Auditorium Hall',
    batchType: 'Special Board Exam Prep',
    topic: 'Full Syllabus Mock Drill & Speed Problem Solving'
  },
  {
    id: 'rot-sat-2',
    day: 'Saturday',
    timeSlot: '04:45 PM - 06:30 PM',
    board: 'ICSE',
    classLevel: 'Class 10',
    subject: 'Chemistry',
    teacher: 'Prof. Anirban Ganguly',
    room: 'Hall B (Ramanujan Room)',
    batchType: 'Regular Class',
    topic: 'Organic Chemistry: Hydrocarbons, Alkyl Halides & Alcohols'
  },
  // Sunday
  {
    id: 'rot-sun-1',
    day: 'Sunday',
    timeSlot: '09:00 AM - 12:00 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    teacher: 'Evaluation Committee',
    room: 'Examination Wing Hall 1-3',
    batchType: 'Special Board Exam Prep',
    topic: 'Weekly 100-Marks Board Simulation Test Series'
  },
  {
    id: 'rot-sun-2',
    day: 'Sunday',
    timeSlot: '12:30 PM - 02:00 PM',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Physics',
    teacher: 'Dr. Subir Roychoudhury',
    room: 'Physics Lab',
    batchType: 'Lab/Practical',
    topic: 'Practical Demonstration: Verification of Ohm’s Law & Prism Dispersion'
  }
];

export const INITIAL_EXAMS: ExamEvent[] = [
  {
    id: 'exam-1',
    title: 'Madhyamik Full-Length Test Series 2 (WBCHSE Mock)',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    date: '2026-11-08',
    time: '10:00 AM - 01:15 PM',
    duration: '3h 15m',
    totalMarks: 90,
    syllabus: 'Full syllabus as prescribed by WBBSE / WBCHSE curriculum (Arithmetic, Algebra, Geometry, Mensuration & Trigonometry).',
    hall: 'Hall A & B'
  },
  {
    id: 'exam-2',
    title: 'Physical Science Unit Assessment: Thermal Physics & Gas Laws',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Physics',
    date: '2026-11-12',
    time: '04:30 PM - 06:00 PM',
    duration: '1h 30m',
    totalMarks: 45,
    syllabus: 'Behavior of Gases, Thermal Phenomena, Light (Refraction & Lens formula).',
    hall: 'Auditorium Hall'
  },
  {
    id: 'exam-3',
    title: 'Life Science Pre-Test Examination',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    subject: 'Biology',
    date: '2026-11-18',
    time: '04:00 PM - 06:30 PM',
    duration: '2h 30m',
    totalMarks: 90,
    syllabus: 'Control & Coordination, Continuity of Life, Heredity & Common Genetic Diseases.',
    hall: 'Hall A'
  },
  {
    id: 'exam-4',
    title: 'CBSE Term 1 Pre-Board Simulation: Physics & Mathematics',
    board: 'CBSE',
    classLevel: 'Class 12',
    subject: 'Physics',
    date: '2026-11-20',
    time: '09:00 AM - 12:00 PM',
    duration: '3h 00m',
    totalMarks: 70,
    syllabus: 'Electrostatics, Magnetism, Electromagnetic Induction & Alternating Currents.',
    hall: 'Ramanujan Hall B'
  }
];

export const INITIAL_TASKS: PersonalTask[] = [
  {
    id: 'task-1',
    title: 'Complete Sreedhar Acharya 15 Exercise Numericals',
    subject: 'Mathematics',
    deadline: '2026-10-28',
    completed: true,
    priority: 'High',
    notes: 'Focus on discriminant conditions and solving roots with surds.'
  },
  {
    id: 'task-2',
    title: 'Revise Charles & Boyle Laws graphical derivations',
    subject: 'Physics',
    deadline: '2026-10-30',
    completed: true,
    priority: 'High',
    notes: 'Practice P-V isotherm and V-T isobar on Kelvin scale.'
  },
  {
    id: 'task-3',
    title: 'Memorize Metaphase vs Anaphase diagram annotations',
    subject: 'Biology',
    deadline: '2026-11-02',
    completed: false,
    priority: 'Medium',
    notes: 'Pay attention to spindle fiber attachment to kinetochore.'
  },
  {
    id: 'task-4',
    title: 'Write Hari-da Character Analysis essay in Bengali notebook',
    subject: 'Bengali',
    deadline: '2026-11-04',
    completed: false,
    priority: 'Medium',
    notes: 'Include quotes from Subodh Ghosh and the scene with Jagadish Babu.'
  },
  {
    id: 'task-5',
    title: 'Solve 2021-2024 Madhyamik History 4-Marks question sets',
    subject: 'History',
    deadline: '2026-11-06',
    completed: false,
    priority: 'Low',
    notes: 'Cover the Santhal Rebellion and Indigo revolt impacts.'
  }
];

export const INITIAL_STUDENTS: StudentProfile[] = [
  {
    id: 'std-ayan-mukhopadhyay',
    name: 'Ayan Mukhopadhyay',
    bengaliName: 'অয়ন মুখোপাধ্যায়',
    rollNo: 'TI-WB-2026-04',
    avatarSeed: 'ayan',
    board: 'WBCHSE',
    classLevel: 'Class 10',
    section: 'Batch A (Madhyamik Star Achievers)',
    academicYear: '2026 - 2027',
    stream: 'General Secondary (10-Subject Comprehensive)',
    guardianName: 'Dr. Debabrata Mukhopadhyay',
    guardianRelation: 'Father',
    guardianPhone: '+91 98301 24789',
    overallAttendance: 92,
    classRank: 2,
    totalBatchStudents: 64,
    aggregatePercentage: 90.88,
    subjectsMarks: [
      {
        subject: 'Mathematics',
        marksObtained: 95,
        maxMarks: 100,
        classAverage: 71.4,
        highestMarks: 98,
        grade: 'AA (Outstanding)',
        teacherFeedback: 'Exceptional speed in quadratic equations and geometric proofs. Keep maintaining neat step calculations.'
      },
      {
        subject: 'Bengali',
        marksObtained: 94,
        maxMarks: 100,
        classAverage: 74.2,
        highestMarks: 95,
        grade: 'AA (Outstanding)',
        teacherFeedback: 'Remarkable vocabulary in essay writing and precise grammatical classification in Samas.'
      },
      {
        subject: 'Chemistry',
        marksObtained: 91,
        maxMarks: 100,
        classAverage: 68.9,
        highestMarks: 94,
        grade: 'AA (Outstanding)',
        teacherFeedback: 'Very thorough understanding of periodic trends and stoichiometry calculations.'
      },
      {
        subject: 'Geography',
        marksObtained: 90,
        maxMarks: 100,
        classAverage: 72.1,
        highestMarks: 92,
        grade: 'AA (Outstanding)',
        teacherFeedback: 'Map pointing is flawless. Expand regional economy descriptive answers with diagrams.'
      },
      {
        subject: 'Biology',
        marksObtained: 89,
        maxMarks: 100,
        classAverage: 69.5,
        highestMarks: 93,
        grade: 'A+ (Excellent)',
        teacherFeedback: 'Cell division diagrams are crisp. Work on genetic crossover terminology.'
      },
      {
        subject: 'Physics',
        marksObtained: 88,
        maxMarks: 100,
        classAverage: 65.8,
        highestMarks: 92,
        grade: 'A+ (Excellent)',
        teacherFeedback: 'Theoretical mastery is solid; needs a bit more accuracy in dimensional conversions.'
      },
      {
        subject: 'English',
        marksObtained: 86,
        maxMarks: 100,
        classAverage: 70.3,
        highestMarks: 91,
        grade: 'A+ (Excellent)',
        teacherFeedback: 'Good comprehension analysis; focus slightly more on formal letter writing structure.'
      },
      {
        subject: 'History',
        marksObtained: 85,
        maxMarks: 100,
        classAverage: 67.2,
        highestMarks: 89,
        grade: 'A+ (Excellent)',
        teacherFeedback: 'Sound chronological memory. Enhance chronological flow for the 1857 Revolt impact questions.'
      }
    ],
    recentQuizzes: [
      { id: 'qz-1', testName: 'Math Weekly Chapter Quiz: Quadratic Surds', date: '2026-10-22', subject: 'Mathematics', score: 25, total: 25, percentile: 99.4 },
      { id: 'qz-2', testName: 'Physical Science Monthly Test 3', date: '2026-10-15', subject: 'Physics', score: 44, total: 50, percentile: 94.2 },
      { id: 'qz-3', testName: 'Bengali Sahitya & Samas Evaluation', date: '2026-10-08', subject: 'Bengali', score: 48, total: 50, percentile: 97.8 },
      { id: 'qz-4', testName: 'Life Science Cell Division Speed Test', date: '2026-09-29', subject: 'Biology', score: 22, total: 25, percentile: 91.5 },
      { id: 'qz-5', testName: 'History 19th Century Renaissance Paper', date: '2026-09-17', subject: 'History', score: 42, total: 50, percentile: 88.0 }
    ],
    teacherRemarks: [
      {
        id: 'rem-1',
        date: '2026-10-23',
        teacherName: 'Prof. Somnath Banerjee',
        designation: 'Head of Mathematics',
        subject: 'Mathematics',
        remark: 'Ayan has demonstrated top-tier aptitude in algebra. He is regularly helping batch peers during the Saturday problem session. A prime contender for State Madhyamik Top 10.',
        category: 'Commendable'
      },
      {
        id: 'rem-2',
        date: '2026-10-16',
        teacherName: 'Dr. Subir Roychoudhury',
        designation: 'Senior Faculty, Physics',
        subject: 'Physics',
        remark: 'Performed well in thermal physics numericals. Advised him to allocate 20 minutes daily to optics ray diagrams to reach the 95+ threshold in the upcoming pre-test.',
        category: 'Needs Focus'
      },
      {
        id: 'rem-3',
        date: '2026-10-09',
        teacherName: 'Dr. Debjani Mukherjee',
        designation: 'Academic Dean & Bengali Department',
        subject: 'Bengali',
        remark: 'Ayan’s essay compositions reflect cultural maturity and clean orthography. His punctuality in weekly submission has been 100%.',
        category: 'Commendable'
      }
    ],
    monthlyAttendance: [
      { month: 'Jun 2026', presentDays: 24, totalDays: 26, percentage: 92.3 },
      { month: 'Jul 2026', presentDays: 25, totalDays: 26, percentage: 96.1 },
      { month: 'Aug 2026', presentDays: 23, totalDays: 25, percentage: 92.0 },
      { month: 'Sep 2026', presentDays: 24, totalDays: 26, percentage: 92.3 },
      { month: 'Oct 2026', presentDays: 20, totalDays: 22, percentage: 90.9 }
    ]
  },
  {
    id: 'std-priyabrata-sen',
    name: 'Priyabrata Sen',
    bengaliName: 'প্রিয়ব্রত সেন',
    rollNo: 'TI-CBSE-2026-11',
    avatarSeed: 'priyabrata',
    board: 'CBSE',
    classLevel: 'Class 12',
    section: 'Batch S1 (JEE & Board Pinnacle)',
    academicYear: '2026 - 2027',
    stream: 'Science (PCM + Computer Science)',
    guardianName: 'Mrs. Jayanti Sen',
    guardianRelation: 'Mother',
    guardianPhone: '+91 94330 81234',
    overallAttendance: 95,
    classRank: 1,
    totalBatchStudents: 48,
    aggregatePercentage: 94.0,
    subjectsMarks: [
      { subject: 'Computer Science', marksObtained: 98, maxMarks: 100, classAverage: 76.5, highestMarks: 98, grade: 'A1', teacherFeedback: 'Flawless Python architecture and SQL queries.' },
      { subject: 'Mathematics', marksObtained: 96, maxMarks: 100, classAverage: 73.0, highestMarks: 97, grade: 'A1', teacherFeedback: 'Calculus mastery is outstanding.' },
      { subject: 'Physics', marksObtained: 92, maxMarks: 100, classAverage: 69.2, highestMarks: 95, grade: 'A1', teacherFeedback: 'Excellent grasp on electromagnetic wave equations.' },
      { subject: 'Chemistry', marksObtained: 90, maxMarks: 100, classAverage: 70.8, highestMarks: 94, grade: 'A1', teacherFeedback: 'Solid organic reaction mechanisms.' },
      { subject: 'English', marksObtained: 89, maxMarks: 100, classAverage: 75.1, highestMarks: 92, grade: 'A1', teacherFeedback: 'Great essay structure and analytical clarity.' }
    ],
    recentQuizzes: [
      { id: 'qz-p1', testName: 'Calculus Definite Integrals Sprint', date: '2026-10-21', subject: 'Mathematics', score: 50, total: 50, percentile: 99.8 },
      { id: 'qz-p2', testName: 'Python File Handling & Data Structures', date: '2026-10-14', subject: 'Computer Science', score: 30, total: 30, percentile: 100 },
      { id: 'qz-p3', testName: 'Current Electricity Circuits Exam', date: '2026-10-07', subject: 'Physics', score: 46, total: 50, percentile: 95.4 }
    ],
    teacherRemarks: [
      {
        id: 'rem-p1',
        date: '2026-10-22',
        teacherName: 'Er. Ritwik Chatterjee',
        designation: 'CS Faculty',
        subject: 'Computer Science',
        remark: 'Priyabrata achieved the highest score across all branches in the Python Mock exam. Excellent problem solving.',
        category: 'Commendable'
      }
    ],
    monthlyAttendance: [
      { month: 'Jun 2026', presentDays: 25, totalDays: 26, percentage: 96.1 },
      { month: 'Jul 2026', presentDays: 26, totalDays: 26, percentage: 100.0 },
      { month: 'Aug 2026', presentDays: 24, totalDays: 25, percentage: 96.0 },
      { month: 'Sep 2026', presentDays: 25, totalDays: 26, percentage: 96.1 },
      { month: 'Oct 2026', presentDays: 20, totalDays: 22, percentage: 90.9 }
    ]
  },
  {
    id: 'std-poulomi-das',
    name: 'Poulomi Das',
    bengaliName: 'পৌলমী দাস',
    rollNo: 'TI-ICSE-2026-28',
    avatarSeed: 'poulomi',
    board: 'ICSE',
    classLevel: 'Class 8',
    section: 'Batch J (Foundation Scholars)',
    academicYear: '2026 - 2027',
    stream: 'Junior Foundation',
    guardianName: 'Shri Bikas Das',
    guardianRelation: 'Father',
    guardianPhone: '+91 98312 90123',
    overallAttendance: 94,
    classRank: 3,
    totalBatchStudents: 52,
    aggregatePercentage: 89.8,
    subjectsMarks: [
      { subject: 'Bengali', marksObtained: 93, maxMarks: 100, classAverage: 76.0, highestMarks: 94, grade: 'Distinction', teacherFeedback: 'Lyrical recitation and neat handwriting.' },
      { subject: 'English', marksObtained: 91, maxMarks: 100, classAverage: 74.5, highestMarks: 93, grade: 'Distinction', teacherFeedback: 'Creative writing is expressive and grammatically accurate.' },
      { subject: 'Biology', marksObtained: 90, maxMarks: 100, classAverage: 71.2, highestMarks: 95, grade: 'Distinction', teacherFeedback: 'Plant biology drawings are very detailed.' },
      { subject: 'History', marksObtained: 88, maxMarks: 100, classAverage: 70.0, highestMarks: 91, grade: 'First Class', teacherFeedback: 'Good understanding of Mughal administration.' },
      { subject: 'Mathematics', marksObtained: 87, maxMarks: 100, classAverage: 68.4, highestMarks: 96, grade: 'First Class', teacherFeedback: 'Good progress in algebraic factorisation.' }
    ],
    recentQuizzes: [
      { id: 'qz-po1', testName: 'English Literature Vocabulary & Essay', date: '2026-10-20', subject: 'English', score: 28, total: 30, percentile: 96.2 },
      { id: 'qz-po2', testName: 'Algebra Factorisation Test', date: '2026-10-12', subject: 'Mathematics', score: 43, total: 50, percentile: 90.4 }
    ],
    teacherRemarks: [
      {
        id: 'rem-po1',
        date: '2026-10-18',
        teacherName: 'Mrs. Sharmistha Sen',
        designation: 'English Faculty',
        subject: 'English',
        remark: 'Poulomi is very diligent and participates enthusiastically in debate and reading sessions.',
        category: 'Commendable'
      }
    ],
    monthlyAttendance: [
      { month: 'Jun 2026', presentDays: 24, totalDays: 26, percentage: 92.3 },
      { month: 'Jul 2026', presentDays: 25, totalDays: 26, percentage: 96.1 },
      { month: 'Aug 2026', presentDays: 24, totalDays: 25, percentage: 96.0 },
      { month: 'Sep 2026', presentDays: 24, totalDays: 26, percentage: 92.3 },
      { month: 'Oct 2026', presentDays: 21, totalDays: 22, percentage: 95.5 }
    ]
  }
];

export const FACULTY_MEMBERS = [
  {
    name: 'Dr. Subir Roychoudhury',
    bengaliName: 'ড. সুবীর রায়চৌধুরী',
    role: 'Head of Physical Sciences',
    degrees: 'Ph.D (Presidency University / CU), Post-Doc (TIFR)',
    experience: '28+ Years of Academic Mentorship',
    specialty: 'WBCHSE & CBSE Physics, Olympiad Problem Formulation'
  },
  {
    name: 'Prof. Somnath Banerjee',
    bengaliName: 'অধ্যাপক সোমনাথ ব্যানার্জী',
    role: 'Senior Faculty & Mathematics Chair',
    degrees: 'M.Sc Applied Mathematics (Jadavpur University)',
    experience: '24+ Years Guiding Board Top-Rankers',
    specialty: 'Calculus, Analytical Geometry, Higher Secondary Math'
  },
  {
    name: 'Dr. Debjani Mukherjee',
    bengaliName: 'ড. দেবযানী মুখার্জী',
    role: 'Dean of Humanities & Bengali Literature',
    degrees: 'M.A., Ph.D (Calcutta University), Gold Medalist',
    experience: '21+ Years of Scholarly Teaching',
    specialty: 'Bengali Sahitya, Grammar & Comparative Linguistics'
  },
  {
    name: 'Prof. Anirban Ganguly',
    bengaliName: 'অধ্যাপক অনির্বাণ গাঙ্গুলী',
    role: 'Head of Chemical Sciences',
    degrees: 'M.Sc Chemistry (IIT Kharagpur)',
    experience: '19+ Years Board & Entrance Coaching',
    specialty: 'Organic Chemistry & Physical Chemistry'
  }
];
