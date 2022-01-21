let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        //resolve("Nesto resolve"); // Sve okej proslo - ide resolve
        reject("Nesto reject"); // Nesto nije okej proslo - ide reject 
    });
    // console.log(obj);
    return obj; // vraca Promise objekat
}
// Ako je promise vratio resolve, realizuje se .then() grana
// Ako je promise vratio reject, realizuje se .catch() grana
getSomething().then(data => {
    console.log(`Aktivirana je .then grana ${data}`);
}).catch(err => {
    console.log(`Aktivirana je .catch grana ${err}`);
});