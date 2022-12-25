import { generateAtmosphere, generateNoteBook } from "./modules/onLoad";
import { generateInputForNewItems } from "./modules/todomodule-inputnew";
import {
  gatherIntelFromForm,
  generateNewListObject,
  addItemToList,
  publishToList,
} from "./modules/todomodule-itemtolist";
window.onload = (e) => {
  generateAtmosphere();
  generateNoteBook();
};

const projectList = [];

// console.log(projectList);
// console.log(projectList.length);

function prepStorage() {
  //revisit after population
}
function fileStorage(sessionArray) {
  //recieve preassemlbed array(?) of to dos
  for (i = 0; i < sessionArray.length; i++) {}

  //package that into an object for local storage
  const session = {};

  //put into local storage
  window.localStorage.setItem("user", JSON.stringify(person));
}
function retrieveStorage() {
  //not sure yet
}

let checkListArray = [];

let dragItem = null;
function makeDraggable() {
  // let dragItem = null;
  let cards = document.querySelectorAll(".listItemCard");
  cards.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });
  if (projectList.length > 1) {
    let column = document.getElementById("noteBookList");
    new Sortable(column, {
      group: "shared",
      animation: 150,
      ghostClass: "blue-background-class",
    });
  }
}

function dragStart() {
  console.log("drag started");
  dragItem = this;
}
function dragEnd() {
  console.log("drag ended");
  this.className = "item";
  dragItem = null;
}

function clearInputValues() {
  let inputItemCard1 = document.getElementById("input1");
  inputItemCard1.value = "";
  //   let inputItemCard2 = document.getElementById("input2");
  //   inputItemCard2.value = "low";
  let inputItemCard3 = document.getElementById("input3");
  inputItemCard3.value = "";
  let inputItemCard4 = document.getElementById("input4");
  inputItemCard4.checked = false;
  let inputItemCard5 = document.getElementById("input5");
  inputItemCard5.checked = false;
  let inputItemCard6 = document
    .querySelectorAll(".checkListItem")
    .forEach((input) => {
      input.value = "";
    });
}

function updateIndexing() {
  if (projectList.length > 1) {
    let inspector = document.querySelectorAll("");
  }
}

function test() {
  generateNewListObject(
    "Task Number 1",
    "high",
    "November 1st",
    "Please do this already",
    "yes",
    "yes"
  );
}
function test2() {
  generateNewListObject(
    "Task Number 2",
    "high",
    "November 2nd",
    "Come on! Please do this already",
    "yes",
    "yes"
  );
}

document.addEventListener("click", function (e) {
  if (e.target.classList[0] === "listItemTitle") {
    let target = e.target;
    let targetDewey = e.target.dataset.dewey;
    let targetDiv = document.getElementById(`liccNum${targetDewey}`);
    targetDiv.classList.toggle("listItemContent--active");
    if (targetDiv.classList.contains("listItemContent--active")) {
      targetDiv.style.maxHeight = targetDiv.scrollHeight + "px";
    } else {
      targetDiv.style.maxHeight = "0px";
    }
  }
  if (e.target.id === "newButton") {
    let coordinator = document.querySelector("#inputFormCard");
    if (coordinator === null) {
      generateInputForNewItems();
    } else {
      if (!coordinator.classList.contains("pushedOffRight")) {
        clearInputValues();
      }
      coordinator.classList.toggle("pushedOffRight");
    }
  }

  if (e.target.id === "newToDoSubmitButton") {
    let coordinator = document.querySelector("#inputFormCard");
    let checkForTask = document.getElementById("input1");
    if (checkForTask.value.length > 0) {
      gatherIntelFromForm();
    }
    if (!coordinator.classList.contains("pushedOffRight")) {
      coordinator.classList.add("pushedOffRight");
    }
  }

  if (e.target.classList.contains("updateItemButton")) {
    console.log("call to update item");
    updateItem(e);
  }
});

document.addEventListener("input", (e) => {
  if (e.target.id === "input1") {
    console.log("hit input 1");
    let nameInput = document.getElementById("input1");
    nameInput.setCustomValidity("hi?");
    nameInput.checkValidity();
  }
});

document.addEventListener("invalid", (e) => {
  if (e.target.id === "input1") {
    console.log("holy hit");
    let nameInput = document.getElementById("input1");
    if (nameInput.value === "") {
      nameInput.setCustomValidity("Enter your username!");
    } else {
      nameInput.setCustomValidity(
        "Usernames can only contain upper and lowercase letters. Try again!"
      );
    }
  }
});

window.makeDraggable = makeDraggable;
window.dragStart = dragStart;
window.dragEnd = dragEnd;

const updateItem = (e) => {
  console.log(e.target.parentElement);
};

export { projectList };
