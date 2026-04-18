const btn = document.getElementById("okBtn");
const message = document.getElementById("message");

const options = [
  {
    sound: document.getElementById("sound1"),
    text: "I love you."
  },
  {
    sound: document.getElementById("sound2"),
    text: "사랑해요"
  }
];

let index = 0;

btn.addEventListener("click", () => {
  const current = options[index];

  // play sound
  current.sound.currentTime = 0;
  current.sound.play();

  // change text
  message.textContent = current.text;

  // move to next (loop back to 0)
  index = (index + 1) % options.length;
});
