// TAREA 2 PAG38
var nombres = ["The Crow", "The Bang Bang Club", "The Fight Club"];
nombres.push("Revenant");
console.log("El largo del array de peliculas es de " +
    nombres.length);
for (let index = 0; index < (nombres.length); index++) {
    console.log(nombres[index] + " está " + (index + 1) + " en mí ranking de peliculas");

}