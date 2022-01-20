let request = new XMLHttpRequest();
// request.addEventListener("readystatechange", () => {
//     if(request.readyState == 1){
//         console.log("Uspostavljena konekcija");
//     }
//     else if(request.readyState == 2){
//         console.log("Poslat je zahtev serveru");
//     }
//     else if(request.readyState == 3){
//         console.log("Prihvata se odgovor - u statusu preuzimanja");
//     }
//     else if(request.readyState == 4){
//         console.log("Odgovor je preuzet: ", request.responseText);
//     }
// });
request.addEventListener("readystatechange", function() {
    if(this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
    else if(this.readyState === 4){
        console.log("could not fetch data");
        console.log(this.responseText);
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();

//Ispisati u konzoli one korisnike čiji website ima domen „.com“.
// let request1 = new XMLHttpRequest();

// request1.addEventListener("readystatechange", function() {
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText);
//         data.forEach(u => {
//             if(u.website.slice(-3) == "com"){
//                 console.log(u);
//             }
//         });
//     }
//     else if(this.readyState === 4){
//         console.log("could not fetch data");
//     }
// });

// request1.open("GET", "https://jsonplaceholder.typicode.com/users");
// request1.send();

// //Ispisati korisnike čije ime sadrži reč „Clementin“.
// let request2 = new XMLHttpRequest();

// request2.addEventListener("readystatechange", function() {
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText);
//         data.forEach(u => {
//             if(u.name.includes("Clementin")){
//                 console.log(u);
//             }
//         });
//     }
//     else if(this.readyState === 4){
//         console.log("could not fetch data");
//     }
// });

// request2.open("GET", "https://jsonplaceholder.typicode.com/users");
// request2.send();

// //Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
// let request3 = new XMLHttpRequest();

// request3.addEventListener("readystatechange", function() {
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText);
//         data.forEach(u => {
//             if(u.company.name.includes("LLC") || u.company.name.includes("Group")){
//                 console.log(u);
//             }
//         });
//     }
//     else if(this.readyState === 4){
//         console.log("could not fetch data");
//     }
// });

// request3.open("GET", "https://jsonplaceholder.typicode.com/users");
// request3.send();

// //Ispisati sve različite gradove u kojima rade ovi korisnici.
// let request4 = new XMLHttpRequest();

// request4.addEventListener("readystatechange", function() {
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText);
//         for(let i = 0; i < data.length; i++){
//             let br = 0;
//             for(let j = 0; j < data.length; j++){
//                 if(data[i].address.city == data[j].address.city){
//                     br++;
//                 }
//             }
//             if(br == 1){
//                 console.log(data[i].address.city);
//             }
//         }
//     }
//     else if(this.readyState === 4){
//         console.log("could not fetch data");
//     }
// });

// request4.open("GET", "https://jsonplaceholder.typicode.com/users");
// request4.send();

// //Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
// let request5 = new XMLHttpRequest();

// request5.addEventListener("readystatechange", function() {
//     if(this.readyState === 4 && this.status === 200){
//         let br = 0;
//         let data = JSON.parse(this.responseText);
//         data.forEach(u => {
//             if(u.address.geo.lat.startsWith("-") && u.address.geo.lng.startsWith("-")){
//                 br++;
//             }
//         });
//         console.log(br);
//     }
//     else if(this.readyState === 4){
//         console.log("could not fetch data");
//     }
// });

// request5.open("GET", "https://jsonplaceholder.typicode.com/users");
// request5.send();

let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function() {
        if(this.readyState === 4 && this.status === 200){
            // radi nesto kada je sve u redu
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if(this.readyState === 4){
            // // radi nesto kada je doslo do greske
            reject("Doslo je do greske");
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
}

let zad2 = niz => {
    niz.forEach(u => {
        if(u.website.includes(".com")){
            console.log(u.name);
        }
    });
}

let zad3 = niz => {
    niz.forEach(u => {
        if(u.name.includes("Clementin")){
            console.log(u.name);
        }
    });
}

let zad5 = niz => {
    let gradovi = [];
    niz.forEach(u => {
        if(!gradovi.includes(u.address.city)){
            gradovi.push(u.address.city)
        }
    });
    console.log(gradovi);
}

let ispisPorukeStranica = poruka => {
    document.body.innerHTML += `<p class = "error">${poruka}</p>`;
}

let ispisPorukekonzola = poruka => {
    console.log(poruka);
}

getUsers(zad2, ispisPorukeStranica);
getUsers(zad3, ispisPorukekonzola);
getUsers(zad5, ispisPorukeStranica);

getUsers(
    (niz) => {
        niz.forEach(u => {
            if(u.company.name.includes("Group") || u.company.name.includes("LLC")){
                console.log(u.name);
            }
        });
    }, 
    (poruka) => {
        document.body.innerHTML += `<p class="error">${poruka}</p>`;
    }
);


let getSportisti = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function() {
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if(this.readyState === 4){
            reject("Doslo je do greske");
        }
    });
    request.open("GET", "sportisti.json");
    request.send();
}

let prosecnaVisina = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(k => {
        suma += k.visina;
        br++;
    });
    console.log(`Prosecna visina kosarkasa je ${suma/br}`);
}

let najmanjeTransfera = niz => {
    let najmanje = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(najmanje.timovi.length > niz[i].timovi.length){
            najmanje = niz[i];
        }
    }
    console.log(najmanje.imePrezime);
}

let igraliZaLakerse = niz => {
    niz.forEach(k => {
        if(k.timovi.includes("Lakers")){
            console.log(k.imePrezime);
        }
    });
}

getSportisti(prosecnaVisina, ispisPorukeStranica);
getSportisti(najmanjeTransfera, ispisPorukeStranica);
getSportisti(igraliZaLakerse, ispisPorukeStranica);
