console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById("p1");
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName("container");
console.log(cont);
console.log(typeof cont);

for(let i = 0; i < cont.length; i++){
    console.log(cont[i]);
}

let contNiz = Array.from(cont);
contNiz.forEach(elem =>{
    console.log(elem);
});

let paragrafi = document.getElementsByTagName("p");
for(let i = 0; i < paragrafi.length; i++){
    console.log(paragrafi[i]);
}

let linkovi = document.getElementsByName("link");
for(let i = 0; i < linkovi.length; i++){
    console.log(linkovi[i]);
}

p1 = document.querySelector("#p1");
console.log(p1);

cont = document.querySelector(".container");
console.log(cont);

cont = document.querySelectorAll(".container");
console.log(cont);

for(let i = 0; i < cont.length; i++){
    console.log(cont[i]);
}

cont.forEach(elem =>{
    console.log(elem);
});

paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

linkovi = document.querySelectorAll("[name = 'link']");
console.log(linkovi);

//Zadatak 2. Dohvatiti prvi div tag sa klasom „error“.
let error = document.querySelector(".error");
console.log(error);

//Zadatak 3. Dohvatiti poslednji red u tabeli.
let red = document.querySelector("table tr:last-child");
console.log(red);

//Zadatak 4. Dohvatiti sve linkove na stranici.
let links = document.links;
console.log(links);

//2. Nacin
link = document.querySelectorAll("a");
console.log(link);

//Zadatak 5. Dohvatiti sve slike na stranici.
let slike = document.images;
console.log(slike);

//2. Nacin
slike = document.querySelectorAll("img");
console.log(slike);

p1.innerHTML += "Promenjen <span>tekst</span> paragrafa";

let sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach(link =>{
    //HTML atributi
    link.href = "https://www.google.com";
    link.target = "_blank";

    //CSS stilovi
    link.style.color = "green";
    link.style.textDecoration = "none";

    //Preko metode
    link.setAttribute('name', 'link2'); // isto kao i link.name = "link2"
});

//Zadatak 6. 

paragrafi.forEach(p => {
    p.innerHTML += "VAZNO!";
});

//Zadatak 7.

let divovi = document.querySelectorAll("div.error");

for(let i = 0; i < divovi.length; i++){
    divovi[i].innerHTML += "<h1>Greska</h1>";
}

//Zadatak 8.

let n = paragrafi.length;
for(let i = 0; i < n; i++){
    paragrafi[i].innerHTML += (i + 1) * (i + 1);
    paragrafi[i].style.color = "purple";
    if(i % 2 == 0){
        paragrafi[i].style.backgroundColor = "green";
    }
    else{
        paragrafi[i].style.backgroundColor = "red";
    }
}

//Zadatak 9.

for(let i = 0; i < slike.length; i++){
    slike[i].alt = "alternativni";
}

//Zadatak 10.

sviLinkovi.forEach((l, i) => {
    l.style.fontSize = "18px";
    l.style.textDecoration = "none";
    l.style.padding = "5px";
        if(i % 2 != 0){
            l.style.color = "purple";
            l.style.backgroundColor = "green";
        }
        else{
            l.style.color = "white";
            l.style.backgroundColor = "blue";
        }
});

//Zadatak 11.

let slikePng = document.querySelectorAll("img[src*='.png']");

slikePng.forEach(slika => {
    slika.style.border = "2px solid red";
});

//Zadatak 12.

sviLinkovi.forEach(l => {
    if(l.target == "_blank"){
        l.target = "_top";
    }
    else{
        l.target = "_blank";
    }
});

let imena = ["Vukasin", "Stefan", "Kristian", "Vladan", "Nikola"];

imena.forEach(ime => {
    //Kao linkovi
    if(ime[0] == "S"){// if(ime.startsWith("S")){
        document.body.innerHTML += `<a href = "https://www.google.com" target = "_blank">${ime}</a>`;
    }
    else{
        document.body.innerHTML += `<a href = "https://www.google.com">${ime}</a>`;
    }
});

//U tabeli
let tabela = `<table style = "border: 2px solid black">`;

imena.forEach(ime => {
    tabela += `<tr><td>${ime}</td></tr>`;
});

tabela += `</table>`;
document.body.innerHTML += tabela;

let tabelaTd = document.querySelectorAll("td");

tabelaTd.forEach(td => {
    td.style.border = "2px solid black";
    td.style.margin = "4px";
    td.style.padding = "5px";
});

//U listi
let lista = `<ul>`;
imena.forEach((ime, index) => {
    if(index % 2 == 0){
        lista += `<li style = "color: red">${ime}</li>`;
    }
    else{
        lista += `<li style = "color: blue">${ime}</li>`;
    }
});
lista += `</ul>`;
document.body.innerHTML += lista;

//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
paragrafi.forEach((p, i)=> {
    if(i % 2 == 0){
        p.classList.add("error");
    }
    else{
        p.classList.add("success");
    }
});

//Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
paragrafi.forEach((p, i) => {
    if(i % 2 == 0){
        p.style.fontSize = "15px";
    }
    else if(i % 3 == 0){
        p.style.fontSize = "25px";
    }
    else{
        p.style.fontSize = "20px";
    }
}); 

//Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
paragrafi.forEach(p => {
    if(p.textContent.includes("success")){
        p.classList.add("success");
    }
    else if(p.textContent.includes("error")){
        p.classList.add("error");
    }
});

//Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
paragrafi.forEach(p => {
    p.classList.toggle("error");
});