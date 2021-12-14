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

function neparan(n){
    if(n % 2 != 0){
        let tacno = "Tacno";
        return tacno;
    }
    else{
        let netacno = "Netacno";
        return netacno;
    }
}

let rezultat = neparan(13);
console.log(rezultat);

//Zadatak 4.

function maks2(a, b){
    if(a > b){
        let maks = a;
        return maks;
    }
    else{
        let maks = b;
        return maks;
    }
}

let rezultat2 = maks2(5, 3);
console.log(rezultat2);

function maks4(a, b, c, d){
    
}