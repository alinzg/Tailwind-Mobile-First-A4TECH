document.getElementById("menu-button").onclick = () => {
  document.getElementById("menu").classList.toggle("hidden");
};

document.getElementById("search-bar-icon").onclick = () => {
  document.getElementById("search-bar-icon");
  if (window.innerWidth < "1024") {
    document.getElementById("search-bar").classList.toggle("hidden");
    document.getElementById("search-bar").classList.toggle("flex");
    document.getElementById("search-bar").classList.toggle("absolute");
    document.getElementById("search-bar").classList.toggle("top-0");
    document.getElementById("search-bar").classList.toggle("top-[48px]");
    document.getElementById("search-bar").classList.toggle("left-[-90px]");
    document.getElementById("search-bar").classList.toggle("opacity-0");
    document.getElementById("search-bar").classList.toggle("opacity-100");
  }
};
document.getElementById("product-search-bar-icon").onclick = () => {
  document.getElementById("search-bar-icon");
  if (window.innerWidth < "640") {
    document.getElementById("product-search-bar").classList.toggle("hidden");
    document.getElementById("product-search-bar").classList.toggle("absolute");
    document.getElementById("product-search-bar").classList.toggle("top-0");
    document.getElementById("product-search-bar").classList.toggle("left-[64px]");
    document.getElementById("product-search-bar").classList.toggle("opacity-0");
    document.getElementById("product-search-bar").classList.toggle("opacity-100");
    document.getElementById("product-search-bar-icon").classList.toggle("translate");
  }
};

var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};
