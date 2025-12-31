"use client";

import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface ScrollLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ children, href, className, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (onClick) {
        onClick();
      }

      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const targetId = href.toString().replace(/.*#/, "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });

          window.history.pushState(
            null,
            "",
            typeof href === "string" ? href : href.pathname
          );
        }
      }
    };

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

ScrollLink.displayName = "ScrollLink";
