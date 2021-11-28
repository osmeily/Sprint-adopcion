const detalleMascotas = document.querySelector('.detalleMascotas');
const endpointGato = "http://localhost:4000/gatos";
const endpointPerro = "http://localhost:4001/perros"
const personalidades = {
  "Cariñoso":"./images/cariños.png",
  "Jugueton":"./images/jugueton.png",
  "Inquieto":"./images/inquieto.png",
  "Tierno":"./images/tierno.png"
}


const getLocalStorage = () => {
    const det = JSON.parse(localStorage.getItem("Detail"));
    const { id, imagen, nombre, sexo, raza, edad, ubicacion, personalidad, historia, imagenUser, usuario} = det;
    detalleMascotas.innerHTML += `
    <li class="card" style="width: 18rem;">
    <div class="card-body">
      <img src=${imagen} class="card-img-top" alt="...">
      <h5 class="card-title">${nombre} ${sexo}</h5>
      <p class="card-text"> <img src="./images/raza.png" alt="..."/>${raza} 
      <img src="./images/edad.png"atl="" />${edad}</p>
      <p class="card-text"> <img src="./images/ubicacion.png" alt="..."/>${ubicacion}</p>
      <h5 class="card-title">Personalidad: </h5>

      <a href="#" class="btn btn-outline-dark " style="background-color: #db7093;">Return</a>
    </div>
  </li>
    `
}

document.addEventListener('DOMContentLoaded',getLocalStorage)

detalleMascotas.addEventListener('click', (e) => {

    if(e.target.classList.contains('back')){
        window.location.href = "./index.html";
    }
})


const getDataDetailgato = async(endpointGato) => {
  const resp = await fetch(endpointGato);
  const datagato = await resp.json();
  return datagato;
}

const getDataDetailperro = async(endpointPerro) => {
  const resp = await fetch(endpointPerro);
  const dataperro = await resp.json();
  return dataperro;
}

const showData = async (list, element) => {
  const mascotas = await list;

  mascotas.forEach(mascota => {
      const { id, imagen, nombre, sexo, raza, edad, ubicacion, personalidad, historia, imagenUser, usuario } = mascota;
      element.innerHTML += `
      <li class="card" style="width: 18rem;">
      <div class="card-body" >
      <img src="${imagen}" class="card-img-top" alt="...">
        <h5 class="card-title">${nombre}</h5>
        <a href="#" id="${id}" class="btn btn-outline-dark " style="background-color: #FF906D;">Detail</a>
        <a href="#" id="${id} btnCarrito" class="btn btn-Carrito" style="background-color: #FF906D;">Agregar al carrito</a>
      </div>
      </li>
      `
  })

document.addEventListener('DOMContentLoaded', () => {
    const data = getDataDetailgato(endpointGato);
    showData(data,detalleMascotas)
})
document.addEventListener('DOMContentLoaded', () => {
  const data = getDataDetailperro(endpointPerro);
  showData(data,detalleMascotas)
})

detalleMascotas.addEventListener('click', async(e) => {

    const btnDetail = e.target.classList.contains('grid-mascotas');
    const id = e.target.id;
    console.log(id)

    if(btnDetail){
        const lista1 = await getDataDetailgato(endpointGato);
        const objeto1 = lista1.find(list1 => list1.id === Number(id))
        localStorage.setItem("Detail",JSON.stringify(objeto1));
        window.location.href = "./detail.html"
    } else {
        const lista2 = await getDataDetailperro(endpointPerro);
        const objeto2 = lista2.find(list2 => list2.id === Number(id))
        localStorage.setItem("Detail",JSON.stringify(objeto2));
        window.location.href = "./detail.html"
    }
})
}