export type DetailedInfo = {
  title: string;
  content: string[];
  category: 'expertise' | 'achievement' | 'timeline';
  year?: string;
  date?: string;
};

export const detailedInfo: DetailedInfo[] = [
  {
    title: "Professional Overview",
    category: "expertise",
    content: [
      "Dynamic Lead AI Systems Engineer with a proven track record spanning 6+ years in software development and artificial intelligence. Starting as a junior developer in 2017, rapidly progressed through increasingly complex roles to current leadership position.",
      "Demonstrated expertise in implementing cutting-edge AI solutions, with achievements including:",
      "• Development of AI systems generating £1M+ in business value",
      "• Design of enterprise ETL pipelines processing £100M+ annual transactions",
      "• Leadership of multiple technical teams and successful delivery of 10+ major projects",
      "Consistently driven innovation across roles, evolving from foundational Python development to advanced AI systems architecture, while maintaining a focus on delivering measurable business impact."
    ]
  },
  {
    title: "2023-Present",
    category: "timeline",
    year: "2023",
    date: "November 2023 - Present",
    content: [
      "Lead AI Systems Engineer @ Ablebox",
      "Building advanced AI chatbots with real-time data integration",
      "Leading factory floor communication analysis project",
      "Managing team of AI/ML engineers",
      "Spearheading AI strategy and implementation",
      "Duration: 1 year 2 months"
    ]
  },
  {
    title: "2023 (Earlier)",
    category: "timeline",
    year: "2023",
    date: "January 2023 - September 2023",
    content: [
      "Data Engineer @ Markel",
      "Delivered 8 production ETL pipelines",
      "Architected internal API platform",
      "Reduced processing time by 40%",
      "Implemented automated CI/CD pipelines",
      "Duration: 9 months"
    ]
  },
  {
    title: "2022",
    category: "timeline",
    year: "2022",
    date: "February 2022 - July 2022",
    content: [
      "Data Engineer @ EvolveYou",
      "Created AWS-based analytics platform",
      "Unified user statistics across platforms",
      "Built executive dashboard system",
      "Improved data accuracy by 35%",
      "Duration: 6 months"
    ]
  },
  {
    title: "2021-2022",
    category: "timeline",
    year: "2021",
    date: "November 2021 - February 2022",
    content: [
      "Back-end Developer @ Shelby Finance",
      "Developed automated reporting system",
      "Integrated multiple third-party APIs",
      "Built real-time analytics dashboard",
      "Reduced manual reporting by 80%",
      "Duration: 4 months"
    ]
  },
  {
    title: "2020-2021",
    category: "timeline",
    year: "2020",
    date: "2020 - November 2021",
    content: [
      "Contract Data Engineer @ GSA Dubai",
      "Built booking prediction ML model",
      "Achieved £1M+ annual cost savings",
      "Managed £100M+ bookings pipeline",
      "Improved booking accuracy by 80%",
      "Duration: 1 year 11 months"
    ]
  },
  {
    title: "2019-2020",
    category: "timeline",
    year: "2019",
    date: "July 2019 - May 2020",
    content: [
      "Multiple Roles:",
      "Junior Cloud Developer @ ProvenWorks (Oct 2019 - May 2020)",
      "Business Intelligence Analyst @ Spire Healthcare (Jul - Sep 2019)",
      "Established cloud development foundations",
      "Duration: 11 months"
    ]
  },
  {
    title: "2018-2021",
    category: "timeline",
    year: "2018",
    date: "2018 - 2021",
    content: [
      "BSc Computer Science, University of Reading",
      "Achieved 2:1 Classification",
      "Built ML model with 80% prediction accuracy",
      "Developed Java game engine from scratch",
      "Created blockchain system in C#",
      "Duration: 3 years"
    ]
  },
  {
    title: "2017-2019",
    category: "timeline",
    year: "2017",
    date: "2017 - 2019",
    content: [
      "Software Engineer @ GSA",
      "First professional development role",
      "Built automated data processing systems",
      "Developed core business applications",
      "Managed student data pipelines",
      "Duration: 2 years"
    ]
  },
  {
    title: "Technical Expertise",
    category: "expertise",
    content: [
      "AI/ML Development (2022-Present)",
      "• LLM Integration: llama3, GPT-4, Anthropic's Sonnet 3.5",
      "• Real-time AI applications and chatbots",
      "• Machine Learning model development",
      "",
      "Python & Data Engineering (2017-Present)",
      "• Modern Frameworks: FastAPI, SQLAlchemy, Pydantic",
      "• ETL Pipeline Design and Implementation",
      "• API Architecture and Development",
      "",
      "Cloud & Infrastructure (2020-Present)",
      "• AWS: Lambda, EC2, API Gateway",
      "• Azure: Pipelines, Container Registry, SQL",
      "• Docker and CI/CD Implementation"
    ]
  }
];