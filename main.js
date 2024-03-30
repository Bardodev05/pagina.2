const carrito = document.getElementById("carrito")
const elemento1 = document.getElementById("lista-1")
const lista = document.querySelector("#lista-carrito tbody")
const vaciarCarritobtn = document.getElementById("vaciar-carrito")

cargarEventlisteners()

function cargarEventlisteners(){
    elemento1.addEventListener("click", comprarElemento)
    cargarEventlisteners("click", eliminarElemento)
    vaciarCarritobtn.addEventListener("click",vaciarCarrito)
}

function comprarElemento(e){
    e.preventDeafault()
    if(e.target.classList.contains("agregra-carrito")){
        const elemento = e.target.parentElment.parentElment
        leerDatosElemetos(elemento)
    }
}

function leerDatosElemetos(elemento){
    const infoElemnto = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textcontent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    insetarCarrito(infoElemnto)
}
function insetarCarrito(elemento){
    const row = document.createElement("tr")
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}> x </a>
        </td>

    `
    lista.appendChild(row)
}

function eliminarElemento(e){
    e.preventDeafault()
    let elemento,
        elementoId
    if(e.target.classList.contains("borrar")){
        e.target.parentElment.parentElment.remove()
        elemento = e.target.parentElment.parentElment
        elementoId = elemento.querySelector("a").getAttribute("data-id")
    }

}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    return false
}