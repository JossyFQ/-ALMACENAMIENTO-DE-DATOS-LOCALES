function validarFormulario() {
    var id = document.getElementById('id').value.trim();
    var apellido = document.getElementById('seconame').value.trim();
    var nombre = document.getElementById('name').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();
    // Expresiones regulares para validar cada campo
    var idRegex = /^\d{8,10}$/; // Cedula ID de 8 a 10 dígitos
    var apellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/; // Solo letras y espacios para apellidos
    var nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/; // Solo letras y espacios para nombres
    var direccionRegex = /^[a-zA-Z0-9\s,'-]*$/; // Letras, números, espacios y caracteres especiales para dirección
    var telefonoRegex = /^\d{7,10}$/; // Número de teléfono de 7 a 10 dígitos
    var emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;// Formato de correo electrónico válido
     // Validar cada campo con su expresión regular correspondiente
    if (!idRegex.test(id)) {
        alert("Por favor ingrese una Cedula.");
        return false;
    }
    if (!apellidoRegex.test(apellido)) {
        alert("Por favor ingrese Apellido completo.");
        return false;
    }
    if (!nombreRegex.test(nombre)) {
        alert("Por favor ingrese Nombre completo.");
        return false;
    }
    if (!direccionRegex.test(direccion)) {
        alert("Por favor ingrese una Dirección.");
        return false;
    }
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor ingrese un Teléfono.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Por favor ingrese un Correo electrónico.");
        return false;
    }
    // Si pasa todas las validaciones, el formulario se puede enviar
    return true;
}
function guardarDatos() {
    // Obtener los datos del formulario
    var id = document.getElementById("id").value.trim();
    var apellido = document.getElementById("seconame").value.trim();
    var nombre = document.getElementById("name").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();
    // Validar que todos los campos estén completos
    if (id.trim() === '' || apellido.trim() === '' || nombre.trim() === '' || 
    direccion.trim() === '' || telefono.trim() === '' || email.trim() === '') {
        alert("Por favor complete todos los campos.");
        return false;
    }
    // Crear un objeto con los datos del formulario
    var cliente = {
        id: id,
        apellido: apellido,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email
    };
    // Convertir el objeto a cadena JSON y guardarlo en localStorage
    localStorage.setItem('cliente', JSON.stringify(cliente));
/*
////////////////////////////////////////////////////////////////////////////
    // Ejemplo de almacenamiento en localStorage
    var usuario = {
        nombre: "Juan",
        edad: 30,
        email: "juan@example.com"
    };
    // Convertimos el objeto a cadena JSON antes de almacenarlo
    localStorage.setItem('usuario', JSON.stringify(usuario));
    // Recuperar y convertir de nuevo a objeto JSON
    var usuarioGuardado = localStorage.getItem('usuario');
    var usuarioObjeto = JSON.parse(usuarioGuardado);
    //Recuperar datos
    console.log(usuarioObjeto.nombre); // Imprime: Juan
    console.log(usuarioObjeto.edad);   // Imprime: 30
    console.log(usuarioObjeto.email);  // Imprime: juan@example.com
    //Eliminar datos
    localStorage.removeItem('usuario');
    //Eliminar todos los datos
    localStorage.clear();
////////////////////////////////////////////////////////////////////////////
*/
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a través de AJAX a un servidor

    // Solo como ejemplo, mostrar los datos en la consola
    console.log("Datos del formulario:");
    console.log(cliente);
    // Mensaje de confirmación (puedes personalizar según tus necesidades)
    alert("Datos del cliente guardados correctamente.");
    // Retorna false para evitar que el formulario se envíe normalmente
    return false;
}
