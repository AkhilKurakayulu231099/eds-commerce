export default async function decorate(block) {
  var videoDiv = document.querySelector('.home > div > div');
  videoDiv.classList.add('videoclass');

  var buttonDiv = document.querySelector('.home > div > div:nth-child(2)');
  buttonDiv.classList.add('buttonclass');

  var videoParagraph = videoDiv.querySelector('p');
  var videoUrl = videoParagraph.textContent.trim();

  var videoElement = document.createElement('video');
  videoElement.setAttribute('width', '100%');
  videoElement.setAttribute('autoplay', 'true');
  videoElement.setAttribute('muted', 'true');
  videoElement.setAttribute('loop', 'true');
  videoElement.style.position = 'absolute';
  videoElement.style.top = '0';
  videoElement.style.left = '0';
  videoElement.style.zIndex = '1';

  var sourceElement = document.createElement('source');
  sourceElement.setAttribute('src', videoUrl);
  sourceElement.setAttribute('type', 'video/mp4');

  videoElement.appendChild(sourceElement);
  videoParagraph.replaceWith(videoElement);

  document.body.addEventListener('click', function() {
    videoElement.play().catch(error => {
      console.error('Error playing the video:', error);
    });
  });

  var buttons = buttonDiv.querySelectorAll('li');

  /*buttonDiv.style.position = 'relative';
  buttonDiv.style.zIndex = '10';*/

  videoDiv.appendChild(buttonDiv);
}
