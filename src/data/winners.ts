export interface WinningMember {
  rollNo: string;
  name: string;
  isLead?: boolean;
}

export interface WinningTeam {
  id: string;
  rank: 1 | 2 | 3 | 4; // 1: 1st, 2: 2nd, 3: 3rd, 4: Consolation
  rankLabel: string;
  teamName: string;
  prizeAmount: string;
  projectName: string;
  domain: string;
  description: string;
  photo: string;
  driveFolderUrl: string;
  members: WinningMember[];
  badgeColor: string;
}

const DRIVE_WINNERS_FOLDER = "https://drive.google.com/drive/folders/1HICsMTS540axU-ctg_FUj4STZFJaizJT";

export const podiumWinners: WinningTeam[] = [
  {
    id: "podium-1",
    rank: 1,
    rankLabel: "1st Prize Winner",
    teamName: "ElevateX",
    prizeAmount: "₹5,000",
    projectName: "AI Contract & Legal Document Simplifier",
    domain: "LegalTech · GenAI · SaaS",
    photo: "/images/winners/winner-elevatex.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description:
      "Engineered an automated document intelligence system that analyzes complex rental agreements, freelance contracts, and TOS. Flags high-risk clauses in plain language, assigns vulnerability scores, and supports document-grounded natural language Q&A.",
    badgeColor: "amber",
    members: [
      { rollNo: "23501A4255", name: "T. Naveesh Babu", isLead: true },
      { rollNo: "23501A4222", name: "J. Jagannadh" },
      { rollNo: "23501A4226", name: "N. Karthikeya" },
      { rollNo: "23501A4227", name: "K. Likith" },
    ],
  },
  {
    id: "podium-2",
    rank: 2,
    rankLabel: "2nd Prize Winner",
    teamName: "Squirrel Catchers",
    prizeAmount: "₹3,000",
    projectName: "AI Short Story Co-Writer with Plot Branching",
    domain: "Creative NLP · Interactive Fiction",
    photo: "/images/winners/winner-squirrelcatchers.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description:
      "A collaborative narrative ideation studio where creators start story premises and the AI generates branching story paths. Features an interactive visual story-tree node view and single-click manuscript compiler.",
    badgeColor: "slate",
    members: [
      { rollNo: "23501A4412", name: "D. Anand", isLead: true },
      { rollNo: "23501A4402", name: "A. Rushyendra" },
      { rollNo: "23501A4454", name: "Sk. Riyaaz Ali" },
      { rollNo: "23501A4459", name: "P. Tautik" },
    ],
  },
  {
    id: "podium-3",
    rank: 3,
    rankLabel: "3rd Prize Winner",
    teamName: "ByteForce",
    prizeAmount: "₹2,500",
    projectName: "AI Music Playlist Curator from Mood Description",
    domain: "Audio AI · Recommendation Engine",
    photo: "/images/winners/winner-byteforce.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description:
      "Translates abstract emotional vibes and sensory descriptions into hyper-curated music playlists, complete with track-by-track emotional justification and continuous conversational refinement.",
    badgeColor: "orange",
    members: [
      { rollNo: "23501A4232", name: "M. Sriram", isLead: true },
      { rollNo: "23501A4247", name: "R. Sai Venkatesh" },
      { rollNo: "23501A4204", name: "A. Vishal" },
      { rollNo: "23501A4218", name: "D. Uday" },
    ],
  },
];

