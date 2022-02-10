let hora = 18;
let saludo;
if (isNaN(hora)) {
    console.log("Ingrese un horario en valor numérico")
} else {
    if (hora > 6 && hora < 11) {
        saludo = "Buenos días";
    } else if (hora > 12 && hora < 19) {
        saludo = "Buenas tardes";
    } else if (hora > 18 && hora < 25) {
        saludo = "Buenas noches";
    } else if (hora > 0 && hora < 6) {
        saludo = "durmiendo";
    } else {
        saludo = "Hora no válida";
    }
    console.log(saludo);
}