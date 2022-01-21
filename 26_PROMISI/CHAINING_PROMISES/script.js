let getTodos = resource => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    //2. Otvaranje kreiranog zahteva
    request.open('GET', resource)

    //3. Saljemo zahtev
    request.send();

    //Vracam objekat promise
    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if(request.readyState === 4 && request.status === 200){
                //Sve okej
                // console.log(request.responseText);
                //callback(request.responseText, undefined);
                resolve(request.responseText);
            }
            else if(request.readyState === 4){
                //Nesto nije okej
                // console.log("Could not fetch data");
                //callback(undefined, "Could not fetch data");
                reject("Could not fetch data");
            }
        });
    });
    //return p;
}

//1. Zelim da se prvo ucita todos.json fajl, 
//2. pa onda da se ucita fruits.json fajl, 
//3. pa na kraju vegetables.json fajl

getTodos("../JSON/todos.json").then(data => {
    console.log("Promise todos resolved", data);
    return getTodos("../JSON/fruits.json"); // vracam promise na koji se odnosi naredni then
}).then(data => {
    console.log("Promise fruits resolved", data);
    return getTodos("../JSON/vegetables.json"); // vracam promise na koji se odnosi naredni then
}).then(data => {
    console.log("Promise vegetables resolved", data);
}).catch(err => {
    console.log("Promise rejected", err);
});

console.log("KRAJ");