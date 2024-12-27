export type DetailedInfo = {
  title: string;
  content: string[];
  category: 'expertise' | 'achievement' | 'timeline';
  year?: string;
  date?: string;
};

export const detailedInfo: DetailedInfo[] = [
  {
    title: "Total Experience",
    category: "expertise",
    content: [
      "6+ Years Total Professional Experience (2017-Present)",
      "Python Development: 6+ years (Started 2017)",
      "Data Engineering: 4+ years (Started 2019)",
      "Cloud Platforms: 3+ years (Started 2020)",
      "AI/ML Development: 2+ years intensive (Started 2022)",
      "Technical Leadership: 1+ year (Started 2023)"
    ]
  },
  {
    title: "2023-Present",
    category: "timeline",
    year: "2023",
    date: "November 2023 - Present",
    content: [
      "Lead AI Systems Engineer @ Ablebox",
      "Leading AI systems development and implementation",
      "Building advanced chatbots with real-time data access",
      "Implementing LLM technologies (llama3, Anthropic Sonnet 3.5, GPT-4)",
      "Creating real-time factory floor communication analysis systems",
      "Transitioning to AI leadership role",
      "Spearheading AI implementation strategies",
      "Building foundational AI infrastructure",
      "Establishing AI development practices"
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
      "Junior Cloud Developer @ ProvenWorks (Oct 2019 - May 2020)",
      "Business Intelligence Analyst @ Spire Healthcare (Jul - Sep 2019)",
      "Initial professional cloud development experience",
      "First exposure to business intelligence",
      "Foundation in data analysis"
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
      "Dissertation: ML model for student accommodation (80% accuracy)",
      "Key Projects: Java game development, C# blockchain implementation",
      "Focus Areas: Advanced Programming, Machine Learning, Networking"
    ]
  },
  {
    title: "2017-2019",
    category: "timeline",
    year: "2017",
    date: "2017 - 2019",
    content: [
      "Software Engineer @ GSA",
      "First professional role while studying",
      "Foundation in Python development",
      "Early ETL work",
      "Initial exposure to data engineering"
    ]
  },
  {
    title: "Technical Skills Growth",
    category: "expertise",
    content: [
      "Python Development (6+ years, 2017-Present): Evolved from ETL scripts to advanced AI systems",
      "Data Engineering (4+ years, 2019-Present): Progressed from basic pipelines to enterprise-scale systems",
      "Cloud Platforms (3+ years, 2020-Present): AWS Lambda, Azure Pipelines, Docker expertise",
      "AI/ML (2+ years intensive, 2022-Present): LLMs, real-time AI, ML model development",
      "API Development (2+ years, 2021-Present): FastAPI, REST APIs, authentication systems"
    ]
  }
];