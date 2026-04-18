const btn = document.getElementById("okBtn");
const message = document.getElementById("message");

const sounds = [
  document.getElementById("sound1"),
  document.getElementById("sound2")
];

const texts = [
  "I love you.",
  "사랑해요"
];

let index = 0;

btn.addEventListener("click", () => {
  // ⛔ HARD STOP all sounds
  sounds.forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });

  const currentSound = sounds[index];

  // small delay to ensure stop worked
  setTimeout(() => {
    currentSound.play().catch(() => {});
  }, 50);

  // change text
  message.textContent = texts[index];

  // next
  index = (index + 1) % sounds.length;
});
