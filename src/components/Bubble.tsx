import { useEffect, useState } from "react";

interface BubbleProps {
  delay: number;
  duration: number;
  size: number;
  left: number;
  blur: number;
  opacity: number;
  hue: number;
}

const Bubble = ({ delay, duration, size, left, blur, opacity, hue }: BubbleProps) => {
  return (
    <div
      className="absolute rounded-full animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        bottom: `-${size}px`,
        background: `radial-gradient(circle at 30% 30%, 
          hsl(${hue}, 80%, 70%) 0%, 
          hsl(${hue}, 90%, 50%) 40%, 
          hsl(${hue}, 100%, 30%) 100%)`,
        filter: `blur(${blur}px)`,
        opacity: opacity,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        boxShadow: `0 0 ${size / 2}px hsl(${hue}, 100%, 50%), 
                    0 0 ${size}px hsl(${hue}, 100%, 40%), 
                    inset 0 0 ${size / 4}px hsl(${hue}, 80%, 80%)`,
      }}
    />
  );
};

export default Bubble;
