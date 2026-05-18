import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ProjectDetails({ onBack }) {
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightImagesRef = useRef([]);

  useEffect(() => {
    // Reset window scroll position instantly on mount
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Animate left sticky content
      gsap.from(leftContentRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1
      });

      // Animate right-side stacked images
      gsap.from(rightImagesRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.98,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.15,
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !rightImagesRef.current.includes(el)) {
      rightImagesRef.current.push(el);
    }
  };

  const images = [
    '/Mation/Img-1.png',
    '/Mation/img-2.png',
    '/Mation/img-3.png',
    '/Mation/img-4.png',
    '/Mation/img-5.png'
  ];

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-[#F4EFE8] dark:bg-background text-foreground transition-colors duration-300 px-4 md:px-[4vw] pt-32 pb-24"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[5vw] items-start">
        
        {/* Left Column (Sticky on Desktop) */}
        <div 
          ref={leftContentRef}
          className="col-span-1 md:col-span-4 flex flex-col justify-between md:sticky md:top-32 md:h-[calc(100vh-16rem)]"
        >
          <div>
            {/* Title (Matching screenshot font and weight exactly) */}
            <h1 className="font-sans font-semibold text-[9vw] md:text-[3.5vw] leading-[1.1] tracking-tight mb-4 text-black dark:text-white">
              Mation
            </h1>

            {/* Pill Category Label */}
            <div className="w-fit bg-black/5 dark:bg-white/5 text-black/75 dark:text-white/75 text-[10px] md:text-[11px] tracking-normal px-4 py-1.5 rounded-full font-sans font-medium mb-8 border border-black/5 dark:border-white/5">
              Brand Identity
            </div>

            {/* Project Descriptions */}
            <div className="flex flex-col gap-6 text-black/85 dark:text-white/85 text-sm md:text-[15.5px] leading-relaxed font-sans font-normal tracking-normal max-w-sm">
              <p>
                MATION is a platform that redefines digital experiences as a celebration of high-fidelity craftsmanship, combining fluid mathematical layouts with natural physics-based animations.
              </p>
              <p>
                Our challenge was to translate abstract interactions into a unified design system that captures the essence of motion. The solution lies in clean typographic grids, balanced micro-interactions, and bold structural transitions that form a cohesive digital ecosystem.
              </p>
            </div>
          </div>

          {/* View All Projects Button */}
          <button 
            onClick={onBack}
            className="mt-12 md:mt-0 w-fit bg-white dark:bg-zinc-900 border border-foreground/10 text-foreground text-xs md:text-[13px] px-6 py-4 rounded-full flex items-center gap-3 hover:bg-foreground hover:text-background transition-all duration-300 font-sans font-semibold shadow-sm focus:outline-none cursor-pointer"
          >
            <svg className="w-4 h-4 rotate-180 fill-current" viewBox="0 0 24 24">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"/>
            </svg>
            View all projects
          </button>
        </div>

        {/* Right Column (Scrollable Stacked Images) */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-6 md:gap-[2.5vw]">
          {images.map((imgSrc, index) => {
            const isSecondImage = index === 1;
            return (
              <div 
                key={index} 
                ref={addToRefs}
                className="relative w-full rounded-2xl md:rounded-[24px] overflow-hidden bg-foreground/5 shadow-sm group"
              >
                <img
                  src={imgSrc}
                  alt={`Mation Project ${index + 1}`}
                  className="w-full h-auto object-cover block"
                />

                {/* If it's the second image, render the floating "Start a project" dark card overlay */}
                {isSecondImage && (
                  <a
                    href="mailto:hello@anasnihal.com"
                    className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-black/85 hover:bg-black text-white text-xs md:text-sm px-6 py-3.5 rounded-full flex items-center gap-3 backdrop-blur-md transition-all duration-300 pointer-events-auto border border-white/10 shadow-lg"
                  >
                    <span className="font-sans font-semibold tracking-wide">Start a project</span>
                    <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"/>
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
