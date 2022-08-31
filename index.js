window.onload = (e) => {
    console.log("main JS script firing");
}

function generateAtmosphere(){
    let bodyDiv = document.getElementById("bodyDiv")
    let atmosphere= document.createElement('div')
        atmosphere.classList.add('container');
        atmosphere.setAttribute('id', 'atmosphere');
        bodyDiv.appendChild(atmosphere);
        
}

function generateNoteBook(){
   console.log("notes") 
}


generateAtmosphere();