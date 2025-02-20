export default async function decorate(block) {
    var sactionalDiv = document.querySelector('.sactional > div');
    sactionalDiv.classList.add('sactional-section');

    var sactionalTwo = document.querySelector('.sactional > div:nth-child(2)');
    sactionalTwo.classList.add('sactional-section');

    var sactionalThree = document.querySelector('.sactional > div:nth-child(3)');
    sactionalThree.classList.add('sactional-section');
  
    var sactionalFour = document.querySelector('.sactional > div:nth-child(4)');
    sactionalFour.classList.add('sactional-section');
}
