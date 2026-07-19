// ==========================================================================
// NAVIGATION MENU TOGGLE
// ==========================================================================
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.hasAttribute('data-visible');
    if (!isVisible) {
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
    } else {
      primaryNav.removeAttribute('data-visible');
      navToggle.setAttribute('aria-expanded', false);
    }
  });
}
