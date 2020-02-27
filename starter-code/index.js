const buttonFacts = document.getElementById('add-button');
const deleteFacts = document.getElementById('remove-button');
const factsArray = ["70% of your cat's life is spent asleep.", "The cat has 500 skeletal muscles (humans have 650)."]
let addButton=document.getElementById('add-button');
let delButton=document.getElementById('remove-button')

let url = 'https://catfact.ninja/fact/' // Visit https://catfact.ninja/ to read the documentation. 

// ITERACIÓN 1: Añade las dos curiosidades de la array para que se despliegen en la lista del HTML.
function gatitos(){
    let catFacts = document.querySelectorAll('ul')
    for (i = 0;i < factsArray.length;i++){
        let createLi = document.createElement('li');
        createLi.innerHTML=factsArray[i];
        catFacts[0].appendChild(createLi);
    }
}

//buttonFacts.onclick = gatitos;
// ITERACIÓN 2: Cada vez que el usuario pulse el botón de Remove a cat fact, elimina el último elemento de la lista. 
function deleteGatitos(){
    newValueButton=document.getElementById("number-input").value;
    for(i=0;i < newValueButton;i++){
        document.getElementById('cat-facts-list').lastChild.remove()
    }
}
deleteFacts.onclick = deleteGatitos;
// ITERACIÓN 3: Cada vez que el usuario pulse el botón de añadir una curiosidad, llama a la API y añade una curiosidad Random. 
function pullGatitos(){
    newValueButton=document.getElementById("number-input").value;
    for(i=0;i < newValueButton;i++){
        fetch(url).then(function(response) {
            return response.json();
          }).then(function(myJson) {
            let catFacts = document.querySelectorAll('ul')
            let createLi = document.createElement('li');
            createLi.innerHTML=myJson.fact;
            catFacts[0].appendChild(createLi);
          });
    }
}
  
buttonFacts.addEventListener('click',pullGatitos);
// ITERACIÓN 3.BONUS: Asegurate de que nunca se despliegen curiosidades repetidas.

// ITERACIÓN 4: Añade un elemento input al HTML de tipo number. Cuando el usuario cambie el número de este input cambia el texto de los botones para que aparezca "Add / Remove x cat facts"
function changeButton(){
    newValueButton=document.getElementById("number-input").value;
    if (newValueButton > 0){
        addButton.innerHTML=`Add ${newValueButton} cat fact`;
        delButton.innerHTML=`Remove ${newValueButton} cat fact`;
    }else if(newValueButton == 0){
        addButton.innerHTML=`Add a cat fact`;
        delButton.innerHTML=`Remove a cat fact`;
    }
}
document.getElementById("number-input").addEventListener('change', changeButton);
// ITERACIÓN 4.1: modifica las funciónes anteriores para que al hacer click en el botón se añadan o quiten este número de curiosidades. 