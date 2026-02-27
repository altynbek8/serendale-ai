"use client";

const reviews =[
  { name: "Alex Riv", role: "Product Designer", text: "The most intuitive AI interface I've used in years. Scalability is no longer a myth.", color: "from-pink-500 to-rose-500" },
  { name: "Sarah J.", role: "Web3 Developer", text: "Integration was seamless. Our TPS increased by 40% in just two weeks of testing.", color: "from-blue-500 to-cyan-500" },
  { name: "Erop V.", role: "Fullstack Dev", text: "Clean code, amazing performance, and the AI features are just mind-blowing.", color: "from-purple-500 to-indigo-500" }
];

export default function Reviews() {
  // Генерируем правильный JSON-LD объект для отзывов о продукте
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Serendale AI",
    "description": "Next-Gen AI Blockchain Platform",
    "review": reviews.map((rev) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.name
      },
      "reviewBody": rev.text
    }))
  };

  return (
    <section id="reviews" className="py-32 px-6 max-w-[1280px] mx-auto relative">
      {/* Внедрение микроразметки JSON-LD для поисковиков */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h2 className="text-4xl md:text-5xl font-medium text-center mb-20 uppercase tracking-widest">
        Community <span className="text-gradient">Voice</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="p-8 rounded-[32px] glass hover:bg-white/[0.05] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              {/* Аватарка-заглушка с градиентом */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${rev.color}`} />
              <div>
                <h4 className="font-semibold text-white">{rev.name}</h4>
                <p className="text-xs text-white/40 uppercase tracking-wider">{rev.role}</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed italic">
              &quot;{rev.text}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}