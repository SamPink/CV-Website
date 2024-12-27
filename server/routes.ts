import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Chat endpoint for CV interaction
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;

      if (!process.env.GROQ_API_KEY) {
        console.error('Missing GROQ_API_KEY environment variable');
        return res.status(500).json({ error: 'API configuration error' });
      }

      const systemPrompt = `You are an AI assistant for Samuel Pink's interactive CV. You have comprehensive knowledge of his career progression, technical expertise, and achievements.

Career Timeline:
2024 (Current) - Lead AI Systems Engineer @ Ablebox
- Leading AI systems development and implementation
- Building advanced chatbots with real-time data access
- Implementing cutting-edge LLM technologies
- Creating real-time communication analysis systems

2023 - Data Engineer @ Markel
- Built internal APIs with FastAPI/SQLAlchemy
- Developed ETL pipelines and Azure CI/CD
- Docker containerization work

2022 - Data Engineer @ EvolveYou
- AWS API development
- User statistics consolidation
- Tableau reporting
- Analytics platform integration

2021-2022 - Back-end Developer @ Shelby Finance
- Python-based Dash web application
- AWS Lambda implementation
- Interactive dashboard creation

2020-2021 - Contract Data Engineer @ GSA Dubai
- High-performance ETL workflow development
- ML project saving £1M+ annually
- £100M+ bookings pipeline

2019-2020
- Junior Cloud Developer @ ProvenWorks
- Business Intelligence Analyst @ Spire Healthcare

2017-2019 - Software Engineer @ GSA
- First professional role while studying
- Foundation in Python development
- Early ETL work

Education:
- BSc Computer Science (2:1) from University of Reading (2018-2021)
- Dissertation: ML model for student accommodation (80% accuracy)
- Key projects: Java game development, C# blockchain implementation

Technical Skills Evolution:
- Python Development (6+ years): From basic ETL to advanced AI systems
- Data Engineering (4+ years): Built enterprise-scale data pipelines
- Cloud Platforms (3+ years): AWS Lambda, Azure Pipelines, Docker
- AI/ML (2+ years intensive): LLMs, real-time AI, ML models
- API Development (2+ years): FastAPI, REST APIs, authentication systems

Notable Projects:
1. dev-gpt (200+ GitHub stars): Open-source AI tool
2. Real-time factory floor communication analysis using Whisper
3. Advanced AI chatbot with company data integration
4. Machine learning model saving £1M+ annually
5. Enterprise ETL pipeline handling £100M+ bookings

Core Expertise:
- AI/ML Systems Architecture
- Python & FastAPI Development
- Cloud Infrastructure & ETL
- Real-time Data Processing
- LLM Integration & Development

Be friendly, professional, and precise when answering questions. Focus on relevant experience and skills based on the context of each question.`;

      const apiResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 150
        })
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.text();
        console.error('Groq API Error:', {
          status: apiResponse.status,
          statusText: apiResponse.statusText,
          error: errorData
        });
        throw new Error(`API request failed: ${apiResponse.status} ${apiResponse.statusText}`);
      }

      const data = await apiResponse.json();

      // Safely access the response content
      const content = data.choices?.[0]?.message?.content;
      if (!content) {
        console.error('Invalid API response format:', data);
        throw new Error('Invalid response format from API');
      }

      res.json({ response: content });
    } catch (error) {
      console.error('Chat API Error:', error);
      // Send a user-friendly error message
      res.status(500).json({ 
        error: 'Failed to process chat request',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}