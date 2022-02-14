//TAREA 4 page 49

let nombre = "Pepe";

let genero = "masculino";

function getSport(nombre, genero) {
    if (genero == "femenino") {
        alert("Bienvenida " + nombre);
    } else if (genero == "masculino") {
        alert("Bienvenido " + nombre);
    } else {
        alert("Bienvenidx " + nombre);
    }
}

getSport(nombre, genero);

/* const user = {
    nombre: "",
    genero: "",
}
//PROBLEMAS: NO ME FUNCIONA SI PIDO LOS VALORES POR PROMPT Y TAMPOCO CUANDO QUIERO ACCEDER A LOS VALORES COMO PARTES DE UN OBJETO
function getSport(user.nombre, user.genero) {
    if (genero == "femenino") {
        alert("Bienvenida " + nombre);
    } else if (genero == "masculino") {
        alert("Bienvenido " + nombre);
    } else {
        alert("Bienvenidx " + nombre);
    }
}
user.nombre() = prompt("Ingrese su nombre");

user.genero() = prompt("Ingrese su género");*/