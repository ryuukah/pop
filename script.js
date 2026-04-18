const btn = document.getElementById("okBtn");
const message = document.getElementById("message");

const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");

const options = [
  { sound: sound1, text: "I love you." },
  { sound: sound2, text: "사랑해요" }
];

let index = 0;

btn.addEventListener("click", () => {
  // ⛔ stop ALL sounds first
  options.forEach(opt => {
    opt.sound.pause();
    opt.sound.currentTime = 0;
  });

  const current = options[index];

  // ▶️ play current sound
  current.sound.play();

  // 💬 change text
  message.textContent = current.text;

  // 🔁 next index
  index = (index + 1) % options.length;
});
