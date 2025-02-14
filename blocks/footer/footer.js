export default async function decorate(block) {
  var contactDiv = document.querySelector('.contact-info > div');
  contactDiv.classList.add('contact-info-section');

  var phoneDiv = document.querySelector('.contact-info > div:nth-child(2)');
  phoneDiv.classList.add('phone-info');

  var emailDiv = document.querySelector('.contact-info > div:nth-child(3)');
  emailDiv.classList.add('email-info');
}
