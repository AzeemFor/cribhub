import { useState } from "react";
import { Copy, Check } from "lucide-react";

const ScriptCard = () => {
  const [copied, setCopied] = useState(false);
  const script = 'loadstring(game:HttpGet("https://pastefy.app/mGVjjty0/raw"))()';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center tracking-wide">
        <span className="text-primary">Crib Hub</span>
        <span className="text-muted-foreground"> - </span>
        <span className="text-foreground/90">99 nights in the forest</span>
      </h1>

      {/* Script Card */}
      <div className="w-full max-w-2xl bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-3">
          {/* Script Text */}
          <div className="flex-1 bg-muted/50 rounded-xl px-4 py-3 overflow-x-auto">
            <code className="text-sm md:text-base text-accent font-mono whitespace-nowrap">
              {script}
            </code>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex-shrink-0 bg-primary hover:bg-primary/80 text-primary-foreground rounded-xl p-3 transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Copy script"
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Copied feedback */}
        {copied && (
          <p className="text-center text-sm text-primary mt-3 animate-fade-in">
            Copied to clipboard!
          </p>
        )}
      </div>
    </div>
  );
};

export default ScriptCard;
