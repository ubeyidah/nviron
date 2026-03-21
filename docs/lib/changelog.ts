import { readFile } from "node:fs/promises";
import path from "node:path";

export type ChangelogSection = {
  title: string;
  items: string[];
};

export type ChangelogRelease = {
  version: string;
  date: string;
  sections: ChangelogSection[];
  compareUrl?: string;
};

const RELEASE_HEADING = /^##\s+\[(.+?)\]\s+-\s+(\d{4}-\d{2}-\d{2})\s*$/;
const SECTION_HEADING = /^###\s+(.+)\s*$/;
const REFERENCE_LINK = /^\[(.+?)\]:\s+(https?:\/\/\S+)\s*$/;

export async function getChangelogReleases(): Promise<ChangelogRelease[]> {
  const changelogPath = path.resolve(process.cwd(), "..", "CHANGELOG.md");
  const raw = await readFile(changelogPath, "utf8");
  const lines = raw.replace(/\r\n/g, "\n").split("\n");

  const links = new Map<string, string>();
  for (const line of lines) {
    const match = line.match(REFERENCE_LINK);
    if (match && match[1] && match[2]) links.set(match[1], match[2]);
  }

  const releases: ChangelogRelease[] = [];
  let currentRelease: ChangelogRelease | null = null;
  let currentSection: ChangelogSection | null = null;

  const flushSection = () => {
    if (currentRelease && currentSection)
      currentRelease.sections.push(currentSection);
    currentSection = null;
  };

  const flushRelease = () => {
    flushSection();
    if (currentRelease) releases.push(currentRelease);
    currentRelease = null;
  };

  for (const line of lines) {
    const releaseMatch = line.match(RELEASE_HEADING);
    if (releaseMatch) {
      flushRelease();
      const version = releaseMatch[1] ?? "";
      const date = releaseMatch[2] ?? "";
      currentRelease = {
        version,
        date,
        sections: [],
        compareUrl: links.get(version),
      };
      continue;
    }

    const sectionMatch = line.match(SECTION_HEADING);
    if (sectionMatch) {
      flushSection();
      currentSection = {
        title: sectionMatch[1] ?? "",
        items: [],
      };
      continue;
    }

    if (line.startsWith("- ") && currentSection) {
      currentSection.items.push(line.slice(2).trim());
    }
  }

  flushRelease();

  return releases;
}
