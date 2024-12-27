export type DetailedInfo = {
  title: string;
  content: string[];
  category: 'expertise' | 'achievement' | 'experience';
};

export const detailedInfo: DetailedInfo[] = [
  {
    title: "AI & LLMs",
    category: "expertise",
    content: [
      "6+ years of progressive experience from ETL to advanced AI systems",
      "Recent focus: LLM integration with llama3, GPT-4, Anthropics sonnect 3.5",
      "Developed AI chatbot using N8N workflow tool with real-time data integration",
      "Implemented factory floor communication analysis using OpenAI's Whisper",
      "Created open-source dev-gpt project with 200+ GitHub stars"
    ]
  },
  {
    title: "Python Development",
    category: "expertise",
    content: [
      "Started with ETL workflows at GSA (2017)",
      "Advanced to FastAPI implementations at Markel (2022-2023)",
      "Expert in FastAPI, SQLAlchemy, Pydantic ecosystem",
      "Built 8 distinct ETL pipelines processing large-scale data",
      "Created high-performance data processing systems handling £100M+ annual bookings"
    ]
  },
  {
    title: "Cloud Architecture",
    category: "expertise",
    content: [
      "AWS experience: Lambda, EC2 implementations (3+ years)",
      "Azure expertise: Pipeline development, Container Registry (2+ years)",
      "Implemented CI/CD with Azure Pipelines",
      "Docker containerization for cross-environment deployment",
      "Cloud-based data processing and API development"
    ]
  },
  {
    title: "Data Engineering",
    category: "expertise",
    content: [
      "4+ years specialized in data engineering solutions",
      "Designed and optimized database schemas for scalability",
      "Built ETL pipelines processing mission-critical data",
      "Experience with Azure SQL, AWS databases",
      "Implemented geospatial data analysis using Rasterio"
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