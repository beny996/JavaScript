console.log(`Funkcije`);

function zdravo(){
    console.log(`Zdravo svete!!!`);
}

zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

///////////////////////////////////////////////////

function stampaj(tekst){
    console.log(tekst);
}

stampaj("Jelena");
stampaj("Stefan");
ime = "Sofija";
stampaj(ime);

////////////////////////////////////////////////////

function korisnik(ime, prezime){
    console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
}
korisnik("Stefan", "Stanimirovic");
korisnik("Jelena", "Matejic");

///////////////////////////////////////////////////

function korisnikGodine(ime, prezime, godine){
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina`);
}

korisnikGodine("Jelena", "Matejic", 27);
korisnikGodine("Pera", "Peric", 17)

////////////////////////////////////////////////////

function zbirDvaBroja(x, y){
    let zbir = x + y;
    console.log(zbir); // Ispisuje vrednost
}

zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);

////////////////////////////////////////////////////

function vratiZbirDvaBroja(a, b){
    let zbir = a + b;
    return zbir;
}

let rez = vratiZbirDvaBroja(50, 70);
console.log(rez);
rez = vratiZbirDvaBroja(16, 15);
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6); // rez1 = 10
let rez2 = vratiZbirDvaBroja(5, 7); // rez2 = 12
let rez3 = vratiZbirDvaBroja(rez1, rez2); // rez3 = 22
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4+5, 1+3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

////////////////////////////////////////////////////

function voda(temperatura){
    console.log(`Uneli ste temperaturu od ${temperatura} stepeni C`);
    if(temperatura <= 0){
        console.log(`Voda je u cvrstom agregatnom stanju`);
    }
    else if(temperatura >= 100){
        console.log(`Voda je u gasovitom agregatnom stanju`);
    }
    else{
        console.log(`Voda je u tecnom agregatnom stanju`);
    }

}
voda(3);
voda(100);

//Zadatak 2
function razlikaDvaBroja(a, b){
    razlika = a - b;
    console.log(razlika);
}

function proizvodDvaBroja(a, b){
    proizvod = a * b;
    console.log(proizvod);
}

function kolicnikDvaBroja(a, b){
    kolicnik = a / b;
    console.log(kolicnik);
}

razlikaDvaBroja(10, 6);
proizvodDvaBroja(5, 7);
kolicnikDvaBroja(25, 5);

//Zadatak 3.

// function neparan(n){
//     if(n % 2 != 0){
//         let tacno = "Tacno";
//         return tacno;
//     }
//     else{
//         let netacno = "Netacno";
//         return netacno;
//     }
// }

// let rezultat = neparan(13);
// console.log(rezultat);

//Zadatak 4.

function maks2(a, b){
    if(a > b){
        return a;
    }
    else if(b > a){
        return b;
    }
    else{
        return "Brojevi su jednaki"
    }
}

let rezultat2 = maks2(5, 5);
console.log(rezultat2);

function maks4(a, b, c, d){
    if(a > b && a > c && a > d){
        return a;
    }
    else if(b > a && b > c && b > d){
        return b;
    }
    else if(c > a && c > b && c > d){
        return c;
    }
    else if(d > a && d > b && d > c){
        return d;
    }
    else{
        return "Pogresan unos, ili su brojevi jednaki"
    }
}

let rezultat3 = maks4(1, 3, 7, 4);
console.log(`Najveci broj je ${rezultat3}`);
      
    


// let rezultat3 = maks4(3, 4, 7, 1);
// console.log(rezultat3);

////////////////////////////////////////////

//Zadatak 2. (Jelena) Napisati funkciju zbir koja računa zbir dva realna broja.  
//Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function racunaj(br1, br2, operacija){
    if(operacija == "+"){
        let rezultat = br1 + br2;
        console.log(rezultat);
    }
    else if(operacija == "-"){
        let rezultat = br1 - br2;
        console.log(rezultat);
    }
    else if(operacija == "*"){
        let rezultat = br1 * br2;
        console.log(rezultat);
    }
    else if(operacija == "/"){
        if(br2 == 0){
            console.log("Deljenje nulom nije dozvoljeno");
        }
        else{
            let rezultat = br1 / br2;
            console.log(rezultat);
        }
    }
    else{
        console.log("Pogresan unos");
    }
}

racunaj(5, 4, "+");
racunaj(5, 4, "-");
racunaj(5, 4, "*");
racunaj(5, 4, "/");
racunaj(5, 4, "%");
racunaj(5, 0, "/");

//Zadatak 3. (Jelena)
//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n){
    if(n % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}

let nep = neparan(3);
console.log(nep);

function neparan1(n){
    let rez = true;
    if(n % 2 == 0){
        rez = false;
    }
    return rez;
}

let nep1 = neparan1(4);
console.log(nep1);

function neparan2(n){
    return n % 2 != 0;
}

let nep2 = neparan2(164);
console.log(nep2);

//Zadatak 5.

function slika(adresa){
    document.body.innerHTML += `<img src = "${adresa}">`
}

slika("https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg");

//Zadatak 6.

function paragraf(boja){
    document.body.innerHTML += `<p style = "color: ${boja}">Tekst koji se boji</p>`
}

paragraf("blue");

//Zadatak 7.

function sedmiDan(n){

}

//Zadatak 8.

function deljivSaTri(n, m){
    let br = 0;
    for(let i = n; i <= m; i++){
        if(i % 3 == 0){
            console.log(i);
            br++;
        }
    }
    console.log(`Ima ${br} brojeva deljivih sa 3 u intervalu od ${n} do ${m}`);
}

deljivSaTri(2, 13);

//Zadatak 15.

/*Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).*/


function plata(n, a, d){
    for(i = 2; i <= n; i++){
        a += d;
    }
    return a;
}

let plata2 = plata(5, 500, 100);
console.log(plata2);
