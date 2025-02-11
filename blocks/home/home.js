//Getting main Div container
var mainDivOnne = document.querySelector('.hero');
//adding classNames to main Div
var containerNewwDiv = document.createElement('div');
containerNewwDiv.setAttribute('class','lyt-container');
mainDivOnne.appendChild(containerNewwDiv);

//creating section element
var sectionnElemen = document.createElement('section');
//adding Id to section
sectionnElemen.setAttribute('class','layout-container');
//adding classNames to section
sectionnElemen.classList.add('clearfix','bg-color','no-padding--bottom');
containerNewwDiv.appendChild(sectionnElemen);
 
//creating div
var containerrDivv = document.createElement('div');
//adding class to container Div
containerrDivv.setAttribute('class','layout-container-wrapper');  
sectionnElemen.appendChild(containerrDivv);

//Creating Inside div one
var containerInsiderDivv = document.createElement('div');
//adding class
containerInsiderDivv.setAttribute('class','flex-container');
containerInsiderDivv.classList.add('flex-container--multi-50','flex-container--center');
containerrDivv.appendChild(containerInsiderDivv);

//Creating Inside div two
var containerInsiderDivvtwo = document.createElement('div');
//adding class
containerInsiderDivvtwo.setAttribute('class','card');  
containerInsiderDivv.appendChild(containerInsiderDivvtwo);

//creating article
var articleElemenn = document.createElement('article');
//adding class to article
articleElemenn.setAttribute('class','tile');
articleElemenn.classList.add('tile--simulate-links');
containerInsiderDivvtwo.appendChild(articleElemenn);

//creating div container two
var containerrDivvTwo = document.createElement('div');
//adding class to container Div
containerrDivvTwo.setAttribute('class','tile-content');  
articleElemenn.appendChild(containerrDivvTwo);

//Creating Inside div container two
var containerrTwoInsideDivv = document.createElement('div');
//adding class
containerrTwoInsideDivv.setAttribute('class','tile-content-copy');
containerrDivvTwo.appendChild(containerrTwoInsideDivv);

//Creating Inside two div container two
var containerrTwoInsideDivvTwo = document.createElement('h4');
//adding class
containerrTwoInsideDivvTwo.setAttribute('class','tile-title');
containerrTwoInsideDivv.appendChild(containerrTwoInsideDivvTwo);

//Creating Inside three div container two
var containerrTwoInsideDivvThree = document.createElement('div');
//adding class
containerrTwoInsideDivvThree.setAttribute('class','rte-wrapper');
containerrTwoInsideDivvTwo.appendChild(containerrTwoInsideDivvThree);

//Creating Inside div four para container two with value
var containerTwoInsideDivvFourValue = document.querySelector('.dx-video > div > div > p');
containerrTwoInsideDivvThree.appendChild(containerTwoInsideDivvFourValue);

//Creating Inside five div container two
var containerrTwoInsideDivvFive = document.createElement('div');
//adding class
containerrTwoInsideDivvFive.setAttribute('class','tile-copy');
containerrTwoInsideDivv.appendChild(containerrTwoInsideDivvFive);

//Creating Inside six div container two
var containerrTwoInsideDivvSix = document.createElement('div');
//adding class
containerrTwoInsideDivvSix.setAttribute('class','rte-wrapper');
containerrTwoInsideDivvSix.classList.add('cmp-text');
containerrTwoInsideDivvFive.appendChild(containerrTwoInsideDivvSix);

//Creating Inside div seven para container two with value
var containerrTwoInsideDivvSevenValue = document.querySelector('.dx-video > div > div > p');
containerrTwoInsideDivvSix.appendChild(containerrTwoInsideDivvSevenValue);

//Creating Inside div two
var containerInsidervideo = document.createElement('div');
//adding class
containerInsidervideo.setAttribute('class','youtube-player');  
containerInsiderDivv.appendChild(containerInsidervideo);

var containerInsidervideoOne = document.createElement('div');
//adding class
containerInsidervideoOne.setAttribute('class','video-player');  
containerInsidervideo.appendChild(containerInsidervideoOne);

var containerInsidervideoTwo = document.createElement('div');
//adding class
containerInsidervideoTwo.setAttribute('class','vp-wrapper');  
containerInsidervideoOne.appendChild(containerInsidervideoTwo);
containerInsidervideoTwo.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/E6qQxbyB47I" title="Rationale Partnership | StarTrack" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

// var containerInsidervideoThree = document.createElement('iframe');
// var videosrc = document.querySelector('.dx-video > div > div > p').innerText;
// //adding class
// containerInsidervideoThree.setAttribute('class','player');
// containerInsidervideoThree.setAttribute('id','video-player-596658-402204');
// containerInsidervideoThree.setAttribute('data-video-id','E6qQxbyB47I');
// containerInsidervideoThree.setAttribute('frameborder','0');
// containerInsidervideoThree.setAttribute('allowfullscreen','');
// containerInsidervideoThree.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
// containerInsidervideoThree.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
// containerInsidervideoThree.setAttribute('title','Rationale Partnership | StarTrack');
// containerInsidervideoThree.setAttribute('width','640');
// containerInsidervideoThree.setAttribute('height','360');
// containerInsidervideoThree.setAttribute('src',videosrc);
// containerInsidervideoTwo.appendChild(containerInsidervideoThree);
document.querySelector('.dx-video > div > div > p').style.display = 'none';

