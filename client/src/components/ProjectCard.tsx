import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  stars: number;
}

export default function ProjectCard({ title, description, link, stars }: ProjectCardProps) {
  return (
    <Card 
      className="bg-black/30 border-[#00ff00]/50 hover:border-[#00ff00] transition-colors p-4 cursor-pointer group"
      onClick={() => window.open(link, '_blank')}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold group-hover:text-[#00ff00] transition-colors">
          {title}
        </h3>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-[#00ff00]" />
          <span className="text-sm">{stars}</span>
        </div>
      </div>
      <p className="mt-2 text-[#00ff00]/80 text-sm">{description}</p>
    </Card>
  );
}
