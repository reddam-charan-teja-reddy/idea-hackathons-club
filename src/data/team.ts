export interface FacultyMentor {
  id: string;
  name: string;
  title: string;
  role: string;
  department: string;
  photo: string;
  hasLocalPhoto: boolean;
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
  faculty: FacultyMentor[];
  centralCoordinator: {
    name: string;
    designation: string;
    department: string;
    experience: string;
  };
  headOfDepartment: {
    name: string;
    designation: string;
    departments: string;
  };
  currentBatch: {
    academicYear: string;
    title: string;
    members: StudentCoordinator[];
  };
  alumniBatch: {
    title: string;
    graduatedRange: string;
    note: string;
    externalUrl: string;
  };
}

export const teamData: TeamData = {
  centralCoordinator: {
    name: "Dr. J. Sirisha",
    designation: "Associate Professor & Central Clubs Coordinator",
    department: "Department of CSD & CSM",
    experience: "22+ Years at PVPSIT",
  },
  headOfDepartment: {
    name: "Dr. B. Janakiramaiah",
    designation: "Professor & Head of the Department",
    departments: "CSE (AI & ML) and CSE (Data Science)",
  },
  faculty: [
    {
      id: "faculty-haritha",
      name: "Dr. A. Haritha",
      title: "Assistant Professor",
      role: "Faculty Coordinator",
      department: "Dept. of CSE (AI & ML / DS)",
      photo: "/images/team/faculty-haritha.jpg",
      hasLocalPhoto: true,
    },
    {
      id: "faculty-nagamani",
      name: "Mrs. P. Nagamani",
      title: "Assistant Professor",
      role: "Faculty Coordinator",
      department: "Dept. of CSE (AI & ML / DS)",
      photo: "/images/team/faculty-nagamani.jpg",
      hasLocalPhoto: true,
    },
  ],
  currentBatch: {
    academicYear: "2023–2027",
    title: "Active Student Leadership",
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
        photo: null,
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
  alumniBatch: {
    title: "Founding Seniors Batch",
    graduatedRange: "Class of 2024 / Graduated",
    note: "Recognizing our graduated founding leaders: Jakkamsetti Madhavan, Mudigonda Naga Bhanuteja Sharma, Akshitha Ponna, and Aaisha Sultana Guduru.",
    externalUrl: "https://pvp-csmcsd-hackathon-club.vercel.app/",
  },
};
