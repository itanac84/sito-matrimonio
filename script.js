
// IntersectionObserver per le animazioni delle sezioni
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

// Funzione per il menu hamburger
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu && hamburger) {
    menu.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', menu.classList.contains('show'));
  } else {
    console.error('Elemento mobileMenu o hamburger non trovato');
  }
}

// Chiudi il menu quando si clicca su un link
document.querySelectorAll('.mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
