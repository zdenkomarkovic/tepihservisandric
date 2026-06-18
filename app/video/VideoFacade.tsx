"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/ui/Icons";

export function VideoFacade({
  type,
  src,
  title,
  videoId,
}: {
  type: "youtube" | "local";
  src: string;
  title: string;
  videoId?: string;
}) {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    if (type === "youtube") {
      return (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      );
    }
    return <video src={src} controls autoPlay preload="metadata" className="w-full" />;
  }

  return (
    <div className="relative w-full h-full cursor-pointer group" onClick={() => setClicked(true)}>
      {type === "youtube" && videoId ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-navy" />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 group-hover:bg-black/40 transition-colors">
        <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          <PlayIcon />
        </div>
        <p className="text-white text-sm font-semibold text-center px-4 drop-shadow">{title}</p>
      </div>
    </div>
  );
}
