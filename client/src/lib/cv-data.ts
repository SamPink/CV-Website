export type DetailedInfo = {
  title: string;
  content: string[];
  category: 'expertise' | 'achievement' | 'timeline';
  year?: string;
};

export const detailedInfo: DetailedInfo[] = [
  {
    title: "2017-2019: Foundation Years",
    category: "timeline",
    year: "2017",
    content: [
      "Started as Software Engineer at GSA",
      "Built initial ETL workflows in Python",
      "Developed data pipeline foundations",
      "First exposure to cloud platforms",
      "Concurrent Computer Science studies at University of Reading"
    ]
  },
  {
    title: "2019-2021: Data Engineering Focus",
    category: "timeline",
    year: "2019",
    content: [
      "Advanced ETL systems handling £100M+ annual bookings",
      "Expanded cloud platform expertise (AWS, Azure)",
      "Built first ML model for booking cancellation prediction",
      "Improved data processing pipelines",
      "Gained expertise in database optimization"
    ]
  },
  {
    title: "2021-2022: API & Cloud Architecture",
    category: "timeline",
    year: "2021",
    content: [
      "Developed AWS Lambda implementations",
      "Created data aggregation dashboards",
      "Built Python-based Dash applications",
      "Enhanced cloud architecture skills",
      "Started working with real-time data processing"
    ]
  },
  {
    title: "2022-2023: Advanced Data Engineering",
    category: "timeline",
    year: "2022",
    content: [
      "Developed 8 distinct ETL pipelines at Markel",
      "Implemented FastAPI and SQLAlchemy solutions",
      "Mastered geospatial data analysis with Rasterio",
      "Set up CI/CD with Azure Pipelines",
      "Created robust API authentication systems"
    ]
  },
  {
    title: "2023-Present: AI Systems Leadership",
    category: "timeline",
    year: "2023",
    content: [
      "Lead AI Systems Engineer at Ablebox",
      "Integration of advanced LLMs (llama3, GPT-4)",
      "Built AI chatbot with N8N workflow",
      "Implemented real-time communication analysis",
      "Created dev-gpt (200+ GitHub stars)"
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
  },
  {
    title: "Machine Learning Projects",
    category: "achievement",
    content: [
      "Developed booking cancellation prediction model saving £1M+ annually",
      "80% accuracy in predicting student accommodation cancellations",
      "Implemented real-time ML model deployment",
      "Created automated Python development tools using GPT-4",
      "Integrated multiple LLM models for production applications"
    ]
  },
  {
    title: "ETL Systems Architecture",
    category: "achievement",
    content: [
      "Built ETL workflow handling £100M+ in annual bookings",
      "Developed 8 distinct ETL pipelines at Markel",
      "Implemented automated data processing systems",
      "Created efficient data transformation workflows",
      "Designed scalable data pipeline architectures"
    ]
  },
  {
    title: "API Development",
    category: "achievement",
    content: [
      "Developed multiple internal APIs using FastAPI",
      "Created REST endpoints for data access and manipulation",
      "Implemented efficient database views and tables",
      "Built API integration with various tracking platforms",
      "Designed robust authentication and authorization systems"
    ]
  },
  {
    title: "Technical Leadership",
    category: "achievement",
    content: [
      "Lead AI Systems Engineer at Ablebox",
      "Managed development of cutting-edge AI solutions",
      "Led implementation of real-time communication analysis",
      "Directed integration of multiple LLM models",
      "Guided team in adopting AI-driven development practices"
    ]
  }
];