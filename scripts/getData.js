let btnGato = document.getElementById('btnGato');
let btnPerro = document.getElementById('btnperro');
var gridMascota = document.getElementById("grid-mascotas")


function addListeners(){
    gridMascota.childNodes.forEach(elemento => {
        elemento.addEventListener("click", async (e) =>{
            e.preventDefault()
            window.localStorage.setItem("det-data", JSON.stringify({"id":e.target.id, "categoria":e.target.classList[1]}))
            if(e.target.classList[1] == "perro") {
                const data = await getDataMascota('http://localhost:4001/perros')
                const perro = data.filter(x => x.id == e.target.id)
                window.localStorage.setItem("detalle", JSON.stringify(perro[0]))
            } else if(e.target.classList[1] == "gato") {
                const data = await getDataMascota('http://localhost:4000/gatos')
                const gato = data.filter(x => x.id == e.target.id)
                window.localStorage.setItem("detalle", JSON.stringify(gato[0]))

            }
            window.location.href = "../detail.html"
        })
    })
}

const getDataMascota = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}

const getMascota = async (url) =>{
    const muestraMascota = document.querySelector(".grid-mascotas")
    muestraMascota.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(mascota => {
        const {id, imagen, nombre, raza, categoria} = mascota;
        muestraMascota.innerHTML += `
        <div class="col mascotas">
        <a href="./detail.html" class="enlace-detalle-mascota">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div id="${id}" class="card-img-overlay ${categoria}">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
        </div>
        `
        addListeners()
    });

}

btnGato.addEventListener('click', () => {
    getMascota('http://localhost:4000/gatos');
    addListeners()

})

btnPerro.addEventListener('click', () => {
    getMascota('http://localhost:4001/perros');
    addListeners()
})