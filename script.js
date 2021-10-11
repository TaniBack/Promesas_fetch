//al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el arbol DOM.

//Imprimir por consola la lista de razas de todos los perros.

const breedList = fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error =>console.log(error))  


const myDogPromise = new Promise((resolve, reject) => { 
    if (breedList) {
        return resolve(breedList)
    } else {
        return reject(error)
    }
})

console.log(breedList)

const myDiv = document.getElementById('divMyDogs');
const butonDog = document.createElement('button');
    butonDog.setAttribute("id", "allDogs")
    butonDog.textContent = "All dogs";
    myDiv.appendChild(butonDog);

const dogListUl = document.createElement('ul');
// const dogListLi =

let listadoPerros = breedList.map(() => {
    for (let i=0; i<breedList; i++) 
    document.createElement('li');
    dogListLi.textContent = breedList
    dogListUl.appendChild(dogListLi)
})

myDogPromise 
    .then(res => listadoPerros)
     //esto es una funcion . donde "(item)" es un parametro 
    .catch(error => console.log(error))

//Imprimir por consola una imagen random de una raza.
const butonDogTwo = document.createElement('button');
    butonDogTwo.setAttribute("id", "randomDogs")
    butonDogTwo.textContent = "Random dog img";
    butonDogThree.addEventListener("click", randomDogImg);
    myDiv.appendChild(butonDogTwo);
        
const randomDogImg = fetch('https://dog.ceo/api/breeds/image/random')
    .then(pics => pics.json())
    .then(json => console.log(json))
    .catch(error=>console.log(error))


//Imprimir por consola todas las imágenes de una raza concreta.
const butonDogThree = document.createElement('button');
    butonDogThree.setAttribute("id", "oneDogImages")
    butonDogThree.textContent = "One Dog img";
    butonDogThree.addEventListener("click", oneDogImg);
    myDiv.appendChild(butonDogThree);

const oneDogImg = fetch('https://dog.ceo/api/breed/bulldog/images')
    .then(dogpic => dogpic.json())
    .then(json => console.log(json))
    .catch(error=>console.log(error))
    
//Poner otra raza en la url para que nos busque otras imágenes. Adapta las urls que ya tenías para que puedas pasarle argumentos.
const razaDog = (raza) => {
const masRazasUrl= "https://dog.ceo/api/breed/"+raza+"/images"
fetch(masRazasUrl)
    .then(dograza => dograza.json())
    .then(json => console.log(json))
    .catch(error=>console.log(error))
    masRazasUrl("collie")
}

const textDogFour = document.createElement("input")
    textDogFour.setAttribute("type", "select");
    myDiv.appendChild(textDogFour);
    // textDogFour.addEventListener("click", masRazasUrl(value));



const butonDogFour = document.createElement('button');
    butonDogFour.setAttribute("id", "searchDogImages")
    butonDogFour.textContent = "Search Dog img";
    myDiv.appendChild(butonDogFour);