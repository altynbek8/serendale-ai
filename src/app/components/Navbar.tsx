"use client";
import { useMenuStore } from '@/store/useMenuStore';
import { Github, Disc, Globe, Twitter, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { isOpen, toggleMenu, closeMenu } = useMenuStore();
  const links = ["Smart Contracts", "Services", "Solutions", "Roadmap", "Whitepaper"];

  return (
    <header className="fixed top-0 w-full z-[100] border-b border-white/5 backdrop-blur-xl bg-black/40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between">
        
        <div className="text-[20px] font-medium tracking-tight z-[110]">SITE NAME</div>
        
        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-[40px]">
          {links.map((link) => (
            <a key={link} href="#" className="text-[14px] text-white/70 hover:text-white transition-colors font-medium">
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div className="hidden lg:flex items-center gap-[24px] text-white/80">
          <a href="#" aria-label="GitHub"><Github size={20} className="hover:text-[#FF3BFF] cursor-pointer" /></a>
          <a href="#" aria-label="Discord"><Disc size={20} className="hover:text-[#FF3BFF] cursor-pointer" /></a>
          <a href="#" aria-label="Website"><Globe size={20} className="hover:text-[#FF3BFF] cursor-pointer" /></a>
          <a href="#" aria-label="Twitter"><Twitter size={20} className="hover:text-[#FF3BFF] cursor-pointer" /></a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden z-[110] text-white p-2" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-[#050505] z-[200] flex flex-col items-center justify-center lg:hidden"
            >
              <button className="absolute top-7 right-6 text-white p-2" onClick={toggleMenu}>
                <X size={32} />
              </button>

              <nav className="flex flex-col items-center gap-10">
                {links.map((link) => (
                  <a 
                    key={link} 
                    href="#" 
                    onClick={closeMenu} 
                    className="text-2xl font-medium uppercase tracking-[0.2em] text-white"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}