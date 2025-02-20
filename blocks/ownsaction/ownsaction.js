export default async function decorate(block) {
    var sactionalDiv = document.querySelector('.ownsaction > div');
    sactionalDiv.classList.add('ownsaction-section');

    var sactionalTwo = document.querySelector('.ownsaction > div:nth-child(2)');
    sactionalTwo.classList.add('ownsaction-section');

    var sactionalThree = document.querySelector('.ownsaction > div:nth-child(3)');
    sactionalThree.classList.add('ownsaction-section');
  
    var sactionalFour = document.querySelector('.ownsaction > div:nth-child(4)');
    sactionalFour.classList.add('ownsaction-section');
}
