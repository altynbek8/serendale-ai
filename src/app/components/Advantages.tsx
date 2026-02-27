"use client"; 
import { motion } from "framer-motion";
import { Zap, Shield, Cpu } from "lucide-react";

const advantages = [
  { 
    title: "Fast Blockchain", 
    desc: "120K TPS for lightning fast transactions and real-time response.", 
    icon: <Zap size={30} className="text-pink-500" />,
    glow: "group-hover:shadow-pink-500/20"
  },
  { 
    title: "AI Security", 
    desc: "Guaranteed data protection powered by advanced machine learning.", 
    icon: <Shield size={30} className="text-purple-500" />,
    glow: "group-hover:shadow-purple-500/20"
  },
  { 
    title: "Smart Scaling", 
    desc: "Proof of Stake consensus algorithm enables unlimited growth.", 
    icon: <Cpu size={30} className="text-blue-500" />,
    glow: "group-hover:shadow-blue-500/20"
  }
];

export default function Advantages() {
  return (
    <section className="py-32 px-6 max-w-[1280px] mx-auto relative overflow-hidden">
      {/* Фоновое свечение для секции */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-500 opacity-[0.05] blur-[120px] -z-10" />

      <h2 className="text-3xl md:text-5xl font-medium text-center mb-16 uppercase tracking-wider">
        Why choose <span className="text-gradient">Our Platform</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((adv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5 }}
            className="group relative p-10 rounded-[40px] glass transition-all duration-500"
          >
            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 transition-all duration-500 ${adv.glow} group-hover:bg-white/10`}>
              {adv.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">{adv.title}</h3>
            <p className="text-white/50 leading-relaxed text-lg font-light">
              {adv.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}