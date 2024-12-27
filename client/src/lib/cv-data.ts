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
    title: "2024 (Current)",
    category: "timeline",
    year: "2024",
    date: "2024 (Current)",
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
    date: "January 2023 - December 2023",
    content: [
      "Lead AI Systems Engineer @ Ablebox (Started November)",
      "- Transitioning to AI leadership role",
      "- Spearheading AI implementation strategies",
      "",
      "Data Engineer @ Markel (Until September)",
      "- Built internal APIs with FastAPI/SQLAlchemy",
      "- Developed ETL pipelines",
      "- Implemented Azure CI/CD",
      "- Docker containerization work"
    ]
  },
  {
    title: "2022",
    category: "timeline",
    year: "2022",
    date: "February 2022 - July 2022",
    content: [
      "Data Engineer @ EvolveYou",
      "- AWS API development",
      "- User statistics consolidation",
      "- Tableau reporting",
      "- Analytics platform integration"
    ]
  },
  {
    title: "2021-2022",
    category: "timeline",
    year: "2021",
    date: "November 2021 - February 2022",
    content: [
      "Back-end Developer @ Shelby Finance",
      "- Python-based Dash web application",
      "- AWS Lambda implementation",
      "- Jira API integration",
      "- Interactive dashboard creation"
    ]
  },
  {
    title: "2020-2021",
    category: "timeline",
    year: "2020",
    date: "2020 - November 2021",
    content: [
      "Contract Data Engineer @ GSA Dubai",
      "- High-performance ETL workflow development",
      "- ML project for booking cancellations",
      "- £1+ million annual savings achieved",
      "- £100+ million bookings pipeline"
    ]
  },
  {
    title: "2019-2020",
    category: "timeline",
    year: "2019",
    date: "July 2019 - May 2020",
    content: [
      "Multiple Roles:",
      "- Junior Cloud Developer @ ProvenWorks (October 2019 - May 2020)",
      "  Initial professional cloud development experience",
      "",
      "- Business Intelligence Analyst @ Spire Healthcare (July - September 2019)",
      "  First exposure to business intelligence"
    ]
  },
  {
    title: "2018-2021: Education",
    category: "timeline",
    year: "2018",
    date: "2018 - 2021",
    content: [
      "BSc Computer Science, University of Reading",
      "Grade: 2:1 Honours",
      "",
      "Machine Learning Dissertation:",
      "- Developed ML model for predicting student accommodation booking cancellations",
      "- Analyzed 14,363 bookings with £20M+ revenue impact",
      "- Achieved 71% recall accuracy using Azure AutoML Stack Ensemble",
      "- Implemented real-time prediction system with FastAPI and Docker",
      "- Identified key cancellation factors including pricing and booking patterns",
      "",
      "Key Projects:",
      "- Java game development",
      "- C# blockchain implementation"
    ]
  },
  {
    title: "2017-2019: Software Engineer @ GSA",
    category: "timeline",
    year: "2017",
    date: "2017 - 2019",
    content: [
      "First Professional Role",
      "- First professional role while studying",
      "- Foundation in Python development",
      "- Early ETL work",
      "- Initial exposure to data engineering"
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