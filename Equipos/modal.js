// Crear el modal en el DOM al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const modalHTML = `
        <div id="modalProducto" class="modal" style="display:none;">
            <div class="modal-content">
                <span class="cerrar">&times;</span>
                <h2 id="modalTitulo"></h2>
                <div id="modalImagenes" class="imagenes-container"></div>
                <p id="modalDescripcion"></p>
                <p id="modalPrecio" class="precio"></p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Evento para cerrar el modal al hacer clic en la X
    document.querySelector("#modalProducto .cerrar").onclick = function() {
        document.getElementById("modalProducto").style.display = "none";
    };

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        const modal = document.getElementById("modalProducto");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

// Función para abrir el modal
function abrirModal(titulo, descripcion, precio, imagenes) {
    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalDescripcion").textContent = descripcion;
    document.getElementById("modalPrecio").textContent = precio;

    const contenedorImagenes = document.getElementById("modalImagenes");
    contenedorImagenes.innerHTML = "";

    // Imagen principal
    const imgPrincipal = document.createElement("img");
    imgPrincipal.src = imagenes[0];
    imgPrincipal.alt = titulo;
    imgPrincipal.style.maxWidth = "100%";
    imgPrincipal.style.marginBottom = "15px";
    contenedorImagenes.appendChild(imgPrincipal);

    // Miniaturas
    const miniaturas = document.createElement("div");
    miniaturas.style.display = "flex";
    miniaturas.style.justifyContent = "center";
    miniaturas.style.gap = "10px";

    imagenes.forEach(src => {
        const mini = document.createElement("img");
        mini.src = src;
        mini.alt = titulo;
        mini.style.width = "80px";
        mini.style.cursor = "pointer";
        mini.onclick = () => imgPrincipal.src = src;
        miniaturas.appendChild(mini);
    });

    contenedorImagenes.appendChild(miniaturas);

    document.getElementById("modalProducto").style.display = "flex";
    document.querySelector(".cerrar-modal").addEventListener("click", () => {
        document.getElementById("modalProducto").style.display = "none";
    });
}

