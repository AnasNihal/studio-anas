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
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const desktopLines = [
    <>IT'S NEVER "JUST AN IDEA."</>,
    <>EVERY <span className="border-b-[4px] md:border-b-[8px] border-foreground pb-1 md:pb-2">BUILD</span> MATTERS.</>,
    <>I CRAFT WITH AI. FAST. BOLD.</>,
    <>YOUR PROBLEM. MY OBSESSION.</>,
    <>THE FUTURE. MY <span className="border-b-[4px] md:border-b-[8px] border-foreground pb-1 md:pb-2">PLAYGROUND.</span></>
  ];

  const mobileLines = [
    "IT'S NEVER",
    '"JUST AN IDEA."',
    "EVERY BUILD",
    "MATTERS. I CRAFT",
    "WITH AI. FAST.",
    "BOLD.",
    "YOUR PROBLEM.",
    "MY OBSESSION.",
    "THE FUTURE.",
    "MY PLAYGROUND."
  ];

  return (
    <section ref={container} className="min-h-screen py-[12vh] px-4 md:px-8 flex flex-col items-center justify-center">
      {/* Subtitle matching the reference image layout */}
      <p className="text-[10px] md:text-xs tracking-[0.25em] mb-12 md:mb-16 uppercase text-faint mix-blend-difference text-center max-w-md leading-relaxed font-dm">
        CREATIVE STUDIO BUILDING<br />PREMIUM BRANDS
      </p>

      {/* Desktop Main Premium Typography Grid */}
      <h2 className="hidden md:flex font-anton md:text-[7vw] leading-[0.85] text-center uppercase tracking-tighter flex-col items-center w-full overflow-hidden">
        {desktopLines.map((line, index) => (
          <div key={index} className="overflow-hidden w-full flex justify-center">
            <span className="manifesto-line block pb-2 md:pb-4">
              {line}
            </span>
          </div>
        ))}
      </h2>

      {/* Mobile Main Premium Typography Grid */}
      <h2 className="flex md:hidden font-anton text-[9.5vw] leading-[0.95] text-center uppercase tracking-tighter flex-col items-center w-full overflow-hidden">
        {mobileLines.map((line, index) => (
          <div key={index} className="overflow-hidden w-full flex justify-center">
            <span className="manifesto-line block pb-2">
              {line}
            </span>
          </div>
        ))}
      </h2>
    </section>
  );
}
