import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // Add class names to the relevant sections
  const contactDiv = footer.querySelector('.contact-info > div');
  if (contactDiv) {
    contactDiv.classList.add('contact-info-section');
  }

  const phoneDiv = footer.querySelector('.contact-info > div:nth-child(2)');
  if (phoneDiv) {
    phoneDiv.classList.add('phone-info');
  }

  const emailDiv = footer.querySelector('.contact-info > div:nth-child(3)');
  if (emailDiv) {
    emailDiv.classList.add('email-info');
  }

  // Append the decorated footer to the block element
  block.append(footer);
}
