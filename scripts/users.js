let formulario = document.getElementById('formulario');
let headerUser = document.querySelector(".header-user")

window.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('id').style.display = 'none';
    document.getElementById('label-edit').style.display = 'none';
    let activeUser = JSON.parse(window.localStorage.getItem("active-user"))
    headerUser.innerHTML = `
    <div class="usuario-modificar">
    <img class="img-perfil" src="./images/profileIcon.png" alt="">
</div>
<p class="body1Regular nombre">${activeUser.nombre + " " + activeUser.apellido}</p>
<a class="edit-account btn-editar" href="./userModificar.html">Editar cuenta</a>
    `
})
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

let name = document.getElementById('name').value;
let lastName = document.getElementById('lastName').value;
let email = document.getElementById('email').value;

    let resp = await fetch('http://localhost:4002/usuarios/',{
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            correo: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }

    }) 
    window.localStorage.setItem("active-user", JSON.stringify({
        nombre: name,
        apellido: lastName,
        correo: email
    }))
    formulario.reset() 
})
