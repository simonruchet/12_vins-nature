var body = document.querySelector("body");
var scroll = 0;

body.addEventListener(
  "mousewheel",
  (event) => {
    event.preventDefault();
    scroll += event.deltaY;
    if (scroll < 0) {
      scroll = 0;
    }
    window.scrollTo(scroll, 0);
  },
  { passive: false }
);

function setOffset() {
  var wrapper = document.querySelector(".infos-fixe-wrapper");
  var inner = document.querySelector(".infos-fixe");
  var offsetRight =
    window.innerWidth - wrapper.getBoundingClientRect().x + window.scrollX;

  inner.style.left = `calc(100% - ${offsetRight}px)`;
}

setOffset();

window.addEventListener("resize", () => {
  setOffset();
});
