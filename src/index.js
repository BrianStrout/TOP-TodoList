import {generateAtmosphere, generateNoteBook} from './modules/onLoad';
import {generateInputForNewItems} from './modules/todomodule-inputnew';
import {gatherIntelFromForm, generateNewListItem, addItemToList, publishToList} from './modules/todomodule-itemtolist';
window.onload = (e) => {
    generateAtmosphere();
    generateNoteBook();
}
// generateAtmosphere();
// generateNoteBook();

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


let dragItem = null;
function makeDraggable(){
// let dragItem = null;
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
window.makeDraggable = makeDraggable;
     

window.dragStart = dragStart;
window.dragEnd = dragEnd;


export {projectList};

