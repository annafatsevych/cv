import { useEffect, useRef } from "react";

// Twinkling night-sky canvas fixed behind the page. A handful of bright stars
// get a soft glow and diffraction spikes; the rest are small twinkling points.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars = [];
    let frame;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((w * h) / 2200);
      const bright = Math.max(2, Math.round((w * h) / 250000));
      stars = Array.from({ length: count + bright }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: i < bright ? 1.4 + Math.random() * 0.8 : 0.3 + Math.random() ** 2 * 1.1,
        alpha: 0.35 + Math.random() * 0.65,
        speed: 0.4 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        bright: i < bright,
      }));
    };

    const drawBright = (s, a) => {
      const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 8);
      glow.addColorStop(0, `rgba(255,255,255,${a})`);
      glow.addColorStop(0.15, `rgba(220,232,255,${a * 0.6})`);
      glow.addColorStop(1, "rgba(180,200,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * 8, 0, Math.PI * 2);
      ctx.fill();

      const len = s.r * 14;
      ctx.strokeStyle = `rgba(230,240,255,${a * 0.55})`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(s.x - len, s.y + len * 0.35);
      ctx.lineTo(s.x + len, s.y - len * 0.35);
      ctx.moveTo(s.x - len * 0.35, s.y - len);
      ctx.lineTo(s.x + len * 0.35, s.y + len);
      ctx.stroke();
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const twinkle = reduceMotion ? 1 : 0.6 + 0.4 * Math.sin(t * 0.001 * s.speed + s.phase);
        const a = s.alpha * twinkle;
        if (s.bright) {
          drawBright(s, a);
        } else {
          ctx.fillStyle = `rgba(235,242,255,${a})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
