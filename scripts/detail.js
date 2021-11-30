const detalleMascotas = document.getElementById("home");
const endpointGato = "http://localhost:4000/gatos";
const endpointPerro = "http://localhost:4001/perros";
var personalidades = {
  "Cariñoso": "./images/cariñoso.png",
  "Juguetón": "./images/jugueton.png",
  "Inquieto": "./images/inquieto.png",
  "Tierno": "./images/tierno.png",
};

const getLocalStorage = () => {
  const det = JSON.parse(localStorage.getItem("detalle"));
  const {
    id,
    imagen,
    nombre,
    sexo,
    raza,
    edad,
    ubicacion,
    personalidad,
    historia,
    imagenUser,
    usuario,
  } = det;
  console.log(imagen)
  detalleMascotas.innerHTML += `
  <div class="card">
        <a href="./index.html">
            <img class="back-btn" src="./images/back.png" alt="">
        </a>
        <img class="top-img"
            src="${imagen}"
            alt="foto">
    </div>

    <div class="info-container">
        <div class="info">
            <header class="card-header">
                <div class="name-sex">
                    <h1 class="Headline1">${nombre}</h1>
                    <img class="sex" src="${sexo}" alt="sex">
                </div>
                <img src="./images/Guardar.svg" alt="" class="fav-btn">
            </header>
            <div class="raza-edad-ubi">
                <div>
                    <img src="./images/raza.png" alt="raza">
                    <label class="body2Regular">${raza}</label>
                </div>
                <div>
                    <img src="./images/edad.png" alt="edad">
                    <label class="body2Regular">${edad}</label>
                </div>
                <div>
                    <img src="./images/ubicacion.png" alt="ubicacion">
                    <label class="body2Regular">${ubicacion}</label>
                </div>
            </div>
            <h5 class="Headline2">Personalidad</h5>
            <div class="personality">
                
                <div class="cuadro-info">
                    <img src="${personalidades[personalidad[0]]}" alt="">
                    <p class="body1Regular">${personalidad[0]}</p>
                </div>
                <div class="cuadro-info">
                    <img src="${personalidades[personalidad[1]]}" alt="">
                    <p class="body1Regular">${personalidad[1]}</p>
                </div>
                <div class="cuadro-info">
                    <img src="${personalidades[personalidad[2]]}" alt="">
                    <p class="body1Regular">${personalidad[2]}</p>
                </div>
            </div>
            <div class="historia">
                <h5 class="Headline2">Historia de ${nombre}</h5>
                <p class="body1Regular">${historia}</p>
            </div>
            <footer class="contacto">
                <div class="user-info">
                    <div class="picture">
                        <img class="img-user" src="${imagenUser}" alt="">
                    </div>
                    <div class="info-text">
                        <p class="caption">Publicado por:</p>
                        <p class="body2Bold">${usuario}</p>
                    </div>
                </div>
                <button class="btn-modal">Contactar</button>
            </footer>
        </div>
    </div>
    `;
};

document.addEventListener("DOMContentLoaded", getLocalStorage);

detalleMascotas.addEventListener("click", (e) => {
  if (e.target.classList.contains("back")) {
    window.location.href = "./index.html";
  }
});

const getDataDetailgato = async (endpointGato) => {
  const resp = await fetch(endpointGato);
  const datagato = await resp.json();
  return datagato;
};

const getDataDetailperro = async (endpointPerro) => {
  const resp = await fetch(endpointPerro);
  const dataperro = await resp.json();
  return dataperro;
};

const showData = async (list, element) => {
  const mascotas = await list;

  mascotas.forEach((mascota) => {
    const {
      id,
      imagen,
      nombre,
      sexo,
      raza,
      edad,
      ubicacion,
      personalidad,
      historia,
      imagenUser,
      usuario,
    } = mascota;
    element.innerHTML += `<div class="info-container">
    <div class="info">
        <header class="card-header">
            <div class="name-sex">
                <h1 class="Headline1">Matilde</h1>
                <img class="sex" src="https://png.pngtree.com/png-vector/20190621/ourmid/pngtree-femalesymbolgender--flat-color-icon--vector-icon-banner-temp-png-image_1490298.jpg" alt="sex">
            </div>
            <img src="./images/Guardar.svg" alt="" class="fav-btn">
        </header>
        <div class="raza-edad-ubi">
            <div>
                <img src="./images/raza.png" alt="raza">
                <label class="body2Regular">Ragdoll</label>
            </div>
            <div>
                <img src="./images/edad.png" alt="edad">
                <label class="body2Regular">8 meses</label>
            </div>
            <div>
                <img src="./images/ubicacion.png" alt="ubicacion">
                <label class="body2Regular">Pasto, Nariño</label>
            </div>
        </div>
        <h5 class="Headline2">Personalidad</h5>
        <div class="personality">
            
            <div class="cuadro-info">
                <img src="./images/cariñoso.png" alt="">
                <p class="body1Regular">Cariñoso</p>
            </div>
            <div class="cuadro-info">
                <img src="./images/tierno.png" alt="">
                <p class="body1Regular">Tierno</p>
            </div>
            <div class="cuadro-info">
                <img src="./images/jugueton.png" alt="">
                <p class="body1Regular">Juguetón</p>
            </div>
        </div>
        <div class="historia">
            <h5 class="Headline2">Historia de Matilde</h5>
            <p class="body1Regular"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, est amet veniam saepe aliquam hic consequatur? Ea, iste nemo minus nobis consequatur dolorem modi nisi voluptatem maxime ipsum dolor rem.</p>
        </div>
        <footer class="contacto">
            <div class="user-info">
                <div class="picture">
                    <img class="img-user" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                </div>
                <div class="info-text">
                    <p class="caption">Publicado por:</p>
                    <p class="body2Bold">Diego Torres</p>
                </div>
            </div>
            <button class="btn-modal">Contactar</button>
        </footer>
    </div>
</div>
`;
  });

  document.addEventListener("DOMContentLoaded", () => {
    const data = getDataDetailgato(endpointGato);
    showData(data, detalleMascotas);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const data = getDataDetailperro(endpointPerro);
    showData(data, detalleMascotas);
  });

  detalleMascotas.addEventListener("click", async (e) => {
    const btnDetail = e.target.classList.contains("grid-mascotas");
    const id = e.target.id;
    console.log(id);

    if (btnDetail) {
      const lista1 = await getDataDetailgato(endpointGato);
      const objeto1 = lista1.find((list1) => list1.id === Number(id));
      localStorage.setItem("Detail", JSON.stringify(objeto1));
      window.location.href = "./detail.html";
    } else {
      const lista2 = await getDataDetailperro(endpointPerro);
      const objeto2 = lista2.find((list2) => list2.id === Number(id));
      localStorage.setItem("Detail", JSON.stringify(objeto2));
      window.location.href = "./detail.html";
    }
  });
};
