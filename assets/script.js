document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Simple inquiry form handler — replace action with your real endpoint
  // (e.g. Formspree, Google Form, or your own backend) before going live.
  var form = document.querySelector('form.inquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks — this form is a placeholder. Connect it to Formspree, a Google Form, or your email service to receive real submissions. See the README for options.');
    });
  }
});
