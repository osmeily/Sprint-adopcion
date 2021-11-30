let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');
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
<a class="edit-account btn-editar" href="#">Editar cuenta</a>
    `
})

btnCorreo.addEventListener('click', async() => {
    document.getElementById('label-edit').style.display = 'block';
    let email = document.getElementById('email').value;
    document.getElementById('email').readOnly = true;

    let resp = await fetch('http://localhost:4002/usuarios');
    let data = await resp.json();
    console.log(data);
    let modificar = data.find(user => user.correo === email)
    const {nombre, apellido, correo, id} = modificar;
    console.log(modificar);
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;
})

btnEditar.addEventListener('click', async() => {
    let idModificar = document.getElementById('id').value;
    let nameMod = document.getElementById('name').value;
    let lastNameMod = document.getElementById('lastName').value;
    let emailMod = document.getElementById('email').value;

    let resp = await fetch(`http://localhost:4002/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameMod,
            apellido: lastNameMod,
            correo: emailMod
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    
    }) 
    window.localStorage.setItem("active-user", JSON.stringify({
        nombre: nameMod,
        apellido: lastNameMod,
        correo: emailMod
    }))
    formulario.reset()
})

btnEliminar.addEventListener('click', async() => {
    let idModificar = document.getElementById('id').value;
    let resp = await fetch(`http://localhost:4002/usuarios/${idModificar}`,{
        method: 'DELETE',
    })
    formulario.reset()
})