window.onload = (e) => {
    console.log("main JS script firing");
}

let projectList=[];


function generateAtmosphere(){
    let bodyDiv = document.getElementById("bodyDiv")
    let atmosphere= document.createElement('div')
        atmosphere.classList.add('container');
        atmosphere.setAttribute('id', 'atmosphere');
        bodyDiv.appendChild(atmosphere);
}


function generateNoteBook(){
   console.log("notes fired")
   let noteBook = document.createElement('div');
   noteBook.classList.add('noteBook');
   atmosphere.appendChild(noteBook); 
   let noteBookHeader = document.createElement('div');
   noteBookHeader.classList.add('inBook');
   noteBookHeader.classList.add('noteBookHeader');
   noteBookHeader.textContent="To Do List To Done List";
   noteBook.appendChild(noteBookHeader);
   let noteBookList = document.createElement('div');
   noteBookList.classList.add('inBook');
   noteBookList.classList.add('noteBookList');
}

function generateNewListItem(title, dueDate, priority, description, hasNotes, hasChecklist){
    console.log("new item");
    console.table(title, dueDate, priority, description, hasNotes, hasChecklist);
    let newItemObject ={Title: title,
                        Date: dueDate,
                        Priority: priority,
                        Description: description,
                        Notes: "",
                        Checklist: "",
                        }
    console.log(newItemObject);
                        addItemToList(newItemObject);
}

function addItemToList(newToDo){
projectList.push(newToDo)
}




function test(){
    generateNoteBook();
    generateNewListItem("Task Number 1", "November 1st", "high", "Please do this already", "yes", "yes");
    

}

generateAtmosphere();