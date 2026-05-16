import React, { useState, useEffect } from 'react';

const timezones = [
  { city: 'BANGALORE, INDIA', tz: 'Asia/Kolkata' },
  { city: 'KERALA, INDIA', tz: 'Asia/Kolkata' },
];

export default function FloatingElements() {
  const [currentTzIndex, setCurrentTzIndex] = useState(0);
  const [timeStr, setTimeStr] = useState('');

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
      <nav className="fixed top-0 left-0 right-0 flex justify-between px-4 md:px-[4vw] py-6 z-[1000] text-[13px] tracking-wider uppercase bg-transparent text-foreground">
        <div>STUDIO ANAS</div>
        <button onClick={() => document.documentElement.classList.toggle('dark')}>DARK MODE</button>
        <button>MENU</button>
        <a href="#">LET'S TALK!</a>
      </nav>

      {/* Timezone Ticker */}
      <div className="fixed bottom-6 right-4 md:right-[4vw] text-xs tracking-wider z-[998] hidden md:block mix-blend-difference text-white">
        <span>{timezones[currentTzIndex].city}</span> <span className="ml-2">{timeStr}</span>
      </div>
    </>
  );
}
