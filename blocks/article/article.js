export default async function decorate(block) {
    var articleDiv = document.querySelector('.article > div');
    articleDiv.classList.add('article-section');

    var articleWhiteDiv = document.querySelector('.article-white');
    articleWhiteDiv.classList.add('article');
}
