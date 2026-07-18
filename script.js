// typed heading effect
const phrases = ["Building software", "from the circuit", "to the cloud."];
const el = document.getElementById('typedHeading');

function typeLine(lines, lineIndex, charIndex, done){
  if(lineIndex >= lines.length){ done && done(); return; }
  const current = lines.slice(0, lineIndex).join('<br>') +
    (lineIndex > 0 ? '<br>' : '') +
    lines[lineIndex].slice(0, charIndex);
  el.innerHTML = current;
  if(charIndex < lines[lineIndex].length){
    setTimeout(() => typeLine(lines, lineIndex, charIndex + 1, done), 32);
  } else {
    setTimeout(() => typeLine(lines, lineIndex + 1, 0, done), 220);
  }
}

if(el){
  typeLine(phrases, 0, 0);
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
  s.style.transform = 'translateY(24px)';
  s.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(s);
});

// subtle tilt on project cards
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
