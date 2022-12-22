function generateAtmosphere() {
  let bodyDiv = document.getElementById("bodyDiv");
  let atmosphere = document.createElement("div");
  atmosphere.classList.add("container");
  atmosphere.setAttribute("id", "atmosphere");
  bodyDiv.appendChild(atmosphere);
}

function generateNoteBook() {
  let atmosphere = document.getElementById("atmosphere");
  let noteBook = document.createElement("div");
  noteBook.classList.add("noteBook");
  atmosphere.appendChild(noteBook);

  //
  let noteBookHeader = document.createElement("div");
  noteBookHeader.classList.add("inBook");
  noteBookHeader.classList.add("noteBookHeader");
  noteBook.appendChild(noteBookHeader);

  let mainHeader = document.createElement("H1");
  mainHeader.setAttribute("id", "mainHeader");
  mainHeader.textContent = "To Do List To Done List";
  noteBookHeader.appendChild(mainHeader);
  //   let noteBookButtonDiv = document.createElement("div");
  //   noteBookButtonDiv.classList.add("inBook");
  //   noteBookButtonDiv.classList.add("noteBookButtonDiv");
  //   noteBook.appendChild(noteBookButtonDiv);
  let noteBookButton = document.createElement("button");
  noteBookButton.setAttribute("id", "newButton");
  noteBookButton.innerText = "New To Do?";
  noteBookHeader.appendChild(noteBookButton);
  let noteBookList = document.createElement("div");
  noteBookList.classList.add("inBook");
  noteBookList.classList.add("noteBookList");
  noteBookList.setAttribute("id", "noteBookList");
  noteBook.appendChild(noteBookList);
}

export { generateAtmosphere, generateNoteBook };
