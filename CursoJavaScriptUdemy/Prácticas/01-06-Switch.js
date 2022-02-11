let numero = 1;
let numeroTexto = "Valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = "numero 1";
        break;
    case 2:
        nunmeroTexto = "numero 2";
        break;
    case 3:
        numeroTexto = "numero 3";
        break;
    default:
        numeroTexto = "Valor desconocido";
}


//meses y temporadas con switch

console.log(numeroTexto);
let mes = 4;
let estacion;
switch (mes) {
    case 1:
    case 2:
    case 12:
        estacion = "verano";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "otoño";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "invierno";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "primavera";
        break;
    default:
        estacion = "mes desconocido";
}