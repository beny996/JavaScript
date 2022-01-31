db.collection("chats")
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            let obj = doc.data();
            console.log(obj);
        });
    }
})
.catch(err => {
    console.log(`Desila se greska : ${err}`);
});