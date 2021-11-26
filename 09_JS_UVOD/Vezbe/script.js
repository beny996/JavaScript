"use strict"; //Strict - mora pravilno da se kuca js kod
// Zadatak 1

let s = 15;
let m = 21;

let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo " +  odPonoci + " minuta");

let doPonoci = 24 * 60 - odPonoci;
//let doPonoci = (24 - s) * 60 -m;
console.log("Do ponoci je ostalo " + doPonoci + " minuta");

//Zadatak 2

let minOdPonoci = 921; 
//prvi nacin
//minOdPonoci = ____ * 60 + minSada
//minOdPonoci - minSada = ___ *  60
//(minOdPonoci - minSada) / 60 = ___
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log ("Sada je " + satSada + ":" + minSada );

//drugi nacin
// console.log(minOdPonoci / 60); - deljenje vraca realan broj
// console.log(Math.floor(minOdPonoci / 60)); - ceo broj manji ili jedank od rezultata
// console.log(Math.ceil(minOdPonoci / 60)); - ceo broj veci ili jednak rezultatu
// console.log(Math.round(minOdPonoci / 60)); - ceo broj zaokruzivanje
let satSada2 = Math.floor(minOdPonoci / 60);
let minSada2 = minOdPonoci % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);

//Zadatak 3

let cenaRobe = 1750;
let novcanica = 2000;

let kusur = (novcanica - cenaRobe);
console.log ("Kusur je " + kusur + " dinara.");

//Zadatak 6

let evro = 100;
let kurs = 117;

let dinar = evro * kurs;
console.log("Dobijamo " + dinar + " dinara");

let dinar2 = dinar / kurs;
console.log("Dobijamo " + dinar2 + " evra");

//Zadatak 7

evro = 150;
let evroDinar = 117;
let dinarDolar = 100;

let dolar = (evro * evroDinar) / dinarDolar;
console.log("Dobijamo " + dolar + " dolara");

let evro2 = (dolar * dinarDolar) / evroDinar;
console.log("Dobijamo " + evro2 + " evra");

//Zadatak 8

let celzijus = 35;
let farenhajt = celzijus * 1.8 + 32;
console.log("Temperatura u farenhajtima je " + farenhajt + " stepeni");

//Zadatak 9 

let kelvin = celzijus + 273.15;
console.log("Temperatura u kelvinima je " + kelvin + " stepeni");
