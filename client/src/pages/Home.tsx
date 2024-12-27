import { useEffect, useState } from "react";
import Terminal from "@/components/Terminal";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import ProjectCard from "@/components/ProjectCard";
import SkillBar from "@/components/SkillBar";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 1000);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#00ff00] relative overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <TypewriterText
            text="SAMUEL PINK"
            className="text-4xl md:text-6xl font-bold mb-4 glitch-effect"
            data-text="SAMUEL PINK"
          />
          <TypewriterText
            text="Lead AI Systems Engineer | AI & Data Engineering Expert"
            className="text-xl md:text-2xl text-[#00ff00]/80 mb-8"
            delay={50}
          />
        </div>

        {showContent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card className="bg-black/50 border-[#00ff00] p-6">
                <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="EXPERTISE">EXPERTISE</h2>
                <div className="space-y-4">
                  <SkillBar skill="AI & LLMs (llama3, GPT-4, Anthropic)" progress={95} />
                  <SkillBar skill="Python & FastAPI Development" progress={92} />
                  <SkillBar skill="Business Process Automation" progress={90} />
                  <SkillBar skill="Geospatial Data Analysis" progress={88} />
                  <SkillBar skill="Cloud Architecture & ETL" progress={85} />
                </div>
              </Card>

              <Card className="bg-black/50 border-[#00ff00] p-6">
                <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="ACHIEVEMENTS">ACHIEVEMENTS</h2>
                <ul className="space-y-2 text-[#00ff00]/90">
                  <li>• Built advanced AI chatbot with N8N workflow</li>
                  <li>• Developed real-time communication analysis with Whisper</li>
                  <li>• Created dev-gpt (200+ GitHub stars)</li>
                  <li>• Implemented geospatial data analysis systems</li>
                </ul>
              </Card>

              <Card className="bg-black/50 border-[#00ff00] p-6">
                <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="PROJECTS">PROJECTS</h2>
                <div className="space-y-4">
                  <ProjectCard
                    title="dev-gpt"
                    description="Open-source AI tool automating Python development using GPT-4 technology"
                    link="https://github.com/SamPink/dev-gpt"
                    stars={200}
                  />
                </div>
              </Card>
            </div>

            <div>
              <Terminal />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}