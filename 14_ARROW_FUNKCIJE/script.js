function suma(a, b){
    return a + b;
}

console.log(suma(3, 5));
console.log(suma(0, 1));

// Anonimne funkcije

let suma2 = function(a, b){
    return a + b;
}

console.log(suma2(6, 6));

// Arrow funkcije (skracen zapis anonimnih funkcija)
let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(5, 3));

// Arrow funkcija za ispis poruke

let hello = () =>{
    console.log(`Hello world!`);
}

hello();

let pozdrav = (ime, prezime) => { 
    console.log(`Zdravo ${ime} ${prezime}`);
}

pozdrav("Vukasin", "Mladzic");
pozdrav("Vladan", "Stojic");

// Arrow funkcija kojoj se prosledjuje ime i godine korisnika, a ona ispisuje ime i da li je korisnik punoletan ili nije

let ispis = (ime, godine) => {
    if(godine < 18){
        let poruka = `Korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style = "color: blue">${poruka}</p>`;
    }
    else{
        let poruka = `Korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style = "color:green">${poruka}</p>`;
    }
}

ispis("Vukasin", 25);
ispis("Mika", 16);

//Zadatak 3.

let neparan = (n) => {
    if(n % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}

let neparan2 = neparan(3);
console.log(neparan2);

//Druga verzija

let paran = (n) => (n % 2 == 0) ? true : false;
console.log(paran(3));

//Jos krace 

let paran2 = n => (n % 2 == 0);
console.log(paran2(4));

//Zadatak 4.

let maks2 = (a, b) => {
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}


let maksDvaBroja = maks2(3, 8);
console.log(maksDvaBroja);


// Skracena verzija

let max2 = (a, b) => (a > b) ? a : b;
console.log(max2(6, 9));



let maks4 = (a, b, c, d) => {
    if(a > b && a > c && a > d){
        return a;
    }
    else if(b > a && b > c && b > d){
        return b;
    }
    else if(c > a && c > b && c > d){
        return c;
    }
    else if (d > a && d > b && d > c ){
        return d;
    }
    else{
        return "Pogresan unos ili su brojevi jednaki";
    }
}

let maksCetiriBroja = maks4(2, 2, 2, 4);
console.log(maksCetiriBroja);

//Skracena verzija

let max4 = (a, b, c, d) => max2(max2(a,b), max2(c, d));
console.log(max4(6, 19, -5, 5));

//Jos jedna verzija

let max4DN = (a, b, c, d) => max2(max2(max2(a, b), c), d);
console.log(max4DN(6, 19, -5, 5));

//Zadatak 5.

let slika = (link) => {
    document.body.innerHTML += `<img src = "${link}">`;
}
slika("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGDrl6cb6FxNvbUdtGZNnPSFgsoGeFq454A&usqp=CAU");

//Zadatak 6.

let boja = (color) => {
    document.body.innerHTML += `<p style = "color:${color}">Neki tekst</p>`;
}
boja("green");

//Zadatak 7.

let sedmiDan = n => {
    if(n % 7 == 0){
        console.log(`Danas je nedelja`);
    }
    else if(n % 7 == 1){
        console.log(`Danas je ponedeljak`);
    }
    else if(n % 7 == 2){
        console.log(`Danas je utorak`);
    }
    else if(n % 7 == 3){
        console.log(`Danas je sreda`);
    }
    else if(n % 7 == 4){
        console.log(`Danas je cetvrtak`);
    }
    else if(n % 7 == 5){
        console.log(`Danas je petak`);
    }
    else{
        console.log(`Danas je subota`);
    }
}

sedmiDan(13);

//Zadatak 8.

let deljivSaTri = (n, m) => {
    let br = 0;
    for(let i = n; i <= m; i++){
        if(i % 3 == 0){
            br++;
        }
    }
    return br;
}
console.log(deljivSaTri(1, 9));

//Zadatak 9.

let sumiraj = (n, m) => {
    let suma = 0;
    for(let i = n; i <= m; i++){
        suma += i;
    }
    return suma;
}
console.log(sumiraj(2, 6));