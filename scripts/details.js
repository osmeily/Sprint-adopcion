const mascotas = document.querySelector("grid-mascotas")
import { muestraMascota } from "./getData";

const getLocalStorage = () => {
    const detail = JSON.parse(localStorage.getItem("detail")) 
    const {nombre, raza, imagen, edad, ubicacion, historia, personalidad, usuario, imagenUser, sexo} = detail;
    detail.innerHTML+=`
    <li class="card" style="width: 18rem;">
    <img src=${img} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${sexo}</p>
    <h5 class="card-title"> ${raza}</h5>
    <a href="#" class="btn btn-outline-dark " style="background-color: #db7093;">Return</a>
    </div>
    </li>
    `
    
}

muestraMascota.addEventListener

document.addEventListener("DOMContentLoaded", getLocalStorage)

mascotas.addEventListener("click", (e) => {
    if(e.target.classList.contains("back")){
        window.location.href = "./index.html"
    }
})