const btn = document.getElementById("okBtn");
const sound = document.getElementById("sound");

btn.addEventListener("click", () => {
  // restart sound cleanly
  sound.pause();
  sound.currentTime = 0;
  sound.play();
});
