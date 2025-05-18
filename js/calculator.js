const result = document.querySelector("#result");
const storeBtn = document.querySelector("#storeBtn");
const clearBtn = document.querySelector("#clearBtn");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculateBtn");
const recordLists = document.querySelector("#recordList");

const area = (w, h) => w * h;

calculateBtn.onclick = () => {
  const w = width.valueAsNumber;
  const h = height.valueAsNumber;
  const a = area(w, h);

  result.innerText = `${w} ft x ${h} ft = ${a} sqft`;

  width.value = "";
  height.value = "";
};

clearBtn.onclick = () => {
  result.innerText = "";
};

storeBtn.onclick = () => {
  recordLists.innerHTML += `<li class="list-decimal">${result.innerText}</li>`;
};
