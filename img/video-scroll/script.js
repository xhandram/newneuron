const video = document.getElementById("v0");
const button = document.querySelector(".button");

video.defaultPlaybackRate = 0.5;
video.load();

button.addEventListener("click", () => {
  video.playbackRate += 2;
  console.log("clicked");
});