export const consolationWinners: WinningTeam[] = [
  {
    id: "consol-1",
    rank: 4,
    rankLabel: "Consolation Award",
    teamName: "AetherX",
    prizeAmount: "₹1,000",
    projectName: "AI Debate Practice & Argument Strengthener",
    domain: "EdTech · Argumentation AI",
    photo: "/images/winners/winner-aetherx.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description: "Real-time debate sparring partner that spots logical fallacies and grades persuasive delivery.",
    badgeColor: "cyan",
    members: [
      { rollNo: "24501A4419", name: "G. Meenakshi" },
      { rollNo: "24501A4439", name: "M. Sahiti" },
      { rollNo: "24501A4421", name: "J. Thrinay" },
      { rollNo: "23501A4454", name: "Sk. Shahensha" },
    ],
  },
  {
    id: "consol-2",
    rank: 4,
    rankLabel: "Consolation Award",
    teamName: "Ctrl + Create",
    prizeAmount: "₹1,000",
    projectName: "AI Essay Feedback & Grading Assistant",
    domain: "EdTech · Evaluation NLP",
    photo: "/images/winners/winner-ctrlcreate.jpeg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description: "Evaluates academic papers against rubric criteria with inline structural suggestions.",
    badgeColor: "cyan",
    members: [
      { rollNo: "23501A4228", name: "K. Rahul Sai" },
      { rollNo: "24501A4204", name: "A. Vasantha" },
      { rollNo: "24501A4207", name: "A. Sri Bhavana" },
      { rollNo: "24501A4256", name: "Thanuja" },
    ],
  },
  {
    id: "consol-3",
    rank: 4,
    rankLabel: "Consolation Award",
    teamName: "Nextgen Minds",
    prizeAmount: "₹1,000",
    projectName: "AI Habit-Building Coach with Behavioral Nudges",
    domain: "HealthTech · Behavioral Science",
    photo: "/images/winners/winner-nextgenminds.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description: "Generates scientifically calibrated daily micro-habits with shame-free recovery plans.",
    badgeColor: "cyan",
    members: [
      { rollNo: "24501A4452", name: "Rohit Hanuman Sai .P" },
      { rollNo: "24501A4430", name: "B. Lokesh Sreeniwas" },
      { rollNo: "25505A4402", name: "Katuri Vivek Sai" },
      { rollNo: "24501A4460", name: "U. Koushik" },
    ],
  },
  {
    id: "consol-4",
    rank: 4,
    rankLabel: "Consolation Award",
    teamName: "Think.exe",
    prizeAmount: "₹1,000",
    projectName: "AI Email Inbox Triage & Draft Assistant",
    domain: "Productivity · B2B SaaS",
    photo: "/images/winners/winner-thinkexe.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description: "Prioritizes high-importance emails and generates contextual replies matching the user's authentic tone.",
    badgeColor: "cyan",
    members: [
      { rollNo: "23501A1255", name: "K. Nikhilesh" },
      { rollNo: "23501A1259", name: "K. Sumanth" },
      { rollNo: "23501A1245", name: "G. Sai Kiran" },
      { rollNo: "23501A1260", name: "K. Varshitha Sri" },
    ],
  },
  {
    id: "consol-5",
    rank: 4,
    rankLabel: "Consolation Award",
    teamName: "Tech Trekkers",
    prizeAmount: "₹1,000",
    projectName: "AI Lecture Notes Summarizer & Study Guide Builder",
    domain: "Education · GenAI",
    photo: "/images/winners/winner-techtrekkers.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description: "Synthesizes entire semester slide decks into concise, high-probability exam study guides.",
    badgeColor: "cyan",
    members: [
      { rollNo: "23501A12C1", name: "V. Mallikarjuna Rao" },
      { rollNo: "23501A12C4", name: "V. Tarun" },
      { rollNo: "23501A1274", name: "M. Mahazeef Abbas" },
      { rollNo: "23501A1269", name: "M. Gowtham Vijay Sai" },
    ],
  },
  {
    id: "consol-6",
    rank: 4,
    rankLabel: "Consolation Award",
    teamName: "(Shijin) – The Four Guardians",
    prizeAmount: "₹1,000",
    projectName: "AI Medication Reminder & Interaction Explainer",
    domain: "Healthcare · Safety Assistant",
    photo: "/images/winners/winner-shijin.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description: "Patient companion explaining prescriptions in plain language with drug-drug interaction cautions.",
    badgeColor: "cyan",
    members: [
      { rollNo: "25505A0413", name: "P. Rohith" },
      { rollNo: "25505A0414", name: "T. Hemanth Venkat" },
      { rollNo: "25505A0409", name: "K. Sasi Vardhan" },
      { rollNo: "25505A0412", name: "P. Chaitanya Tharun" },
    ],
  },
  {
    id: "consol-7",
    rank: 4,
    rankLabel: "Consolation Award",
    teamName: "Fusion Innovaters",
    prizeAmount: "₹1,000",
    projectName: "AI Job Interview Simulator",
    domain: "CareerTech · Voice & Text AI",
    photo: "/images/winners/winner-fusioninnovaters.jpg",
    driveFolderUrl: DRIVE_WINNERS_FOLDER,
    description: "Conducts adaptive mock technical and behavioral interviews with actionable feedback rubrics.",
    badgeColor: "cyan",
    members: [
      { rollNo: "25501A0404", name: "A. Sharon" },
      { rollNo: "25501A0421", name: "Ch. Pranitha" },
      { rollNo: "25501A0422", name: "Ch. Varshik Mani Kumar" },
      { rollNo: "25501A04A1", name: "P. Joshua Daniel" },
    ],
  },
];
