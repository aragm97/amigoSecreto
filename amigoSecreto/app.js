// Array para almacenar los nombres ingresados
let names = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nameInput = document.getElementById('amigo');
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        actualizarListaAmigos();
        nameInput.value = '';
    }
}

// Función para actualizar la lista de nombres en la interfaz
function actualizarListaAmigos() {
    const nameList = document.getElementById('listaAmigos');
    nameList.innerHTML = '';
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

// Función para seleccionar un nombre aleatorio de la lista
function sortearAmigo() {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];
        document.getElementById('resultado').innerHTML = `<li>Nombre seleccionado: ${selectedName}</li>`;
    } else {
        document.getElementById('resultado').innerHTML = '<li>No hay nombres en la lista.</li>';
    }
}