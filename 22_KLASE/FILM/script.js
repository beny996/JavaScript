import Film from "./film.js";

let film1 = new Film ("Spider-Man: No Way Home", "Jon Watts", 2021, [8.2, 9.2, 7.9]);

let film2 = new Film ("No time to die", "Cary Joji Fukunaga", 2021, [9, 9.5, 8]);

let film3 = new Film ("Doctor Strange in the Multiverse of Madness", "Sam Raimi", 2022, [9, 8.3, 8.6]);

console.log(film2.godinaIzadnja);
film2.stampaj();

//Dodavanje ocene u film 1
film1.dodajOcenu(10);
film1.stampaj();

//Prikaz svih filmova u tabelici
let tabelica = 
`<table border= "1">
    <tr>
        <th>Naziv filma</th>
        <th>Reziser</th>
        <th>Godina izdanja</th>
        <th>Ocene</th>
        <th>Prosecna</th>
    </tr>
`;

let filmovi = [film1, film2, film3];
filmovi.forEach(f => {
    tabelica += 
    `<tr>
        <td>${f.naslov}</td>
        <td>${f.reziser}</td>
        <td>${f.godinaIzadnja}</td>
        <td>${f.ocene}</td>
        <td>${f.prosek()}</td>
    </tr>
    `;
});
tabelica += `</table>`;

document.body.innerHTML += tabelica;

console.log(film1.prosek());

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
let vekFilmova = (niz, vek) => {
    let vekPocetak = (vek - 1) * 100 + 1;
    let vekKraj = vek * 100;
    niz.forEach(f => {
        if(f.godinaIzadnja <= vekKraj && f.godinaIzadnja >= vekPocetak){
            console.log(f.naslov);
        }
    });
}

vekFilmova(filmovi, 21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let prosecnaOcena = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(f => {
        f.ocene.forEach(o => {
            suma += o;
            br++;
        });
    });
    return suma / br;
}

console.log(prosecnaOcena(filmovi));


//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
let najboljeOcenjeni = niz => {
    let max = niz[0].prosek();
    let indeks = 0;
    for(let i = 1; i < niz.length; i++){
        if(max < niz[i].prosek()){
            max = niz[i].prosek();
            indeks = i;
        }
    }
    return niz[indeks];
}

console.log(najboljeOcenjeni(filmovi));


//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
let osrednjiFilm = niz => {
    let prosek = prosecnaOcena(niz);
    let osrednji = Math.abs(prosek - niz[0].prosek());
    let indeks = 0;
    for(let i = 1; i < niz.length; i++){
        if(osrednji > Math.abs(prosek - niz[i].prosek())){
            osrednji = Math.abs(prosek - niz[i].prosek());
            indeks = i;
        }
    }
    return niz[indeks];
}   

console.log(osrednjiFilm(filmovi));


//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = niz => {
    let najbolji = najboljeOcenjeni(niz);
    let najslabija = najbolji.ocene[0];
    for(let i = 1; i < najbolji.ocene.length; i++){
        if(najslabija > najbolji.ocene[i]){
            najslabija = najbolji.ocene[i];
        }
    }
    console.log(najslabija);
}

najmanjaOcenaNajboljeg(filmovi);

filmovi.forEach(f => {
    console.log(f.prosek());
});

//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
let najmanjaOcena = niz => {
    let najmanja = niz[0].ocene[0];
    niz.forEach(f => {
        f.ocene.forEach(o => {
            if(najmanja > o){
                najmanja = o;
            }
        });
    });
    return najmanja;
}

console.log(najmanjaOcena(filmovi));


//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
let sveOcene = niz => {
    let ocene = [];
    niz.forEach(f => {
        ocene = ocene.concat(f.ocene); // Kad se radi concat tip podataka je object, kad se radi push tip je array!
    });
    return ocene;
}


let najcescaOcena = niz => {
    let pretpostavkaElem = niz[0];
    let pretpostavkaElemPojavljivanja = 1;
    for(let i = 0; i < niz.length; i++){
        let tekuci = niz[i];
        let tekuciBrPojavljivanja = 0;
        for(let j = 0; j < niz.length; j++){
            if(tekuci == niz[j]){
                tekuciBrPojavljivanja++;
            }
        }

        if(pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja){
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }
    }
    return pretpostavkaElem;
}

console.log(najcescaOcena(sveOcene(filmovi)));

//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
let iznadOcene = (ocena, niz) => {
    let boljeOcenjeni = [];
    niz.forEach(f => {
        if(f.prosek() > ocena){
            boljeOcenjeni.push(f);
        }
    });
    return boljeOcenjeni;
}

console.log(iznadOcene(8.8, filmovi));

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
let iznadOceneNoviji = (ocena, niz) => {
    let filmoviNiz = iznadOcene(ocena ,niz);
    let najnovijiGodina = filmoviNiz[0].godinaIzadnja;
    let najnoviji = filmoviNiz[0];
    filmoviNiz.forEach(e => {
        if(najnovijiGodina < e.godinaIzadnja){
            najnovijiGodina = e.godinaIzadnja;
            najnoviji = e;
        }
    });
    console.log(najnoviji);
}

iznadOceneNoviji(8.6, filmovi);