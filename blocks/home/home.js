export default async function decorate(block) {
  // Adding classes to the elements as before
  var videoDiv = document.querySelector('.home > div > div');
  videoDiv.classList.add('videoclass');

  var buttonDiv = document.querySelector('.home > div > div:nth-child(2)');
  buttonDiv.classList.add('buttonclass');

  // Select the <p> tag inside .videoclass
  var videoParagraph = videoDiv.querySelector('p');

  // Get the video URL from the <p> tag
  var videoUrl = videoParagraph.textContent.trim();

  // Create a video element
  var videoElement = document.createElement('video');
  videoElement.setAttribute('width', '100%');
  videoElement.setAttribute('controls', 'true'); // Add controls (play, pause, etc.)

  // Create a source element and set its src to the video URL
  var sourceElement = document.createElement('source');
  sourceElement.setAttribute('src', videoUrl);
  sourceElement.setAttribute('type', 'video/mp4');

  // Append the source element to the video element
  videoElement.appendChild(sourceElement);

  // Replace the <p> tag with the video element
  videoParagraph.replaceWith(videoElement);

  // Play the video once it is inserted into the DOM
  videoElement.play();
}
