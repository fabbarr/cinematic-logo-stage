import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, type MouseEvent } from "react";
import poster from "@/assets/hero-poster.jpg";
import { Logo } from "@/components/Logo";

// Point directly to the video stored in public/testcard.mp4 using the base URL
const VIDEO_SRC = `${import.meta.env.BASE_URL}testcard.mp4`;

// The clip is short, so it holds on its final frame for this long before replaying.
const REPLAY_PAUSE_MS = 2000;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "kesaco" },
      { name: "description", content: "kesaco. Something new is taking shape at kesaco.ca." },
      { property: "og:title", content: "kesaco" },
      { property: "og:description", content: "kesaco. Something new is taking shape at kesaco.ca." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kesaco.ca" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://kesaco.ca" },
      { rel: "preload", as: "image", href: poster },
      { rel: "preload", as: "fetch", href: VIDEO_SRC, type: "video/mp4" },
    ],
  }),
  component: Index,
});

const block = (e: MouseEvent) => e.preventDefault();

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Instead of looping instantly, hold the last frame and then replay from the top.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let timer: number | undefined;
    const holdThenReplay = () => {
      timer = window.setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, REPLAY_PAUSE_MS);
    };

    video.addEventListener("ended", holdThenReplay);
    return () => {
      video.removeEventListener("ended", holdThenReplay);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  return (
    <main className="fixed inset-0 h-dvh w-full touch-none overflow-hidden bg-background select-none" onContextMenu={block}>
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        poster={poster}
        autoPlay
        muted
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
          className="w-72 max-w-full text-logo drop-shadow-logo sm:w-96 md:w-[30rem] lg:w-144 2xl:w-[48rem]"
        >
          <Logo className="h-auto w-full" />
        </motion.h1>
      </header>

      <footer className="absolute inset-x-0 bottom-0 z-10 pb-[max(1rem,env(safe-area-inset-bottom))] text-center text-[10px] uppercase tracking-[0.4em] text-logo/60">
        © {new Date().getFullYear()} kesaco
      </footer>
    </main>
  );
}
