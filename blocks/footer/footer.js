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
  
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  var contactDiv = document.querySelector('.contact-info > div');
  contactDiv.classList.add('contact-info-section');

  var phoneDiv = document.querySelector('.contact-info > div:nth-child(2)');
  phoneDiv.classList.add('phone-info');

  var emailDiv = document.querySelector('.contact-info > div:nth-child(3)');
  emailDiv.classList.add('email-info');
  block.append(footer);
}
