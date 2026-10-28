export interface SocialChannel {
  platform: 'instagram' | 'linkedin' | 'github' | 'discord' | 'email';
  label: string;
  url: string;
  isVerified: boolean;
}

export interface SiteConfig {
  institution: {
    fullName: string;
    shortName: string;
    sponsoringBody: string;
    departments: {
      full: string;
      short: string;
    }[];
    accreditation: string;
    bannerImage: string;
    campusAddress: string;
    city: string;
    postalCode: string;
    portals: {
      main: string;
      csm: string;
      csd: string;
    };
  };
  club: {
    name: string;
    shortName: string;
    branchTag: string;
    tagline: string;
    description: string;
    logoImage: string;
    heroMetrics: {
      label: string;
      value: string;
      detail: string;
    }[];
  };
  sponsor: {
    name: string;
    badge: string;
    subBadge: string;
    description: string;
    logoImage: string;
    websiteUrl: string;
  };
  archive: {
    title: string;
    batchRange: string;
    description: string;
    url: string;
  };
  gallery: {
    title: string;
    driveUrl: string;
    isVerified: boolean;
  };
  contact: {
    location: string;
    venue: string;
    officialEmail: string;
    isEmailVerified: boolean;
    socials: SocialChannel[];
  };
  copyright: string;
}

export const siteConfig: SiteConfig = {
  institution: {
    fullName: "Prasad V. Potluri Siddhartha Institute of Technology",
    shortName: "PVPSIT",
    sponsoringBody: "Siddhartha Academy of General & Technical Education, Vijayawada",
    departments: [
      {
        full: "Department of Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
        short: "CSE (AI & ML) · CSM",
      },
      {
        full: "Department of Computer Science & Engineering (Data Science)",
        short: "CSE (Data Science) · CSD",
      },
    ],
    accreditation: "Autonomous Institution · Approved by AICTE · Affiliated to JNTUK · NAAC A+ Accredited",
    bannerImage: "/images/branding/pvpbanner.png",
    campusAddress: "Kanuru, Vijayawada, Andhra Pradesh, India",
    city: "Vijayawada",
    postalCode: "520007",
    portals: {
      main: "https://www.pvpsiddhartha.ac.in/",
      csm: "https://www.pvpsiddhartha.ac.in/aiml_web/index.html",
      csd: "https://www.pvpsiddhartha.ac.in/ds_web/index.html",
    },
  },
  club: {
    name: "Idea Hackathons Club",
    shortName: "Idea Club",
    branchTag: "CSD & CSM Departments",
    tagline: "Where Bold Ideas Turn Into Working Code",
    description:
      "The premier innovation and rapid-prototyping student forum at PVPSIT. We drive high-intensity hackathons, GenAI sprints, and real-world software engineering challenges for curious builders.",
    logoImage: "/images/branding/club-logo.png",
    heroMetrics: [
      {
        value: "12h",
        label: "Sprint Duration",
        detail: "Non-stop offline coding & testing",
      },
      {
        value: "₹17,500",
        label: "Prizes Awarded",
        detail: "Distributed across 10 winning teams",
      },
      {
        value: "45+",
        label: "Problem Pool",
        detail: "GenAI & Full-Stack challenges",
      },
      {
        value: "100%",
        label: "Offline & Evaluated",
        detail: "3 rigorous jury milestones",
      },
    ],
  },
  sponsor: {
    name: "CodeTantra",
    badge: "Official Sponsor & Technology Partner",
    subBadge: "Title Sponsor · Platform & Evaluation Support",
    description:
      "Official Event Sponsor and Technology Partner for IdeaStorm 2026. Empowering engineering students with automated coding environments, scalable interactive infrastructure, and technical skill advancement.",
    logoImage: "/images/branding/codetantra-logo.png",
    websiteUrl: "https://www.codetantra.com/",
  },
  archive: {
    title: "Previous Batch Archive (2024–2025)",
    batchRange: "2024–2025 (Previous Year)",
    description: "Explore the preceding club chapter and projects created by the 2024–2025 batch.",
    url: "https://pvp-csmcsd-hackathon-club.vercel.app/",
  },
  gallery: {
    title: "IdeaStorm 2026 Photo Archive",
    driveUrl: "https://drive.google.com/drive/folders/1HICsMTS540axU-ctg_FUj4STZFJaizJT",
    isVerified: true,
  },
  contact: {
    location: "Department of CSD & CSM, PVPSIT Campus",
    venue: "Room No. 247, Tech Block",
    officialEmail: "ideahackathonclub@pvpsit.ac.in",
    isEmailVerified: false,
    socials: [
      {
        platform: "github",
        label: "GitHub",
        url: "#",
        isVerified: false,
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        url: "#",
        isVerified: false,
      },
      {
        platform: "instagram",
        label: "Instagram",
        url: "#",
        isVerified: false,
      },
      {
        platform: "discord",
        label: "Discord Community",
        url: "#",
        isVerified: false,
      },
    ],
  },
  copyright: `© ${new Date().getFullYear()} Idea Hackathons Club — CSD & CSM Departments, PVPSIT`,
};
