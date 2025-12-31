"use client"

import Link from "next/link";
import { ScrollLink } from "@/components/ui/scroll-link";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Jayesh RL</h3>
            <p className="mt-2 text-muted-foreground">
              Full-Stack Developer building modern web experiences with
              cutting-edge technologies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="mt-2 flex flex-col space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <ScrollLink
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item}
                </ScrollLink>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold">Connect</h4>
            <div className="mt-2 flex space-x-4">
              <Link
                href="https://github.com/Aspect022"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jayesh-rl-748059291/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </Link>
              <Link
                href="https://x.com/Jayesh25279350"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <TwitterIcon size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jayesh RL. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
