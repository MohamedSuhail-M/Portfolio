import React, { useRef, useEffect, useCallback } from 'react';
import './ClickSpark.css';

export interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | string;
  extraScale?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
  color: string;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
  children,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const isFixedRef = useRef<boolean>(false);

  // Easing function calculation
  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case 'linear':
          return t;
        case 'ease-in':
          return t * t;
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        case 'ease-out':
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  // Handle canvas sizing and responsiveness
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const resizeCanvas = () => {
      const parentRect = container.getBoundingClientRect();
      const isParentTall = parentRect.height > window.innerHeight * 1.5;
      isFixedRef.current = isParentTall;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      let targetWidth: number;
      let targetHeight: number;

      if (isParentTall) {
        targetWidth = window.innerWidth;
        targetHeight = window.innerHeight;
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.zIndex = '9999';
      } else {
        targetWidth = Math.round(parentRect.width);
        targetHeight = Math.round(parentRect.height);
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '50';
      }

      const pixelWidth = Math.round(targetWidth * dpr);
      const pixelHeight = Math.round(targetHeight * dpr);

      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize, { passive: true });

    resizeCanvas();

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Frame animation renderer
  const draw = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        // Calculate line endpoints with high-DPI scaling
        const cx = spark.x * dpr;
        const cy = spark.y * dpr;
        const dist = distance * dpr;
        const len = lineLength * dpr;

        const x1 = cx + dist * Math.cos(spark.angle);
        const y1 = cy + dist * Math.sin(spark.angle);
        const x2 = cx + (dist + len) * Math.cos(spark.angle);
        const y2 = cy + (dist + len) * Math.sin(spark.angle);

        ctx.strokeStyle = spark.color;
        ctx.lineWidth = Math.max(1.5 * dpr, 2);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      if (sparksRef.current.length > 0) {
        animationFrameId.current = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animationFrameId.current = null;
      }
    },
    [duration, easeFunc, extraScale, sparkRadius, sparkSize]
  );

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Click handler
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x: number;
    let y: number;

    if (isFixedRef.current) {
      x = e.clientX;
      y = e.clientY;
    } else {
      const rect = canvas.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    const now = performance.now();

    // Determine spark color: if sparkColor is provided, use it;
    // else adapt to light/dark context if default white is used on light backgrounds
    let activeColor = sparkColor;
    if (sparkColor === '#fff') {
      try {
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (target) {
          const bg = window.getComputedStyle(target).backgroundColor;
          // If clicking on light background, use dark brutalist accent for visibility
          if (bg === 'rgba(0, 0, 0, 0)' || bg === 'rgb(247, 247, 244)' || bg === 'rgb(255, 255, 255)') {
            activeColor = '#111111';
          }
        }
      } catch {
        activeColor = sparkColor;
      }
    }

    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
      color: activeColor,
    }));

    sparksRef.current.push(...newSparks);

    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(draw);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`click-spark-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100%',
        ...style,
      }}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="click-spark-canvas"
        style={{
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;
