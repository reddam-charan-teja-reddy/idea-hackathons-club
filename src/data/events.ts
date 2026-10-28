export interface HackathonStage {
  step: string;
  title: string;
  duration: string;
  type: 'technical' | 'fun' | 'jury';
  description: string;
  evaluators: string;
}

export interface HackathonEvent {
  id: string;
  name: string;
  tagline: string;
  academicYear: string;
  date: string;
  day: string;
  time: string;
  mode: 'Offline' | 'Online' | 'Hybrid';
  venue: string;
  teamSize: string;
  eligibility: string[];
  totalProblemPool: number;
  stages: HackathonStage[];
  rules: string[];
  coverImage: string;
  posterImage: string;
  galleryDriveUrl: string;
  status: 'completed' | 'upcoming';
}

export const eventData: HackathonEvent = {
  id: "ideastorm-2026",
  name: "IDEASTORM 2026",
  tagline: "The 12-Hour Challenge-Based Prototype Hackathon",
  academicYear: "2026–2027",
  date: "19th September 2026",
  day: "Saturday",
  time: "07:00 AM – 07:00 PM (12 Hours)",
  mode: "Offline",
  venue: "Room No. 247, Tech Block, PVPSIT",
  teamSize: "4 Members per Team",
  eligibility: [
    "II Year Students",
    "III Year Students",
    "IV Year Students",
    "Branches: CSE, IT, ECE, CSE (AI & ML), CSE (Data Science)",
  ],
  totalProblemPool: 45,
  coverImage: "/images/events/ideastorm-capture.jpeg",
  posterImage: "/images/events/poster.png",
  galleryDriveUrl: "https://drive.google.com/drive/folders/1HICsMTS540axU-ctg_FUj4STZFJaizJT",
  status: "completed",
  stages: [
    {
      step: "01",
      title: "Random Challenge Selection & Kickoff",
      duration: "07:00 AM – 08:30 AM",
      type: "technical",
      description:
        "Team leaders randomly drew 1 challenge out of 45 pre-curated problem statements. Teams brainstormed, structured system workflows, and initialized repositories.",
      evaluators: "Department Committee & Student Leads",
    },
    {
      step: "02",
      title: "4 Interactive Non-Technical Breakout Events",
      duration: "Throughout the 12h Sprint",
      type: "fun",
      description:
        "Four curated non-technical engagement mini-events and team challenges interspersed between intense coding blocks to refresh participant energy, spark creative thinking, and foster camaraderie.",
      evaluators: "Student Organizing Team",
    },
    {
      step: "03",
      title: "AI Automated Submission & Platform Evaluation",
      duration: "Afternoon Checkpoint",
      type: "technical",
      description:
        "Automated platform testing, AI-driven code verification, and automated evaluation metrics assessing baseline functionality, API compliance, and core challenge criteria.",
      evaluators: "Automated Platform & System Test Suite",
    },
    {
      step: "04",
      title: "Expert Judges & Jury Final Evaluation",
      duration: "04:30 PM – 07:00 PM",
      type: "jury",
      description:
        "In-person project walkthrough and live code defense before the faculty and expert judging panel, evaluating real-world utility, user experience, problem mastery, and architectural soundness.",
      evaluators: "Faculty Coordinators & Expert Judging Panel",
    },
  ],
  rules: [
    "Strict 4-member teams with inter-branch collaboration encouraged (CSE, IT, ECE, CSM, CSD).",
    "All software development, UI design, and testing had to be executed on-campus within the 12-hour window.",
    "Teams had freedom of choice in tech stacks: React, Next.js, Python, FastAPI, Node.js, and GenAI models.",
    "Solutions evaluated through automated platform testing combined with rigorous expert jury review.",
  ],
};
