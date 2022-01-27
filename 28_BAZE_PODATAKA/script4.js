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

// db.collection("tasks")
// .where("due_date", "")
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
let datum = new Date();

// db.collection("tasks")
// .where("due_date", "<", datum)
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

db.collection("tasks")
.where("start_date", ">", datum)
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