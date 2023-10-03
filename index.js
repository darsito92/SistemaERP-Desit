
function mostrarFormulario(formulario) {
    // Oculta todos los formularios
    document.getElementById('formulario-inventario').style.display = 'none';
    document.getElementById('formulario-venta').style.display = 'none';
    document.getElementById('formulario-servicio').style.display = 'none';

    // Muestra el formulario seleccionado
    document.getElementById('formulario-' + formulario).style.display = 'block';
}

