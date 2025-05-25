// script.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.page').forEach(section => {
  observer.observe(section);
});

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('show');
}
