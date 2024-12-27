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
      "• Leading team of AI/ML engineers"
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