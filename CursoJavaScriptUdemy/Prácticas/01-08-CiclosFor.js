for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log("Fin ciclo for común")

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) console.log(i);
}
console.log("Fin ciclo for solo nros pares")

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
        break;
    }
}
console.log("Fin ciclo for para primer nro par")