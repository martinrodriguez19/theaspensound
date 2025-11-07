"use client";

export default function AnimatedBanner() {
  const text = "CONTRATACIONES DISPONIBLES";
  
  return (
    <section className="bg-white text-black py-3 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-sm md:text-base font-bold uppercase tracking-[0.20em] mx-8">
              {text} <span className="mx-4">•</span>
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-sm md:text-base font-bold uppercase tracking-[0.20em] mx-8">
              {text} <span className="mx-4">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}