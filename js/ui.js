const root = document.querySelector("#root");
const heading = document.createElement("h1");

root.classList.add("p-5");

heading.innerText = "hello world title";

// heading.className = "text-3xl font-bold underline"
heading.classList.add(
  "text-3xl",
  "font-bold",
  "underline",
  "text-red-500",
  "font-serif",
  "mb-5"
);

heading.title = "this is heading";
heading.id = "heading";
heading.setAttribute("akm", "aung ko min");


const poeImg = document.createElement("img");

poeImg.src = "./assets/images/poe-mamhe-thar-6.jpg";
poeImg.classList.add("h-32");
// console.log(poeImg);

const poeImg2 = new Image();

poeImg2.src = "./assets/images/poe-mamhe-thar-7.jpg";
poeImg2.classList.add("h-32");

const imgDiv = document.createElement("div");

imgDiv.append(poeImg);
imgDiv.append(poeImg2);


imgDiv.classList.add("flex", "gap-5", "mb-5");

const para = document.createElement("p");

para.innerText =
"Lorem ipsum dolor sit amt consectetur adipisicing elit. Ratione praesentium laborum molestias doloremque, dolores eligendi sed impedit consequuntur, quasi sequi possimus officiis atque amet aspernatur fuga voluptatem eum veniam odit?";
para.classList.add("mb-5")
const listGroup = document.createElement("ul");
const createList = (text) => {
    const li = document.createElement("li");
    li.classList.add("border","mb-2","p-2");
    //   console.dir(li);
    li.innerText = text;
    return li;
};

listGroup.prepend(createList("apple"));
listGroup.prepend(createList("mango"));
listGroup.prepend(createList("orange"));
listGroup.prepend(createList("grape"));

// listGroup.classList.add();

root.append(heading);
heading.before(imgDiv);
heading.after(para);
para.after(listGroup);


// heading.remove();
// listGroup.removeChild(listGroup.children[2])

