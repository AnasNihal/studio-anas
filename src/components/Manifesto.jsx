import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Manifesto() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="min-h-screen py-[15vh] px-4 md:px-8 flex flex-col items-center justify-center">
      <p className="text-xs tracking-wider mb-8 md:mb-12 uppercase text-faint mix-blend-difference">Creative studio building premium brands</p>

      <h2 className="font-anton text-[11vw] md:text-[7vw] leading-[0.85] text-center uppercase tracking-tighter flex flex-col items-center w-full overflow-hidden">
        <div className="overflow-hidden w-full"><span className="manifesto-line block pb-1 md:pb-2">IT'S NEVER "JUST AN IDEA."</span></div>
        <div className="overflow-hidden w-full"><span className="manifesto-line block pb-1 md:pb-2">EVERY <span className="border-b-[4px] md:border-b-[8px] border-foreground pb-1 md:pb-2">BUILD</span> MATTERS.</span></div>
        <div className="overflow-hidden w-full"><span className="manifesto-line block pb-1 md:pb-2">I CRAFT WITH AI. FAST. BOLD.</span></div>
        <div className="overflow-hidden w-full"><span className="manifesto-line block pb-1 md:pb-2">YOUR PROBLEM. MY OBSESSION.</span></div>
        <div className="overflow-hidden w-full"><span className="manifesto-line block pb-1 md:pb-2">THE FUTURE. MY <span className="border-b-[4px] md:border-b-[8px] border-foreground pb-1 md:pb-2">PLAYGROUND.</span></span></div>
      </h2>
    </section>
  );
}
