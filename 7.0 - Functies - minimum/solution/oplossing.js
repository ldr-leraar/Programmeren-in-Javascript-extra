function minimum(a, b) {
    if (a<b)
        return a;
    else
        return b;
}

let g1 = prompt("Geef getal 1: ")
let g2 = prompt("Geef getal 2: ")

console.log(`Minimum van ${g1} en ${g2} is ${minimum(g1,g2)}`)
