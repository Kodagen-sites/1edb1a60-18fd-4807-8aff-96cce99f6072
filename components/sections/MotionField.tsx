"use client";

import { useEffect, useRef } from "react";

/**
 * MotionField — procedural particle-field motion background (Canvas 2D).
 * A drifting constellation of nodes with proximity links — the S1 NOC feel.
 * Pauses off-screen and under prefers-reduced-motion.
 */
export default function MotionField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.min(64, Math.round((w * h) / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 132) {
            ctx.strokeStyle = `rgba(34,211,238,${0.16 * (1 - d / 132)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(103,232,249,0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    let running = false;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduced) return;
      running = true;
      loop();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    draw();

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
