const header = document.querySelector(".header");
const blocks = [...document.querySelectorAll(".block-services")];
const banner = document.querySelector(".banner");
const productsBlocks = [...document.querySelectorAll(".product-block")];

const setVisibilityBlocks = (list, classname) => {
  if (
    window.scrollY + window.innerHeight > list[0]?.parentNode.offsetTop &&
    window.scrollY + window.innerHeight <
      list[0]?.parentNode.offsetTop + list[0]?.parentNode.offsetHeight
  ) {
    list.forEach((block) => {
      window.scrollY + window.innerHeight >
      block.offsetTop + block.offsetHeight / 2
        ? block.classList.add(classname)
        : block.classList.remove(classname);
    });
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 30 && window.screenY < 200) {
    header?.classList.add("header--fold");
    banner?.classList.add("banner--scrolled");
  } else if (window.scrollY < 30) {
    header?.classList.remove("header--fold");
    banner?.classList.remove("banner--scrolled");
  }

  setVisibilityBlocks(blocks, "block-services--visible");
  setVisibilityBlocks(productsBlocks, "product-block--visible");
});
