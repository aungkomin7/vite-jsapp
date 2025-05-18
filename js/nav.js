const controlNav = document.querySelector("#controlNav");
const controlNavBtn = document.querySelector("#controlNavBtn");

controlNavBtn.onclick = () => {
  controlNav.classList.toggle("translate-x-full");
};

// console.dir(controlNav.className);

const skillCount = document.querySelector("#skillCount");
const lists = document.querySelectorAll(".list");

// console.dir(lists);

lists.forEach((list) => {
  //   console.log(list);
  list.onclick = () => {
    list.classList.toggle("bg-slate-200");
    const count = document.querySelectorAll(".list.bg-slate-200");
    console.log(count.length);
    skillCount.innerText = count.length;
  };
});

// console.log(lists[0]);
// lists.onclick = () => {
//     lists[0].classList.toggle("bg-red-500")
// }

const img = document.querySelectorAll(".img");

console.log(img);

img.forEach((el) => {
    // el.src = "./assets/images/pattern.png"
    // el.setAttribute("src","./assets/images/pattern.png")
    // el.removeAttribute("src");
})
