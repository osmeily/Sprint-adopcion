const gridMascota = document.querySelector(".grid-mascotas")
const favoritos = JSON.parse(window.localStorage.getItem("favoritos"))

favoritos.forEach(mascota => {
    gridMascota.innerHTML +=
        `
        <a href="" class="enlace-detalle-mascota">
        <div class="card bg-dark text-white gradiente">
            <img src="${mascota.imagen}"
                class="card-img" alt="...">
            <div id="${mascota.id} "class="card-img-overlay ${mascota.categoria}">
                <h5 class="card-title body2Bold">${mascota.nombre}</h5>
                <p class="card-text body2Regular">${mascota.raza}</p>
            </div>
        </div>
    </a>
        `
    addListeners()
});

function addListeners() {
    gridMascota.childNodes.forEach(elemento => {
        elemento.addEventListener("click", async(e) => {
            e.preventDefault()
            window.localStorage.setItem("det-data", JSON.stringify({ "id": e.target.id, "categoria": e.target.classList[1] }))
            if (e.target.classList[1] == "perro") {
                const data = await getDataMascota('http://localhost:4001/perros')
                const perro = data.filter(x => x.id == e.target.id)
                window.localStorage.setItem("detalle", JSON.stringify(perro[0]))
            } else if (e.target.classList[1] == "gato") {
                const data = await getDataMascota('http://localhost:4000/gatos')
                const gato = data.filter(x => x.id == e.target.id)
                window.localStorage.setItem("detalle", JSON.stringify(gato[0]))

            }
            window.location.href = "../detail.html"
        })
    })
}

const getDataMascota = async(url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}