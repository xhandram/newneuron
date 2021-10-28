//FOR THE ACORDEON
const centros = document.querySelectorAll(".contact__centro");

centros.forEach((centro) => {
  centro.addEventListener("click", () => {
    centro.classList.toggle("active");
  });
});

//VIDEO BACKGROUND
const video = document.getElementById("v0");

video.defaultPlaybackRate = 1;
video.load();

window.addEventListener("scroll", () => {
  video.playbackRate = 2;
  setTimeout(() => {
    video.playbackRate = 1;
  }, 1500);
});

window.addEventListener("mousewheel", () => {
  video.playbackRate = 2;
  setTimeout(() => {
    video.playbackRate = 1;
  }, 1500);
});
