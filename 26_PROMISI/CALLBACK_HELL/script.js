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
        console.log(err); // Ispisuje gresku, ako je doslo do greske u todos.json fajlu
    }
    else{
        console.log(data); // Ispisuje podatke sa kojima moze dalje da raspolaze iz todos.json fajla

        //nakon sto su se ispisali podaci iz todos.json, pozivamo sledeci fajl, fruits.json
        getTodos('../JSON/fruits.json', (data, err) => {
            if(err){
                console.log(err); //ako je doslo do greske u fruits.json fajlu, ispisuje greske
            }
            else{
                console.log(data); //ispisuje podatke iz furits.json

                //nakon sto su se ispisali podaci iz furits.json, pozivamo sledeci fajl, vegetables.json
                getTodos('../JSON/vegetables.json', (data, err) => {
                    if(err){
                        console.log(err); // ispisuje gresku, ako je do greske doslo u vegetables.json fajlu
                    }
                    else{
                        console.log(data); // ispisuje podatke iz vegetables.json
                    }
                });
            }
        });
    }
});

console.log("KRAJ");