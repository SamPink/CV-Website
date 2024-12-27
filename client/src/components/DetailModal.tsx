import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type DetailedInfo } from "@/lib/cv-data";
import { motion } from "framer-motion";

interface DetailModalProps {
  info?: DetailedInfo;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailModal({ info, isOpen, onClose }: DetailModalProps) {
  if (!info) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border-[#00ff00] text-[#00ff00] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold glitch-effect" data-text={info.title}>
            {info.title}
          </DialogTitle>
          {info.date && (
            <p className="text-[#00ff00]/70 text-sm">{info.date}</p>
          )}
        </DialogHeader>
        <div className="mt-4">
          <ul className="space-y-4">
            {info.content.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start space-x-2 ${
                  item.startsWith("Key Projects:") ? "mt-6 font-bold" : ""
                }`}
              >
                {!item.startsWith("Key Projects:") && (
                  <span className="text-[#00ff00] mt-1">{'>'}</span>
                )}
                <span className={`text-[#00ff00]/90 ${
                  item.startsWith("-") ? "ml-6" : ""
                }`}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}