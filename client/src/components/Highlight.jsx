// client/src/components/Highlight.jsx
import React, { useEffect, useRef } from 'react';
import highlightVideo from '../assets/highlight-video.mp4';

const Highlight = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    const onVisible = () => { if (!document.hidden) tryPlay(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10">
      {/* Title */}
      <div className="mb-5 text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
            Unleash Your Imagination, Simplify Work with AI
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
            A quick glimpse of the product in action—on repeat.
        </p>
     </div>

      {/* Glow border frame */}
      <div className="relative">
        {/* gradient glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00DA83]/40 via-[#009BB3]/40 to-[#1e3a8a]/40 blur"></div>

        {/* frame with gradient border */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#00DA83] via-[#009BB3] to-[#1e3a8a]">
          <div className="rounded-2xl overflow-hidden bg-black shadow-xl">
            <video
              ref={videoRef}
              src={highlightVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Product highlight video"
              className="block w-full h-auto object-cover aspect-video"
            >
              {/* Fallback text */}
              Your browser does not support the video tag.
            </video>

            {/* subtle top gradient overlay for polish */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
