import React, { useEffect, useState } from 'react';
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
import ProjectDetails from './components/ProjectDetails';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    // Refresh ScrollTrigger after elements load or view changes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, [view]);

  // Global listener to return home when menu items (hashes) are clicked
  useEffect(() => {
    const handleHashChange = () => {
      setView('home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <main className="w-full relative selection:bg-brandBlue selection:text-white">
        <FloatingElements />
        {view === 'home' ? (
          <>
            <Hero />
            <Manifesto />
            <Playground onSelectProject={setView} />
            <Services />
            <Contact />
            <Footer />
          </>
        ) : (
          <ProjectDetails onBack={() => setView('home')} />
        )}
      </main>
    </ReactLenis>
  );
}

export default App;
