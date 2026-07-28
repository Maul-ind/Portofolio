// TYPE ANIMATION
const words = [
  "Frontend Developer",
  "UI Designer",
  "Web Programmer",
  "Human",
  "Backend Developer",
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(type, deleting ? 60 : 120);
}

type();
// =========================
// Active Scroll
// =========================

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id], footer[id]");

function activeScroll() {
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));

      document
        .querySelectorAll(`.nav-links a[href="#${sectionId}"]`)
        .forEach((link) => link.classList.add("active"));
    }
  });
}

window.addEventListener("scroll", activeScroll);
activeScroll();

// =========================
// Scroll Reveal
// =========================
const reveals = document.querySelectorAll(".reveal");

function scrollReveal() {
  const triggerBottom = window.innerHeight * 0.9;

  reveals.forEach((element) => {
    const box = element.getBoundingClientRect();

    if (box.top < triggerBottom) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", scrollReveal);
scrollReveal();
