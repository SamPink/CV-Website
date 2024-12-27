import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Chat endpoint for CV interaction
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      const systemPrompt = `You are an AI assistant for Samuel Pink's CV. You have expertise in all of Samuel's skills, experience, and achievements.
      Be precise, professional, and focus on highlighting relevant experience and skills when answering questions.
      Current role: Lead AI Systems Engineer
      Core expertise: AI/ML, Python, Data Engineering, Cloud Architecture
      Notable achievements: Built AI chatbot with N8N, Real-time communication analysis with Whisper, Created dev-gpt (200+ GitHub stars)`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
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
      res.json({ response: data.choices[0].message.content });
    } catch (error) {
      console.error('Chat API Error:', error);
      res.status(500).json({ error: 'Failed to process chat request' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}