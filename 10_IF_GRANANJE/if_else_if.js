let ocena = 3;
if(ocena == 5){
    console.log("Odlican 5");
}
else if(ocena == 4){
    console.log("Vrlodobar 4");
}
else if(ocena == 3){
    console.log("Dobar 3");
}
else if(ocena == 2){
    console.log("Dovoljan 2");
}
else if(ocena == 1){
    console.log("Nedovoljan 1");
}
else{
    console.log("Pogresan unos");
}

console.log("Kod nakon if else if");

//////////////////////////////////////


// zadatak 7.
let poeni = 62;
if(poeni < 50){
    console.log("Ucenik nije polozio");
}
else if(poeni > 50){
    console.log("Ucenik je dobio ocenu 6");
}
else if(poeni > 60){
    console.log("Ucenik je dobio ocenu 7");
}
else if(poeni > 70){
    console.log("Ucenik je dobio ocenu 8");
}
else if(poeni > 80){
    console.log("Ucenik je dobio ocenu 9");
}
else if(poeni > 90){
    console.log("Ucenik je dobio ocenu 10");
}
else{
    console.log("Ucenik nije polozio ispit");
}

// zadatak 8.
let datum = new Date();
let dan = datum.getDay();
// if(dan >= 1){
//     console.log("Radni dan");
// }
// else if(dan >= 2){
//     console.log("Radni dan");
// }
// else if(dan >= 3){
//     console.log("Radni dan");
// }
// else if(dan >= 4){
//     console.log("Radni dan");
// }
// else if(dan >= 5){
//     console.log("Radni dan");
// }
// else{
//     console.log("Vikend");
// }

if(dan == 0){
    console.log("Danas je vikend");
}
else if(dan == 6){
    console.log("Danas je vikend");
}
else{
    console.log("Danas je radni dan");
}

// zadatak 9.

let vreme = datum.getHours();
if(vreme < 12){
    console.log("Dobro jutro");
}
else if(vreme < 18){
    console.log("Dobar dan");
}
else{
    console.log("Dobro vece");
}

//zadatak 10.

let d1 = 1;
let m1 = 5;
let g1 = 1960;
let d2 = 7;
let m2 = 9;
let g2 = 2000;
if(g1 < g2){
    console.log("Prvi datum je raniji");
}
else if(g1 > g2){
    console.log("Drugi datum je raniji");
}
else if(m1 < m2){
    console.log("Prvi datum je raniji");
}
else if(m1 > m2){
    console.log("Drugi datum je raniji");
}
else if(d1 < d2){
    console.log("Prvi datum je raniji");
}
else if(d1 > d2){
    console.log("Drugi datum je raniji");
}



// zadatak 11. 


let sati = 8;
if(sati < 9){
    console.log("Firma ne radi");
}
else if(sati >= 17){
    console.log("Firma ne radi");
}
else{
    console.log("Firma radi");
}

// zadatak 12. POGLEDATI!!!!

let pocetak1 = 7;
let kraj1 = 10;
let pocetak2 = 8;
let kraj2 = 11;
if(kraj1 < pocetak2){
    console.log("Smene se ne preklapaju");
}
else if(kraj2 < pocetak1){
    console.log("smene se ne preklapaju");
}
else{
    console.log("Smene se preklapaju");
}

// zadatak 13.

let broj = 6;
if(broj % 2 == 0){
    console.log(`Broj ${broj} je paran broj`);
}
else{
    console.log(`Broj ${broj} je neparan broj`);
}



// zadatak 14.

let broj2 = 27;
if(broj2 % 3 == 0){
    console.log(`Broj ${broj2} je deljiv sa 3`);
}
else{
    console.log(`Broj ${broj2} nije deljiv sa 3`);
}

// zadatak 15.

let a = 5;
let b = 8;
if(a > b){
    console.log(`${a - b}`);
}
else{
    console.log(`${b - a}`);
}

// zadatak 16.

let k = -4;
if(k <= 0){
    k = k - 1; // isto kao i broj -- ili broj -= 1
    console.log(k);
}
else{
    k = k + 1; // isto kao i broj ++ ili broj += 1
    console.log(k);
}

// zadatak 17.

//Najveci broj
let a1 = 145;
let a2 = 65;
let a3 = 35;

let maks = a1;
if(maks < a2){
    maks = a2;
}
if(maks < a3){
    maks = a3;
}
console.log(`Najveci broj je ${maks}`);

// Najmanji broj

let min = a1;
if(min > a2){
    min = a2;
}
if(min > a3){
    min = a3;
}
console.log(`Najmanji broj je ${min}`);

//Srednji broj

let srednji = a1 + a2 + a3 - min - maks;
console.log(`Srednji broj je ${srednji}`);


// zadatak 18.

//1. nacin
let s = 15.3;
console.log(s % 1);
if(s % 1 == 0){
    console.log(`Broj ${s} je ceo broj`);
}
else{
    console.log(`Broj ${s} nije ceo broj`);
}

//2. nacin
s = 14.5;
console.log(Math.floor(s)); // Moze i sa zaokruzivanjem round i ceil
if(Math.floor(s) == s){
    console.log(`Broj ${s} je ceo broj`);
}
else{
    console.log(`Broj ${s} nije ceo broj`);
}
