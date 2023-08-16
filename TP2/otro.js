const comprobarDatos = ()=>{
    nombre = document.getElementById(nombre).value;
    apellido = document.getElementById(apellido).value;
    dni = document.getElementById(dni).value;
    email = document.getElementById(email).value;
    direccion = document.getElementById(direccion).value;
    contraseña = document.getElementById(contraseña).value;
    confirmarContraseña = document.getElementById(confirmarContraseña).value;
    if(nombre.length <= 0){
        console.log("empanadas")
    }
}

botonLogIn = document.getElementById("logIn");

if (botonLogIn) {
    botonLogIn.addEventListener("click", () => {
        // Código que se ejecuta al hacer clic en el elemento
    });
} else {
    console.log("El elemento no fue encontrado en el documento.");
}