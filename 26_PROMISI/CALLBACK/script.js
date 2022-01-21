let getTodos = (resource, callback) => {
    // 1. Kreiranje XML objekta
let request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200){
        //Sve okej
        // console.log(request.responseText);
        callback(request.responseText, undefined);
    }
    else if(request.readyState === 4){
        //Nesto nije okej
        // console.log("Could not fetch data");
        callback(undefined, "Could not fetch data");
    }
});

//2. Otvaranje kreiranog zahteva
request.open('GET', resource)

//3. Saljemo zahtev
request.send();
}

getTodos("../JSON/todos.json", (data, err) => {
    console.log("Callback okinuta");
    // Ako je err true, ispisati tu gresku
    if(err){
        console.log(err); // Ispisuje gresku
    }
    else{
        console.log(data); // Ispisuje podatke sa kojima moze dalje da raspolaze
    }
});

console.log("KRAJ");