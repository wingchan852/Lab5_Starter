// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const dropdownMenu = document.getElementById('horn-select');
  const hornAudio = document.querySelector('audio');
  
  dropdownMenu.addEventListener('change', (event) => {
    const hornImage = document.querySelector('img');
    hornImage.src = 'assets/images/' + event.target.value + '.svg';
    hornAudio.src = 'assets/audio/' + event.target.value + '.mp3';
  });

  const volumeIcon = document.querySelector('div img');
  const volumeLevel = document.getElementById('volume-controls');
  // change volume icon & volume level based on the slider
  volumeLevel.addEventListener('change', (event) => {
    hornAudio.volume = event.target.value / 100;
    if (event.target.value == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (event.target.value < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (event.target.value < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // play audio when button is clicked
  const jsConfetti = new JSConfetti();
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', (event) => {
    if (dropdownMenu.value == 'party-horn') {

      jsConfetti.addConfetti();
    }
    hornAudio.play();
  });
}