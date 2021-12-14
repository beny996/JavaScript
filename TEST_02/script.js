//Zadatak 1.

let pocetak = 9;
let kraj = 17;
let datum = new Date();
let sat = datum.getHours();
let minut = datum.getMinutes();
let ostatak = 0;
if(sat < 9){
    console.log(`Radno vreme jos uvek nije pocelo`);
}
else if(sat >= 17){
    console.log(`Radno vreme je vec zavrseno`);
}
else if(sat >= 9 && sat < 17){
    ostatak = (kraj - sat) * 60 - minut;
}
let ostatakMinut = ostatak % 60;
let ostatakSat = (ostatak - ostatakMinut) / 60;
console.log(`Cvecarki je ostalo jos ${ostatakSat} sati i ${ostatakMinut} minuta do kraja radnog vremena`);



//Zadatak 2.

let tezina = 4500;
let tezinaKG = tezina / 1000;
let cena = 5;
let cenaBezPopusta = cena * tezina;
let cena1 = 0;
let cena5 = cenaBezPopusta - cenaBezPopusta * 0.05;
let cena10 = cenaBezPopusta - cenaBezPopusta * 0.1;
if(tezinaKG >= 1 && tezinaKG <= 2){
    cena1 = cena5;
}
else if(tezinaKG > 2){
    cena1 = cena10;
}
console.log(`Cena bez popusta je ${cenaBezPopusta}`);
console.log(`Cena sa popustom je ${cena1}`);

//Zadatak 3.

let ruze = 100;
let kupci = 25;
ostatak = ruze % kupci;
let ruze2 = 0;
if(ostatak != 0){
    ruze2 = kupci - ostatak;
}
else{
    ruze2 = 0;
}
console.log(`Broj ruza koje cvecarka treba da dokupi je ${ruze2}`);


//Zadatak 4.

let n = 5;
let m = 55;
let suma = 0;
let br = 0;
for(let i = n; i <= m; i++){
    if(i % 7 == 0 && i % 2 != 0){
        br++;
        suma += i;
    }
}
let proizvod = suma * br;
console.log(`Suma brojeva od ${n} do ${m} koji su deljivi sa 7 i neparni su je ${suma}`);
console.log(`Broj brojeva od ${n} do ${m} koji su deljivi sa 7 i neparni su je ${br}`);
console.log(`Proizvod sume i broja brojeva od ${n} do ${m} koji su deljivi sa 7 i neparni su je ${proizvod}`);

//Zadatak 5.

n = 2;
m = 15;
suma = 0;
br = 0;
for(i = n; i <=m; i++){
    if(i % 3 == 0 && i % 2 == 0){
        suma += i;
    }
    if(i % 10 == 3){
        br++;
    }
}
let razlika = suma - br;
console.log(`Razlika zbira parnih brojeva od ${n} do ${m} koji su deljivi sa 3 i broja brojeva od ${n} do ${m} kojima je poslednja cifra 3 je ${razlika}`);