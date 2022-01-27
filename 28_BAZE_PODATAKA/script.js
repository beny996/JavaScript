//db je objekat "baze", njega vucemo iz html fajla
console.log(db);

//pristupanje kolekciji
let customers = db.collection("customers");
console.log(customers);

//pristupanje dokumentu
let doc1 = customers.doc("customer1");
console.log(doc1);

let doc2 = db.collection("tasks").doc("task1");
console.log(doc2);

/*
Za pristup kolekciji
db.collection("...").doc("...")
Kod dokumenata imamo sledece operacije :
    CRUD(Create, Read, Update, Delete)
    Create: doc.set(...)
    Read:   doc.get(...)
    Update: doc.update(...)
    Delete: doc.delte(...)
    Sve ove operacije kao rezultat vracaju promise, nakon njih lancano .then i .catch
*/

let obj = {
    name: "Vesna",
    age: 22,
    addresses: ["Nis", "Leskovac"],
    salary: 470.00
};

db.collection("customers").doc("customer4").set(obj)
.then(() => {
    console.log("Dodat novi dokument u kolekciju 'customers'");
    return db.collection("customers").doc("customer4").set(
        {height: 180},
        {merge: true}
    );    
})
.then(() => {
    console.log("Spojen dokument 'customer5' u kolekciju 'customers'");
})
.catch(error => {
    console.log("Greska prilikom dodavanja novog dokumenta: ", + error);
});

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");

let obj2 = {
    title: "fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drugarima iz ITBootcamp-a"
};

db.collection("tasks")
.doc("task4")
.set(obj2)
.then(() => {
    console.log(`Uspesno dodat task!`);
})
.catch(msg => {
    console.log(`Neuspesno dodat task: ${msg}`);
});

//Update

db.collection("tasks")
.doc("task4")
.update({
    priority: true
})
.then(() => {
    console.log("Uspesno promenjeno polje u dokumentu");
})
.catch(err => {
    console.log(`Greska prilikom menjanja dokumenta : ${err}`);
});

//Delete
db.collection("customers")
.doc("customer4")
.delete()
.then(() => {
    console.log("Uspesno obrisan dokument!");
})
.catch(err => {
    console.log(`Greska prilikom brisanja dokumenta: ${err}`);
});

console.log("Test poruka");

//Drugi nacin za dodavanje dokumenata

db.collection("tasks")
.add({
    title:"Vezba za projekat",
    description: "Vezbanje JS-a",
    start_date: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
    due_date: null,
    priority: true
})
.then(() => {
    console.log("Uspesno dodat zadatak u kolekciju tasks");
})
.catch(err => {
    console.log(`Desila se greska ${err}`);
});