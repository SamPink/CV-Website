import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

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

Executive Summary:
Samuel Pink is a seasoned Lead AI Systems Engineer with over 6 years of progressive experience, evolving from data engineering to advanced AI systems implementation. He demonstrates a rare combination of deep technical expertise and strategic leadership abilities.

Current Role & Impact:
- Lead AI Systems Engineer at Ablebox (2023-Present)
- Spearheads development of innovative AI solutions
- Implements cutting-edge LLM technologies
- Creates real-time communication analysis systems
- Manages AI/ML engineering teams

Technical Evolution:

AI/ML Expertise (2022-Present):
- Development of text-to-speech interfaces using LangChain and RAG
- Real-time transcription systems using OpenAI's Whisper
- Integration of LLaMA, MixTRL, and other LLMs
- Predictive modeling for business applications
- Natural language processing solutions

Data Engineering (2019-Present):
- ETL workflows handling £100M+ annual transactions
- Database architecture and optimization
- Python, FastAPI, and SQLAlchemy implementations
- Cloud-based data solutions (AWS/Azure)

Cloud & Infrastructure:
- Azure platform services and pipeline development
- AWS Lambda and service implementation
- Docker containerization and orchestration
- CI/CD pipeline development
- Serverless architecture implementation

Career Timeline:

2023-Present: Lead AI Systems Engineer @ Ablebox
- Leading AI systems development and implementation
- Building advanced chatbots with real-time data integration
- Managing team of AI/ML engineers
- Duration: 1 year 2 months

2023 (Earlier): Data Engineer @ Markel
- Delivered 8 production ETL pipelines
- Architected internal API platform
- Reduced processing time by 40%
- Duration: 9 months

2022: Data Engineer @ EvolveYou
- Created AWS-based analytics platform
- Built executive dashboard system
- Improved data accuracy by 35%
- Duration: 6 months

2021-2022: Back-end Developer @ Shelby Finance
- Developed automated reporting system
- Built real-time analytics dashboard
- Reduced manual reporting by 80%
- Duration: 4 months

2020-2021: Contract Data Engineer @ GSA Dubai
- Built booking prediction ML model
- Achieved £1M+ annual cost savings
- Managed £100M+ bookings pipeline
- Duration: 1 year 11 months

2019-2020: Multiple Roles
- Junior Cloud Developer @ ProvenWorks
- Business Intelligence Analyst @ Spire Healthcare
- Duration: 11 months

2017-2019: Software Engineer @ GSA
- First professional development role
- Built automated data processing systems
- Duration: 2 years

Education:
- BSc Computer Science (2:1) from University of Reading (2018-2021)
- Machine Learning Dissertation: 80% accuracy in prediction models
- Key Projects: Java game engine, C# blockchain implementation
- Focus: Advanced Programming, Machine Learning, Networking

Notable Achievements:
- Created 'dev-gpt' (200+ GitHub stars)
- Implemented ML solutions saving £1M+ annually
- Built ETL pipelines handling £100M+ in transactions
- Reduced processing times by 40-80% in multiple roles
- Led successful digital transformation initiatives

Core Technical Skills:
- Programming: Python (Expert), JavaScript, C#, SQL
- AI/ML: LangChain, RAG, TensorFlow, scikit-learn
- Data: Pandas, NumPy, FastAPI, SQLAlchemy
- Cloud: Azure Services, AWS Lambda, EC2, Docker
- Visualization: Dash, Plotly, Tableau, PowerBI

Future Focus:
- Advancing AI implementation in industrial settings
- Developing efficient NLP solutions
- Contributing to open-source AI tools
- Leading innovative AI/ML projects

Community Engagement:
- Active open-source contributor
- Prize winner at ETH Global NYC 2022
- Active in blockchain and Web3.0 communities

Be friendly, professional, and precise when answering questions. Focus on relevant experience and skills based on the context of each question. If asked about specific technical implementations or projects, provide detailed examples from the appropriate time period in Samuel's career.`;

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
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        console.error('Invalid API response format:', data);
        throw new Error('Invalid response format from API');
      }

      res.json({ response: content });
    } catch (error) {
      console.error('Chat API Error:', error);
      res.status(500).json({ 
        error: 'Failed to process chat request',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      });
    }
  });

  // Serve dissertation PDF
  app.get('/api/dissertation', (req, res) => {
    const pdfPath = path.join(process.cwd(), 'attached_assets', 'Dissertation.pdf');
    res.sendFile(pdfPath);
  });

  const httpServer = createServer(app);
  return httpServer;
}