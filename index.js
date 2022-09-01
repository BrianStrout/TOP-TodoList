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
   noteBookList.setAttribute('id', 'noteBookList');
   noteBook.appendChild(noteBookList);
}

function generateNewListItem(itemTitle, itemPriority, itemDueDate, itemDescription, itemHasNotes, itemHasChecklist){
    console.log("new item");
    // console.table(title, dueDate, priority, description, hasNotes, hasChecklist);
    let newItemObject ={title: itemTitle,
                        priority: itemPriority,
                        date: itemDueDate,
                        description: itemDescription,
                        notes: itemHasNotes,
                        checkList: itemHasChecklist,
                        listIndex: undefined,
                        creationDate: undefined,
                        }

    console.log(newItemObject);
    addItemToList(newItemObject);
    publishToList(newItemObject);
}

function addItemToList(newToDo){
    projectList.push(newToDo)
}

function publishToList(newItem){
    let noteBookList = document.getElementById('noteBookList');
    let listItemCard = document.createElement('div');
    listItemCard.classList.add('listItemCard');
    noteBookList.appendChild(listItemCard);

    let listItemTitle= document.createElement('div');
    listItemTitle.classList.add('listItemTitle');
    listItemTitle.classList.add('listItemItem');
    listItemTitle.innerHTML = "<h4 style='display: inline; border-bottom: 1px solid red;'> Task: </h4>" + newItem.title;
    listItemCard.appendChild(listItemTitle);
    if (newItem.priority === "high"){ console.log("HIGH REIGSTERED!")}

    let listItemDueDate = document.createElement('div');
    listItemDueDate.classList.add('listItemDate');
    listItemDueDate.classList.add('listItemItem');
    listItemDueDate.innerHTML = "<h6 style='display: inline'> Due: </h4>" + newItem.date;
    listItemCard.appendChild(listItemDueDate);

    let listItemDescription = document.createElement('div');
    listItemDescription.classList.add('listItemDescription');
    listItemDescription.classList.add('listItemItem');
    listItemDescription.innerHTML = "<h6 style='display: inline'> Description: </h4>" + newItem.description;
    listItemCard.appendChild(listItemDescription);

    if (newItem.notes==="yes"){
    let listItemNotes = document.createElement('div');
    listItemNotes.classList.add('listItemNotes');
    listItemNotes.classList.add('listItemItem');
    listItemNotes.innerHTML = "<h6 style='display: inline'> Notes: </h4><input placeholder='...'value=''>";
    listItemCard.appendChild(listItemNotes);
    }

    if (newItem.checkList==="yes"){
        let listItemCheckList = document.createElement('div');
        listItemCheckList.classList.add('listItemDescription');
        listItemCheckList.classList.add('listItemItem');
        listItemCheckList.innerHTML = "<ol><li></li></ol>";
        listItemCard.appendChild(listItemCheckList);
        }
    
    let listIndex = projectList.length;
    let metaDiv = document.createElement('div');
    metaDiv.classList.add('listItemItem');
    metaDiv.classList.add('listMetaDiv');
        metaDiv.textContent=`index: ${listIndex}`;
        listItemCard.appendChild(metaDiv);


    // for(let i=0; i<projectList.length; i++){

    // }
}

function updateIndexing(){

}


function test(){
    generateNoteBook();
    generateNewListItem("Task Number 1", "high", "November 1st", "Please do this already", "yes", "yes");
}

function test2(){
    generateNewListItem("Task Number 2", "high", "November 2nd", "Come on! Please do this already", "yes", "yes");
}

generateAtmosphere();