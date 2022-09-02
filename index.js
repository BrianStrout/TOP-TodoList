window.onload = (e) => {
    generateAtmosphere();
    generateNoteBook();

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
    let atmosphere = document.getElementById('atmosphere');
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
    // console.log("new item");
    // console.table(title, dueDate, priority, description, hasNotes, hasChecklist);
    let newItemObject ={title: itemTitle,
                        priority: itemPriority,
                        date: itemDueDate,
                        description: itemDescription,
                        notes: itemHasNotes,
                        checkList: itemHasChecklist,
                        listIndex: undefined,
                        inputIndex: projectList.length,
                        creationDate: undefined,
                        }

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
        listItemCard.setAttribute('draggable', true);
        noteBookList.appendChild(listItemCard);
    let listItemTitle= document.createElement('div');
        listItemTitle.classList.add('listItemTitle');
        listItemTitle.classList.add('listItemItem');
        listItemTitle.innerHTML = "<h4 style='display: inline; border-bottom: 1px solid red;'> Task: </h4>" + newItem.title;
        listItemTitle.dataset.dewey=newItem.inputIndex;
        listItemCard.appendChild(listItemTitle);
                    if (newItem.priority === "high"){ console.log("HIGH REIGSTERED!")}
    let listItemCardContent= document.createElement('div');
        listItemCardContent.classList.add('listItemContent');
        listItemCardContent.classList.add('listItemContent--active');
        listItemCardContent.classList.add('listItemItem');
        listItemCard.appendChild(listItemCardContent);
    let listItemDueDate = document.createElement('div');
        listItemDueDate.classList.add('listItemDate');
        listItemDueDate.classList.add('listItemItem');
        listItemDueDate.innerHTML = "<h6 style='display: inline'> Due: </h4>" + newItem.date;
        listItemCardContent.appendChild(listItemDueDate);
    let listItemDescription = document.createElement('div');
        listItemDescription.classList.add('listItemDescription');
        listItemDescription.classList.add('listItemItem');
        listItemDescription.innerHTML = "<h6 style='display: inline'> Description: </h4>" + newItem.description;
        listItemCardContent.appendChild(listItemDescription);
    if (newItem.notes==="yes"){
    let listItemNotes = document.createElement('div');
        listItemNotes.classList.add('listItemNotes');
        listItemNotes.classList.add('listItemItem');
        listItemNotes.innerHTML = "<h6 style='display: inline'> Notes: </h4><input placeholder='...'value=''>";
        listItemCardContent.appendChild(listItemNotes);
    }
    if (newItem.checkList==="yes"){
    let listItemCheckList = document.createElement('div');
        listItemCheckList.classList.add('listItemDescription');
        listItemCheckList.classList.add('listItemItem');
        listItemCheckList.innerHTML = "<ol><li></li></ol>";
        listItemCardContent.appendChild(listItemCheckList);
        }
    let listIndex = projectList.length;
    let metaDiv = document.createElement('div');
        metaDiv.classList.add('listItemItem');
        metaDiv.classList.add('listMetaDiv');
        metaDiv.textContent=`index: ${listIndex}`;
        listItemCardContent.appendChild(metaDiv);
        listItemCardContent.setAttribute('id', `liccNum${newItem.inputIndex}`);

     
       

}

function makeDraggable(){


let dragItem = null;
// const cards = document.querySelector('.listItemCard')

let cards = document.querySelectorAll('.listItemCard');
        cards.forEach(item => {
            item.addEventListener('dragstart', dragStart)
            item.addEventListener('dragend', dragEnd)
        });

        if(projectList.length>1){
            let column = document.getElementById('noteBookList');
            new Sortable(column, {
                group: "shared",
                animation: 150,
                ghostClass: "blue-background-class"
            });
            }

}




function dragStart() {
    console.log('drag started');
    dragItem = this;
    // setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
    console.log('drag ended');
    this.className = 'item'
    dragItem = null;
}
function dragOver(e) {
    e.preventDefault()
    console.log('drag over');
}
function dragEnter() {
    console.log('drag entered');
}
function dragLeave() {
    console.log('drag left');
}
function dragDrop() {
    console.log('drag dropped');
    // this.append(dragItem);
}






function updateIndexing(){

}


function test(){
    generateNewListItem("Task Number 1", "high", "November 1st", "Please do this already", "yes", "yes");
}
function test2(){
    generateNewListItem("Task Number 2", "high", "November 2nd", "Come on! Please do this already", "yes", "yes");
}


document.addEventListener('click',function(e){
    if(e.target.classList[0]=== 'listItemTitle'){
        let target = e.target;
        let targetDewey=e.target.dataset.dewey;
        console.log(targetDewey);
        let targetDiv = document.getElementById(`liccNum${targetDewey}`);
        targetDiv.classList.toggle('listItemContent--active');
        console.log(targetDiv.classList);
            if (targetDiv.classList.contains('listItemContent--active')){

                targetDiv.style.maxHeight = targetDiv.scrollHeight + 'px';
            }else{
                targetDiv.style.maxHeight = '0px';
            }


        // let targetParent= target.parentElement;
        // console.log(targetParent)

    //     let targetSibling = targetParent.getElementsByClassName('listItemContent');
    //    console.log(targetSibling[0]);
    //     let tt = targetSibling[0]
        // tt.setAttribute('id', 'tt');
        // let ttt = document.getElementById('tt');
        // ttt.style.backgroundColor = 'pink';
        // console.log(ttt);
        // target.classList.toggle('listItemTitle--active');
        //     if (target.classList.contains('listItemTitle--active')){
        //         return;
        //     }

    }
    });
     
generateAtmosphere();