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
    let noteBookButtonDiv = document.createElement('div');
        noteBookButtonDiv.classList.add('inBook');
        noteBookButtonDiv.classList.add('noteBookButtonDiv');
        noteBook.appendChild(noteBookButtonDiv);   
    let noteBookButton = document.createElement('button');
        noteBookButton.setAttribute('id', 'newButton');
        noteBookButton.innerText="+";
        noteBookButtonDiv.appendChild(noteBookButton);
    let noteBookList = document.createElement('div');
        noteBookList.classList.add('inBook');
        noteBookList.classList.add('noteBookList');
        noteBookList.setAttribute('id', 'noteBookList');
        noteBook.appendChild(noteBookList);
}







function generateInputForNewItems(){
    let listCount=1;

    let inputItemCard = document.createElement('div');
        inputItemCard.classList.add('inputItemCard');
        inputItemCard.classList.add('listItemItem');
        inputItemCard.setAttribute('id', 'inputFormCard');
        noteBookList.appendChild(inputItemCard);

    let inputItemCardTitle= document.createElement('div');
        inputItemCardTitle.classList.add('inputItemCardTitle');
        inputItemCardTitle.classList.add('listItemItem');
        inputItemCardTitle.innerHTML = "<h4 style='display: inline;'> Task: </h4><input id='input1' type='text'></input>";
        inputItemCard.appendChild(inputItemCardTitle);


    let inputItemCardPriority = document.createElement('div'); 
    inputItemCardTitle.classList.add('inputItemCardPriority');
    inputItemCardTitle.classList.add('listItemItem');
    inputItemCard.appendChild(inputItemCardTitle);    



    let radioDiv = document.createElement('div');
        radioDiv.classList.add('inputPriorityDiv');
        radioDiv.classList.add('listItemItem');
        inputItemCard.appendChild(radioDiv); 

    let inputItemCardPriorityLeg = document.createElement ('label');
        inputItemCardPriorityLeg.innerHTML="Priority: ";
        // inputItemCardPriorityLeg.setAttribute('float', 'left');
        radioDiv.appendChild(inputItemCardPriorityLeg); 
                let inputItemCardPriorityBut1 = document.createElement ('input');
                    inputItemCardPriorityBut1.setAttribute('type', 'radio');
                    inputItemCardPriorityBut1.setAttribute('id', 'highPrio' )
                    inputItemCardPriorityBut1.setAttribute('value', 'high');
                    inputItemCardPriorityBut1.setAttribute('name', 'prioritylevel');
                    radioDiv.appendChild(inputItemCardPriorityBut1);    
                let inputItemCardPriorityBut1L = document.createElement ('label');
                    inputItemCardPriorityBut1L.setAttribute('value', 'high');
                    inputItemCardPriorityBut1L.innerHTML="<label for='highPrio'>High</label>"
                    radioDiv.appendChild(inputItemCardPriorityBut1L);
                let inputItemCardPriorityBut2 = document.createElement ('input');
                    inputItemCardPriorityBut2.setAttribute('type', 'radio');
                    inputItemCardPriorityBut2.setAttribute('id', 'medPrio' )
                    inputItemCardPriorityBut2.setAttribute('value', 'high');
                    inputItemCardPriorityBut2.setAttribute('name', 'prioritylevel');
                    radioDiv.appendChild(inputItemCardPriorityBut2);    
                let inputItemCardPriorityBut2L = document.createElement ('label');
                    inputItemCardPriorityBut2L.setAttribute('value', 'high');
                    inputItemCardPriorityBut2L.innerHTML="<label for='medPrio'>Med</label>"
                    radioDiv.appendChild(inputItemCardPriorityBut2L);    
                let inputItemCardPriorityBut3 = document.createElement ('input');
                    inputItemCardPriorityBut3.setAttribute('type', 'radio');
                    inputItemCardPriorityBut3.setAttribute('id', 'lowPrio' )
                    inputItemCardPriorityBut3.setAttribute('value', 'high');
                    inputItemCardPriorityBut3.setAttribute('name', 'prioritylevel');
                    radioDiv.appendChild(inputItemCardPriorityBut3);    
                let inputItemCardPriorityBut3L = document.createElement ('label');
                    inputItemCardPriorityBut3L.setAttribute('value', 'high');
                    inputItemCardPriorityBut3L.innerHTML="<label for='lowPrio'>Low</label>"
                    radioDiv.appendChild(inputItemCardPriorityBut3L);







    let inputItemDueDate = document.createElement('div');
        inputItemDueDate.classList.add('inputItemDate');
        inputItemDueDate.classList.add('inputItemItem');
        inputItemDueDate.innerHTML = "<h6 style='display: inline'> Due: </h4><input id='input2' type='text'></input>";
        inputItemCard.appendChild(inputItemDueDate);

    let inputItemDescription = document.createElement('div');
        inputItemDescription.classList.add('inputItemDescription');
        inputItemDescription.classList.add('inputItemItem');
        inputItemDescription.innerHTML = "<h6 style='display: inline'> Description: </h4><input id='input3' type='text'></input>";
        inputItemCard.appendChild(inputItemDescription);

    let inputItemNotesCheck = document.createElement('div');
        inputItemNotesCheck.classList.add('inputItemNotes');
        inputItemNotesCheck.classList.add('inputItemItem');
        inputItemNotesCheck.innerHTML = "<h6 style='display: inline'>Want room for notes? </h4><input id='input4' type='checkbox'></input>";
        inputItemCard.appendChild(inputItemNotesCheck);

    let inputItemCheckInput = document.createElement('div');
        inputItemCheckInput.classList.add('inputItemCheckList');
        inputItemCheckInput.classList.add('inputItemItem');
        inputItemCheckInput.innerHTML = "<h6 style='display: inline'>Want a checklist? </h4><input id='input5' type='checkbox'></input>";
        inputItemCard.appendChild(inputItemCheckInput);

    let inputItemNotes = document.createElement('div');
        inputItemNotes.classList.add('inputItemNotes');
        inputItemNotes.classList.add('inputItemItem');
        inputItemNotes.classList.add('hidden');
        inputItemNotes.setAttribute('id', 'inputNoteField');
        inputItemNotes.innerHTML = "<h6 style='display: inline'>Notes: </h4><input id='input6' type='text' id='notesUserInput'></input>";
        inputItemCard.appendChild(inputItemNotes);

    let inputtingItemCheckInput = document.createElement('div');
        inputtingItemCheckInput.classList.add('listItemCheckList');
        inputtingItemCheckInput.classList.add('listItemItem');
        inputItemCard.appendChild(inputtingItemCheckInput);

    let inputtingItemCheckOL = document.createElement('ul');
        inputtingItemCheckInput.appendChild(inputtingItemCheckOL);
    let makeAnotherLI = document.createElement('li');
        inputtingItemCheckOL.appendChild(makeAnotherLI);
    let makeAnotherLIinput = document.createElement('input');
        makeAnotherLIinput.classList.add('checkListItem');
        inputtingItemCheckOL.appendChild(makeAnotherLIinput);


    let newToDoSubmitDiv =  document.createElement('div');
        newToDoSubmitDiv.classList.add('inputItemSubmit');
        newToDoSubmitDiv.classList.add('inputItemItem');
        inputItemCard.appendChild(newToDoSubmitDiv);
    let newToDoSubmitButton =  document.createElement('button');
        newToDoSubmitButton.textContent="submit";
        newToDoSubmitButton.setAttribute('id', 'newToDoSubmitButton');
        newToDoSubmitDiv.appendChild(newToDoSubmitButton);
        


}


