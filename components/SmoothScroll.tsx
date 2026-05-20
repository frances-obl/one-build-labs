"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";

const ease = (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: ease,
      touchMultiplier: 0.55,
      smoothWheel: true,
    });

    // Lenis built-in snap — mandatory panel-by-panel
    const snap = new Snap(lenis, {
      type: "mandatory",
      duration: 1.2,
      easing: ease,
    });

    // Register every top-level section + footer as a snap target
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const panels: HTMLElement[] = [
      ...(main
        ? Array.from(main.querySelectorAll<HTMLElement>(":scope > section"))
        : []),
      ...(footer ? [footer as HTMLElement] : []),
    ];

    const removers = panels.map((el) => snap.addElement(el));

    // Smooth-scroll anchor links through Lenis (accounts for fixed navbar)
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
      lenis.scrollTo(target, { offset: -80, duration: 1.4, easing: ease });
    };

    document.addEventListener("click", handleClick);

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleClick);
      removers.forEach((remove) => remove());
      snap.destroy();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
