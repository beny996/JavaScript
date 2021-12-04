// let a = 1;
// while(a <= 5){
//     console.log(`Na redu je broj ${a}`);
//     a++;
// }

//1.

// for(let i = 1; i <= 5; i++){
//     console.log(`For petlja, iteracija ${i}`);
// }

//2.

// i = 1
// for(i; i <= 5; i++){
//     console.log(`For petlja, iteracija ${i}`);
// }

//3.

// i = 1;
// for(; i <= 5; i++){
//     console.log(`For petlja, iteracija ${i}`);
// }

//////////////////////////////////////////////////////////////

console.log("2. Ispisati brojeve od 20 do 1");

// for(i= 20; i >= 1; i--){
//     console.log(i);
// }

//////////////////////////////////////////////////////////////

console.log("3. Ispisati parne brojeve od 1 do 20");

// 1. nacin
// for(i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// 2. nacin
// for(i = 2; i <= 20; i += 2){
//     console.log(i);
// }

console.log("5. Odrediti sumu brojeva on 1 do n");
// let n = 100;
// let suma = 0;
// for(i = 1; i <= n; i++){
//     suma += i;
// }
// console.log(suma);

//////////////////////////////////////

console.log("7. Odrediti proizvod brojeva od n do m");
// let n = 2;
// let m = 6;
// let p = 1;
// for(i = n; i <= m; i++){
//     p *= i; // p = p * i
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);

///////////////////////////////////////

// zadatak 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
//For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

// for(let i =1; i <= 3; i++){
//     document.body.innerHTML += `<img src = "${i}.jpg">`;
// }

////////////////////////////////////

// zadatak 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
// let br = 0;
// for(let i = 5; i <= 150; i++){
//     if(i % 13 == 0){
//         br++;
//     }
// }
// console.log(`Broj brojeva koji su deljivi sa 13 u intervalu od 5 do 150 je ${br}`);

//////////////////////////////////////////

// zadatak 12. Ispisati aritmetičku sredinu brojeva od n do m.
// let suma = 0;
// let br = 0;
// let n = 4;
// let m = 7;
// for(let i = n; i <= m; i++){
//     suma += i;
//     br++;
// }
// let sredina = suma / br;
// console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${sredina}`);

// zadatak 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

let n = 3;
let m = 88;
let suma = 0;
let br = 0;
for(let i = n; i <= m; i++){
    if(i % 10 == 4){
        suma += i;
        br++
    }
}
if(br == 1){
    console.log(`Imamo ${br} broj od ${n} do ${m} kojem je poslednja cifra 4 i on je ${suma}`);
}
else if(br <=4){
    console.log(`Imamo ${br} broja od ${n} do ${m} kojima je poslednja cifra 4 i njihova suma je ${suma}`);
}
else{
    console.log(`Imamo ${br} brojeva od ${n} do ${m} kojima je poslednja cifra 4 i njihova suma je ${suma}`);
}


// zadatak 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

// let n = 3;
// let m = 22;
// let a = 3;
// let suma = 0;
// for(let i = n; i <= m; i++){
//     if(i % a != 0){
//         suma += i;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

// 18. Odrediti sa koliko brojeva je deljiv uneti broj k

//For petljom
// let k = 6;
// br = 0;
// for(let i = 1; i <= k; i++ ){
//     if(k % i == 0){
//         br++;
//     }
// }
// console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

//While petljom
// k = 7;
// br = 0;
// i = 1;
// while(i <= k){
//     if(k % i == 0){
//         br++;
//     }
//     i++;
// }
// console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

// 19. Odrediti da li je dati prirodan broj k prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// Samo se nadovezujemo na prethodni zadatak
// if(br == 1){
//     console.log(`Broj nije ni prost ni slozen`);
// }
// else if(br == 2){
//     console.log(`Broj je prost`);
// }
// else{
//     console.log(`Broj je slozen`);
// }


///////////////////////////////////////////////////////


