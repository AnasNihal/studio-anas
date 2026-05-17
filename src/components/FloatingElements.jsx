import React, { useState, useEffect } from 'react';
import MenuOverlay from './MenuOverlay';

const timezones = [
  { city: 'BANGALORE, INDIA', tz: 'Asia/Kolkata' },
  { city: 'KERALA, INDIA', tz: 'Asia/Kolkata' },
];

export default function FloatingElements() {
  const [currentTzIndex, setCurrentTzIndex] = useState(0);
  const [timeStr, setTimeStr] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Sync theme state with MutationObserver
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Clock updates
  useEffect(() => {
    const updateTime = () => {
      const currentZone = timezones[currentTzIndex];
      try {
        const time = new Intl.DateTimeFormat('en-US', {
          hour: '2-digit', minute: '2-digit', second: '2-digit',
          hour12: false, timeZone: currentZone.tz
        }).format(new Date());
        setTimeStr(time);
      } catch(e) {}
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [currentTzIndex]);

  // Zone cycling
  useEffect(() => {
    const zoneInterval = setInterval(() => {
      setCurrentTzIndex((prev) => (prev + 1) % timezones.length);
    }, 4000);
    return () => clearInterval(zoneInterval);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav 
        className="fixed top-0 left-0 right-0 flex justify-between md:grid md:grid-cols-4 px-4 md:px-[4vw] py-6 z-[1010] text-[13px] tracking-wider uppercase bg-transparent text-foreground pointer-events-none"
        style={{ transform: 'translate3d(0, 0, 50px)' }}
      >
        <div className="text-left font-dm pointer-events-auto">STUDIO ANAS</div>
        
        <button 
          onClick={() => document.documentElement.classList.toggle('dark')} 
          className="text-left hidden md:block focus:outline-none font-dm w-fit justify-self-start pointer-events-auto"
        >
          DARK MODE
        </button>
        
        <div className="flex items-center gap-4 justify-end md:justify-start pointer-events-auto">
          {/* Animated Rolling Menu Button */}
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsOpen(!isOpen)}
            className="h-6 overflow-hidden relative block font-dm text-[13px] tracking-wider uppercase cursor-pointer focus:outline-none"
          >
            <div className={`transition-transform duration-300 ease-out flex flex-col text-left ${
              isOpen ? '-translate-y-[66.66%]' : (isHovered ? '-translate-y-[33.33%]' : 'translate-y-0')
            }`} style={{ height: '72px' }}>
              <span className="h-6 flex items-center">MENU</span>
              <span className="h-6 flex items-center">OPEN</span>
              <span className="h-6 flex items-center">CLOSE</span>
            </div>
          </button>

          {/* Mobile Dark/Light Theme Icon Toggle */}
          <button 
            onClick={() => document.documentElement.classList.toggle('dark')} 
            className="md:hidden flex items-center justify-center focus:outline-none cursor-pointer ml-1"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              // Sun/Light Icon for Dark Mode
              <svg className="w-[28px] h-[28px] fill-current text-black bg-white rounded-full p-[5px]" viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.42 0a.996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c-.39-.39-1.03-.39-1.42 0L16.94 7.05c-.39.39-.39 1.03 0 1.42.39.39 1.03.39 1.42 0l1.06-1.06c.39-.38.39-1.02 0-1.41zM7.05 18.01c-.39-.39-1.03-.39-1.42 0l-1.06 1.06c-.39.39-.39 1.03 0 1.42.39.39 1.03.39 1.42 0l1.06-1.06c.38-.39.38-1.03 0-1.42z"/>
              </svg>
            ) : (
              // Moon Icon for Light Mode
              <svg className="w-[28px] h-[28px] fill-current text-white bg-black rounded-full p-[5px]" viewBox="0 0 24 24">
                <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.2 1.2-.8 1.4-3.1 1.2-5.1 4.2-5.1 7.5 0 4.4 3.6 8 8 8 3.3 0 6.3-2 7.5-5.1.2-.6.8-.9 1.4-.8.6.1 1 .7.9 1.3-.9 4.7-5 8.2-9.8 8.2z"/>
              </svg>
            )}
          </button>
        </div>

        <a href="mailto:hello@anasnihal.com" className="text-right hidden md:block font-dm pointer-events-auto">LET'S TALK!</a>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Timezone Ticker */}
      <div className="fixed bottom-6 right-4 md:right-[4vw] text-xs tracking-wider z-[998] hidden md:block mix-blend-difference text-white">
        <span>{timezones[currentTzIndex].city}</span> <span className="ml-2">{timeStr}</span>
      </div>
    </>
  );
}
