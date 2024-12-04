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
