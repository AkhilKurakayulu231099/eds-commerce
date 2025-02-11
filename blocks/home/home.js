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
  videoElement.setAttribute('autoplay', 'true'); // Start video automatically
  videoElement.setAttribute('muted', 'true');    // Optionally mute the video
  videoElement.setAttribute('loop', 'true');     // Optionally loop the video
  videoElement.style.position = 'absolute'; // Position the video at the top of the container
  videoElement.style.top = '0';
  videoElement.style.left = '0';

  // Create a source element and set its src to the video URL
  var sourceElement = document.createElement('source');
  sourceElement.setAttribute('src', videoUrl);
  sourceElement.setAttribute('type', 'video/mp4');

  // Append the source element to the video element
  videoElement.appendChild(sourceElement);

  // Replace the <p> tag with the video element
  videoParagraph.replaceWith(videoElement);

  // Wait for the video metadata to load before trying to play it
  videoElement.onloadeddata = function() {
    // Play the video once it is inserted into the DOM
    videoElement.play().catch(error => {
      console.error('Error playing the video:', error);
    });
  };

  // Get the list items (buttons) from the button class container
  var buttons = buttonDiv.querySelectorAll('li');

  // Ensure the buttons are side by side
  buttonDiv.style.position = 'relative'; // Enable absolute positioning inside buttonDiv
  buttonDiv.style.zIndex = '10'; // Ensure buttons are on top of the video

  // Append the buttons (side by side) to the videoDiv
  videoDiv.appendChild(buttonDiv);
}
