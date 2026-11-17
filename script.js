// Replace the empty value with the email address you want clients to use.
// Example: const BUSINESS_EMAIL = "hello@example.com";
const BUSINESS_EMAIL = "";

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const emailLink = document.querySelector('#email-link');
const emailNote = document.querySelector('#email-note');
if (BUSINESS_EMAIL.trim()) {
  const subject = encodeURIComponent('Website Project Inquiry — EST Web Solutions');
  const body = encodeURIComponent('Hello EST Web Solutions,\n\nI would like to discuss a website project.\n\nBusiness / Project:\nWebsite requirements:\nPreferred timeline:\n\nThank you.');
  emailLink.href = `mailto:${BUSINESS_EMAIL.trim()}?subject=${subject}&body=${body}`;
  emailNote.textContent = `Or email directly: ${BUSINESS_EMAIL.trim()}`;
} else {
  emailLink.setAttribute('aria-disabled', 'true');
  emailLink.addEventListener('click', event => {
    event.preventDefault();
    emailNote.textContent = 'Contact email is not configured yet. Please set BUSINESS_EMAIL in script.js before publishing.';
  });
}
