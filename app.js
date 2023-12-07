const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

particlesJS.load("particles-js", "particles.json", function () {
  console.log("Particles.js loaded!");
});

var typed = new Typed(".animation", {
  strings: [
    "('Hello, World!')",
    "('안녕, 세상!')",
    "('こんにちは世界！')",
    "('Olá Mundo!')",
    "('Привет, мир!')",
    "('Hej världen!')",
    "('Bonjour le monde!')",
    "('Hallo Welt!')",
  ],
  typeSpeed: 40,
  backSpeed: 60,
  loop: true,
});
