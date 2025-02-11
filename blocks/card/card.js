export default async function decorate(block) {
    var cardDiv = document.querySelector('.card > div');
    cardDiv.classList.add('card-section');

    var cardBlockTwo = document.querySelector('.card > div > div:nth-child(2)');
    cardBlockTwo.classList.add('card-block');
  
    var cardBlockOne = document.querySelector('.card > div > div:first-child');
    cardBlockOne.classList.add('card-block-blue');

  
}
