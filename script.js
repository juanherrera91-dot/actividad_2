let carrito = [];
let total = 0;

function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(sec => {
        sec.classList.add('oculto');
    });

    document.getElementById(id).classList.remove('oculto');
}

function agregarCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";

    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.nombre + " - Bs " + item.precio;
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}