console.log(`Logicki operatori`);

//1. negacija
//2. and
//3. or
//if(!true && true || false) -> (false && true || false) -> (false || false) -> false
//if( (!true && true) || false)

let pol = "m";
let god = 27;

if(pol == "m" && god >= 18){
    console.log("Osoba je muskog pola i punoletna je");
}
else if(pol ==  "m" && god < 18 && god >= 0){
    console.log("Osoba je muskog pola i maloletna je");
}
else if(pol == "z" && god >= 18){
    console.log("Osoba je zenskog pola i punoletna je");
}
else if(pol == "z" && god < 18 && god >= 0){
    console.log("Osoba je zenskog pola i maloletna je");
}
else{
    console.log("Pogresan unos");
}

/////////////////////////////////////////////////////////////

pol = "m";
if(pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž"){
    document.body.innerHTML = `<img src = "slike/z.png">`;
}
else if(pol == "m" || pol == "M"){
    document.body.innerHTML = `<img src = "slike/m.png">`;
}
else{
    document.body.innerHTML = `<p>Pogresan unos</p>`
}

/////////////////////////////////////////////////////////////

pol = "m";
god = "25";
if( (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 18){
    console.log("Osoba je zenskog pola i punoletna je");
}
else if( (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god < 18 && god >= 0){
    console.log("Osoba je zenskog pola i maloletna je");
}
else if( (pol == "m" || pol == "M") && god >= 18){
    console.log("Osoba je muskog pola i punoletna je");
}
else if( (pol == "m" || pol == "M") && god < 18 && god >= 0){
    console.log("Osoba je muskog pola i maloletna je");
}
else{
    console.log("Pogresan unos");
}