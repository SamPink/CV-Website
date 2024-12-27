import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Chat endpoint for CV interaction
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      const systemPrompt = `You are an AI assistant for Samuel Pink's CV. You have expertise in all of Samuel's skills, experience, achievements, and education.
      Be precise, professional, and focus on highlighting relevant experience and skills when answering questions.

      Current role: Lead AI Systems Engineer
      Core expertise: AI/ML, Python, Data Engineering, Cloud Architecture
      Notable achievements: Built AI chatbot with N8N, Real-time communication analysis with Whisper, Created dev-gpt (200+ GitHub stars)

      Education:
      - BSc in Computer Science (2:1) from University of Reading (UK)
      - Dissertation: Developed a machine learning model for global student accommodations to predict booking cancellations with 80% accuracy
      - Key modules: Networking and Advanced Java Programming, including a Java game project and C# blockchain project`;

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
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

      const data = await response.json();

      // Handle API error responses
      if (!response.ok) {
        console.error('Groq API Error:', data);
        throw new Error(data.error?.message || 'API request failed');
      }

      // Safely access the response content
      const content = data.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error('Invalid response format from API');
      }

      res.json({ response: content });
    } catch (error) {
      console.error('Chat API Error:', error);
      res.status(500).json({ error: 'Failed to process chat request' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}