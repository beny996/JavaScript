let a = [1, 9, -6, 5, 0];

/*
function ispis (elem) {
    console.log(`Element niza je : ${elem}`);
}

a.forEach(ispis); 
*/

a.forEach(elem => {
    console.log(`Element niza je : ${elem}`);
})

//Odrediti zbir elemenata celobrojnog niza
let zbir = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
}

let zbirParnih = niz => {
    let suma = 0;
    niz.forEach(el => {
        if(el % 2 == 0){
        suma += el;
        }
    });
    return suma;
}

let zbirElParniIndeks = niz => {
    let suma = 0;
    niz.forEach((el, index) => {
        if(index % 2 == 0){
        suma += el;
        }
    });
    return suma;
}

console.log(zbir(a));
console.log(zbirParnih(a));
console.log(zbirElParniIndeks(a));

//Zadatak 3. Odrediti proizvod elemenata celobrojnog niza.

let proizvod = niz => {
    let proizvod = 1;
    niz.forEach(el => {
        proizvod *= el;
    })
    return proizvod;
}

console.log(proizvod(a));

//Zadatak 4. Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVrednost = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    })
    return (niz.length != 0) ? suma / niz.length : 0;
}

console.log(srednjaVrednost(a));

//Zadatak 5. drediti maksimalnu vrednost u celobrojnom nizu.

let maksimum = niz => {
    let maks = niz[0];
    niz.forEach(el => {
        if(maks < el){
            maks = el;
        }
    })
    return maks;
}

console.log(maksimum(a));

//Zadatak 6. Odrediti minimalnu vrednost u celobrojnom nizu.

let minimum = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(min > el){
            min = el;
        }
    })
    return min;
}

console.log(minimum(a));

//Zadatak 7. Odrediti indeks maksimalnog elementa celobrojnog niza.

let indeksMaksimum = niz => {
    let maks = maksimum(niz);
    let indeks = 0;
    niz.forEach((el, index) => {
        if(maks == el){
            indeks = index;
        }
    })
    return indeks;
}

console.log(indeksMaksimum(a));

//Zadatak 8. Odrediti indeks minimalnog elementa celobrojnog niza.

let indeksMinimum = niz => {
    let min = minimum(niz);
    let indeks = 0;
    niz.forEach((el, index) => {
        if(min == el){
            indeks = index;
        }
    })
    return indeks;
}

console.log(indeksMinimum(a));

//Zadatak 7. i 8. u jednoj funkciji

let indeks = (niz, cb) => {
    let element = cb(niz);
    let indeks = 0;
    niz.forEach((el, index) => {
        if(element == el){
            indeks = index;
        }
    })
    return indeks;
}

console.log(indeks(a, maksimum));

//Zadatak 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.


let veciOdSrednjeVrednosti = niz => {
    let arsr = srednjaVrednost(a);
    let br = 0;
    niz.forEach(el => {
        if(el > arsr){
            br++;
        }
    })
    return br;
}

console.log(veciOdSrednjeVrednosti(a));

//Zadatak 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPozitivni = niz => {
    let suma = 0;
    niz.forEach(el => {
        if(el > 0){
            suma += el;
        }
    })
    return suma;
}

console.log(zbirPozitivni(a));

//Zadatak 11.  Odrediti broj parnih elemenata u celobrojnom nizu.

let brojParni = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el % 2 == 0){
            br++;
        }
    })
    return br;
}

console.log(brojParni(a));

//Zadatak 12.  Odrediti broj parnih elemenata sa neparnim indeksom.

let brojParniNeparniIndeks = niz => {
    let br = 0;
    niz.forEach((el, index) => {
        if(index % 2 != 0 && el % 2 == 0) {
            br++;
        }
    })
    return br;
}

console.log(brojParniNeparniIndeks(a));

