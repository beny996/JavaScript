let sportista1 = {
    imePrezime: "Vukasin Mladzic",
    visina: 1.75,
    timovi: ["Zvezda", "FMP", "Cedevita"],
    brojTimova: function() {
        let br = 0;
        this.timovi.forEach(t => {
            br++;
        });
        return br;
    }
};

let sportista2 = {
    imePrezime: "Vukasin Babic",
    visina: 1.95,
    timovi: ["Buducnost", "Olimpija", "Zvezda", "Cedevita"],
    brojTimova: function() {
        let br = 0;
        this.timovi.forEach(t => {
            br++;
        });
        return br;
    }
};

let sportista3 = {
    imePrezime: "Milan Videnovic",
    visina: 1.98,
    timovi: ["Krka", "Mornar", "FMP", "Efes", "Denver"],
    brojTimova: function() {
        let br = 0;
        this.timovi.forEach(t => {
            br++;
        });
        return br;
    }
};

let sportista4 = {
    imePrezime: "Rade Zagorac",
    visina: 1.89,
    timovi: ["Buducnost", "Mornar", "Bayern", "Olympiakos", "Cibona"],
    brojTimova: function() {
        let br = 0;
        this.timovi.forEach(t => {
            br++;
        });
        return br;
    }
};

let sportista5 = {
    imePrezime: "Marko Simonovic",
    visina: 2.01,
    timovi: ["Krka", "Zvezda", "FMP", "Efes", "Denver", "Sakramento"],
    brojTimova: function() {
        let br = 0;
        this.timovi.forEach(t => {
            br++;
        });
        return br;
    }
};

let sportisti = [sportista1, sportista2, sportista3, sportista4, sportista5];


console.log(`Zadatak 1.`);
let prosecnaVisina = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(s => {
        suma += s.visina;
        br++;
    });
    return br != 0? suma / br : 0;
}

console.log(prosecnaVisina(sportisti));

console.log(`Zadatak 2.`);
let igraliZaTim = (niz, naziv) => {
    let br = 0;
    niz.forEach(s => {
        s.timovi.forEach(t => {
            if(t == naziv){
                br++;
            }
        });
    });
    return br;
};


console.log(igraliZaTim(sportisti, "Zvezda"));

console.log(`Zadatak 3.`);
let najmanjeTransfera = niz => {
    let min = Number.MAX_SAFE_INTEGER;
    let indeks = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i].brojTimova() < min){
            min = niz[i].brojTimova();
            indeks = i;
        }
    }
    return niz[indeks].imePrezime;
}

console.log(najmanjeTransfera(sportisti));

console.log(`Zadatak 4.`);
let visiTimPodela = niz => {
    let tim1 = [];
    let tim2 = [];
    if(niz.length % 2 == 0){
        for(let i = 0; i < niz.length / 2; i++){
            tim1 += niz[i];
        }
        for(let i = niz.length / 2; i < niz.length; i++){
            tim2 += niz[i];
        }
    }
    else{
        for(let i = 0; i < Math.ceil(niz.length / 2); i++){
            tim1 += niz[i];
        }
        for(let i = Math.ceil(niz.length / 2); i < niz.length; i++){
            tim2 += niz[i];
        }
    }
    let visina1 = 0;
    let visina2 = 0;
    tim1.forEach(i => {
        visina1 += i.visina;
    });
    tim2.forEach(i => {
        visina2 += i.visina;
    });
    if(visina1 > visina2){
        console.log(`Visi je tim 1`);
    }
    else if(visina2 > visina1){
        console.log(`Visi je tim 2`);
    }
    else{
        console.log(`Oba tima su iste prosecne visine`);
    }
}

visiTimPodela(sportisti);

console.log(`Zadatak 5.`);
let trenerVidi = niz => {
    let br = 1;
    for(let i = 1; i < niz.length; i++){
        if(niz[i -1].visina < niz[i].visina){
            br++;
        }
    }
    return br;
}

console.log(trenerVidi(sportisti));