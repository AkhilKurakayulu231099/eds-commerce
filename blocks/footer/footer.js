import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);


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

  const linkDiv = footer.querySelector('.contact-info > div:nth-child(4)');
  if (linkDiv) {
    linkDiv.classList.add('contact-info-section');
  }

  const copyrightDiv = footer.querySelector('.contact-info > div:nth-child(5)');
  if (copyrightDiv) {
    copyrightDiv.classList.add('contact-info-section');
  }

  block.append(footer);
}
