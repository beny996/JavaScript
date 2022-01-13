import Pacijent from "./pacijent.js";

// let pacijent1 = new Pacijent("Vukasin", 175, 75);
// let pacijent2 = new Pacijent("Jovan", 187, 78);
// let pacijent3 = new Pacijent("Nikola", 192, 85);


let pacijent1 = new Pacijent("Jelena", 173, 66);
let pacijent2 = new Pacijent("Ana", 180, 72);
let pacijent3 = new Pacijent("Pera", 190, 140);
let pacijent4 = new Pacijent("Mika", 167, 57);
let pacijent5 = new Pacijent("Mila", 150, 70);

let pacijenti = [pacijent1, pacijent2, pacijent3, pacijent4, pacijent5];

// Ispisati podatke o pacijentu sa najmanjom težinom.

let btnMinTez = document.getElementById("minTez");
let spanMinTezRez = document.getElementById("minTezRez");
btnMinTez.addEventListener("click", () => {
    let min = pacijenti[0];
pacijenti.forEach(p => {
    if(p.tezina < min.tezina){
        min = p;
    }
});
spanMinTezRez.innerHTML = min.stampajListu();
// min.stampaj();

});

//Ispisati podatke o pacijentu sa najvećom bmi vrednošću.

let btnMaxBMI = document.querySelector("#maxBMI");
let maxBMIres = document.querySelector("#maxBMIrez");

btnMaxBMI.addEventListener("click", () => {
    let maxBMI = pacijenti[0]; //Pretpostavka je da prvi pacijent ima najveci BMI
    for(let i = 1; i < pacijenti.length; i++) {
        if(maxBMI.bmi() < pacijenti[i].bmi()){
            maxBMI = pacijenti[i];
        }
    }
    maxBMIres.innerHTML = maxBMI.stampajListu();
});