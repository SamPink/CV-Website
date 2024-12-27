import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight, BookOpen, LineChart } from "lucide-react";

interface ResearchSection {
  title: string;
  content: string[];
}

const researchData: ResearchSection[] = [
  {
    title: "Problem & Impact",
    content: [
      "25% of all 14,363 bookings were cancelled",
      "Over £20 million in revenue loss",
      "Goal: Predict cancellations with high accuracy"
    ]
  },
  {
    title: "Methodology",
    content: [
      "CRISP-DM methodology",
      "Azure AutoML with Stack Ensemble",
      "Data from 45 properties",
      "80-20 train-test split"
    ]
  },
  {
    title: "Results",
    content: [
      "71% recall accuracy in predicting cancellations",
      "Key factors identified:",
      "- Total price most significant predictor",
      "- Time patterns in booking process",
      "- Student year of study (6th years: 40% cancellation)",
      "- Rebooking status (new: 16% more likely)"
    ]
  },
  {
    title: "Technical Implementation",
    content: [
      "Azure cloud platform",
      "Docker containers for deployment",
      "Real-time data warehouse",
      "FastAPI and SQLAlchemy integration"
    ]
  }
];

interface ResearchPreviewProps {
  isPreview?: boolean;
  onClick?: () => void;
}

export default function ResearchPreview({ isPreview = false, onClick }: ResearchPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  if (isPreview) {
    return (
      <Card 
        className="bg-black/90 border-[#00ff00] p-4 cursor-pointer hover:border-[#00ff00]/80 transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#00ff00]">Machine Learning Dissertation</h3>
            <p className="text-[#00ff00]/80 text-sm">Predicting Student Accommodation Cancellations</p>
          </div>
          <ChevronRight className="w-5 h-5 text-[#00ff00]/60" />
        </div>
      </Card>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        variant="outline"
        className="w-full bg-black/90 border-[#00ff00] text-[#00ff00] hover:bg-black/80"
        onClick={() => setIsOpen(true)}
      >
        <BookOpen className="w-4 h-4 mr-2" />
        View Research Summary
      </Button>

      <DialogContent className="bg-black/95 border-[#00ff00] text-[#00ff00] max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold glitch-effect" data-text="Machine Learning Research">
            Machine Learning Research
          </DialogTitle>
          <p className="text-[#00ff00]/80">
            Predicting Student Accommodation Cancellations Using Machine Learning
          </p>
        </DialogHeader>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`bg-black/80 border-[#00ff00]/30 p-4 cursor-pointer transition-all hover:border-[#00ff00] ${
                  selectedSection === section.title ? "border-[#00ff00]" : ""
                }`}
                onClick={() => setSelectedSection(section.title === selectedSection ? null : section.title)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <LineChart className="w-4 h-4 text-[#00ff00]/60" />
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: selectedSection === section.title ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 mt-2">
                    {section.content.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-[#00ff00]/90"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}