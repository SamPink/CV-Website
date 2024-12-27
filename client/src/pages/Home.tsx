import { useState } from "react";
import Terminal from "@/components/Terminal";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import ProjectCard from "@/components/ProjectCard";
import SkillBar from "@/components/SkillBar";
import DetailModal from "@/components/DetailModal";
import { Card } from "@/components/ui/card";
import { detailedInfo, type DetailedInfo } from "@/lib/cv-data";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<DetailedInfo>();

  useState(() => {
    setTimeout(() => setShowContent(true), 1000);
  }, []);

  const handleItemClick = (title: string) => {
    const info = detailedInfo.find(item => item.title === title);
    if (info) {
      setSelectedInfo(info);
    }
  };

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
                  {["AI & LLMs", "Python & FastAPI Development", "Business Process Automation", "Geospatial Data Analysis", "Cloud Architecture & ETL"].map((skill) => (
                    <div key={skill} onClick={() => handleItemClick(skill)} className="cursor-pointer hover:opacity-80">
                      <SkillBar 
                        skill={skill} 
                        progress={skill === "AI & LLMs" ? 95 : 
                                skill === "Python & FastAPI Development" ? 92 :
                                skill === "Business Process Automation" ? 90 :
                                skill === "Geospatial Data Analysis" ? 88 : 85} 
                      />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-black/50 border-[#00ff00] p-6">
                <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="ACHIEVEMENTS">ACHIEVEMENTS</h2>
                <ul className="space-y-2 text-[#00ff00]/90">
                  {[
                    ["AI Chatbot Development", "• Built advanced AI chatbot with N8N workflow"],
                    ["Real-time Communication Analysis", "• Developed real-time communication analysis with Whisper"],
                    ["Dev-GPT Project", "• Created dev-gpt (200+ GitHub stars)"],
                    ["Geospatial Systems", "• Implemented geospatial data analysis systems"]
                  ].map(([title, preview]) => (
                    <li 
                      key={title}
                      onClick={() => handleItemClick(title)}
                      className="cursor-pointer hover:text-[#00ff00] transition-colors"
                    >
                      {preview}
                    </li>
                  ))}
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

      <DetailModal 
        info={selectedInfo}
        isOpen={!!selectedInfo}
        onClose={() => setSelectedInfo(undefined)}
      />
    </div>
  );
}