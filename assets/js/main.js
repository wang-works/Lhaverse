(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    });
  }

  document.querySelectorAll('[data-newsletter-form], [data-contact-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) status.textContent = form.matches('[data-newsletter-form]')
        ? 'You are on the trail list. See you out there.'
        : 'Thank you — your note is on its way.';
      form.reset();
    });
  });

  const query = new URLSearchParams(window.location.search);
  const interest = query.get('interest');
  const interestField = document.querySelector('#interest');
  if (interest && interestField) interestField.value = `${interest[0].toUpperCase()}${interest.slice(1)} blanket`;
})();
