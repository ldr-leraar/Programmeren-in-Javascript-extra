function samengesteldeIntrest(bedrag, intrest, jaar) {
    let resultaat = bedrag;
    for (let index = 0; index < jaar; index++) {
        resultaat = resultaat + resultaat*intrest/100;
    }

    return resultaat;
}

let basisBedrag = Number(prompt("Basisbedrag:"));
let intrestVoet = Number(prompt("Intrestvoet:"));
let aantalJaar = Number(prompt("Aantal jaar:"));

console.log(`Als je een kapitaal van ${basisBedrag} eur spaart en je krijgt ${intrestVoet}% intrest per jaar, dan is je kapitaal na ${aantalJaar} jaar ${samengesteldeIntrest(basisBedrag, intrestVoet, aantalJaar).toFixed(2)} eur.`);