let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDetallesGastos = [];

function clickAgregar() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let detalleGasto = document.getElementById('detalleGasto').value;

    if (valorGasto > 150) {
        alert("Tu gasto es mayor a 150 USD");
    }

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDetallesGastos.push(detalleGasto);

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        let detalleGasto = listaDetallesGastos[posicion];
        totalGastos = totalGastos + Number(valorGasto);
        htmlLista += `<li>${elemento} (${detalleGasto}) - USD ${valorGasto.toFixed(2)} 
        <button onclick="editarGasto(${posicion});">Editar</button>
        <button onclick="eliminarGasto(${posicion});">Eliminar</button></li>`;
    });

    totalElementos.innerHTML = totalGastos.toFixed(2);
    listaElementos.innerHTML = htmlLista;
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('detalleGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDetallesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('detalleGasto').value = listaDetallesGastos[posicion];

    let botonAgregar = document.getElementById('botonAgregar');
    let botonActualizar = document.getElementById('botonActualizar');
    botonAgregar.style.display = 'none';
    botonActualizar.style.display = 'flex';
    let htmlLista = `<button id="botonActualizar" onclick="clickActualizar(${posicion});">Actualizar Gasto</button>`
    document.getElementById('botonActualizar').innerHTML = htmlLista;
}

function clickActualizar(posicion) {
    listaNombresGastos[posicion] = document.getElementById('nombreGasto').value;
    listaDetallesGastos[posicion] = document.getElementById('detalleGasto').value;
    listaValoresGastos[posicion] = document.getElementById('valorGasto').value;

    if (listaValoresGastos > 150) {
        alert("Tu gasto es mayor a 150 USD");
    }

    let botonAgregar = document.getElementById('botonAgregar');
    let botonActualizar = document.getElementById('botonActualizar');
    botonActualizar.style.display = 'none';
    botonAgregar.style.display = 'flex';
    actualizarListaGastos();
}