// let i = 1;
// // console.log(i); //1
// // i++;
// // console.log(i); //2
// // i++;
// // console.log(i); //3
// // i++;
// // console.log(i); //4
// // i++;
// // console.log(i); //5
// // i++;

let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive i je ${i}`);

// zadatak 1. a) svi brojevi u istom redu (brojevi od 1 do 20)
i
let rez = "";
i = 1;
while(i <= 20){
    rez += i + " ";
    i++;
}
console.log(rez);


// zadatak 1. b) svi brojevi u posebnom redu (brojevi od 1 do 20)

let b = 1;
while(b <= 20){
    console.log(b);
    b++;
}



// zadatak 2. ispisati brojeve od 20 do 1

let k = 20;
while(k >=1){
    console.log(k);
    k--;
}

// zadatak 3. ispisati parne brojeve od 1 od 20
let m = 1;
while(m <= 20){
    if(m % 2 == 0){
    console.log(m);
    }
    m++;    
}

// zadatak 3. drugi nacin
m = 2;
while(m <= 20){
    console.log(m);
    m += 2;
}

// document.body.innerHTML += "<p style='color: red;'>1. paragraf</p>";
// document.body.innerHTML += "<p style='color: purple;'>2. paragraf</p>";
// document.body.innerHTML += "<p style='color: green;'>3. paragraf</p>";
// document.body.innerHTML += "<p style='color: red;'>4. paragraf</p>";
// document.body.innerHTML += "<p style='color: purple;'>5. paragraf</p>";
// document.body.innerHTML += "<p style='color: green;'>6. paragraf</p>";

let n = 16;
i = 1;
while(i <= n){

    if(i % 3 == 1){
        document.body.innerHTML += `<p style='color: red;'>${i}. paragraf</p>`;
    }
    else if(i % 3 == 2){
        document.body.innerHTML += `<p style='color: purple;'>${i}. paragraf</p>`;
    }
    else{
        document.body.innerHTML += `<p style='color: green;'>${i}. paragraf</p>`;
    }
    // Doda se paragraf
    i++;
}

//zadatak 6. Odrediti sumu brojeva od 1 do 100

i = 1;
let suma = 0;
while(i <= 100){
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}`);

// Odrediti sumu brojeva od 1 do n

n = 18;
i = 1;
suma = 0;
while(i <= n){
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

// Odrediti proizvod brojeva od n do m
n =3;
m = 6;

i = n;
let proizvod = 1;
while(i <= m){
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// zadatak 10. Odrediti sumu kvadrata parnih i sumu kubova neaprnih brojeva od n do m

n = 3;
m = 9;
i = n;
suma = 0;
while(i <= m){
    if(i % 2 == 0){
        suma = suma + i**2;
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} je ${suma}`);

suma = 0;
i = n;
while(i <= m){
    if(i % 2 == 1){
        suma = suma + i**3;
    }
    i++;
}
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} je ${suma}`);

// zadatak 11. odrediti sa koliko brojeva je deljiv uneti broj k

k = 10;


// zadatak 12. odrediti da li je dati prirodan broj n prost
