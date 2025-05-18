const heading = document.querySelector("#heading");
const nationSelect = document.querySelector("#nationSelect");
const addForm = document.querySelector("#addForm");
const img = document.querySelector("#img");
const link = document.querySelector("#link");
const rmBtn = document.querySelector("#rmbtn");

// heading.addEventListener("mouseover", () => {
//   console.log("event mouseover");
// });

// heading.addEventListener("mouseout", () => {
//   console.log("event mouseout");
// });

// heading.addEventListener("mousemove", (event) => {
//   console.clear();
//   console.log("event mousemove");
//   console.log(event);
// });

// textInput.addEventListener("keyup", () => {
//   console.log("event keyup");
// });

// textInput.addEventListener("keydown", () => {
//   console.log("event keydown");
// });

// textInput.addEventListener("blur", () => {
//   console.log("event blur");
// });

// textInput.addEventListener("focus", () => {
//   console.log("event focus");
// });

// nationSelect.addEventListener("change", () => {
//   console.log("event change", nationSelect.value);
// });

// addForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("u submit");
// });
// btn.addEventListener("click", () => {
//   console.log("u click");
// });

// img.addEventListener("load", () => {
//   console.log("img loading");
// });

// window.addEventListener("scroll", () => {
//   console.log("window scroll");
// });

// window.addEventListener("load", () => {
//   console.log("window loading");
// });

// let x = 0;
// for (let i = 1; i < 999; i++) {
//   x += i;
// }

// console.log(x);
// console.log("aung");
// console.log("ko");
// console.log("min");

// document.addEventListener("click", (event) => {
//   console.log(event);
// });

// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   alert("hello");
//   console.log(event);
// });

// console.log(heading);

// const showClick = () => {
//   console.log("u click");
// };

// heading.addEventListener("click", showClick);

// rmBtn.addEventListener("click", () => {
//   heading.removeEventListener("click", showClick);
// });

// document.addEventListener("click",(event) => {
//     console.log(event.target);
// })

// const aa = document.querySelector("#aa");
// const bb = document.querySelector("#bb");
// const cc = document.querySelector("#cc");
// const dd = document.querySelector("#dd");

aa.addEventListener("click", () => {
  console.log("u click aa");
},false);
bb.addEventListener("click", () => {
  console.log("u click bb");
},false);
cc.addEventListener("click", () => {
  console.log("u click cc");
},false);
dd.addEventListener("click", (event) => {
    // event.stopPropagation();
  console.log("u click dd");
},false);

const list = document.querySelectorAll(".list");

// list.forEach((list) => {
//   list.addEventListener("click", () => {
//     console.log(list.innerText);
//   });
// });

const title = document.querySelector("#title");
const events = ["click", "mouseover", "mouseout"];

// events.forEach((event) => {
//   title.addEventListener(event, () => {
//     console.log(event);
//   });
// });

const listGroup = document.querySelector("#listGroup");

listGroup.addEventListener("click",(event) => {
    console.log(event.target);
})
