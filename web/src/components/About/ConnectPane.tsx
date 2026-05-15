import Link from "next/link";
import MatrixRain from "@/components/MatrixRain";
import { SOCIAL_LINKS } from "@/constants";

const ConnectPane = () => {
  return (
    <div className="p-12 lg:p-20 flex flex-col justify-center bg-surface">
      <div className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-10 opacity-80 font-bold">Connect // Nihal Sheikh</div>
      <p className="text-xl text-fg/80 leading-relaxed mb-12 font-medium">
        I build things for the terminal and the web. No corporate glazing here—just side projects and experiments. Meet me in the digital stream:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SOCIAL_LINKS.map(social => (
          <Link 
            key={social.name}
            href={social.url}
            target="_blank"
            className="relative overflow-hidden flex items-center gap-4 p-5 bg-bg border border-border rounded-xl hover:border-accent hover:shadow-matrix hover:-translate-y-1 transition-all group"
          >
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity">
               <MatrixRain fontSize={10} speed={0.4} opacity={0.2} glow={false} />
               <div className="absolute inset-0 bg-bg/40" />
            </div>
            
            <div className="relative z-10 flex items-center gap-4">
              <social.icon className="text-accent w-6 h-6" />
              <span className="font-mono font-bold text-fg group-hover:text-accent transition-colors">{social.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConnectPane;
