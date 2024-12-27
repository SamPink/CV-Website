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
      "• Built innovative marketing content generator using OpenAI and Anthropic models",
      "• Developed n8n-powered AI workflow system with Supabase integration",
      "• Created intelligent production scheduling system using advanced AI reasoning",
      "• Leading team of AI/ML engineers",
      "",
      "Key Projects:",
      "1. AI Marketing Content Generator",
      "- Integrated multiple AI models (OpenAI O1, Anthropic Sonnet 3.5)",
      "- Built intuitive UI for topic-based content generation",
      "- Implemented direct LinkedIn scheduling integration",
      "- Used n8n for AI workflow orchestration",
      "- Leveraged Supabase for authentication and data storage",
      "",
      "2. Intelligent Production Scheduler",
      "- Utilized OpenAI's O1-Pro model for advanced reasoning",
      "- Optimized scheduling across multiple machines and factories",
      "- Real-time order processing and resource allocation",
      "- Improved production efficiency through AI-driven insights"
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
      "Created AWS-based analytics platform",
      "Built executive dashboard system",
      "Improved data accuracy significantly",
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
      "Built real-time analytics dashboard",
      "Reduced manual reporting significantly",
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
      "Implemented high-performance ETL workflow",
      "Managed large-scale bookings pipeline",
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
      "First professional cloud development experience",
      "Duration: 11 months"
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