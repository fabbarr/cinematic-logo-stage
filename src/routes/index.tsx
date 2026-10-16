import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import poster from "@/assets/hero-poster.jpg";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

// Static, build-time media URLs only — never derived from user input.
const VIDEO_SRC: string = heroVideo.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurum — Coming Soon" },
      { name: "description", content: "Aurum. Something new is taking shape." },
      { property: "og:title", content: "Aurum — Coming Soon" },
      { property: "og:description", content: "Aurum. Something new is taking shape." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: poster },
      { rel: "preload", as: "video", href: VIDEO_SRC, type: "video/mp4" },
    ],
  }),
  component: Index,
});

const block = (e: MouseEvent) => e.preventDefault();

function Logo() {
  return (
    <svg viewBox="0 0 320 120" role="img" aria-label="Aurum" className="h-auto w-full">
      <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M38 86 L60 30 L82 86 M46 68 H74" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="124" y="74" fill="currentColor" fontSize="40" letterSpacing="10" fontFamily="Georgia, 'Times New Roman', serif">AURUM</text>
    </svg>
  );
}

function Index() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background select-none" onContextMenu={block}>
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        aria-hidden="true"
        tabIndex={-1}
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-overlay backdrop-blur-[2px]" aria-hidden="true" />

      <header className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 text-logo drop-shadow-logo sm:w-64 md:w-80 lg:w-96 2xl:w-[32rem]"
        >
          <Logo />
        </motion.h1>
      </header>

      <footer className="absolute inset-x-0 bottom-0 z-10 pb-[max(1rem,env(safe-area-inset-bottom))] text-center text-[10px] uppercase tracking-[0.4em] text-logo/60">
        © {new Date().getFullYear()} Aurum
      </footer>
    </main>
  );
}
