import React, { useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Playground from './components/Playground';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after elements load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <main className="w-full relative selection:bg-brandBlue selection:text-white">
        <FloatingElements />
        <Hero />
        <Manifesto />
        <Playground />
        <Services />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
