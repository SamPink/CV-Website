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
    title: "Technical Expertise",
    category: "expertise",
    content: [
      "AI/ML Development: LLM integration, real-time AI systems, predictive modeling",
      "Data Engineering: ETL pipelines, FastAPI/SQLAlchemy, cloud solutions",
      "Infrastructure: AWS Lambda, Azure Pipelines, Docker orchestration"
    ]
  }
];