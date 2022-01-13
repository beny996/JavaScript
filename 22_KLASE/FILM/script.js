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
    </tr>
    `;
});
tabelica += `</table>`;

document.body.innerHTML += tabelica;