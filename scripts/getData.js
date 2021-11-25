let btnGato = document.getElementById('btnGato');
let btnPerro = document.getElementById('btnperro');

const getMascota = async (url) =>{
    export const muestraMascota = document.querySelector(".grid-mascotas")
    muestraMascota.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(mascota => {
        const {imagen,nombre,raza} = mascota;
        muestraMascota.innerHTML += `
        <div class="col mascotas">
        <a href="#" class="enlace-detalle-mascota">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
    </div>
        `
    });
    
}

btnGato.addEventListener('click', () => {
    getMascota('http://localhost:4000/gatos');
})

btnPerro.addEventListener('click', () => {
    getMascota('http://localhost:4001/perros');
})