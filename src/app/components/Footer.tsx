import { Github, Twitter, Disc, Globe, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Огромный водяной знак на фоне */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap">
        Serendale AI
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-semibold mb-6">SITE NAME</div>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              The next generation of AI-based blockchain hero exploration. 
              Join our community and build the future together.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white transition">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-white transition">Solutions</a></li>
              <li><a href="#" className="hover:text-white transition">Whitepaper</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Socials</h4>
            <div className="flex gap-4 text-white/40">
              <Github className="hover:text-white cursor-pointer transition-colors" />
              <Twitter className="hover:text-white cursor-pointer transition-colors" />
              <Disc className="hover:text-white cursor-pointer transition-colors" />
              <Instagram className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30 gap-4">
          <p>© 2024 SERENDALE AI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 uppercase tracking-tighter">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}