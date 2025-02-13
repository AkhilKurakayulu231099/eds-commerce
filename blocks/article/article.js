export default async function decorate(block) {
    var articleWhiteDiv = document.querySelector('.article-white');
    articleWhiteDiv.classList.add('article');

    var articleTwoDiv = document.querySelector('.article-two');
    articleTwoDiv.classList.add('article');
  
   var articleDiv = document.querySelector('.article > div');
   articleDiv.classList.add('article-section');
}
