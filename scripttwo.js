//1. Imprimir por consola la lista de razas de todos los perros.
const listadoRazas =fetch('https://dog.ceo/api/breeds/list/all')
.then(res=>res.json())
.then(json=>console.log(json))
.catch(error=>console.log(error))
listadoRazas
//2. Imprimir por consola una imagen random de una raza.
let imageRandom =fetch('https://dog.ceo/api/breeds/image/random')
.then(res=>res.json())
.then(json=>console.log(json))
imageRandom
//3. Imprimir por consola todas las imágenes de una raza concreta.
let razaConcreta =fetch('https://dog.ceo/api/breed/hound/images')
.then(res=>res.json())
.then(json=>console.log(json))
razaConcreta
// 
const cambioRaza=(raza)=>{
    fetch(`https://dog.ceo/api/breed/${raza.value.toLowerCase()}/images/random`)
    .then(res=>res.json())
    .then(json=>{
        let image= `<img src="${json.message}">`
        document.getElementById("imagen").innerHTML=image
    })
}