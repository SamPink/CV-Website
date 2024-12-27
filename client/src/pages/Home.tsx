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
        <TypewriterText
          text="SAMUEL PINK"
          className="text-4xl md:text-6xl font-bold mb-4 glitch-effect"
          data-text="SAMUEL PINK"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Terminal />
          </div>

          <div className="space-y-8">
            {showContent && (
              <>
                <Card className="bg-black/50 border-[#00ff00] p-6">
                  <h2 className="text-2xl font-bold mb-4">KEY SKILLS</h2>
                  <div className="space-y-4">
                    <SkillBar skill="Artificial Intelligence" progress={95} />
                    <SkillBar skill="Python" progress={90} />
                    <SkillBar skill="Data Engineering" progress={85} />
                    <SkillBar skill="Machine Learning" progress={88} />
                    <SkillBar skill="Cloud Computing" progress={82} />
                  </div>
                </Card>

                <Card className="bg-black/50 border-[#00ff00] p-6">
                  <h2 className="text-2xl font-bold mb-4">NOTABLE PROJECTS</h2>
                  <div className="space-y-4">
                    <ProjectCard
                      title="dev-gpt"
                      description="An open-source project aimed at automating Python development tasks using GPT-4 technology"
                      link="https://github.com/SamPink/dev-gpt"
                      stars={200}
                    />
                  </div>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
