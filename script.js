const btn = document.getElementById("okBtn");
const sound = document.getElementById("sound");

btn.addEventListener("click", () => {
  if (sound.paused) {
    sound.play().catch(() => {});
    btn.textContent = "STOP";
  } else {
    sound.pause();
    sound.currentTime = 0;
    btn.textContent = "OK";
  }
});
