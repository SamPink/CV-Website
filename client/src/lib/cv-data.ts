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
      "Expert in integrating cutting-edge AI technologies including llama3, GPT-4, and Anthropics sonnect 3.5",
      "Built advanced AI chatbot using N8N workflow tool, Python, LLMs and SQL",
      "Developed Text-to-Speech Interface utilizing Agent workflows and OpenAI",
      "Real-time communication analysis using OpenAI's Whisper for factory floor communications",
      "Integration with cutting-edge LLMs for versatile AI applications"
    ]
  },
  {
    title: "Python & FastAPI Development",
    category: "expertise",
    content: [
      "Developed multiple internal APIs using FastAPI and SQLAlchemy",
      "Expert in Python development with strong focus on data engineering",
      "Experience with modern Python frameworks and tools",
      "Built high-performance ETL workflows and data pipelines",
      "Proficient in SQLAlchemy, Pydantic, and other Python ecosystem tools"
    ]
  },
  {
    title: "Business Process Automation",
    category: "expertise",
    content: [
      "Implemented AI technologies to revolutionize business processes",
      "Created intelligent systems for improved decision-making",
      "Automated user onboarding and offboarding processes for 1,000+ users",
      "Developed automated data aggregation solutions",
      "Streamlined operational workflows using AI and machine learning"
    ]
  },
  {
    title: "Geospatial Data Analysis",
    category: "expertise",
    content: [
      "Utilized Rasterio library for advanced geospatial data analysis",
      "Processed and analyzed coordinates from geotiff files",
      "Implemented geospatial data processing pipelines",
      "Experience with geographic information systems",
      "Built solutions for location-based data analysis"
    ]
  },
  {
    title: "AI Chatbot Development",
    category: "achievement",
    content: [
      "Built an advanced AI chatbot using N8N workflow tool",
      "Integrated with real-time company data systems",
      "Implemented graphical data summary generation",
      "Combined Python, LLMs, and SQL for comprehensive solution",
      "Enhanced data accessibility and user interaction"
    ]
  },
  {
    title: "Real-time Communication Analysis",
    category: "achievement",
    content: [
      "Pioneered real-time transcription system using Whisper",
      "Implemented factory floor communication analysis",
      "Resolved machine-related issues in real-time",
      "Improved operational efficiency through AI-driven solutions",
      "Created innovative communication monitoring system"
    ]
  },
  {
    title: "Dev-GPT Project",
    category: "achievement",
    content: [
      "Created open-source AI tool with 200+ GitHub stars",
      "Automated Python development using GPT-4 technology",
      "Led community engagement and contribution management",
      "Demonstrated expertise in AI model utilization",
      "Successfully maintained and grew open-source project"
    ]
  },
  {
    title: "Geospatial Systems",
    category: "achievement",
    content: [
      "Implemented comprehensive geospatial data analysis systems",
      "Developed solutions using Rasterio for coordinate processing",
      "Created efficient data processing pipelines",
      "Enhanced geographic data visualization capabilities",
      "Improved location-based data analysis workflows"
    ]
  }
];
