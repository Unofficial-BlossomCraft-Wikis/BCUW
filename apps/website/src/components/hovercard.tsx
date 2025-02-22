// This file is currently unused, likely to be removed in the future.
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";

interface LinkCardProps {
  children: React.ReactNode;
  href: string;
  alt: string;
}

export function LinkCard({ children, href, alt }: LinkCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href={href}>{children}</a>
      </HoverCardTrigger>
      <HoverCardContent>
        <img
          src={`/api/images/preview?site=${href}`}
          alt={alt}
          loading='eager'
        />
      </HoverCardContent>
    </HoverCard>
  );
}
