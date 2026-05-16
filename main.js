// 1. Lenis smooth scroll setup
const lenis = new Lenis({ lerp: 0.1, smooth: true });
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// 2. GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// 3. Dark mode toggle
const html = document.documentElement;
document.querySelector('.dark-toggle').addEventListener('click', () => {
  html.classList.toggle('dark');
  html.classList.toggle('light');
});

// 4. Menu Overlay
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menuOverlay = document.getElementById('menuOverlay');

menuBtn.addEventListener('click', () => {
  menuOverlay.classList.add('open');
  lenis.stop();
});
closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('open');
  lenis.start();
});

// 5. Cycling Timezone Ticker
const timezones = [
  { city: 'PARIS, FRANCE', tz: 'Europe/Paris' },
  { city: 'BARCELONA, SPAIN', tz: 'Europe/Madrid' },
  { city: 'LOS ANGELES, CA', tz: 'America/Los_Angeles' },
  { city: 'HONG KONG, CHINA', tz: 'Asia/Hong_Kong' }
];
let currentTzIndex = 0;
const locationText = document.getElementById('location-text');
const timeText = document.getElementById('time-text');

function updateClock() {
  const currentZone = timezones[currentTzIndex];
  if(!locationText || !timeText) return;
  
  try {
      const timeStr = new Intl.DateTimeFormat('en-US', { 
          hour:'2-digit', 
          minute:'2-digit', 
          second:'2-digit',
          hour12:false, 
          timeZone: currentZone.tz 
      }).format(new Date());
      
      locationText.textContent = currentZone.city;
      timeText.textContent = timeStr;
  } catch(e) {
      console.log(e);
  }
}
// Update clock every second
setInterval(updateClock, 1000);
// Cycle timezone every 4 seconds
setInterval(() => {
  currentTzIndex = (currentTzIndex + 1) % timezones.length;
  updateClock();
}, 4000);

// 6. GSAP Animations on Load
window.addEventListener('load', () => {
  // Hero lines stagger up
  gsap.from('.hero .line', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    stagger: 0.15,
    delay: 0.2
  });
});

// 7. GSAP Scroll Animations
// Manifesto Lines
gsap.from('.manifesto .line', {
  scrollTrigger: {
    trigger: '.manifesto',
    start: 'top 80%'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  stagger: 0.1
});

// Services List
gsap.from('.srv-item', {
  scrollTrigger: {
    trigger: '.services-massive',
    start: 'top 75%'
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  stagger: 0.05
});

// Footer Name pop up
gsap.from('.footer-bottom-name h1', {
  scrollTrigger: {
    trigger: '.massive-footer',
    start: 'top 80%'
  },
  y: 200,
  duration: 1,
  ease: 'power4.out'
});

// 8. Services Hover Interaction & Blue Dot Cursor
const serviceItems = document.querySelectorAll('.srv-item');
const srvPreview = document.querySelector('.srv-preview');
const srvVideo = document.getElementById('srvVideo');
const srvCursor = document.querySelector('.service-cursor');

// Cursor follow logic
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  srvCursor.style.left = mouseX + 'px';
  srvCursor.style.top = mouseY + 'px';
});

// Toggle cursor only when hovering the services section
const servicesSection = document.querySelector('.services-massive');
if(servicesSection) {
  servicesSection.addEventListener('mouseenter', () => {
    srvCursor.classList.add('active');
  });
  servicesSection.addEventListener('mouseleave', () => {
    srvCursor.classList.remove('active');
    srvPreview.classList.remove('visible'); // Hide video preview when leaving section entirely
  });
}

// Hover logic for each service item
serviceItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Remove active class from all
    serviceItems.forEach(i => i.classList.remove('active'));
    // Add to current
    item.classList.add('active');
    
    // Setup video
    const videoSrc = item.dataset.video;
    if(videoSrc && srvVideo) {
      if(srvVideo.src !== videoSrc) {
        srvVideo.src = videoSrc;
        srvVideo.play().catch(e=>console.log("Autoplay blocked"));
      }
      srvPreview.classList.add('visible');
    }
  });
});
