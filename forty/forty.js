const open = document.querySelector(".hamburger");
const close = document.querySelector(".x");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-li");

open.addEventListener("click", () => {
  nav.classList.add("visible");
  console.log("radi");
  console.log(open, nav);
  //   document.body.classList.add("no-scroll");
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
  console.log("jnk");
  //   document.body.classList.remove("no-scroll");
});

console.log("Ucitana skripta");
console.log(navItems);

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});
