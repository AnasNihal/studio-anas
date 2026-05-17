import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const nameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(nameRef.current, {
        scrollTrigger: {
          trigger: '.massive-footer',
          start: 'top 80%'
        },
        y: '100%',
        duration: 1.2,
        ease: 'power4.out'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer className="massive-footer pt-10 relative overflow-hidden flex flex-col">
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-[4vw] mb-[10vh] text-xs leading-loose tracking-wider">
        <div className="flex flex-col mb-12 md:mb-0">
          <a href="/" className="hover:opacity-50 transition-opacity">HOME</a>
          <a href="/work" className="hover:opacity-50 transition-opacity">WORK</a>
          <a href="/services" className="hover:opacity-50 transition-opacity">SERVICES</a>
          <a href="/studio" className="hover:opacity-50 transition-opacity">STUDIO</a>
          <a href="/plans" className="hover:opacity-50 transition-opacity">PLANS</a>
          <a href="/approach" className="hover:opacity-50 transition-opacity">APPROACH</a>
          <a href="/news" className="hover:opacity-50 transition-opacity mb-8">NEWS</a>

          <a href="#" className="hover:opacity-50 transition-opacity">YOUTUBE</a>
          <a href="#" className="hover:opacity-50 transition-opacity">LINKEDIN</a>
          <a href="#" className="hover:opacity-50 transition-opacity">INSTAGRAM</a>
          <a href="#" className="hover:opacity-50 transition-opacity">LEGAL</a>
          <a href="#" className="hover:opacity-50 transition-opacity">SITE EN FRANÇAIS</a>
        </div>

        <div className="flex flex-col max-w-md relative">
          <p className="mb-8 uppercase">I'M A BUILDER, CREATOR & AI ENTHUSIAST BASED IN KERALA & BANGALORE.</p>
          <p className="mb-8 uppercase">GOT A PROJECT IDEA? WILD THOUGHT? OR JUST WANT TO GEEK OUT ABOUT AI?</p>
          <p className="mb-8 uppercase">LET'S TALK!</p>
          <a href="mailto:HELLO@ANASNIHAL.COM" className="mb-12 hover:opacity-50 uppercase">HELLO@ANASNIHAL.COM</a>

          <div className="relative">
            <p className="uppercase">COPYRIGHT 2025<br />ANAS NIHAL</p>
            <div className="absolute top-[-20px] left-[40%] bg-brandBlue text-white font-anton text-2xl md:text-3xl px-4 py-2 -rotate-12 rounded">
              SEND LOVE
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden flex justify-center items-end mt-auto">
        <h1
          ref={nameRef}
          className="font-anton text-massive-footer leading-[0.75] tracking-tighter m-0 p-0"
        >
          ANAS
        </h1>
      </div>
    </footer>
  );
}
