export default async function decorate(block) {
    const divContent = document.querySelector('.headerfix-wrapper');
    const targetElement = document.querySelector('.nav-wrapper');
    divContent.appendTo(targetElement);
}
