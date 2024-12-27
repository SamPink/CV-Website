import { useState, useEffect } from "react";
import AIChat from "@/components/Terminal";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import ProjectCard from "@/components/ProjectCard";
import DetailModal from "@/components/DetailModal";
import SocialLinks from "@/components/SocialLinks";
import { Card } from "@/components/ui/card";
import { detailedInfo, type DetailedInfo } from "@/lib/cv-data";
import GitHubStats from "@/components/GitHubStats";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<DetailedInfo>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleItemClick = (info: DetailedInfo) => {
    setSelectedInfo(info);
  };

  const timelineItems = detailedInfo.filter(info => info.category === 'timeline');
  const expertiseItems = detailedInfo.filter(info => info.category === 'expertise');

  return (
    <div className="min-h-screen bg-black text-[#00ff00] relative overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-8">
        {showWelcome ? (
          <div className="h-screen flex items-center justify-center">
            <div className="space-y-4 text-center">
              <SocialLinks />
              <TypewriterText
                text="Welcome to my interactive CV"
                className="text-4xl md:text-6xl font-bold glitch-effect"
                data-text="Welcome to my interactive CV"
                delay={50}
              />
              <TypewriterText
                text="Loading AI-enhanced experience..."
                className="text-xl md:text-2xl text-[#00ff00]/80"
                delay={30}
              />
            </div>
          </div>
        ) : (
          <>
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
              <SocialLinks />
            </div>

            {showContent && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <Card className="bg-black/90 border-[#00ff00] p-6">
                    <h2 className="text-2xl font-bold mb-6 glitch-effect" data-text="CAREER TIMELINE">
                      CAREER TIMELINE
                    </h2>
                    <div className="mb-8 bg-black/80 border border-[#00ff00]/30 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 text-[#00ff00]">Professional Experience</h3>
                      {expertiseItems[0].content.map((item, index) => (
                        <p key={index} className="text-[#00ff00]/90">{item}</p>
                      ))}
                    </div>
                    <div className="space-y-6 relative before:content-[''] before:absolute before:left-2 before:top-2 before:w-0.5 before:h-[calc(100%-20px)] before:bg-[#00ff00]/30">
                      {timelineItems.map((item, index) => (
                        <div
                          key={item.title}
                          onClick={() => handleItemClick(item)}
                          className="ml-6 relative cursor-pointer group"
                        >
                          <div className="absolute -left-[1.65rem] top-2 w-3 h-3 bg-[#00ff00] rounded-full shadow-glow" />
                          <div className="bg-black/80 border border-[#00ff00]/30 p-4 rounded-lg group-hover:border-[#00ff00] transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-semibold">{item.title}</h3>
                              {item.date && (
                                <span className="text-sm text-[#00ff00]/70">{item.date}</span>
                              )}
                            </div>
                            <p className="text-[#00ff00]/90 font-bold">{item.content[0]}</p>
                            <p className="text-sm text-[#00ff00]/80 mt-2">{item.content[1]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="bg-black/90 border-[#00ff00] p-6">
                    <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="TECHNICAL EXPERTISE">
                      TECHNICAL EXPERTISE
                    </h2>
                    <div className="space-y-4">
                      {expertiseItems[0].content.map((skill) => (
                        <div
                          key={skill}
                          onClick={() => handleItemClick(expertiseItems[0])}
                          className="cursor-pointer hover:opacity-80"
                        >
                          <div className="text-[#00ff00]/90 hover:text-[#00ff00]">{skill}</div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <GitHubStats />
                </div>

                <div>
                  <AIChat />
                </div>
              </div>
            )}
          </>
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