import {generateAtmosphere, generateNoteBook} from './modules/onLoad';
import {generateInputForNewItems} from './modules/todomodule-inputnew';

// window.onload = (e) => {
//     generateAtmosphere();
//     generateNoteBook();
// }
generateAtmosphere();
generateNoteBook();

const projectList=[];

console.log(projectList);
console.log(projectList.length);



function prepStorage(){
    //revisit after population
}
function fileStorage(sessionArray){
//recieve preassemlbed array(?) of to dos
            for(i=0; i<sessionArray.length; i++){
                
            }

//package that into an object for local storage
const session={

}

//put into local storage
window.localStorage.setItem('user', JSON.stringify(person));


}
function retrieveStorage(){
    //not sure yet
}


let checkListArray = [];





function gatherIntelFromForm(){
    let inputItemCard1 = document.getElementById('input1');
    let inTitle = inputItemCard1.value;
    
    let inPriority = "lowPrio";
                let inputItemHig = document.getElementById('highPrio');
                let inputItemMed = document.getElementById('medPrio');
                // let inputItemLow = document.getElementById('lowPrio');
                if(inputItemHig.checked === true){ inPriority = "highPrio"}
                else if(inputItemMed.checked === true){ inPriority = "medPrio"}
    // let inPriority = inputItemCard2.value;
    
    
    
    let inputItemCard3 = document.getElementById('input3');
    let inDueDate = inputItemCard3.value;
    
    let inputItemCard4 = document.getElementById('input4');
    let inDescription = inputItemCard4.value;
    
    let inputItemCard5 = document.getElementById('input5');
    let inHasNotes = inputItemCard5.checked;
    
    let inputItemCard6 = document.getElementById('input6');
    let inHasChecklist = inputItemCard6.checked;
    
    // let inputItemCard6 = document.querySelectorAll('.checkListItem').forEach(input => {input.value="";});
    generateNewListItem(inTitle, inPriority, inDueDate, inDescription, inHasNotes, inHasChecklist);
    
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
            gatherIntelFromForm();

                }
                }



});
     
// generateAtmosphere();