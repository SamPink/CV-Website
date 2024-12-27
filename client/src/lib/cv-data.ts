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
      "6+ Years Total Professional Experience (2017-Present)",
      "Led development of AI systems generating £1M+ in business value",
      "Created enterprise ETL pipelines handling £100M+ in annual transactions",
      "Built and maintained multiple production APIs and data platforms",
      "Progressed from Junior Developer to Lead AI Systems Engineer",
      "Successfully delivered 10+ major technical projects"
    ]
  },
  {
    title: "2023-Present",
    category: "timeline",
    year: "2023",
    date: "November 2023 - Present",
    content: [
      "Lead AI Systems Engineer @ Ablebox",
      "Leading AI systems development",
      "Building advanced chatbots with real-time data access",
      "Implementing LLM technologies",
      "Creating real-time communication analysis systems"
    ]
  },
  {
    title: "2023 (Earlier)",
    category: "timeline",
    year: "2023",
    date: "January 2023 - September 2023",
    content: [
      "Data Engineer @ Markel",
      "Built internal APIs with FastAPI/SQLAlchemy",
      "Developed ETL pipelines",
      "Implemented Azure CI/CD",
      "Docker containerization work"
    ]
  },
  {
    title: "2022",
    category: "timeline",
    year: "2022",
    date: "February 2022 - July 2022",
    content: [
      "Data Engineer @ EvolveYou",
      "AWS API development",
      "User statistics consolidation",
      "Tableau reporting",
      "Analytics platform integration"
    ]
  },
  {
    title: "2021-2022",
    category: "timeline",
    year: "2021",
    date: "November 2021 - February 2022",
    content: [
      "Back-end Developer @ Shelby Finance",
      "Python-based Dash web application",
      "AWS Lambda implementation",
      "Jira API integration",
      "Interactive dashboard creation"
    ]
  },
  {
    title: "2020-2021",
    category: "timeline",
    year: "2020",
    date: "2020 - November 2021",
    content: [
      "Contract Data Engineer @ GSA Dubai",
      "High-performance ETL workflow development",
      "ML project for booking cancellations",
      "£1+ million annual savings achieved",
      "£100+ million bookings pipeline"
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
      "First exposure to business intelligence"
    ]
  },
  {
    title: "2017-2019: Software Engineer @ GSA",
    category: "timeline",
    year: "2017",
    date: "2017 - 2019",
    content: [
      "First Professional Role",
      "• 2017-2018: Full-time Software Engineer",
      "• 2018-2019: Transitioned to part-time while studying",
      "• Built automated data processing systems",
      "• Foundation in Python development",
      "• Initial exposure to data engineering"
    ]
  },
  {
    title: "2018-2021: Education",
    category: "timeline",
    year: "2018",
    date: "2018 - 2021",
    content: [
      "BSc Computer Science, University of Reading",
      "• Grade: 2:1 Honours",
      "• Machine Learning Dissertation: 80% accuracy in prediction models",
      "• Key Projects: Java game engine, C# blockchain implementation",
      "• Focus: Advanced Programming, Machine Learning, Networking"
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