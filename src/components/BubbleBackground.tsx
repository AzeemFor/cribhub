import { useMemo } from "react";
import Bubble from "./Bubble";

const BubbleBackground = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 20 + Math.random() * 100,
      left: Math.random() * 100,
      blur: 2 + Math.random() * 8,
      opacity: 0.3 + Math.random() * 0.5,
      hue: 190 + Math.random() * 40, // Blue range: 190-230
    }));
  }, []);

  return (
    <div className="fixed inset-0 bg-bubble-background overflow-hidden">
      {/* Ambient glow layers */}
      <div className="absolute inset-0 bg-gradient-radial from-bubble-glow/10 via-transparent to-transparent opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-bubble-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-bubble-secondary/5 rounded-full blur-3xl" />
      
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}
    </div>
  );
};

export default BubbleBackground;
