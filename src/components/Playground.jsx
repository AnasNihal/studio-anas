import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Playground({ onSelectProject }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const p4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Card-Roll Character Animation for "PLAYGROUND"
      gsap.from('.playground-char', {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: '100%',
        rotateX: -85,
        opacity: 0,
        transformOrigin: 'bottom center',
        duration: 1.2,
        stagger: 0.05,
        ease: 'power4.out'
      });

      // Normal Smooth Animation for First 2 Projects (slide + scale + fade)
      gsap.from([p1Ref.current, p2Ref.current], {
        scrollTrigger: {
          trigger: p1Ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2
      });

      // Dynamic Random-Cross Animation for Second 2 Projects (converging from sides)
      gsap.from(p3Ref.current, {
        scrollTrigger: {
          trigger: p3Ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        x: -160,
        opacity: 0,
        rotate: -5,
        duration: 1.4,
        ease: 'power4.out'
      });

      gsap.from(p4Ref.current, {
        scrollTrigger: {
          trigger: p4Ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        x: 160,
        opacity: 0,
        rotate: 5,
        duration: 1.4,
        ease: 'power4.out'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[15vh] px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-[5vh] left-4 md:left-8">
        <span className="font-dm text-[10px] tracking-[0.3em] uppercase opacity-40">Selected Projects</span>
      </div>

      {/* 3D Character Rolling Heading */}
      <h2 
        ref={headingRef} 
        className="font-anton text-massive text-center uppercase tracking-tighter mb-12 flex justify-center gap-[0.02em] select-none"
        style={{ perspective: 1200 }}
      >
        {"PLAYGROUND".split("").map((char, index) => (
          <span 
            key={index} 
            className="playground-char inline-block origin-bottom"
            style={{ display: 'inline-block', backfaceVisibility: 'hidden' }}
          >
            {char}
          </span>
        ))}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 w-full">
        {/* Project 1 (Normal Anim) */}
        <div 
          ref={p1Ref}
          onClick={() => onSelectProject && onSelectProject('mation')}
          className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100 group cursor-pointer"
        >
          <img
            src="/images/Mation-web-img.png"
            alt="Mation Web"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-anton text-2xl tracking-widest">VIEW</span>
          </div>
        </div>

        {/* Project 2 (Normal Anim) */}
        <div 
          ref={p2Ref}
          className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100 group cursor-pointer"
        >
          <img
            src="/images/Portfolio-1.png"
            alt="Portfolio 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-anton text-2xl tracking-widest">VIEW</span>
          </div>
        </div>

        {/* Project 3 (Cross Anim - Left side slide-in) */}
        <div 
          ref={p3Ref}
          className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100 group cursor-pointer"
        >
          <img
            src="/images/daily-object-img.png"
            alt="Daily Objects"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-anton text-2xl tracking-widest">VIEW</span>
          </div>
        </div>

        {/* Project 4 (Cross Anim - Right side slide-in) */}
        <div 
          ref={p4Ref}
          className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100 group cursor-pointer"
        >
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
