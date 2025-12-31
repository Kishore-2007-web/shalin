const elements = document.querySelectorAll('.section, .hero-text, .hero-visual');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
