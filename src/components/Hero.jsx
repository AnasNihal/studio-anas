import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: '100%',
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.15,
        delay: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden">
      <h1 className="font-anton text-[15vw] md:text-[11vw] leading-[0.85] text-center uppercase tracking-tighter flex flex-col">
        <div className="overflow-hidden w-full"><span className="hero-line block pb-1 md:pb-2">I LEARN</span></div>
        <div className="overflow-hidden w-full"><span className="hero-line block pb-1 md:pb-2">BUILD AND</span></div>
        <div className="overflow-hidden w-full"><span className="hero-line block pb-1 md:pb-2">SHIP</span></div>
      </h1>
    </section>
  );
}
