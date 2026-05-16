import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  { name: 'UI/UX DESIGN', video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-4171-large.mp4' },
  { name: 'WEBSITE BUILD', video: 'https://assets.mixkit.co/videos/preview/mixkit-code-on-a-computer-screen-21695-large.mp4' },
  { name: 'SAAS', video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-background-loop-34440-large.mp4' },
  { name: 'AI & ML', video: 'https://assets.mixkit.co/videos/preview/mixkit-artificial-intelligence-neural-network-brain-animation-43841-large.mp4' },
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  // Mouse move for blue dot cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && isHoveringSection) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out'
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHoveringSection]);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.srv-item-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseLeave={() => {
        setIsHoveringSection(false);
        setActiveIdx(null);
      }}
    >
      <div className="absolute top-[5vh] left-4 md:left-8">
        <span className="font-dm text-[10px] tracking-[0.3em] uppercase opacity-40">Services</span>
      </div>
      {/* Custom Blue Cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-5 h-5 bg-brandBlue rounded-full pointer-events-none z-[9999] top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${isHoveringSection ? 'scale-100' : 'scale-0'}`}
      />

      <div className="flex flex-col items-center w-full gap-4 md:gap-8">
        {services.map((srv, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={idx}
              className="relative w-full text-center cursor-none z-10"
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <div className="overflow-hidden">
                <span className={`srv-item-text block font-anton text-[12vw] md:text-[7vw] leading-[0.9] uppercase transition-colors duration-300 pb-2 ${isActive ? 'text-foreground' : 'text-faint'}`}>
                  {srv.name}
                </span>
              </div>

              {srv.sub && (
                <span className={`absolute right-[15%] top-1/2 -translate-y-1/2 font-dm text-xs tracking-wider transition-opacity duration-300 hidden md:block ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  {srv.sub}
                </span>
              )}
            </div>
          );
        })}

        <div className="mt-8 md:mt-12 group cursor-pointer z-20">
          <a href="/services" className="font-dm text-[10px] md:text-xs tracking-[0.3em] uppercase flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
            SEE ALL <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Floating Video Preview */}
      <div className={`fixed left-[4vw] top-1/2 -translate-y-1/2 w-[30vw] max-w-[400px] aspect-[4/3] rounded-xl overflow-hidden pointer-events-none z-0 transition-opacity duration-400 hidden md:block ${activeIdx !== null ? 'opacity-100' : 'opacity-0'}`}>
        <video
          key={activeIdx} /* Re-mounts video to auto-play when src changes */
          src={activeIdx !== null ? services[activeIdx].video : ''}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
