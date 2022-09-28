function validarFormulario() {
    var verificar = true;
    var formulario = document.getElementById("formulario");
    var nombre = document.getElementById("nombre");
    var correo = document.getElementById("correo");
    var expRegCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var asunto = document.getElementById("asunto");
    var mensaje = document.getElementById("mensaje");

    if (!nombre.value) {
        alert("Escriba sus nombres por favor.");
        nombre.focus();
        verificar = false;
        return false;
    }
    else if (nombre.value.split(" ").length < 2) {
        alert("Esciba sus nombres completos por favor.");
        nombre.focus();
        verificar = false;
        return false;
    }

    else if (!correo.value) {
        alert("Escriba su correo.");
        correo.focus();
        verificar = false;
        return false;
    }
    else if(!expRegCorreo.exec(correo.value)){
        alert("Escriba un email valido por favor.");
        correo.focus();
        verificar=false;
        return false;
        }

    else if (!asunto.value) {
        alert("Escriba un asunto.");
        asunto.focus();
        verificar = false;
        return false;
    }

    else if (!mensaje.value) {
        alert("Escriba el mensaje.");
        mensaje.focus();
        verificar = false;
        return false;
    }

    if (verificar == true) {
        document.formulario.submit();
    }
}
function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

window.onload = function () {
    var botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarFormulario;
    var botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick = validarFormulario;
}
