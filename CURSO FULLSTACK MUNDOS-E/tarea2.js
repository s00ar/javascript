// TAREA 2 PAG38
let miArray = ["The Crow", "The Bang Bang Club", "The Fight Club"];
miArray.push("The Revenant");
console.log("El largo del array de peliculas es de " + miArray.length);
for (let index = 0; index < miArray.length; index++) {
    console.log(miArray[index] + " está " + (index + 1) + " en mí ranking de peliculas");
}