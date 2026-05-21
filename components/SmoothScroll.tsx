"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    /*
     * Lenis with lerp-based interpolation.
     * lerp: 0.1  → silky 60fps inertia feel (Apple-style)
     * No Snap plugin — mandatory snap kills the natural scroll momentum.
     */
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false,
      autoRaf: false, // we drive the RAF ourselves for maximum control
    });

    // Expose lenis globally so other components can call lenis.scrollTo()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    // Smooth-scroll anchor links (accounts for fixed navbar height)
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        "a[href^='#']"
      );
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: 0, lerp: 0.1 });
    };

    document.addEventListener("click", handleClick);

    // Single RAF loop — drives Lenis at the display refresh rate
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleClick);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
