console.log("If_else grananje");

if(true){
    console.log("Uslov je ispunjen");
}
else{
    console.log("Uslov nije ispunjen");
}

if(false){
    console.log("Uslov je ispunjen");
}
else{
    console.log("Uslov nije ispunjen");
}

//////////////////////////////////////////////

a = 10;
b = 7;
if(a < b){
    console.log(`Broj ${a} je strogo manji od broja ${b}`);
}
else{
    console.log(`Broj ${a} je veci ili jednak broju ${b}`);
}

///////////////////////////////////////

let god = 15;
if(god >= 18){
    console.log("Osoba je punoletna");
}
else{
    console.log("Osoba je maloletna");
}

//zadatak 1.

a = 8;
b = 7;
if(a < b){
    console.log(`a je manji broj i iznosi ${a}, b je veci broj i iznosi ${b}`);
    
}
else{
    console.log(`a je veci broj i iznosi ${a}, b je manji broj i iznosi ${b}`);
}

//zadatak 2.

let temp = -1;
if(temp >= 0){
    console.log(`Tempretaura je u plusu i iznosi ${temp}`);
}
else{
    console.log(`Temperatura je u minisu i iznosi ${temp}`);
}

//zadatak 4.

let datum = new Date();
let sat = datum.getHours;
if(sat < 12){
    console.log("Sada je jutro");
}
else{
    console.log("Sada je popodne");
}

//zadatak 5.

let godina = datum.getFullYear();
let godina2 = 1996;
if(godina - godina2 >= 18){
    console.log("Osoba je punoletna");
}
else{
    console.log("Osoba je maloletna");
}

//zadatak 6.

let b1 = 5;
let b2 = 9;
let b3 = 7;

// ako je moja prepostavka losa, uradim njen update
let maks = b1; // pretpostavka
if(maks < b2){
    maks = b2;
}

if(maks < b3){
    maks = b3;
}

document.body.innerHTML = `<p> ${maks} </p>`;
//zadatak 2. - Jelena

let tempe = 10;
if(tempe >= 0){
    document.body.innerHTML += (`<p style = "color: red";>temperatura je u plusu i iznosi ${tempe} stepeni</p>`);
}
else{
    document.body.innerHTML += (`<p style = "color: blue";>temperatura je u minusu i iznosi ${tempe} stepeni</p>`)
}

//zadatak 3.

let pol = "M";
if(pol == "m"){
    // prikazi avatar muskarca
    document.body.innerHTML += `<img src ="slike/m.png">`;
}
else{
    // prikazi avatar zene
    document.body.innerHTML += `<img src ="slike/z.png">`;
}
