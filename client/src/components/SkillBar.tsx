import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

interface SkillBarProps {
  skill: string;
  progress: number;
}

export default function SkillBar({ skill, progress }: SkillBarProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setValue(progress), 500);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-[#00ff00]/80">{progress}%</span>
      </div>
      <Progress 
        value={value} 
        className="h-2 bg-black border border-[#00ff00]/30"
      >
        <div 
          className="h-full bg-[#00ff00] transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      </Progress>
    </div>
  );
}
