// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Email form no-op handler
const form = document.getElementById('mc-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('TODO: hook into MailerLite/HubSpot');
  });
}

// TODO: Add analytics (GTag)
// TODO: Add consent logic

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();
