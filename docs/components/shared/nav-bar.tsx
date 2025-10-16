import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

export const Navbar = () => {
  return (
    <header className="border-b border-dotted sticky top-0 backdrop-blur-3xl z-30">
      <Container className="!px-4 !py-3 bg-gradient flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            height={45}
            width={45}
            className="h-6 object-contain"
          />
          <h1 className="font-bold text-2xl">Nviron</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Link
            href={"/#features"}
            className="text-muted-foreground hover:text-white"
          >
            Features
          </Link>
          <Link
            href={"/docs"}
            className="text-muted-foreground hover:text-white"
          >
            Quick start
          </Link>
          <div></div>
          <GitHubStarsButton
            username="ubeyidah"
            repo="nviron"
            formatted={true}
          />
        </div>
      </Container>
    </header>
  );
};
