import { useGitHubStats } from "@/lib/github-data";
import { Card } from "@/components/ui/card";
import { Star, GitBranch, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function GitHubStats() {
  const { data: stats, isLoading, error } = useGitHubStats();

  if (isLoading) {
    return (
      <Card className="bg-black/50 border-[#00ff00] p-6">
        <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="GITHUB STATS">GITHUB STATS</h2>
        <div className="text-[#00ff00]/80 animate-pulse">Loading GitHub data...</div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-black/50 border-[#00ff00] p-6">
        <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="GITHUB STATS">GITHUB STATS</h2>
        <div className="text-red-500">Failed to load GitHub data</div>
      </Card>
    );
  }

  if (!stats) return null;

  return (
    <Card className="bg-black/50 border-[#00ff00] p-6">
      <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="GITHUB STATS">GITHUB STATS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-[#00ff00]" />
          <span className="text-[#00ff00]/80">{stats.totalStars} Stars</span>
        </div>
        <div className="flex items-center space-x-2">
          <GitBranch className="w-5 h-5 text-[#00ff00]" />
          <span className="text-[#00ff00]/80">{stats.totalRepos} Repositories</span>
        </div>
        <div className="flex items-center space-x-2">
          <Code className="w-5 h-5 text-[#00ff00]" />
          <span className="text-[#00ff00]/80">
            {Object.keys(stats.topLanguages).length} Languages
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-2">Popular Repositories</h3>
        {stats.popularRepos.map((repo, index) => (
          <motion.div
            key={repo.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="border border-[#00ff00]/30 p-3 rounded hover:border-[#00ff00] transition-colors cursor-pointer"
            onClick={() => window.open(repo.html_url, '_blank')}
          >
            <div className="flex justify-between items-start">
              <h4 className="font-medium">{repo.name}</h4>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-[#00ff00]" />
                <span className="text-sm">{repo.stargazers_count}</span>
              </div>
            </div>
            <p className="text-sm text-[#00ff00]/70 mt-1">{repo.description}</p>
            {repo.language && (
              <span className="text-xs text-[#00ff00]/60 mt-2 inline-block">
                {repo.language}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
