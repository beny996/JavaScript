let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");

// function getItem(resource, resolve, reject) {
//     let request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", function() {
//         if(this.readyState === 4 && this.status === 200){
//             // Sve okej
//             let data = JSON.parse(this.responseText);
//             resolve(data);
//         }
//         else if(this.readyState === 4) {
//             // Nesto nije u redu
//             reject("Could not fetch data");
//         }
//     });
//     request.open('GET', resource);
//     request.send();
// }

// function submitForm1(event) {
//     event.preventDefault();
//     let capacity = inputOrder.value;
//     let ids = [];
//     getItem("json/stock.json", (data) => {
//         data.forEach(item => {
//             if(item.stock <= 0){
//                 ids.push(item.id);
//             }
//         });
//         getItem("json/weights.json", (data) => {
//             let totalWeight = 0;
//             data.forEach(item => {
//                 if(ids.includes(item.id)){
//                     totalWeight += item.weight;
//                 }
//             });
//             console.log(`Ukupna tezina proizvoda koji treba da se naruce je : ${totalWeight}`);
//             if(totalWeight > capacity){
//                 let par = document.createElement("p");
//                 par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
//                 par.style.color = "red";
//                 par.style.fontSize = "24px";
//                 par.style.fontWeight = "bold";
//                 divOrder.appendChild(par);
//             }
//             else{
//                 getItem("json/prices.json", (data) => {
//                     let totalPrice = 0;
//                     data.forEach(item => {
//                         if(ids.includes(item.id)){
//                             totalPrice += item.price;
//                         }
//                     });
//                     let par = document.createElement("p");
//                     par.innerHTML = `Ukupna cena porudzbine je : ${totalPrice} rsd`;
//                     par.style.color = "green";
//                     par.style.fontSize = "24px";
//                     par.style.fontWeight = "bold";
//                     divOrder.appendChild(par);
//                 }, (msg) => {console.log(msg);});
//             }
//         }, (msg) => {console.log(msg);});
//     }, (msg) => {console.log(msg);});
// }




/*
1. ideja : getItems() da se pozove jedan za drugim
    getItems("json/stock.json");
    getItems("json/weight.json");
    getItems("json/prices.json");
NETACNA ideja, jer je  svaki getItem asinhroni poziv, sto znaci da ne mora weights.json da se dohvati pre stock.json
(slicno i za prices.json)

2. ideja : redosled asinhtonih poziva se odvija preko callback funkcija
TACNA ideja, ali nije prakticna (callback hell)

3. ideja : Redosled asinhronih poziva se odvija preko promisa
*/


function getItemReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200){
            // Sve okej
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if(request.readyState === 4) {
            // Nesto nije u redu
            reject("Could not fetch data");
        }
        });
        request.open('GET', resource);
        request.send();
    });
}

function submitForm2(event) {
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItemReturnPromise("json/stock.json").then(data => {
        data.forEach(item => {
            if(item.stock <= 0){
                ids.push(item.id);
            }
        });
        return getItemReturnPromise("json/weights.json");
    }).then(data => {
        let totalWeight = 0;
        data.forEach(item => {
            if(ids.includes(item.id)){
                totalWeight += item.weight;
            }
        });
        if(totalWeight > capacity){
            let par = document.createElement("p");
            par.innerHTML = `Ukupna tezina proizvda je veca od kapaciteta kamiona`;
            par.style.color = "red";
            par.style.fontSize = "24px";
            par.style.fontWeight = "bold";
            divOrder.appendChild(par);     
        }
        else{
            return getItemReturnPromise("json/prices.json");
        }
    }).then(data => {
        if(data !== undefined){
            let tabela = `<table border = "2px solid black">`;
            let totalPrice = 0;
            data.forEach(item => {
                if(ids.includes(item.id)){
                    totalPrice += item.price;
                    tabela += `<tr><td>${item.item}</td><td>${item.price}</td></tr>`;
                }
            });
            tabela += `<tr><td>Ukupno : </td><td>${totalPrice}</td></tr>`;
            tabela += `</table>`;
            // let par = document.createElement("p");
            // par.innerHTML = `Ukupna cena porudzbine je : ${totalPrice} rsd`;
            // par.style.color = "green";
            // par.style.fontSize = "24px";
            // par.style.fontWeight = "bold";
            // divOrder.appendChild(par);
            divOrder.innerHTML += tabela;
        }
        
    }).catch(msg => {
        console.log(msg);
    });
}
formOrder.addEventListener('submit', submitForm2);

//ZADATAK 2!!!

let inputTekst = document.querySelector("#inputTekst");
let inputBroj1 = document.querySelector("#od");
let inputBroj2 = document.querySelector("#do");
let dugme2 = document.querySelector("#dugme2");
let div2 = document.querySelector("#div2");
let forma2 = document.querySelector("#div2 form");

function submitForm3(event) {
    event.preventDefault();
    let unos = inputTekst.value;
    let broj1 = parseFloat(inputBroj1.value);
    let broj2 = parseFloat(inputBroj2.value);
    // let lista = `<ul>`;
    let ids = [];
    let stock = [];
    let tabela = `<table border = "2px solid black">`;
    tabela += `<tr><td>Naziv</td><td>Stanje u magacinu</td><td>Cena</td></tr>`;
    console.log(unos, broj1, broj2);
    getItemReturnPromise("json/stock.json").then(data => {
        data.forEach(item => {
            if(item.item.includes(unos) && item.stock > 0){
                ids.push(item.id);
                stock.push(item.stock);
            }
        });
        return getItemReturnPromise("json/prices.json");
    }).then(data => {
        for(let i = 0; i < data.length; i++){
            if(ids.includes(data[i].id)){
                if(data[i].price >= broj1 && data[i].price <= broj2){
                    tabela += `<tr><td>${data[i].item}</td><td>${stock[i]}</td><td>${data[i].price}</td></tr>`;
                }
            }
        }
        // lista += `</li>`;
        // div2.innerHTML += lista;
        tabela += `</table>`;
        div2.innerHTML += tabela;
    }).catch(msg => {
        console.log(msg);
    });
}

forma2.addEventListener("submit", submitForm3);