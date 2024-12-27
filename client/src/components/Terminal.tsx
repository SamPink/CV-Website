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
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim();
    setLines(prev => [...prev, { type: 'input', content: `> ${cmd}` }]);

    if (trimmedCmd.toLowerCase() === 'clear') {
      setLines([]);
      return;
    }

    if (commands[trimmedCmd.toLowerCase()]) {
      setLines(prev => [...prev, { type: 'output', content: commands[trimmedCmd.toLowerCase()] }]);
      return;
    }

    // If not a predefined command, send to AI
    setIsProcessing(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmedCmd }),
      });

      const data = await response.json();
      if (response.ok) {
        setLines(prev => [...prev, { type: 'output', content: data.response }]);
      } else {
        setLines(prev => [...prev, { type: 'output', content: 'Sorry, I encountered an error processing your request.' }]);
      }
    } catch (error) {
      setLines(prev => [...prev, { type: 'output', content: 'Sorry, I encountered an error processing your request.' }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing) {
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
          {isProcessing && (
            <div className="font-mono text-[#00ff00]/80 animate-pulse">
              Processing...
            </div>
          )}
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
          disabled={isProcessing}
          autoFocus
        />
      </div>
    </div>
  );
}