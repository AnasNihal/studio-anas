import React, { useEffect, useRef } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';

export default function MenuOverlay({ isOpen, onClose }) {
  const containerRef = useRef(null);
  const leftLinksRef = useRef([]);
  const rightLinksRef = useRef([]);
  const lenis = useLenis();

  // Control scrolling with Lenis when menu is open
  useEffect(() => {
    if (lenis) {
      if (isOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
    return () => {
      if (lenis) lenis.start();
    };
  }, [isOpen, lenis]);

  // GSAP Newspaper Page Flip Entry Animation
  useEffect(() => {
    if (isOpen) {
      // Setup initial 3D newspaper flip state
      gsap.set(containerRef.current, {
        visibility: 'visible',
        rotateY: -95,
        transformOrigin: 'left center',
        perspective: 2000,
        opacity: 0,
        scale: 0.95,
        skewY: 2
      });

      // Reset text states for entering
      leftLinksRef.current.concat(rightLinksRef.current).forEach((link) => {
        if (link) {
          gsap.set(link, { y: '100%', opacity: 0 });
        }
      });

      // Animate entry (newspaper turn)
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.to(containerRef.current, {
        rotateY: 0,
        opacity: 1,
        scale: 1,
        skewY: 0,
        duration: 1.4,
      })
      .to(leftLinksRef.current, {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.06,
      }, '-=0.9')
      .to(rightLinksRef.current, {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.06,
      }, '-=0.8');

    } else {
      // Animate exit (newspaper turn back)
      const tl = gsap.timeline({ 
        defaults: { ease: 'power4.inOut' },
        onComplete: () => {
          gsap.set(containerRef.current, { visibility: 'hidden' });
        }
      });

      tl.to(leftLinksRef.current.concat(rightLinksRef.current), {
        y: '-100%',
        opacity: 0,
        duration: 0.4,
        stagger: 0.03
      })
      .to(containerRef.current, {
        rotateY: -95,
        opacity: 0,
        scale: 0.95,
        skewY: -2,
        duration: 0.9
      }, '-=0.3');
    }
  }, [isOpen]);

  const addToLeftRefs = (el) => {
    if (el && !leftLinksRef.current.includes(el)) {
      leftLinksRef.current.push(el);
    }
  };

  const addToRightRefs = (el) => {
    if (el && !rightLinksRef.current.includes(el)) {
      rightLinksRef.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen z-[990] bg-background text-foreground flex flex-col justify-start md:justify-center select-none invisible overflow-y-auto md:overflow-hidden py-24 md:py-0"
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-4 px-4 md:px-[4vw] pt-12 md:pt-32 pb-12 items-start">
        
        {/* Left Column (Columns 1 & 2 in desktop grid) */}
        <nav className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-[1.5vw] font-anton text-[11vw] md:text-[9.5vw] leading-none tracking-tighter uppercase">
          <div className="overflow-hidden">
            <a
              ref={addToLeftRefs}
              href="#"
              onClick={onClose}
              className="block hover:text-brandBlue transition-colors duration-300"
            >
              HOME
            </a>
          </div>
          <div className="overflow-hidden">
            <a
              ref={addToLeftRefs}
              href="#playground"
              onClick={onClose}
              className="block hover:text-brandBlue transition-colors duration-300"
            >
              WORK
            </a>
          </div>
          <div className="overflow-hidden">
            <a
              ref={addToLeftRefs}
              href="#services"
              onClick={onClose}
              className="block hover:text-brandBlue transition-colors duration-300"
            >
              SERVICES
            </a>
          </div>
          <div className="overflow-hidden">
            <a
              ref={addToLeftRefs}
              href="#approach"
              onClick={onClose}
              className="block hover:text-brandBlue transition-colors duration-300"
            >
              APPROACH
            </a>
          </div>
        </nav>

        {/* Right Column (Starts at Column 3 in desktop grid) */}
        <nav className="col-span-1 md:col-span-2 md:col-start-3 flex flex-col gap-4 md:gap-[1.5vw] font-anton text-[11vw] md:text-[9.5vw] leading-none tracking-tighter uppercase mt-6 md:mt-0">
          {/* Dummy invisible spacer corresponding to Row 1 (HOME) to dynamically match line height on desktop */}
          <div className="invisible select-none pointer-events-none hidden md:block">
            SPACER
          </div>
          
          <div className="overflow-hidden">
            <a
              ref={addToRightRefs}
              href="#studio"
              onClick={onClose}
              className="block hover:text-brandBlue transition-colors duration-300"
            >
              STUDIO
            </a>
          </div>
          <div className="overflow-hidden">
            <a
              ref={addToRightRefs}
              href="#plans"
              onClick={onClose}
              className="block hover:text-brandBlue transition-colors duration-300"
            >
              PLANS
            </a>
          </div>
          <div className="overflow-hidden">
            <a
              ref={addToRightRefs}
              href="#news"
              onClick={onClose}
              className="block hover:text-brandBlue transition-colors duration-300"
            >
              NEWS
            </a>
          </div>
        </nav>

      </div>
    </div>
  );
}
