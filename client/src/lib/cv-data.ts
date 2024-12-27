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
      "Lead AI Systems Engineer with progressive experience since 2017, evolving from Python development to AI leadership.",
      "• Architected and implemented enterprise-scale AI systems",
      "• Developed high-performance data processing pipelines",
      "• Led multiple successful technical projects and teams"
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
      "Leading team of AI/ML engineers"
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
      "AI/ML Development: LLM integration, real-time AI systems, predictive modeling",
      "Data Engineering: ETL pipelines, FastAPI/SQLAlchemy, cloud solutions",
      "Infrastructure: AWS Lambda, Azure Pipelines, Docker orchestration"
    ]
  }
];