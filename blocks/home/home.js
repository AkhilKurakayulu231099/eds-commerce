export default async function decorate(block) {
//Getting main Div container
var mainDivOnne = document.querySelector('.home');
//adding classNames to main Div
var containerNewwDiv = document.createElement('div');
containerNewwDiv.setAttribute('class','lyt-container');
mainDivOnne.appendChild(containerNewwDiv);
