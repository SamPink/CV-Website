import { useState, useRef, useEffect } from "react";
import { commands } from "@/lib/terminal-commands";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to the interactive CV terminal. Type "help" for available commands.' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setLines(prev => [...prev, { type: 'input', content: `> ${cmd}` }]);

    if (commands[trimmedCmd]) {
      setLines(prev => [...prev, { type: 'output', content: commands[trimmedCmd] }]);
    } else if (trimmedCmd === 'clear') {
      setLines([]);
    } else {
      setLines(prev => [...prev, { type: 'output', content: 'Command not found. Type "help" for available commands.' }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  return (
    <div className="bg-black border-2 border-[#00ff00] rounded-lg p-4 h-[500px] flex flex-col">
      <ScrollArea className="flex-1">
        <div ref={scrollAreaRef} className="space-y-2">
          {lines.map((line, i) => (
            <div key={i} className={`font-mono ${line.type === 'input' ? 'text-[#00ff00]' : 'text-[#00ff00]/80'}`}>
              {line.content}
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="flex items-center mt-4 border-t border-[#00ff00]/30 pt-4">
        <span className="text-[#00ff00] mr-2">{'>'}</span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 bg-transparent border-none outline-none text-[#00ff00] font-mono"
          autoFocus
        />
      </div>
    </div>
  );
}
