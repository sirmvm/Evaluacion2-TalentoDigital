var contenido = document.querySelector("#contenido");
var carta = document.getElementById("tarjeta");

//Consumo API con Fetch
fetch("https://digimon-api.vercel.app/api/digimon")
  .then(resp => resp.json())
  .then(datos => {
    tabla(datos);
  })


function tabla(datos) {
  contenido.innerHTML = "";
  for (let temp of datos) {
    contenido.innerHTML += ` <tr>
    <td >${temp.name}</td>
    <td><img  width="25px" height="25px" src="${temp.img}" alt=""></td>
    <td>${temp.level}</td>
 </tr> `
  }

}

function capturaDato() {
  var nombre = document.getElementById("dato").value;
  nombre = nombre.toLowerCase();
  document.getElementById("tabla1").style.display = "none";
  document.getElementById("tabla_nivel").style.display = "none";
  document.getElementById("cartas").style.display = "none";
  document.getElementById("tarjeta").style.display = "block";
  fetch("https://digimon-api.vercel.app/api/digimon/name/" + nombre)
    .then(resp => resp.json())
    .then(datos => {
      tarjeta(datos)
    })
}


function tarjeta(datos) {
  carta.innerHTML = "";

  for (let temp of datos) {
    carta.innerHTML += ` 
        <div id="tarjSola" class="card mb-3 container" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${temp.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">"NOMBRE: ${temp.name}"</h5>
        <p class="card-text">NIVEL: "${temp.level}"</p>
       </div>
    </div>
  </div>
</div>
   `
  }
}

function mostrarNivel() {
  var contenidoNivel = document.querySelector("#contenido2");
  document.getElementById("tabla1").style.display = "none";
  document.getElementById("cartas").style.display = "none";
  document.getElementById("tarjeta").style.display = "none";
  document.getElementById("tabla_nivel").style.display = "block";

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(resp => resp.json())
    .then(datos => {
      contenidoNivel.innerHTML = "";
      for (let temp of datos) {
        contenidoNivel.innerHTML += ` <tr>
    <td >${temp.name}</td>   
    <td>${temp.level}</td>
 </tr> `
      }
    })
}



function mostrarImagenes() {
  var img = document.querySelector("#cartas");
  document.getElementById("tabla1").style.display = "none";
  document.getElementById("tarjeta").style.display = "none";
  document.getElementById("cartas").style.display = "block";
  document.getElementById("tabla_nivel").style.display = "none";

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(resp => resp.json())
    .then(datos => {
      img.innerHTML = "";
      for (let temp of datos) {
        img.innerHTML += ` 
       <div id="card" class="card">
      <img src="${temp.img}" class="card-img-top" alt=" imagen ${temp.name}">
      <div class="card-body">
        <h6 class="card-title">${temp.name}</h6>
        <p class="card-text">${temp.level}</p>
      </div>
     
    </div>
        
`
      }
    })
}