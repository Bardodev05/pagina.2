const carrito = document.getElementById("carrito");
const elemento1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritobtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
    elemento1.addEventListener("click", comprarElemento);
    document.addEventListener("click", eliminarElemento); // Cambié esto de cargarEventlisteners a document
    vaciarCarritobtn.addEventListener("click", vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault(); // Cambié preventDeafault a preventDefault
    if (e.target.classList.contains("agregar-carrito")) { // Cambié agregra-carrito a agregar-carrito
        const elemento = e.target.parentElement.parentElement;
        leerDatosElementos(elemento);
    }
}

function leerDatosElementos(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent, // Cambié textcontent a textContent
        id: elemento.querySelector("a").getAttribute("data-id")
    };
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio} <!-- Asegúrate de tener un precio aquí -->
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}"> x </a> <!-- Cambié herf a href -->
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault(); // Cambié preventDeafault a preventDefault
    let elemento, elementoId;
    if (e.target.classList.contains("borrar")) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
