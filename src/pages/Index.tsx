import BubbleBackground from "@/components/BubbleBackground";
import ScriptCard from "@/components/ScriptCard";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BubbleBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 gap-8 py-12">
        <ScriptCard
          title="Crib Hub"
          subtitle="99 nights in the forest"
          script='loadstring(game:HttpGet("https://pastefy.app/mGVjjty0/raw"))()'
        />
        <ScriptCard
          title="Crib Hub"
          subtitle="IY"
          script='loadstring(game:HttpGet("https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source"))()'
        />
      </div>
    </div>
  );
};

export default Index;
