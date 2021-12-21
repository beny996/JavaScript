/*function ispisKonzola(niz) {
    let res = "";
    for(let i = 0; i < niz.length; i++){
        res += niz[i] + " ";
    }
    console.log(res);
}

function ispisHTML(niz) {
    let res = "";
    for(let i = 0; i < niz.length; i++){
        res += niz[i] + " ";
    }
    document.body.innerHTML += `<div>${res}</div>`;
}
*/

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
}

function ispisNiza(niz, cb) {
    let res = "";
    for(let i = 0; i < niz.length; i++){
        res += niz[i] + " ";
    }
    cb(res);
}   

let brojevi = [1, 9, -4, 9];
// ispisKonzola(brojevi);
// ispisHTML(brojevi);
ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);


//Isti zadatak samo se pozivaju anonimne funkcije

ispisNiza(brojevi, function(poruka) {
    console.log(poruka);
});

ispisNiza(brojevi, function(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

//Isti zadatak samo se pozivaju arrow funkcije

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`;
});


//////////////////////////////////

let maksimum = niz => {
    let najveci = niz[0];
    let br = 0;
    for(let i = 1; i < niz.length; i++){
        if(najveci < niz[i]){
            najveci = niz[i];
        }
    }
    return najveci;
}

let minimum = niz => {
    let najmanji = niz[0];
    let br = 0;
    for(let i = 1; i < niz.length; i++){
        if(najmanji > niz[i]){
            najmanji = niz[i];
        }
    }
    return najmanji;
}



let brojSvojstvoNiz = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if(s == niz[i]){
            br++;
        }
    }
    return br;
}

let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];

console.log(brojSvojstvoNiz(temperature, maksimum));
console.log(brojSvojstvoNiz(temperature, minimum));

