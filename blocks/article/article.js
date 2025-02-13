export default async function decorate(block) {
    var articleWhiteDiv = document.querySelector('.article-white');
    articleWhiteDiv.classList.add('article');

    var articleOneDiv = document.querySelector('.article-one');
    articleOneDiv.classList.add('article');

    var articleTwoDiv = document.querySelector('.article-two');
    articleTwoDiv.classList.add('article');

    var articleWhite = document.querySelector('.article-white > div') ;
    articleWhite.classList.add('article-section-white');
  
    var articleDiv = document.querySelector('.article-one > div');
    articleDiv.classList.add('article-section-one');
  
    var articleTwo = document.querySelector('.article-two > div');
    articleTwo.classList.add('article-section-two');
}
