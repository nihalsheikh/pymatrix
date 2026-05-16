import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import MatrixRain from "@/components/MatrixRain";
import { FaGithub } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Rmatrix — Terminal Matrix Rain",
  description: "The cinematic Matrix digital rain, recreated in pure Python.",
  icons: {
    icon: [
      { url: "/dark-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/dark-logo.png", media: "(prefers-color-scheme: dark)", type: "image/png" },
      { url: "/light-logo.png", media: "(prefers-color-scheme: light)", type: "image/png" },
    ],
    apple: "/dark-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg font-body">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border h-20">
          <div className="container h-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 group">
              <Image src="/dark-logo.png" alt="Rmatrix" width={56} height={56} className="w-14 h-14" draggable={false} />
              <span className="font-display text-4xl tracking-tighter text-fg opacity-90 group-hover:opacity-100 group-hover:text-accent transition-all">RMATRIX</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-muted hover:text-accent transition-colors font-bold">Home</Link>
              <Link href="/docs" className="text-muted hover:text-accent transition-colors font-bold">Docs</Link>
              <Link href="/showcase" className="text-muted hover:text-accent transition-colors font-bold">Showcase</Link>
              <Link href="/about" className="text-muted hover:text-accent transition-colors font-bold">About</Link>
            </div>

            <div className="flex items-center">
              <Link 
                href="https://github.com/nihalsheikh/rmatrix" 
                target="_blank"
                className="relative overflow-hidden flex items-center gap-2 px-6 py-2.5 bg-surface border border-border rounded-lg hover:border-accent hover:text-accent transition-all text-sm font-bold group"
              >
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
                   <MatrixRain fontSize={10} speed={0.4} opacity={0.2} glow={false} />
                   <div className="absolute inset-0 bg-bg/40" />
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <FaGithub className="text-lg" />
                  GitHub
                </div>
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
        <footer className="py-12 border-t border-border mt-20">
          <div className="container text-center">
            <p className="font-mono text-xs text-muted tracking-widest uppercase font-bold">
              © 2026 RMATRIX // LICENSED UNDER MIT // BY NIHAL SHEIKH
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
