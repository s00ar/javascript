let miNumero = "18";

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) console.log("No es un número");
else {

    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}


edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
let resultado = edad > 18 ? "Eres mayor de edad" : "Eres menor de edad";