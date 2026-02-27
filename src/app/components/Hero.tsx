"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 md:pt-52 flex flex-col items-center overflow-hidden">
      
      {/* ЭЛЛИПСЫ (СВЕЧЕНИЯ) */}
      <div 
        className="absolute w-[467px] h-[467px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{ background: '#5D6EF3', filter: 'blur(250px)', top: '10%', right: '5%' }}
      />
      <div 
        className="absolute w-[464px] h-[462px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{ background: '#8593E8', filter: 'blur(200px)', bottom: '15%', left: '5%' }}
      />
      <div 
        className="absolute w-[446px] h-[446px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{ background: '#FC4FF6', filter: 'blur(200px)', bottom: '10%', right: '10%' }}
      />

      {/* ТЕКСТОВЫЙ БЛОК */}
      <div className="max-w-7xl w-full text-center z-10 px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[28px] md:text-[80px] font-medium uppercase leading-[1.1] tracking-[0.02em] text-gradient">
  THE BEST WEBSITE EVER
</h1>
{/* Заменяем h1 на span, чтобы не ломать SEO */}
<span className="text-[28px] md:text-[80px] font-medium leading-[1.1] text-white mt-1 md:mt-2 block">
  Scalable.
</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-10 text-[14px] md:text-[20px] font-normal text-white/50 max-w-[723px] mx-auto leading-relaxed px-4"
        >
          Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security.
        </motion.p>

        {/* КНОПКИ */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row gap-5 justify-center items-center relative z-20">
          {/* Кнопка Get started */}
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] w-full md:w-auto transition-all hover:scale-105">
            <button className="w-full md:w-[210px] h-[65px] md:h-[75px] bg-[#050505] text-white font-medium rounded-full flex items-center justify-center text-[16px] md:text-[18px] transition-colors hover:bg-[#111111]">
              Get started
            </button>
          </div>
          {/* Кнопка Read more — Исправлен Hover */}
          <button className="w-full md:w-[210px] h-[65px] md:h-[75px] bg-black border-[1.5px] border-white text-white font-medium rounded-full flex items-center justify-center text-[16px] md:text-[18px] transition-all hover:bg-[#1a1a1a] hover:scale-105">
            Read more
          </button>
        </div>
      </div>

      {/* РОБОТЫ */}
      <div className="relative w-full max-w-[1440px] mt-12 md:mt-[-40px] z-[5] px-4">
        <Image 
  src="/hero-robots.webp" 
  alt="Robots illustration"
  width={1605}
  height={619}
  priority // <--- ГОВОРИТ БРАУЗЕРУ ГРУЗИТЬ ПЕРВЫМ
  fetchPriority="high" // <--- ЕЩЕ БОЛЬШЕ ПРИОРИТЕТА
  sizes="(max-width: 768px) 100vw, 1600px" // <--- ПОМОГАЕТ ВЫБРАТЬ РАЗМЕР
  className="w-full h-auto"
/>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
    </section>
  );
}