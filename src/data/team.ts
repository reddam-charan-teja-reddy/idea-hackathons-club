export interface FacultyMentor {
  id: string;
  name: string;
  title: string;
  role: string;
  department: string;
  photo: string;
  hasLocalPhoto: boolean;
  highlight?: boolean;
}

export interface StudentCoordinator {
  id: string;
  name: string;
  rollNumber: string;
  department: 'CSE (AI & ML)' | 'CSE (Data Science)';
  departmentCode: 'CSM' | 'CSD';
  batch: string;
  email: string;
  photo: string | null;
  initials: string;
}

export interface TeamData {
  departmentLeadership: FacultyMentor[];
  facultyCoordinators: FacultyMentor[];
  currentBatch: {
    academicYear: string;
    title: string;
    badge: string;
    members: StudentCoordinator[];
  };
  previousBatch: {
    title: string;
    batchYear: string;
    note: string;
    externalUrl: string;
  };
}

export const teamData: TeamData = {
  departmentLeadership: [
    {
      id: "hod-janakiramaiah",
      name: "Dr. B. Janakiramaiah",
      title: "Professor & Head of the Department",
      role: "Head of the Department",
      department: "Dept. of CSE (AI&ML) & CSE (Data Science)",
      photo: "/images/team/hod-janakiramaiah.jpg",
      hasLocalPhoto: true,
      highlight: true,
    },
    {
      id: "faculty-sirisha",
      name: "Dr. J. Sirisha",
      title: "Associate Professor",
      role: "Central Clubs Coordinator",
      department: "Dept. of CSE (Data Science) & CSE (AI&ML)",
      photo: "/images/team/faculty-sirisha.jpg",
      hasLocalPhoto: true,
      highlight: true,
    },
  ],
  facultyCoordinators: [
    {
      id: "faculty-haritha",
      name: "Dr. A. Haritha",
      title: "Associate Professor",
      role: "Faculty Coordinator",
      department: "Dept. of CSE (AI & ML) and CSE (Data Science)",
      photo: "/images/team/faculty-haritha.jpg",
      hasLocalPhoto: true,
    },
    {
      id: "faculty-nagamani",
      name: "Mrs. P. Nagamani",
      title: "Assistant Professor",
      role: "Faculty Coordinator",
      department: "Dept. of CSE (AI & ML) and CSE (Data Science)",
      photo: "/images/team/faculty-nagamani.jpg",
      hasLocalPhoto: true,
    },
  ],
  currentBatch: {
    academicYear: "2023–2027",
    title: "Active Student Leadership",
    badge: "Current 2023–2027 Batch",
    members: [
      {
        id: "coord-01",
        name: "Bonam Nikhil Sai",
        rollNumber: "23501A4211",
        department: "CSE (AI & ML)",
        departmentCode: "CSM",
        batch: "2023–2027",
        email: "23501a4211@pvpsit.ac.in",
        photo: null,
        initials: "BN",
      },
      {
        id: "coord-02",
        name: "Kalla Charan",
        rollNumber: "23501A4224",
        department: "CSE (AI & ML)",
        departmentCode: "CSM",
        batch: "2023–2027",
        email: "23501a4224@pvpsit.ac.in",
        photo: null,
        initials: "KC",
      },
      {
        id: "coord-03",
        name: "Rimmalapudi Sai Durga Praveena",
        rollNumber: "23501A4248",
        department: "CSE (AI & ML)",
        departmentCode: "CSM",
        batch: "2023–2027",
        email: "23501a4248@pvpsit.ac.in",
        photo: "/images/team/coord-praveena.jpeg",
        initials: "RP",
      },
      {
        id: "coord-04",
        name: "Vallu Rekha",
        rollNumber: "23501A4260",
        department: "CSE (AI & ML)",
        departmentCode: "CSM",
        batch: "2023–2027",
        email: "23501a4260@pvpsit.ac.in",
        photo: "/images/team/coord-rekha.jpeg",
        initials: "VR",
      },
      {
        id: "coord-05",
        name: "Garika Kavya",
        rollNumber: "23501A4416",
        department: "CSE (Data Science)",
        departmentCode: "CSD",
        batch: "2023–2027",
        email: "23501a4416@pvpsit.ac.in",
        photo: null,
        initials: "GK",
      },
      {
        id: "coord-06",
        name: "Kollipara Jyothi Swaroop Sai",
        rollNumber: "23501A4423",
        department: "CSE (Data Science)",
        departmentCode: "CSD",
        batch: "2023–2027",
        email: "23501a4423@pvpsit.ac.in",
        photo: "/images/team/coord-swaroop.jpeg",
        initials: "KS",
      },
      {
        id: "coord-07",
        name: "Reddam Charan Teja Reddy",
        rollNumber: "23501A4451",
        department: "CSE (Data Science)",
        departmentCode: "CSD",
        batch: "2023–2027",
        email: "23501a4451@pvpsit.ac.in",
        photo: null,
        initials: "RC",
      },
      {
        id: "coord-08",
        name: "Yarramsetty Suma Harshitha",
        rollNumber: "23501A4465",
        department: "CSE (Data Science)",
        departmentCode: "CSD",
        batch: "2023–2027",
        email: "23501a4465@pvpsit.ac.in",
        photo: "/images/team/coord-sumaharshitha.jpeg",
        initials: "YS",
      },
    ],
  },
  previousBatch: {
    title: "Previous Batch Leadership",
    batchYear: "2024–2025 (Previous Batch)",
    note: "Recognizing our 2024–2025 founding executive committee: Jakkamsetti Madhavan, Mudigonda Naga Bhanuteja Sharma, Akshitha Ponna, and Aaisha Sultana Guduru.",
    externalUrl: "https://pvp-csmcsd-hackathon-club.vercel.app/",
  },
};
