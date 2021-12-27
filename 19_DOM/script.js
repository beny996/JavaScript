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