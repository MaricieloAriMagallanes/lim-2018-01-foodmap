//DECLARACION DE VARIABLES
let restaurants= document.getElementById("restaurants");
let modales= document.getElementById("modal");
//Creamos una variable para el arreglo
let allInfo = [];

//requisito para el nav de materialize div

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
     });
  //jquery del sidebar  
      $(document).ready(function () {
       $('.sidenav').sidenav();
        });
//Realizaremos la data y lo guardamos en un json

const lugaresRestaurantes = ()=>{
  fetch("../data/restaurantes.json")
    .then(response => response.json())
    .then(lugares => {


      lugares.forEach(place => {

        let placeInformation = {
          type: place[1],
          name: place[2],
          location: place[3],
          telephone: place[4],
          email: place[5]
        }
        allInfo.push(placeInformation)
        
      })
      printAll(allInfo);
    })
}


//Aqui vamos a realizar los datos de los lugares que pusimos
const printAll= (obj) =>{
  let values = Object.values(obj);


  values.forEach( rest=>{

      let box = document.createElement("div");
      box.setAttribute("class", "card");

      let Contenido = document.createElement("div");
      Contenido.setAttribute("class", "card-content");

      let boton = document.createElement("div");
      boton.setAttribute("class", "card-action");
      let  aButton = document.createElement("button");
      aButton.setAttribute("class", "btn modal-trigger")
      
      aButton.setAttribute("id", `${rest.code}`)
      let aButtonText = document.createTextNode("Mas Detalle...");

      let img = document.createElement("i");
      img.setAttribute("class", "material-icons medium")
      let imgName = document.createTextNode("local_dining")

      let text = document.createElement("h5");
      text.setAttribute("class", "grey-text")
      let textoIn = document.createTextNode(`${rest.name}`);

      //Realizamos la impresion de los datos utilizando el appendChild

      img.appendChild(imgName);
      text.appendChild(textoIn);
      aButton.appendChild(aButtonText);
      Contenido.appendChild(img)
      Contenido.appendChild(text);
      boton.appendChild(aButton)
      box.appendChild(Contenido);
      box.appendChild(boton);
      restaurants.appendChild(box);
  
 })

  
 }


window.addEventListener("load", lugaresRestaurantes);