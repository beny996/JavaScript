//Zadatak 1.

// db.collection("customers")
// .orderBy("name")
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             let obj = d.data();
//             console.log(obj);
//         });
//     }
//     else{
//         console.log(`Nema korisnika sa zadatim uslovom`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska ${err}`);
// });

//Zadatak 2.

// db.collection("customers")
// .where("addresses", "array-contains", "Nis")
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             let obj = d.data();
//             console.log(obj);
//         });
//     }
//     else{
//         console.log(`Nema korisnika sa zadatim uslovom`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska ${err}`);
// });

//Zadatak 3.

// db.collection("customers")
// .where("salary", ">=", 500)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             let obj = d.data();
//             console.log(obj);
//         });
//     }
//     else{
//         console.log(`Nema korisnika sa zadatim uslovom`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska ${err}`);
// });

//Zadatak 4.

// db.collection("customers")
// .where("salary", ">=", 300)
// .where("salary", "<=", 800)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             let obj = d.data();
//             console.log(obj);
//         });
//     }
//     else{
//         console.log(`Nema korisnika sa zadatim uslovom`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska ${err}`);
// });

//Zadatak 5.

// db.collection("customers")
// .where("salary", "<", 900)
// .where("age", "==", 30)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             let obj = d.data();
//             console.log(obj);
//         });
//     }
//     else{
//         console.log(`Nema korisnika sa zadatim uslovom`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska ${err}`);
// });

//Zadatak 6.

// db.collection("customers")
// .where("addresses", "array-contains-any", ["Nis", "Beograd"])
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             let obj = d.data();
//             console.log(obj);
//         });
//     }
//     else{
//         console.log(`Nema korisnika sa zadatim uslovom`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska ${err}`);
// });

//Zadatak 7.

// db.collection("customers")
// .where("age", "in", [22, 25, 28])
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             let obj = d.data();
//             console.log(obj);
//         });
//     }
//     else{
//         console.log(`Nema korisnika sa zadatim uslovom`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska ${err}`);
// });


// TASKS

//Zadatak 1.

// db.collection("tasks")
// .orderBy("title")
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Zadatak 2.

// db.collection("tasks")
// .where("priority", "==", true)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Zadatak 3.
// let datum = new Date();

// let year = datum.getFullYear();
// let date1 = new Date(year, 0, 1); // 1. januar tekuce godine
// let date2 = new Date(year + 1, 0, 1); // 1. januar sledece godine
// let date1Timestamp = firebase.firestore.Timestamp.fromDate(date1);
// let date2Timestamp = firebase.firestore.Timestamp.fromDate(date2);
// db.collection("tasks")
// .where("due_date", ">=", date1Timestamp)
// .where("due_date", "<", date2Timestamp)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

// //Zadatak 4.
// let datumTimestamp = firebase.firestore.Timestamp.fromDate(datum);


// db.collection("tasks")
// .where("due_date", "<=", datumTimestamp)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Zadatak 5.


// db.collection("tasks")
// .where("start_date", ">", datumTimestamp)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Filmovi

//Zadatak 1.

// db.collection("movies")
// .where("director.name", "==", "Jon")
// .where("director.surname", "==", "Watts")
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Zadatak 2.

// db.collection("movies")
// .where("rating", ">=", 8)
// .where("rating", "<=", 9)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Zadatak 3.

// db.collection("movies")
// .where("genres", "array-contains-any", ["comedy", "tragedy", "drama"])
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Zadatak 4.

// db.collection("movies")
// .where("release_year", ">=", 2001)
// .where("release_year", "<=", 2100)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Zadatak 5.

// db.collection("movies")
// .orderBy("rating", "desc")
// .limit(1)
// .get()
// .then(snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(d => {
//             console.log(d.data());
//         });
//     }
//     else{
//         console.log(`Nema zadataka sa zadatim uslovima`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se neka greska ${err}`);
// });

//Zadatak 6.

db.collection("movies")
.where("genres", "array-contains", "comedy")
.orderBy("rating", "asc")
.limit(1)
.get()
.then(snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(d => {
            console.log(d.data());
        });
    }
    else{
        console.log(`Nema zadataka sa zadatim uslovima`);
    }
})
.catch(err => {
    console.log(`Desila se neka greska ${err}`);
});