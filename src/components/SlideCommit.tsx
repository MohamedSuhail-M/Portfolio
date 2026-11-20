import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Send, Check, Loader2, ArrowRight } from 'lucide-react';

interface SlideCommitProps {
  onCommit: () => void;
  isSubmitting?: boolean;
  isSuccess?: boolean;
  text?: string;
  successText?: string;
  disabled?: boolean;
  className?: string;
}

export const SlideCommit: React.FC<SlideCommitProps> = ({
  onCommit,
  isSubmitting = false,
  isSuccess = false,
  text = 'SLIDE TO DISPATCH MESSAGE',
  successText = 'MESSAGE DISPATCHED ✓',
  disabled = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(240);
  const [isCommitted, setIsCommitted] = useState(false);
  const x = useMotionValue(0);

  // Measure track width dynamically to calculate maximum drag distance
  useEffect(() => {
    const updateMaxDrag = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const handleWidth = 56; // 14rem = 56px handle
        setMaxDrag(Math.max(60, containerWidth - handleWidth - 8));
      }
    };

    updateMaxDrag();
    window.addEventListener('resize', updateMaxDrag);
    return () => window.removeEventListener('resize', updateMaxDrag);
  }, []);

  // When form resets (e.g., success ends or is reset), reset slider position
  useEffect(() => {
    if (!isSubmitting && !isSuccess && isCommitted) {
      setIsCommitted(false);
      animate(x, 0, { type: 'spring', stiffness: 350, damping: 25 });
    }
  }, [isSubmitting, isSuccess, isCommitted, x]);

  // Transform values for progressive visuals while sliding
  const progress = useTransform(x, [0, maxDrag], [0, 1]);
  const textOpacity = useTransform(x, [0, maxDrag * 0.6], [1, 0.1]);
  const fillWidth = useTransform(x, (val) => `${Math.max(0, val + 28)}px`);

  const handleDragEnd = () => {
    const currentX = x.get();
    const threshold = maxDrag * 0.78; // 78% threshold to trigger commit

    if (currentX >= threshold && !disabled && !isSubmitting && !isSuccess) {
      // Snap to end and trigger action
      setIsCommitted(true);
      animate(x, maxDrag, { type: 'spring', stiffness: 400, damping: 25 });
      onCommit();
    } else {
      // Spring back to start
      setIsCommitted(false);
      animate(x, 0, { type: 'spring', stiffness: 450, damping: 28 });
    }
  };

  // Click fallback for accessibility or quick tap
  const handleClickFallback = () => {
    if (!disabled && !isSubmitting && !isSuccess) {
      animate(x, maxDrag, { duration: 0.35, ease: 'easeOut' }).then(() => {
        setIsCommitted(true);
        onCommit();
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-14 bg-[#F7F7F4] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] overflow-hidden select-none transition-all ${
        disabled ? 'opacity-50 pointer-events-none' : ''
      } ${className}`}
    >
      {/* Background Fill reacting to drag progress */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 bg-[#F4D83D] border-r-2 border-[#111111]"
        style={{ width: fillWidth }}
      />

      {/* Center Prompt Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-14">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[#137333]"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{successText}</span>
          </motion.div>
        ) : isSubmitting ? (
          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[#111111]">
            <Loader2 className="w-4 h-4 animate-spin text-[#111111]" />
            <span>DISPATCHING MESSAGE...</span>
          </div>
        ) : (
          <motion.div
            style={{ opacity: textOpacity }}
            className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[#111111]"
          >
            <span>{text}</span>
            <div className="flex items-center -space-x-1 text-[#555555]">
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
              <ArrowRight className="w-3.5 h-3.5 animate-pulse delay-100" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Draggable Handle */}
      {!isSuccess && (
        <motion.div
          drag={isSubmitting ? false : 'x'}
          dragConstraints={{ left: 0, right: maxDrag }}
          dragElastic={0.06}
          dragSnapToOrigin={false}
          onDragEnd={handleDragEnd}
          style={{ x }}
          whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
          className="absolute top-1 left-1 bottom-1 w-12 bg-[#111111] border-2 border-[#111111] flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[2px_2px_0px_rgba(0,0,0,0.2)] z-10 hover:bg-[#222222] transition-colors"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round((x.get() / maxDrag) * 100)}
          aria-label="Slide to dispatch message"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClickFallback();
            }
          }}
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin text-[#F4D83D]" />
          ) : (
            <Send className="w-4 h-4 text-[#F4D83D] ml-0.5" />
          )}
        </motion.div>
      )}

      {/* Success full-pill overlay */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-[#E6F4EA] border-2 border-[#137333] flex items-center justify-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[#137333]"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>{successText}</span>
        </motion.div>
      )}
    </div>
  );
};

export default SlideCommit;
