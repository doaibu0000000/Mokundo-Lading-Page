"use client";

import { useEffect, useRef, useState } from "react";

export function BorderRunner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const [d, setD] = useState<string>("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updatePath = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width <= 0 || height <= 0) return;

      const pad = 1;
      const w = Math.max(0, width - pad * 2);
      const h = Math.max(0, height - pad * 2);
      const r = Math.min(16, Math.min(w / 2, h / 2));

      // Clockwise rounded rectangle path (starts at top-left, runs top -> right -> bottom -> left)
      const pathData = `M ${pad + r} ${pad} H ${pad + w - r} A ${r} ${r} 0 0 1 ${pad + w} ${pad + r} V ${pad + h - r} A ${r} ${r} 0 0 1 ${pad + w - r} ${pad + h} H ${pad + r} A ${r} ${r} 0 0 1 ${pad} ${pad + h - r} V ${pad + r} A ${r} ${r} 0 0 1 ${pad + r} ${pad} Z`;
      setD(pathData);
    };

    updatePath();

    const observer = new ResizeObserver(() => {
      updatePath();
    });
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!d || !pathRef.current) return;

    const path = pathRef.current;
    const glowPath = glowPathRef.current;

    let length = 0;
    try {
      length = path.getTotalLength();
    } catch {
      return;
    }
    if (!length || length <= 0) return;

    // Laser beam segment length: ~16% of perimeter (crisp running line)
    const beamLength = Math.max(90, Math.min(180, length * 0.16));
    const dashArray = `${beamLength} ${Math.max(0, length - beamLength)}`;

    path.style.strokeDasharray = dashArray;
    if (glowPath) {
      glowPath.style.strokeDasharray = `${beamLength + 30} ${Math.max(0, length - (beamLength + 30))}`;
    }

    const duration = Math.max(3500, Math.min(6500, (length / 320) * 1000));

    // Web Animations API: Runs directly on the compositor thread (60-120fps)
    const anim = path.animate(
      [
        { strokeDashoffset: 0 },
        { strokeDashoffset: -length },
      ],
      {
        duration,
        iterations: Infinity,
        easing: "linear",
      }
    );

    let glowAnim: Animation | undefined;
    if (glowPath) {
      glowAnim = glowPath.animate(
        [
          { strokeDashoffset: 0 },
          { strokeDashoffset: -length },
        ],
        {
          duration,
          iterations: Infinity,
          easing: "linear",
        }
      );
    }

    return () => {
      anim.cancel();
      glowAnim?.cancel();
    };
  }, [d]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible rounded-2xl border border-white/10"
      aria-hidden="true"
    >
      {d && (
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ambient Glow Beam running along the perimeter */}
          <path
            ref={glowPathRef}
            d={d}
            fill="none"
            stroke="#f97316"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.6"
            style={{ filter: "blur(4px)" }}
          />

          {/* Crisp Laser Beam running along the perimeter */}
          <path
            ref={pathRef}
            d={d}
            fill="none"
            stroke="#fb923c"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 0 6px #f97316) drop-shadow(0 0 12px #fdba74)",
            }}
          />
        </svg>
      )}
    </div>
  );
}
