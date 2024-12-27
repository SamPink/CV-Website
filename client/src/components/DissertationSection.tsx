import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileText } from "lucide-react";
import ResearchPreview from "./ResearchPreview";

export default function DissertationSection() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <Card className="bg-black/90 border-[#00ff00] p-6">
      <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="DISSERTATION RESEARCH">
        DISSERTATION RESEARCH
      </h2>

      <div className="space-y-6">
        <div className="bg-black/80 border border-[#00ff00]/30 p-4 rounded-lg hover:border-[#00ff00] transition-colors cursor-pointer">
          <h3 className="text-lg font-semibold mb-2">Machine Learning in Student Accommodation</h3>
          <p className="text-[#00ff00]/90 mb-4">
            Developed a predictive model for student accommodation booking cancellations,
            analyzing 14,363 bookings with £20M+ revenue impact. Achieved 71% recall accuracy
            using Azure AutoML Stack Ensemble.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="bg-black/90 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
              onClick={() => setShowPdf(true)}
            >
              <FileText className="w-4 h-4 mr-2" />
              View Full PDF
            </Button>
          </div>
        </div>

        <ResearchPreview />
      </div>

      <Dialog open={showPdf} onOpenChange={setShowPdf}>
        <DialogContent className="max-w-4xl h-[90vh] p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Machine Learning Dissertation</DialogTitle>
          </DialogHeader>
          <div className="flex-1 h-full overflow-hidden rounded-lg border-2 border-[#00ff00]/30">
            <iframe
              src="/api/dissertation"
              className="w-full h-full"
              title="Machine Learning Dissertation"
            />
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}