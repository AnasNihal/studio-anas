import React from 'react';

export default function Contact() {
  return (
    <section className="py-[15vh] px-4 md:px-[4vw] bg-background text-foreground overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-12">
        
        {/* Main Headline */}
        <div className="lg:col-span-8">
          <h2 className="font-anton text-[14vw] lg:text-[8vw] leading-[0.95] uppercase tracking-tighter flex flex-col m-0 p-0">
            <span>LET'S WORK</span>
            <span>TOGETHER</span>
          </h2>
        </div>

        {/* Side Content */}
        <div className="lg:col-span-4 pt-4 lg:pt-[1.5vw] flex flex-col items-start gap-8 md:gap-10">
          <div className="max-w-[300px] md:max-w-[380px]">
            <p className="font-sans text-lg md:text-xl font-medium leading-[1.3] tracking-tight text-foreground/90">
              Work with us if average isn't your thing.
              <br className="hidden md:block" />
              Drop it, we'll build it!
            </p>
          </div>

          <a 
            href="mailto:hello@studioanas.com"
            className="group flex items-center gap-3 font-dm text-[11px] md:text-xs tracking-[0.2em] uppercase transition-all"
          >
            <span className="relative">
              SAY HELLO
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground/20 transition-all duration-300 group-hover:bg-foreground"></span>
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
