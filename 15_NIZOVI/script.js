let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];
console.log(numbers);

let random = [6, "Stefan", -8.8, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(random[4]);
console.log(random[4][1]);

cars[0] = "Mercedes";
console.log(cars);

//cars[0] = undefined; - nacin da se ukloni element iz niza 

for(let i = 0; i < cars.length; i++){  //Sablon za prolazak kroz sve elemente niza!
    console.log(cars[i]);
}

//Zadatak 2.

let brojevi = [1, -4, 12, 12];
let suma = 0;
for(let i = 0; i < brojevi.length; i++){
  suma += brojevi[i];
}
console.log(suma);

//Zadatak 3.

let proizvod = 1;
for(let i = 0; i < brojevi.length; i++){
    proizvod *= brojevi[i];
}
console.log(proizvod);

//Zadatak 4.

suma = 0;
let br = 0;
for(let i = 0; i < brojevi.length; i++){
    suma += brojevi[i];
    br++;
}
let arSr = suma / br;
console.log(arSr);

//Zadatak 5.

let maks = niz => Math.max(...niz);
console.log(maks(brojevi));


//Zadatak 6.

let min = niz => Math.min(...niz);
console.log(min(brojevi));


// 4'. Odrediti srednju vrednost parnih elemenata niza

let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for(let i = 0; i < brojevi.length; i++){
        if(brojevi[i] % 2 == 0){
            suma += brojevi[i];
            broj++;
        }
    }
    return (broj == 0) ? 0 : suma / broj;   
}

console.log(arSrParnih(brojevi));

//Zadatak 5. (2)

let maksimum = niz => {
    let najveci = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(najveci < niz[i]){
            najveci = niz[i];
        }
    }
    return najveci;
}

console.log(maksimum(brojevi));


//Zadatak 6. (2)

let minimum = niz => {
    let najmanji = brojevi[0];
    for(let i = 1; i < brojevi.length; i++){
        if(najmanji > brojevi[i]){
            najmanji = brojevi[i];
        }
    }
    return najmanji;
}

console.log(minimum(brojevi));


//Zadatak 7.

let maksimum2 = niz => {
    let najveci = brojevi[0];
    let indeksNajveci = 0;
    for(let i = 1; i < brojevi.length; i++){
        if(najveci < brojevi[i]){
            najveci = brojevi[i];
            indeksNajveci = i;
        }
    }
    return indeksNajveci;
}

console.log(maksimum2(brojevi));


//Zadatak 7. koliko maksimalnih elemeanta ima

let maksimum3 = niz => {
    let najveci = brojevi[0];
    let broj = 1;
}

//Zadatak 8.

let minimum2 = niz => {
    let najmanji = brojevi[0];
    let indeksNajmanji = 0;
    for(let i = 1; i < brojevi.length; i++){
        if(najmanji > brojevi[i]){
            najmanji = brojevi[i];
            indeksNajmanji = i;
        }
    }
    return indeksNajmanji;
}

console.log(minimum2(brojevi));

//Zadatak 9.

let brojVeci = niz => {
    let suma = 0;
    let br1 = 0;
    let br2 = 0;
    for(let i = 0; i < brojevi.length; i++){
        suma += brojevi[i];
        br1++;
    }
    let arSr = suma / br1;
    for(let i = 0; i < brojevi.length; i++){
        if(brojevi[i] > arSr){
            br2++;
        }
    }
    return br2;
}

console.log(brojVeci(brojevi));

//Zadatak 10.

let zbirPozitivni = niz => {
    let suma = 0;
    for(let i = 0; i < brojevi.length; i++){
        if(brojevi[i] > 0){
            suma += brojevi[i];
        }
    }
    return suma;
}

console.log(zbirPozitivni(brojevi));


//Zadatak 11.

let brojParni = niz => {
    let br = 0;
    for(let i = 0; i < brojevi.length; i++){
        if(brojevi[i] % 2 == 0){
            br++;
        }
    }
    return br;
}

console.log(brojParni(brojevi));

//Zadatak 12.

let brojParniNeparni = niz => {
    let br = 0;
    for(let i = 0; i < brojevi.length; i++){
        if(brojevi[i] % 2 == 0 && i % 2 != 0){
            br++;
        }
    }
    return br;
}

