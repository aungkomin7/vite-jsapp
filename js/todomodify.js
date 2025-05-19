const taskInput = document.querySelector("#taskInput");
const taskAddBtn = document.querySelector("#taskAddBtn");
const listGroup = document.querySelector("#listGroup");
const taskTotal = document.querySelector("#taskTotal");
const doneTaskTotal = document.querySelector("#doneTaskTotal");
// let count = 1;
//action or business logic

const updateTaskTotal = () => {
  const list = document.querySelectorAll(".list");
  taskTotal.innerText = list.length;
};

const updateDoneTaskTotal = () => {
  const list = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = list.length;
};

const createNewList = (currenttext) => {
  const list = document.createElement("div");
  list.id = "list" + Date.now();
  list.classList.add("list");

  list.innerHTML = `
    <div class="flex justify-between animate__animated animate__zoomIn items-center border p-3 mb-3">
    <div class="flex items-center gap-3">
    <input type="checkbox" class="list-done-check accent-stone-950" />
    <p class="mr-16 font-mono text-wrap list-task">${currenttext}</p>
    </div>
    <div class="control">
    <button class="border border-stone-950 p-2 list-edit-btn disabled:opacity-20 active:scale-90 duration-200">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-4 pointer-events-none"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    />
    </svg>
    </button>
    <button class="border border-stone-950 p-2 list-del-btn active:scale-90 duration-200">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-4 pointer-events-none "
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
    </svg>
    </button>
    </div>
    </div>
    `;

  // const listDoneCheck = list.querySelector(".list-done-check");
  // const listTask = list.querySelector(".list-task");

  // listDoneCheck.addEventListener("change", () => {
  //   updateDoneTaskTotal();
  //   listTask.classList.toggle("line-through");
  //   list.classList.toggle("opacity-50");
  //   list.classList.toggle("scale-90");
  //   list.classList.add("duration-200");
  //   if (listDoneCheck.checked) {
  //     listEditBtn.setAttribute("disabled", true);
  //   } else {
  //     listEditBtn.removeAttribute("disabled");
  //   }
  // });

  // const listDelBtn = list.querySelector(".list-del-btn");
  // listDelBtn.addEventListener("click", () => {
  //   if (window.confirm("Are you sure to delete")) {
  //     list.remove();
  //     updateTaskTotal();
  //     updateDoneTaskTotal();
  //   }
  // });

  // const listEditBtn = list.querySelector(".list-edit-btn");
  // listEditBtn.addEventListener("click", () => {
  //   listEditBtn.setAttribute("disabled", true);
  //   listDoneCheck.setAttribute("disabled", true);
  //   const newTaskInput = document.createElement("input");
  //   newTaskInput.className =
  //     "border border-stone-950 px-2 w-[180px] focus-visible:outline-none";
  //   listTask.after(newTaskInput);
  //   listTask.classList.add("hidden");
  //   newTaskInput.value = currenttext;
  //   newTaskInput.focus();

  //   newTaskInput.addEventListener("blur", () => {
  //     listEditBtn.removeAttribute("disabled");
  //     listDoneCheck.removeAttribute("disabled");
  //     console.log("hello");
  //     listTask.innerText = newTaskInput.value;
  //     listTask.classList.remove("hidden");
  //     newTaskInput.remove();
  //   });
  // });
  return list;
};

const deleteList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);
  if (window.confirm("Are you sure to delete")) {
    currentlist.classList.add("animate__animated", "animate__zoomOut");
    currentlist.addEventListener("animationend", () => {
      currentlist.remove();
      updateTaskTotal();
      updateDoneTaskTotal();
    });
  }
};

const editList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);

  const listTask = currentlist.querySelector(".list-task");
  const listDoneCheck = currentlist.querySelector(".list-done-check");
  const listEditBtn = currentlist.querySelector(".list-edit-btn");
  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);
  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    "border border-stone-950 px-2 w-[180px] focus-visible:outline-none";
  listTask.after(newTaskInput);
  listTask.classList.add("hidden");
  newTaskInput.value = listTask.innerText;
  newTaskInput.focus();

  const newTaskInputHandler = () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  };

  newTaskInput.addEventListener("blur", newTaskInputHandler);
};

const doneList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);

  const listTask = currentlist.querySelector(".list-task");
  const listDoneCheck = currentlist.querySelector(".list-done-check");
  const listEditBtn = currentlist.querySelector(".list-edit-btn");
  updateDoneTaskTotal();
  listTask.classList.toggle("line-through");
  currentlist.classList.toggle("opacity-50");
  currentlist.classList.toggle("scale-90");
  currentlist.classList.add("duration-200");
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
};

//handler
const listGroupHandler = (event) => {
  const list = event.target.closest(".list");

  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  } else if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  } else if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

const addList = (text) => {
  listGroup.append(createNewList(text));
  taskInput.value = null;

  updateTaskTotal();
};

const taskAddBtnHandler = () => {
  if (taskInput.value.trim()) {
    addList(taskInput.value);
  } else {
    alert("fill something");
  }
};

const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    // addList(taskInput.value);
    if (taskInput.value.trim()) {
      addList(taskInput.value);
    } else {
      alert("fill something");
    }
  }
};

//listener
taskAddBtn.addEventListener("click", taskAddBtnHandler);
listGroup.addEventListener("click", listGroupHandler);
taskInput.addEventListener("keyup", taskInputHandler);