let checkListArray = [];





function gatherIntelFromForm(){

    console.log('submit');


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
        listItemCheckList.classList.add('listItemCheckList');
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
                ghostClass: 'blue-background-class',
            });
    }

}

function dragStart() {
    console.log('drag started');
    dragItem = this;

}
function dragEnd() {
    console.log('drag ended');
    this.className = 'item'
    dragItem = null;
}

function clearInputValues(){
    let inputItemCard1 = document.getElementById('input1');
    inputItemCard1.value="";
    let inputItemCard2 = document.getElementById('input2');
    inputItemCard2.value="";
    let inputItemCard3 = document.getElementById('input3');
    inputItemCard3.value="";
    let inputItemCard4 = document.getElementById('input4');
    inputItemCard4.checked = false;
    let inputItemCard5 = document.getElementById('input5');
    inputItemCard5.checked = false;
    let inputItemCard6 = document.querySelectorAll('.checkListItem').forEach(input => {input.value="";});
    }


function updateIndexing(){
    if(projectList.length>1){
let inspector = document.querySelectorAll('')

    }
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
                let targetDiv = document.getElementById(`liccNum${targetDewey}`);
                targetDiv.classList.toggle('listItemContent--active');
                    if (targetDiv.classList.contains('listItemContent--active')){
                        targetDiv.style.maxHeight = targetDiv.scrollHeight + 'px';
                    }else{
                        targetDiv.style.maxHeight = '0px';
                    }
                }
    if(e.target.id === 'newButton'){

        let coordinator = document.querySelector('#inputFormCard')
        if (coordinator === null){
                            generateInputForNewItems();
        }else{
            if(!coordinator.classList.contains('hidden')){clearInputValues()};
            coordinator.classList.toggle('hidden');
        }
                }
    if(e.target.id === 'newToDoSubmitButton'){
        let checkForTask= document.getElementById('input1');
        if (checkForTask.value.length>0){
            gatherIntelFromForm()               
                }
                }



});
     
generateAtmosphere();