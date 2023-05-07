// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('select');
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    
    // add voices to dropdown
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
}

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const textInput = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  const face = document.querySelector("img");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute(
      "data-name"
    );

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
    if (textInput.value === "" || selectedOption !== null) {
      synth.speak(utterThis);
    }

    // change face
    utterThis.addEventListener("start", () => {
      face.src = "assets/images/smiling-open.png";
    });
    utterThis.addEventListener("end", () => {
      face.src = "assets/images/smiling.png";
    });
  });
}