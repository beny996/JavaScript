import Auto from "./auto.js";

let a1 = new Auto ("Citroen C4", "Crna", false);
//Nakon ovoga, a1 je objekat koji ima sledeca polja
//a1.marka (vrednost ovog polja je "Citroen C4");
//a1.boja (vrednost ovog polja je "Crna")
//a1.imaKrov (vrednost ovog polja je false)

console.log(a1);
console.log(typeof a1);

let a2 = new Auto ("Skoda Octavia", "Plava", true, 4);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto ("Fiat Punto", "Bela", false);
console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);
a3.brojVrata = 5;
console.log(a3);

let a4 = new Auto ("    ", undefined, true);
a4._imakrov = false;
console.log(a4);

a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

a1.vozi(50);
a4.vozi(200);

//U klasi pisemo polja i metode 
//Sva polja klase se definisu u constructor
//Mozemo dodavati proizvoljne metode
//Svi objekti klase imace polja i metode navedene u klasi

a1._brojVrata = 4; //Poljima se pristupa bez zagrade
a1.sviraj(); //Metode imaju zagrade, a izmedju zagrada se navode parametri (ako ih ima)
// a1._marka = "    Audi a4";
a1.marka = "   Audi a4"; //Zove se seter marka
console.log(a1);
console.log(a1.marka); //Zove se geter marka

let a5 = new Auto ("    Audi a4", "plava", false, 3);
console.log(a5);

a3.stampaj();