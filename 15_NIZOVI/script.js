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

let brojevi = [1, -4, 12, -6];
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
    let najveci = brojevi[0];
    for(let i = 1; i < brojevi.length; i++){
        if(najveci < brojevi[i]){
            najveci = brojevi[i];
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