// //Creating Inside div two
// var containerInsidervideotranscript = document.createElement('div');
// //adding class
// containerInsidervideotranscript.setAttribute('class','expandable-block');
// containerInsidervideotranscript.classList.add('js-expandable-block','expandable-block--video');
// containerInsidervideo.appendChild(containerInsidervideotranscript);
// containerInsidervideotranscript.innerHTML = `<div class="expandable-block-header js-expandable-block-header font-heading-5 expandable-block-header-video">
//         <button class="expandable-block-trigger js-expandable-block-trigger expandable-block-trigger--video" id="expandable-block-trigger-596658-402204" aria-expanded="false" title="Read transcript" data-event="site interaction" data-category="acc|exp|clk" data-description="read-transcript|transcript">
//           <span class="icon icon--16 icon-video-transcript">
//             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.5C22 1.122 20.82 0 19.368 0H4.632C3.18 0 2 1.122 2 2.5v19C2 22.878 3.18 24 4.632 24h14.736C20.82 24 22 22.878 22 21.5v-19zM19.368 22c.29 0 .527-.224.527-.5v-19c0-.276-.237-.5-.527-.5H4.632a.515.515 0 00-.527.5v19c0 .276.237.5.527.5h14.736z"></path><path d="M6.21 7.363c0-.451.354-.818.79-.818h9.228c.436 0 .79.367.79.818 0 .452-.354.819-.79.819H7c-.436 0-.79-.367-.79-.819zM6.21 11.728c0-.452.354-.819.79-.819h9.228c.436 0 .79.367.79.819 0 .451-.354.818-.79.818H7c-.436 0-.79-.367-.79-.818zM6.21 16.09c0-.451.354-.817.79-.817h9.228c.436 0 .79.366.79.818 0 .452-.354.818-.79.818H7c-.436 0-.79-.366-.79-.818z"></path></svg>
//           </span>
//           <span class="video-trigger-text font-body-medium">Read transcript</span>
//           <span class="icon icon--12 expandable-arrow">
//             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.434 18.44a2.065 2.065 0 01-1.435.56 2.068 2.068 0 01-1.435-.56l-.712-.679c-.015-.011-.019-.03-.033-.044L.592 8.951a1.848 1.848 0 010-2.711l.71-.68a2.098 2.098 0 012.856 0L12 13.01l7.843-7.45a2.096 2.096 0 012.854 0l.712.68c.79.747.79 1.961 0 2.71l-9.23 8.767c-.013.016-.018.033-.03.044l-.714.68z"></path></svg>
//           </span>
//         </button>
//     </div>
//     <article class="expandable-block-content js-expandable-block-content expandable-block-content--video bg-color is-hidden" id="expandable-block-content-596658-402204" aria-label="Video transcript" style="height: 67.3333px;">
//       <div class="expandable-block-content-inner">
//         <div class="flex-container flex-container--single-row">
//               <div class="rte-wrapper">
//   <p>Video: The Australia Post logo sits in the top right corner. A chic brunette in a grey trouser suit stands with her back turned, watching fashion images being projected on a purple-tinged wall. A line appears on screen above the StarTrack logo. A set of map coordinates glide back and forth before settling in the middle. The numbers 3121 and 3444 sit at the far ends of the line.</p>
// <p>Audio: Woman: Moving to Kyneton was definitely a huge milestone for us. We are such a proudly Australian company. It's part of our DNA as a luxury skincare brand to be innovative.</p>
// <p>Video: The woman sits facing the camera, as the images continue to be projected behind her.</p>
// <p>Text: "Shamini Rajaeethnam, CEO, Rationale." Above bushland, the coordinates settle in the middle and become in the RATIONALE logo. A large sleek black building sits near a bushland town. Streets are lined with old-fashioned buildings.</p>
// <p>Audio: Shamini: Telling the full story of what RATIONALE stands for is so highly important. Part of that was bringing our manufacturing in house. The founders of the business had a huge affinity for the Macedon Ranges, and in 2016 we found a plot of land in Kyneton. It has such a legacy as being a beautiful town that has so much to give in terms of opportunity.</p>
// <p>Video: The Kyneton Post Office building features colonnaded archways. People wearing small backpacks stroll across a bridge and up a tree-lined road. Shamini drives. From above, her car is visible following a forest road.</p>
// <p>Audio: Shamini: We did section off every part of the business to understand what would be the challenges. Until you're doing the commute, until you're in the space, you don't really understand the full effects. It's quite a beautiful drive. As soon as I see the rolling hills, I take a deep breath and I do feel really fortunate.</p>
// <p>Video: Bottles move through high-tech black and white machinery. On a white label, the RATIONALE logo appears in silver. Parcels sit in a large metal basket that features the Australia Post logo. Shamini walks and talks with a woman. In a warehouse area, tall shelves are piled with boxes. A StarTrack truck backs toward the warehouse door. The driver loads a basket of parcels.</p>
// <p>Audio: Shamini: One of the challenges we were very concerned with was the distribution that we need to do from Kyneton. We worked very closely with Australia Post to understand how we close the gaps of what our clients were used to and what would the differences be of moving the business from our metropolitan warehouse into Kyneton. We have had challenges and obstacles from a service-delivery point of view. If we did not have this close and good relationship with Australia Post, I don't believe this would have been possible.</p>
// <p>Video: The building's black facade reflects its surroundings. In large sunny rooms, people give presentations and hold meetings. The streets of Kyneton are a patchwork of roofs and treetops.</p>
// <p>Audio: Shamini: Now that we've been here for almost a year, people really see the inspiration of coming together through this state-of-the-art building that we created. There are so many benefits that come from moving a business regionally. The strength of the culture and the team to embrace that tree change is really inspiring.</p>
// <p>Video: On a white screen, the StarTrack logo appears, underneath the logo navy text reads, "A business of Australia Post".</p>

// </div>
//         </div>
//       </div>
//     </article>`;
