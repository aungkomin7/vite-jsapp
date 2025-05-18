const textInput = document.querySelector("#textInput");
const plusBtn = document.querySelector("#plusBtn");
const listGroup = document.querySelector("#listGroup");
const taskCount = document.querySelector("#taskCount");
const doneTaskCount = document.querySelector("#doneTaskCount");

const addList = () => {
  listGroup.append(createNewList(textInput.value));
  textInput.value = null;
  listCount();
};

plusBtn.addEventListener("click", addList);

const createNewList = (taskmessage) => {
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
  <div class="flex justify-between items-center border p-4 mb-2">
              <div class="flex items-center gap-2">
                <input type="checkbox" class="checkInput"/>
                <p class="font-mono task-message">${taskmessage}</p>
              </div>
              <div class="">
                <button class="border p-2 edit-btn cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button class="border p-2 del-btn cursor-pointer" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
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

  const checkInput = list.querySelector(".checkInput");
  const taskMessage = list.querySelector(".task-message");

  checkInput.addEventListener("change", () => {
    doneListCount();
    taskMessage.classList.toggle("line-through");
    list.classList.toggle("opacity-20");
    list.classList.toggle("scale-95");
    list.classList.toggle("duration-200");

    if (checkInput.checked) {
      editBtn.setAttribute("disabled",true);
    } else {
      editBtn.removeAttribute("disabled");
    }
  });

  const delBtn = list.querySelector(".del-btn");
  delBtn.addEventListener("click", () => {
    if (window.confirm("Confirm delete")) {
      list.remove();
    }
  });

  const editBtn = list.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    editBtn.setAttribute("disabled",true);
    checkInput.setAttribute("disabled",true);

   

    const newInput = document.createElement("input");
    newInput.value = taskMessage.innerText;
    newInput.classList.add(
      "border",
      "w-[180px]",
      "px-3",
      "py-1.5",
      "font-mono",
      "focus-visible:outline-none"
    );
    taskMessage.after(newInput);
    taskMessage.classList.add("hidden");
    newInput.focus();

    newInput.addEventListener("blur",() => {
      editBtn.removeAttribute("disabled");
      checkInput.removeAttribute("disabled");
      
      taskMessage.innerText = newInput.value;
      taskMessage.classList.remove("hidden");
      newInput.remove();

    })
  });

  return list;
};

const listCount = () => {
  const x = document.querySelectorAll(".list");
  taskCount.innerText = x.length;
};

const doneListCount = () => {
  const x = document.querySelectorAll(".list input:checked");
  doneTaskCount.innerText = x.length;
};
