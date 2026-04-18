const btn = document.getElementById("okBtn");
const sound = document.getElementById("sound");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    sound.play();
    btn.textContent = "STOP";
    isPlaying = true;
  } else {
    sound.pause();
    sound.currentTime = 0;
    btn.textContent = "OK";
    isPlaying = false;
  }
});
