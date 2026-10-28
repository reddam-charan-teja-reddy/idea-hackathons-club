export interface ProblemStatement {
  id: string;
  number: number;
  title: string;
  category: 'productivity' | 'education' | 'lifestyle' | 'creative' | 'health' | 'business';
  categoryLabel: string;
  description: string;
  tags: string[];
}

export const problemTracks = [
  { id: 'all', label: 'All Challenges (45)' },
  { id: 'productivity', label: 'Productivity & Work' },
  { id: 'education', label: 'Education & Learning' },
  { id: 'lifestyle', label: 'Lifestyle & Personal' },
  { id: 'creative', label: 'Creative & Content' },
  { id: 'health', label: 'Health & Wellbeing' },
  { id: 'business', label: 'Business & SaaS' },
];

export const problemStatements: ProblemStatement[] = [
  {
    "id": "problem-01",
    "number": 1,
    "title": "AI Meeting-to-Action-Items Converter",
    "category": "productivity",
    "categoryLabel": "Productivity & Work",
    "description": "Build a full stack app where users upload a meeting transcript or audio recording. The AI generates a structured summary, extracts action items with owners and deadlines, and auto-drafts follow-up emails to assigned people. Include a dashboard that tracks completion status of extracted action items over time. This eliminates the common problem of meeting decisions getting lost.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-02",
    "number": 2,
    "title": "AI Resume Tailor & ATS Score Checker",
    "category": "productivity",
    "categoryLabel": "Productivity & Work",
    "description": "Build a web app where users upload a resume and paste a job description. The AI rewrites bullet points to match the role's keywords, scores ATS-compatibility, and highlights missing skills/sections. Include a side-by-side \"before vs after\" diff view and a downloadable formatted PDF. This helps job seekers pass automated resume filters instead of guessing what recruiters' systems want.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-03",
    "number": 3,
    "title": "AI-Powered Code Review & Refactor Assistant",
    "category": "productivity",
    "categoryLabel": "Productivity & Work",
    "description": "Create a web tool where users paste or upload a code snippet/repo file. The AI reviews it for bugs, security issues, and code smells, then suggests refactored versions with explanations. Include an inline diff viewer, severity tagging (critical/warning/suggestion), and a \"explain like I'm a junior dev\" mode. This gives students and small teams a lightweight code review layer without needing a senior engineer available.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-04",
    "number": 4,
    "title": "AI Customer Support Ticket Triage System",
    "category": "productivity",
    "categoryLabel": "Productivity & Work",
    "description": "Create a full stack helpdesk app where incoming support tickets are automatically categorized, prioritized by urgency/sentiment, and matched with suggested responses drawn from a knowledge base the user uploads. Include an agent dashboard showing queue health and an analytics view of common issue categories over time. This shows a real B2B SaaS use case, not just a chatbot wrapper.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-05",
    "number": 5,
    "title": "AI Standup & Sprint Report Generator",
    "category": "productivity",
    "categoryLabel": "Productivity & Work",
    "description": "Build an app where team members log short daily updates via text or voice. The AI compiles them into a structured sprint summary, flags recurring blockers across days, and drafts a stakeholder-ready progress report on demand. Include a burndown-style view of flagged blockers over the sprint. This saves engineering managers hours of manual status-report writing.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-06",
    "number": 6,
    "title": "AI Email Inbox Triage & Draft Assistant",
    "category": "productivity",
    "categoryLabel": "Productivity & Work",
    "description": "Create an app where users upload or connect sample inbox data. The AI categorizes emails by priority and topic, summarizes long threads into two lines, and drafts contextual replies matching the user's tone, learned from past sent emails. Include a one-click \"approve and send\" flow with an editable draft. This tackles inbox overload with actually usable, personalized drafts rather than generic templates.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-07",
    "number": 7,
    "title": "AI Contract/Legal Document Simplifier",
    "category": "productivity",
    "categoryLabel": "Productivity & Work",
    "description": "Create a tool where users upload a contract (rental agreement, freelance contract, terms of service). The AI flags risky or unusual clauses, explains them in plain language, and answers follow-up questions about the document in a chat interface grounded only in that document. Include a risk-level summary at the top (low/medium/high concerns). This helps non-lawyers understand what they're signing.",
    "tags": [
      "GenAI",
      "NLP"
    ]
  },
  {
    "id": "problem-08",
    "number": 8,
    "title": "AI Job Interview Simulator",
    "category": "productivity",
    "categoryLabel": "Productivity & Work",
    "description": "Build an app where users select a target role and company type, then go through a mock interview conducted by the AI via text or voice, with follow-up questions generated based on their answers. After the session, the AI gives structured feedback on answer content, structure, and delivery confidence. Include a session history so users can track improvement over multiple attempts. This gives job seekers realistic, repeatable interview practice.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-09",
    "number": 9,
    "title": "AI Personalized Study Plan & Quiz Generator",
    "category": "education",
    "categoryLabel": "Education & Learning",
    "description": "Build an app where students upload notes, a textbook PDF, or a syllabus. The AI generates a day-by-day study schedule based on exam date and available hours, plus auto-generated quizzes per topic with explanations for wrong answers. Include a progress tracker that adjusts the plan if the student falls behind. This replaces generic study planners with content-aware, adaptive ones.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-10",
    "number": 10,
    "title": "AI Concept Explainer with Adaptive Difficulty",
    "category": "education",
    "categoryLabel": "Education & Learning",
    "description": "Create an app where users ask about any concept and choose an explanation level, from \"explain like I'm 5\" to expert-level. The AI generates explanations with relevant analogies and follows up with quick comprehension checks, adjusting future explanations based on how the user performs. Include a \"build on this\" feature to go deeper into any sub-topic. This personalizes learning pace instead of forcing one-size-fits-all content.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-11",
    "number": 11,
    "title": "AI Debate Practice & Argument Strengthener",
    "category": "education",
    "categoryLabel": "Education & Learning",
    "description": "Build an app where users pick a topic and stance, then debate against an AI opponent in real time (text or voice). The AI responds with counterarguments at an adjustable difficulty level and, after the session, gives structured feedback on logical gaps, weak evidence, and delivery. This helps students and professionals practice persuasive speaking with actual feedback instead of a static chatbot.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-12",
    "number": 12,
    "title": "AI Flashcard Generator from Any Document",
    "category": "education",
    "categoryLabel": "Education & Learning",
    "description": "Create a tool where users upload PDFs, slides, or notes. The AI automatically generates spaced-repetition flashcards from the content, tags each by estimated difficulty, and schedules reviews using a spaced-repetition algorithm. Include a study mode with swipeable cards and a streak tracker. This turns passive reading material into an active, structured revision system.",
    "tags": [
      "GenAI",
      "Vision"
    ]
  },
  {
    "id": "problem-13",
    "number": 13,
    "title": "AI Essay Feedback & Grading Assistant",
    "category": "education",
    "categoryLabel": "Education & Learning",
    "description": "Build an app where students submit essays and teachers define or select a grading rubric. The AI grades against the rubric, gives inline comments on structure, argument strength, and grammar, and shows a revision-tracking view comparing drafts over time. Include an overall score breakdown by rubric category. This gives students fast, detailed feedback between infrequent teacher reviews.",
    "tags": [
      "GenAI",
      "FullStack",
      "Vision"
    ]
  },
  {
    "id": "problem-14",
    "number": 14,
    "title": "AI Language Learning Conversation Partner",
    "category": "education",
    "categoryLabel": "Education & Learning",
    "description": "Create an app where users have real-time text or voice conversations with an AI in their target language, set to a chosen proficiency level. The AI corrects mistakes inline with brief explanations and adapts vocabulary difficulty based on the user's responses. Include a \"words I keep getting wrong\" tracker that resurfaces past mistakes in new conversations. This gives learners low-pressure, always-available speaking practice.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-15",
    "number": 15,
    "title": "AI Lecture Notes Summarizer & Study Guide Builder",
    "category": "education",
    "categoryLabel": "Education & Learning",
    "description": "Build a tool where users upload lecture recordings or slide decks across a semester. The AI generates clean structured notes, merges recurring themes across multiple lectures into a single study guide, and highlights topics that appear most frequently (likely exam-relevant). Include export to PDF and a searchable notes archive. This consolidates scattered class material into one usable reference.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-16",
    "number": 16,
    "title": "AI Recipe Generator from Fridge Photos",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Build an app where users upload a photo of their fridge/pantry or type ingredients they have. The AI identifies items (via vision model) and generates recipes ranked by how many ingredients they already have, with substitution suggestions for missing ones. Include dietary filters (vegan, keto, allergies) and a shopping list generator for missing items. This reduces food waste and daily \"what to cook\" decision fatigue.",
    "tags": [
      "GenAI",
      "FullStack",
      "Vision"
    ]
  },
  {
    "id": "problem-17",
    "number": 17,
    "title": "AI Travel Itinerary Builder with Budget Optimizer",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Build an app where users input destination, dates, budget, and interests. The AI generates a day-by-day itinerary with activities, estimated costs, and travel times between locations, then lets users regenerate individual days or swap activities while tracking running budget totals. Include a map view of the daily route. This turns hours of trip research into a single guided flow.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-18",
    "number": 18,
    "title": "AI-Powered Personal Finance Coach",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Create an app where users connect or upload transaction data (CSV or mock bank data). The AI categorizes spending, detects unusual patterns, and generates a plain-language monthly financial summary with specific savings suggestions. Include a chat interface for questions like \"can I afford a \u20b950,000 trip in March?\" grounded in the user's actual data. This goes beyond generic budgeting apps by giving reasoned, personalized answers.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-19",
    "number": 19,
    "title": "AI Fitness Plan Generator with Form Feedback",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Build an app where users input fitness goals, available equipment, and time constraints to get a personalized weekly workout plan. Users can upload a short video of themselves performing an exercise, and the AI gives basic form feedback using pose estimation combined with generated coaching tips. Include a progress log with plan adjustments over time. This offers structured, adaptive coaching without a personal trainer.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-20",
    "number": 20,
    "title": "AI Wardrobe & Outfit Planner",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Create an app where users photograph their existing clothes to build a digital wardrobe. The AI suggests outfit combinations based on weather, occasion, and personal style preferences, and flags gaps in the wardrobe with specific purchase suggestions. Include a \"rate my outfit\" feature for quick feedback before heading out. This solves daily outfit-decision fatigue using clothes people already own.",
    "tags": [
      "GenAI",
      "FullStack",
      "Vision"
    ]
  },
  {
    "id": "problem-21",
    "number": 21,
    "title": "AI Mental Wellness Journaling Companion",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Build a journaling app where users write daily entries, and the AI reflects back patterns in mood and recurring themes over time through gentle, non-clinical prompts and summaries. Include a mood-trend visualization and weekly reflective check-ins. Care must be taken to keep tone supportive and clearly non-therapeutic, with resources surfaced if concerning patterns appear. This encourages self-reflection with a bit of structure, not replacement therapy.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-22",
    "number": 22,
    "title": "AI Wedding/Event Speech Writer",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Create an app where users answer a few guided questions about the relationship or occasion, and the AI drafts a personalized speech (best man, farewell, retirement, etc.). Allow tone adjustment (funny, heartfelt, formal) and length control. Include a rehearsal mode that reads the speech aloud via text-to-speech. This saves people from stressful last-minute speech writing.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-23",
    "number": 23,
    "title": "AI Podcast Script and Episode Outline Generator",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Build a tool where users input a topic and desired tone, and the AI generates a full podcast episode outline with segments, talking points, and suggested guest questions. Include an \"expand this segment\" feature to get more detailed notes on any section. Allow export to a script format ready for recording. This helps aspiring podcasters overcome blank-page paralysis.",
    "tags": [
      "GenAI"
    ]
  },
  {
    "id": "problem-24",
    "number": 24,
    "title": "AI Gift Recommendation Engine",
    "category": "lifestyle",
    "categoryLabel": "Lifestyle & Personal",
    "description": "Create an app where users describe the recipient (interests, relationship, occasion, budget) in natural language. The AI generates a ranked list of specific gift ideas with reasoning for each suggestion, and lets users refine results conversationally (\"more unique,\" \"cheaper,\" \"not clothes\"). Include a saved-ideas list per recipient for recurring occasions like birthdays. This replaces generic gift-guide browsing with a targeted conversation.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-25",
    "number": 25,
    "title": "AI Short Story Co-Writer with Plot Branching",
    "category": "creative",
    "categoryLabel": "Creative & Content",
    "description": "Build an app where users start a story premise and the AI generates the next scene, offering 2-3 possible plot directions to choose from at each branch point. Include a visual story-tree view showing all explored branches and a \"combine into final draft\" export. This gives writers a collaborative brainstorming tool instead of a blank page.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-26",
    "number": 26,
    "title": "AI Social Media Content Calendar Generator",
    "category": "creative",
    "categoryLabel": "Creative & Content",
    "description": "Create a tool where users input their brand/niche and posting goals. The AI generates a month-long content calendar with post ideas, captions, and hashtag suggestions tailored per platform (Instagram, LinkedIn, X), and lets users regenerate individual posts. Include a drag-and-drop calendar view for rescheduling. This removes the \"what do I post today\" bottleneck for creators and small businesses.",
    "tags": [
      "GenAI"
    ]
  },
  {
    "id": "problem-27",
    "number": 27,
    "title": "AI Video Script & Storyboard Generator",
    "category": "creative",
    "categoryLabel": "Creative & Content",
    "description": "Build an app where users describe a video concept (YouTube, ad, explainer). The AI generates a scene-by-scene script with dialogue/voiceover and pairs each scene with an AI-generated storyboard sketch describing the visual. Include a shot-list export for filming. This helps creators plan production before ever picking up a camera.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-28",
    "number": 28,
    "title": "AI Music Playlist Curator from Mood Description",
    "category": "creative",
    "categoryLabel": "Creative & Content",
    "description": "Create an app where users describe a mood, activity, or vibe in natural language (\"rainy day coding session, focused but not sleepy\"). The AI generates a themed playlist by matching descriptions to a music metadata database/API, with the ability to refine via follow-up chat. Include a \"why this song\" explanation for each pick. This makes playlist creation conversational instead of manual searching.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-29",
    "number": 29,
    "title": "AI Brand Identity & Naming Generator",
    "category": "creative",
    "categoryLabel": "Creative & Content",
    "description": "Build a tool where users describe their business/product idea. The AI generates brand name options, taglines, and a basic visual direction (color palette, font pairing suggestions), checking name/domain availability where possible. Include a \"generate logo concept\" feature using image generation. This helps early founders move from idea to brand identity in one session.",
    "tags": [
      "GenAI",
      "Vision"
    ]
  },
  {
    "id": "problem-30",
    "number": 30,
    "title": "AI Comic Strip / Storyboard Generator from Text",
    "category": "creative",
    "categoryLabel": "Creative & Content",
    "description": "Create an app where users type a short scene or dialogue. The AI breaks it into panels, generates character-consistent illustrations per panel, and adds speech bubbles automatically. Include a style selector (manga, western comic, minimalist) and panel regeneration. This turns text ideas into shareable visual content without drawing skills.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-31",
    "number": 31,
    "title": "AI Symptom-to-Specialist Navigator",
    "category": "health",
    "categoryLabel": "Health & Wellbeing",
    "description": "Build an app where users describe symptoms in plain language, and the AI suggests which type of specialist to consult (not a diagnosis) along with general, cautious guidance and questions to ask the doctor. Include clear disclaimers and an emergency-symptom detector that redirects to urgent care messaging. Include a visit-prep summary the user can bring to their appointment. This helps users navigate a confusing healthcare system, not self-diagnose.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-32",
    "number": 32,
    "title": "AI Medication Reminder & Interaction Explainer",
    "category": "health",
    "categoryLabel": "Health & Wellbeing",
    "description": "Create an app where users log their medications and schedule. The AI sends reminders, explains (in plain language, from public drug-info sources) what each medication is generally for, and flags commonly known interaction categories for user awareness with a clear \"consult your doctor/pharmacist\" disclaimer. Include an adherence streak tracker. This supports medication routine-building without offering clinical advice.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-33",
    "number": 33,
    "title": "AI Habit-Building Coach with Behavioral Nudges",
    "category": "health",
    "categoryLabel": "Health & Wellbeing",
    "description": "Build an app where users define a habit goal. The AI generates a gradual, personalized ramp-up plan (behavioral-science informed), sends context-aware nudges, and adjusts the plan based on logged adherence, offering encouragement or plan simplification after missed days. Include a streak and relapse-recovery view that avoids guilt-based messaging. This applies proven habit-formation techniques instead of generic reminder apps.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-34",
    "number": 34,
    "title": "AI Sleep Pattern Analyzer & Coach",
    "category": "health",
    "categoryLabel": "Health & Wellbeing",
    "description": "Create an app where users log sleep times and quality (manually or via uploaded wearable export data). The AI identifies patterns correlating with poor sleep quality and generates a personalized set of suggestions, explaining the reasoning behind each one. Include a trend chart and a weekly summary digest. This turns raw sleep logs into actionable, explained insights.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-35",
    "number": 35,
    "title": "AI Startup Pitch Deck Generator & Critic",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Build a tool where users describe their startup idea. The AI generates a structured pitch deck outline (problem, solution, market, business model, etc.) with slide-level content, then can switch to \"critic mode\" to roast the deck like a VC would, flagging weak arguments. Include an export to a presentation-ready format. This helps founders iterate on pitch quality before a real investor meeting.",
    "tags": [
      "GenAI"
    ]
  },
  {
    "id": "problem-36",
    "number": 36,
    "title": "AI Market Research & Competitor Analysis Assistant",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Create an app where users enter a product idea or industry. The AI compiles a structured competitor landscape summary, identifies market gaps, and generates a SWOT analysis, pulling from web search results grounded with citations. Include a comparison table view of identified competitors. This compresses hours of manual research into a structured first-pass report.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-37",
    "number": 37,
    "title": "AI Job Description & Hiring Rubric Generator",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Build a tool for small business owners/hiring managers where they describe a role in a few sentences. The AI generates a full job description, a structured interview question set, and a scoring rubric for evaluating candidates consistently. Include a candidate-comparison view once scores are entered. This helps non-HR-trained founders hire more consistently and fairly.",
    "tags": [
      "GenAI"
    ]
  },
  {
    "id": "problem-38",
    "number": 38,
    "title": "AI Customer Feedback Analyzer & Insight Dashboard",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Create an app where users upload customer reviews, survey responses, or support tickets in bulk. The AI clusters feedback into themes, tracks sentiment trends over time, and auto-generates an executive summary highlighting the top issues and praise points. Include a filterable dashboard by theme and time period. This replaces manual feedback-reading with structured, trackable insight.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-39",
    "number": 39,
    "title": "AI Legal/Policy Document Q&A for Small Businesses",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Build an app where small business owners upload compliance documents (labor laws, tax guidelines, policy PDFs) relevant to their region. The AI answers specific questions grounded only in the uploaded documents, citing the exact section referenced, with a clear \"not legal advice\" disclaimer. Include a document library with tagged categories. This makes dense regulatory documents actually navigable for non-experts.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-40",
    "number": 40,
    "title": "AI Meeting Scheduler with Smart Conflict Resolution",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Create an app where users describe a meeting need in natural language (\"30 min with the design team sometime next week, avoid Fridays\"). The AI parses constraints, checks against connected/mock calendar data, proposes optimal time slots, and drafts the invite with an AI-generated agenda based on the meeting's stated purpose. Include a conflict-resolution view showing tradeoffs when no perfect slot exists. This automates the back-and-forth of scheduling beyond simple calendar-link tools.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-41",
    "number": 41,
    "title": "AI Real Estate Listing Description & Match Generator",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Build an app where agents input property details (rooms, features, location, photos). The AI generates polished, platform-specific listing descriptions (Zillow-style vs Instagram-style) and, on the buyer side, lets users describe their ideal home in natural language to get matched and ranked against available listings with reasoning for each match. Include a tone/style selector for descriptions (luxury, cozy, minimalist). This speeds up listing creation and makes property search conversational instead of filter-based.",
    "tags": [
      "GenAI",
      "FullStack",
      "Vision"
    ]
  },
  {
    "id": "problem-42",
    "number": 42,
    "title": "AI Onboarding Assistant for New Employees",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Create an app where companies upload internal docs, policies, and team structure info. New hires get a conversational AI assistant that answers onboarding questions grounded in those documents, generates a personalized first-week checklist based on their role, and flags when a question should be escalated to a human (HR/manager). Include an admin dashboard showing common questions new hires ask, to improve documentation over time. This reduces repetitive onboarding questions and speeds up ramp-up time.",
    "tags": [
      "GenAI",
      "FullStack",
      "SaaS"
    ]
  },
  {
    "id": "problem-43",
    "number": 43,
    "title": "AI Accessibility Auditor for Websites",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Build a tool where users submit a URL or upload HTML/code. The AI scans for accessibility issues (alt text, contrast, ARIA labels, heading structure), explains each issue in plain language with severity ratings, and generates suggested code fixes. Include a before/after score comparison and a downloadable compliance report. This helps small teams meet accessibility standards without hiring a specialist auditor.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  },
  {
    "id": "problem-44",
    "number": 44,
    "title": "AI Grant/Scholarship Application Assistant",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Create an app where users describe their project, background, or achievements, and select or upload a grant/scholarship's requirements. The AI drafts tailored application essays matching the funder's stated priorities, checks word/character limits, and flags where the user's input doesn't sufficiently address a required criterion. Include a multi-application tracker showing deadlines and draft status. This helps students and nonprofits manage the tedious, high-stakes work of grant writing.",
    "tags": [
      "GenAI",
      "FullStack"
    ]
  },
  {
    "id": "problem-45",
    "number": 45,
    "title": "AI Restaurant Menu Optimizer & Description Writer",
    "category": "business",
    "categoryLabel": "Business & Productivity Tools",
    "description": "Build an app where restaurant owners upload their current menu (text or photo). The AI rewrites dish descriptions to be more appetizing and suggests pricing/psychology tweaks (anchoring, bundling), and can generate a full new menu layout based on best-seller and margin data the user inputs. Include an A/B description comparison view. This applies proven menu-engineering techniques that most small restaurants can't afford a consultant for.",
    "tags": [
      "GenAI",
      "FullStack",
      "NLP"
    ]
  }
];
