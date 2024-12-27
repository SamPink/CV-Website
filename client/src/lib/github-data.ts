import { useQuery } from "@tanstack/react-query";

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

interface UserStats {
  totalStars: number;
  totalRepos: number;
  topLanguages: { [key: string]: number };
  popularRepos: Repository[];
}

async function fetchGitHubStats(username: string): Promise<UserStats> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data');
  }

  const repos: Repository[] = await response.json();
  
  const stats: UserStats = {
    totalStars: 0,
    totalRepos: repos.length,
    topLanguages: {},
    popularRepos: []
  };

  // Calculate total stars and collect languages
  repos.forEach(repo => {
    stats.totalStars += repo.stargazers_count;
    if (repo.language) {
      stats.topLanguages[repo.language] = (stats.topLanguages[repo.language] || 0) + 1;
    }
  });

  // Get top 5 repos by stars
  stats.popularRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  return stats;
}

export function useGitHubStats(username: string = "SamPink") {
  return useQuery({
    queryKey: ["github", username],
    queryFn: () => fetchGitHubStats(username),
  });
}
