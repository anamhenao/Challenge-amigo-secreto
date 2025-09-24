// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }
}

 amigos.push(nombre);

     const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    li.classList.add('name-item'); // Opcional: añade una clase para estilizar
    lista.appendChild(li);

    inputNombre.value = '';
    
    // Ocultar la lista de resultados si estaba visible
    document.getElementById('resultado').innerHTML = '';
