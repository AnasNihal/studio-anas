import React from 'react';

export default function Playground() {
  return (
    <section className="py-[15vh] px-4 md:px-8 relative">
      <div className="absolute top-[5vh] left-4 md:left-8">
        <span className="font-dm text-[10px] tracking-[0.3em] uppercase opacity-40">Selected Projects</span>
      </div>
      <h2 className="font-anton text-massive text-center uppercase tracking-tighter mb-12">PLAYGROUND</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 w-full">
        {/* Project 1 */}
        <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100 group cursor-pointer">
          <img
            src="/images/Mation-web-img.png"
            alt="Mation Web"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-anton text-2xl tracking-widest">VIEW</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100 group cursor-pointer">
          <img
            src="/images/Portfolio-1.png"
            alt="Portfolio 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-anton text-2xl tracking-widest">VIEW</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100 group cursor-pointer">
          <img
            src="/images/daily-object-img.png"
            alt="Daily Objects"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-anton text-2xl tracking-widest">VIEW</span>
          </div>
        </div>

        {/* Project 4 */}
        <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100 group cursor-pointer">
          <img
            src="/images/olton-img.png"
            alt="Olton"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-anton text-2xl tracking-widest">VIEW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
