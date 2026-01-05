document.addEventListener("DOMContentLoaded", () => {

const roles = [
  "AI & Machine Learning Developer",
  "NLP & Computer Vision Explorer",
  "Open Source Contributor",
  "Research-Oriented Technologist",
  "Full-Stack Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing");

function typeText() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 80);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeText, 500);
  }
}

typeText();


  /* =====================
     MINIMAL PARTICLES
  ===================== */

  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  const COUNT = 40;

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(124,124,255,0.35)";

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
/* =====================
   NAVBAR ACTIVE LINK – FINAL RELIABLE FIX
===================== */

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  let currentSection = null;
  let minDistance = Infinity;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const distance = Math.abs(sectionCenter - viewportCenter);

    if (distance < minDistance) {
      minDistance = distance;
      currentSection = section;
    }
  });

  if (currentSection) {
    navLinks.forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(
      `.nav-link[href="#${currentSection.id}"]`
    );

    if (activeLink) activeLink.classList.add("active");
  }
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

/* =====================
   SECTION REVEAL ON SCROLL
===================== */

const revealSections = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealSections.forEach(section => {
  revealObserver.observe(section);
});
/* =====================
   PROJECT CARD STAGGER
===================== */

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 150); // 👈 stagger delay
        });

        projectObserver.disconnect(); // run once
      }
    });
  },
  { threshold: 0.2 }
);
const sparkleContainer = document.querySelector(".bg-sparkles");

for (let i = 0; i < 60; i++) {
  const s = document.createElement("span");
  s.classList.add("sparkle");

  s.style.top = Math.random() * 100 + "%";
  s.style.left = Math.random() * 100 + "%";
  s.style.animationDelay = Math.random() * 3 + "s";
  s.style.opacity = Math.random();

  sparkleContainer.appendChild(s);
}

const projectsSection = document.querySelector("#projects");
if (projectsSection) {
  projectObserver.observe(projectsSection);
}

});
