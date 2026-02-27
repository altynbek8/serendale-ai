import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

// page.tsx
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      
      {/* Дополнительное свечение между секциями */}
      <div className="absolute top-[120%] left-[-10%] w-[600px] h-[600px] bg-brand-purple opacity-[0.07] blur-[150px] rounded-full pointer-events-none" />
      
      <Advantages />
      
      {/* Еще одно свечение справа */}
      <div className="absolute top-[180%] right-[-5%] w-[500px] h-[500px] bg-brand-blue opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
      
      <Reviews />
      <Footer />
    </main>
  );
}