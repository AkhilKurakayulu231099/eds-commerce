export default async function decorate(block) {
    var articleWhiteDiv = document.querySelector('.article-white');
    articleWhiteDiv.classList.add('article');
  
    var articleWhite = document.querySelector('.article-white > div') ;
    articleWhite.classList.add('article-section-white');
}
