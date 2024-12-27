import { useQuery } from "@tanstack/react-query";

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

const FEATURED_REPOS = [
  "dev-gpt",
  "VocalNews",
  "llm-colosseum",
  "Visionary-Assistant",
  "ETHGPT"
];

async function fetchGitHubStats(username: string): Promise<{
  popularRepos: Repository[];
  totalStars: number;
  totalRepos: number;
  topLanguages: { [key: string]: number };
}> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data');
  }

  const repos: Repository[] = await response.json();

  const stats = {
    totalStars: 0,
    totalRepos: repos.length,
    topLanguages: {} as { [key: string]: number },
    popularRepos: [] as Repository[]
  };

  // Calculate total stars and collect languages
  repos.forEach(repo => {
    stats.totalStars += repo.stargazers_count;
    if (repo.language) {
      stats.topLanguages[repo.language] = (stats.topLanguages[repo.language] || 0) + 1;
    }
  });

  // Sort and filter featured repos
  stats.popularRepos = FEATURED_REPOS
    .map(name => repos.find(repo => repo.name === name))
    .filter((repo): repo is Repository => repo !== undefined);

  return stats;
}

export function useGitHubStats(username: string = "SamPink") {
  return useQuery({
    queryKey: ["github", username],
    queryFn: () => fetchGitHubStats(username),
  });
}