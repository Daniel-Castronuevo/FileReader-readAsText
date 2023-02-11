"use strict"

// - - - - - - - - PARA QUE LO MUESTRE EN LA PÁGINA- - - - - - - - //

const archivo = document.querySelector(".archivo");
const textoAMostrar = document.querySelector(".zona-de-texto");
const borrar = document.querySelector(".div-archivo-aparecera-aqui");

archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files);
});

const leerArchivo = ar => {

    borrar.innerHTML = ``;
    borrar.style.height = `0px`

    for (let i = 0; i < ar.length; i++) {

        const reader = new FileReader();

        reader.readAsText(ar[i]);

        reader.addEventListener("load",(e)=>{

            let archivoLeido = e.currentTarget.result;

            textoAMostrar.innerHTML += `Nombre del archivo: <b style="color:rgb(119, 248, 255)">${archivo.files[i].name}</b><br><br>${archivoLeido}<br><br><br><br>`

        })
    }
}

// - - - - - - - - PARA QUE LO MUESTRE EN CONSOLA - - - - - - - - //

// const archivo = document.querySelector(".archivo");

// archivo.addEventListener("change",()=>{
//     leerArchivo(archivo.files);
// });

// const leerArchivo = ar => {

//     for (let i = 0; i < ar.length; i++) {

//         const reader = new FileReader();

//         reader.readAsText(ar[i]);

//         reader.addEventListener("load",(e)=>{

//             let archivoLeido = e.currentTarget.result;
//             console.log(archivoLeido)
//         })
//     }
// }