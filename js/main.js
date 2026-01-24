console.log("Leo Tour & Events loaded successfully");

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "#1f2937";
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
  }
});
