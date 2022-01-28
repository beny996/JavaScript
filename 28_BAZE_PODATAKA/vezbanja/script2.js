//Zadatak 1.
let movie2 = {
    title: "Spiderman : No way home",
    director: {
        name: "Jon",
        surname: "Watts"
    },
    release_year: 2021,
    genres: ["comedy", "action", "science-fiction"],
    rating: 8.7
};


//Dodavanje vise filmova iz niza filmova!

let movie3 = {
    title: "Spiderman : No way home",
    director: {
        name: "Jon",
        surname: "Wattss"
    },
    release_year: 2022,
    genres: ["comedy",  "science-fiction"],
    rating: 8.7
};

let filmovi = [movie2, movie3];

for(let i = 0; i < filmovi.length; i++) {
    db.collection("movies")
    .doc(`movie${i+2}`)
    .set(filmovi[i])
    .then(() => {
        console.log("Uspesno dodat film u kolekciju");
    })
    .catch(err => {
        console.log(`Desila se neka greska: ${err}`);
    });
}

db.collection("movies")
.doc("movie2")
.set(movie2)
.then(() => {
    console.log("Uspesno dodat film u kolekciju");
})
.catch(err => {
    console.log(`Desila se neka greska: ${err}`);
});

//Zadatak 2.

db.collection("movies")
.doc("movie1")
.update({
    release_year: 2022
})
.then(() => {
    console.log("Uspesno promenjen podatak o filmu");
})
.catch(err => {
    console.log(`Desila se neka greska: ${err}`);
});


//Zadatak 3.

db.collection("movies")
.doc("movie1")
.update({
    genres: firebase.firestore.FieldValue.arrayUnion("triller")
})
.then(() => {
    console.log("Uspesno dodat zanr filmu");
})
.catch(err => {
    console.log(`Desila se neka greska: ${err}`);
});

//Zadatak 4.

db.collection("movies")
.doc("movie1")
.update({
    genres: firebase.firestore.FieldValue.arrayRemove("comedy")
})
.then(() => {
    console.log("Uspesno obrisan zanr");
})
.catch(err => {
    console.log(`Desila se neka greska: ${err}`);
});

//Zadatak 5.

db.collection("movies")
.doc("movie1")
.update({
    "director.name" : "Vukasin"
})
.then(() => {
    console.log("Uspesno promenjeno ime rezisera");
})
.catch(err => {
    console.log(`Desila se neka greska: ${err}`);
});