console.log(brojParniNeparni(brojevi));

//Zadatak 13.

let sumaParniIndeks = niz => {
    let suma = 0;
    for(let i = 0; i < brojevi.length; i++){
        if(i % 2 == 0){
            suma += brojevi[i];
        }
    }
    return suma;
}

console.log(sumaParniIndeks(brojevi));


//Zadatak 14.

let promenaZnaka = niz => {
    for(let i = 0; i < brojevi.length; i++){
        brojevi[i] = -brojevi[i];
    }
    return brojevi;
}

console.log(promenaZnaka(brojevi));


//Zadatak 15.

let promenaZnakaNeparniParni = niz => {
    for(let i = 0; i < brojevi.length; i++){
        if(brojevi[i] % 2 != 0 && i % 2 == 0){
            brojevi[i] = - brojevi[i];
        }
    }
    return brojevi;
}

console.log(promenaZnakaNeparniParni(brojevi));


//Zadatak 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = ["hleb", "mleko", "meso"];

let lista = niz => {
    let lista = `<ul> Lista za kupovinu`;
    for(let i = 0; i < niz.length; i++){
        lista += `<li>${niz[i]}</li>`;
    }
    lista += `</ul>`;
    document.body.innerHTML += lista;
}

lista(kupovina);


//Zadatak 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let timovi = ["Zvezda", "Partizan", "Cedevita", "FMP"];

let tabela = niz => {
    let tabela = `<table style = "background-color: cyan">`;
    for(let i = 0; i < niz.length; i++){
        tabela += `<tr><td style = "border: 1px solid black">${niz[i]}</td></tr>`;
    }
    tabela += `</table>`;
    document.body.innerHTML += tabela;
}

tabela(timovi);


//Zadatak 18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let slike = ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png"];

let prikazSlike = niz => {
    for(let i = 0; i < niz.length; i++){
        document.body.innerHTML += `<img src = "${niz[i]}">`;
    }
}

prikazSlike(slike);

//Zadatak 19. Ispisati dužinu svakog elementa u nizu stringova. 

let string = ["jedan", "dva", "trii", "cetiri", "pet"];

let duzinaString = niz => {
    for(let i = 0; i < niz.length; i++){
        console.log(niz[i].length);
    }
}

duzinaString(string);

//Zadatak 20. Odrediti element u nizu stringova sa najvećom dužinom.

let najduziString = niz => {
    let najduzi = niz[0].length;
    for(let i = 1; i < niz.length; i++){
        if(najduzi < niz[i].length){
            najduzi = niz[i].length;
        }
    }
    return najduzi;
}

console.log(najduziString(string));

//Ako treba da se ispise najduzi string!


let najduziStringIspis = niz => {
    let najduzi = niz[0].length;
    let najduzi2 = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(najduzi < niz[i].length){
            najduzi = niz[i].length;
            najduzi2 = niz[i];
        }
    }
    return najduzi2;
}

console.log(najduziStringIspis(string));

//Zadatak 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.


let prosecnaDuzina = niz => {
    let suma = 0;
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i].length;
        br++;
    }
    return br != 0 ?  suma / br : 0;
}

let veciOdProsecne = niz => {
    let prosek = prosecnaDuzina(string);
    let br = 0;
    for(let i = 0; i < niz.length; i++)
    if(niz[i].length > prosek){
        br++;
    }
    return br;
}

console.log(veciOdProsecne(string));

//Zadatak 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let sadrziA = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i].includes("a")){
            br++;
        }
    }
    return br;
}

console.log(sadrziA(string));

//Zadatak 22. Varijacija, koliko slova "a" ima u stringu

let brojKarakteraA = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        let element = niz[i];
        for(let j = 0; j < element.length; j++ ){
            if(element[j] == "a"){
                br++;
            }
        }
    }
    return br;
}

console.log(brojKarakteraA(string));
//Zadatak 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

let pocetnoA = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i][0] == "a" || niz[i][0] == "A"){
            br++;
        }
    }
    return br;
}

console.log(pocetnoA(string));