import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileText, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import ResearchPreview from "./ResearchPreview";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function DissertationSection() {
  const [showPdf, setShowPdf] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setIsLoading(false);
  }

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!showPdf) return;

    switch (event.key) {
      case 'ArrowLeft':
        setPageNumber(prev => Math.max(1, prev - 1));
        break;
      case 'ArrowRight':
        setPageNumber(prev => Math.min(numPages, prev + 1));
        break;
      case '+':
      case '=':
        setScale(prev => Math.min(2, prev + 0.1));
        break;
      case '-':
        setScale(prev => Math.max(0.5, prev - 0.1));
        break;
      default:
        break;
    }
  }, [showPdf, numPages]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

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
              onClick={() => {
                setShowPdf(true);
                setIsLoading(true);
              }}
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

          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4 p-2 bg-black/80 rounded-lg">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                  className="bg-black/90 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
                  title="Previous page (Left arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm min-w-[100px] text-center">
                  {isLoading ? "Loading..." : `Page ${pageNumber} of ${numPages}`}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                  disabled={pageNumber >= numPages}
                  className="bg-black/90 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
                  title="Next page (Right arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setScale(scale => Math.max(0.5, scale - 0.1))}
                  className="bg-black/90 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
                  title="Zoom out (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm min-w-[60px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setScale(scale => Math.min(2, scale + 0.1))}
                  className="bg-black/90 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
                  title="Zoom in (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-black/50 rounded-lg border-2 border-[#00ff00]/30">
              {isLoading && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-[#00ff00] animate-pulse">Loading PDF...</div>
                </div>
              )}
              <Document
                file="/api/dissertation"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={() => setIsLoading(false)}
                className="flex justify-center"
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="shadow-lg"
                  loading={
                    <div className="flex items-center justify-center h-[500px]">
                      <div className="text-[#00ff00] animate-pulse">Loading page {pageNumber}...</div>
                    </div>
                  }
                />
              </Document>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}