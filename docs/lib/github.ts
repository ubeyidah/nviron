export type GitHubContributor = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

export async function getNvironContributors(): Promise<GitHubContributor[]> {
  const response = await fetch(
    "https://api.github.com/repos/ubeyidah/nviron/contributors?per_page=100",
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!response.ok) return [];

  const data = (await response.json()) as GitHubContributor[];
  return data.filter((item) => item.login !== "dependabot[bot]");
}
