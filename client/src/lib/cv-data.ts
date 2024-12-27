export type DetailedInfo = {
  title: string;
  content: string[];
  category: 'expertise' | 'achievement' | 'timeline';
  year?: string;
  date?: string;
};

export const detailedInfo: DetailedInfo[] = [
  {
    title: "2024 (Current)",
    category: "timeline",
    year: "2024",
    date: "Current",
    content: [
      "Lead AI Systems Engineer @ Ablebox",
      "Leading AI systems development",
      "Building advanced chatbots with real-time data access",
      "Implementing LLM technologies (llama3, Anthropic Sonnet 3.5, GPT-4)",
      "Creating real-time factory floor communication analysis systems"
    ]
  },
  {
    title: "2023",
    category: "timeline",
    year: "2023",
    date: "November 2023 - December 2023",
    content: [
      "Lead AI Systems Engineer @ Ablebox (Started November)",
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
      "Python Development (6+ years): From basic ETL to advanced AI systems",
      "Data Engineering (4+ years): Built enterprise-scale data pipelines",
      "Cloud Platforms (3+ years): AWS Lambda, Azure Pipelines, Docker",
      "AI/ML (2+ years intensive): LLMs, real-time AI, ML models",
      "API Development (2+ years): FastAPI, REST APIs, authentication systems"
    ]
  }
];