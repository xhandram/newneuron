//FOR THE ACORDEON
const centros = document.querySelectorAll(".contact__centro");

centros.forEach((centro) => {
  centro.addEventListener("click", () => {
    centro.classList.toggle("active");
  });
});
