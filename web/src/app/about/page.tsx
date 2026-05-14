import InfoPane from "@/components/About/InfoPane";
import ConnectPane from "@/components/About/ConnectPane";

export default function About() {
  return (
    <div className="container py-24 min-h-[80vh] mt-24">
      <div className="about-layout grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl mt-10">
        <InfoPane />
        <ConnectPane />
      </div>
    </div>
  );
}
