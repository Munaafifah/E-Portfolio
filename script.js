// mobile nav toggle
const toggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('navMobile');

if(toggle && mobileMenu){
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// scroll reveal
const revealTargets = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold:0.08});

revealTargets.forEach(s => {
  s.style.opacity = 0;
  s.style.transform = 'translateY(20px)';
  s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(s);
});