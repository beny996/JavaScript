console.log("1");
console.log("2");



setTimeout(() => {
    console.log("3");
}, 1000 * 4);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let div = document.getElementById("result");
let ispis = document.getElementById("ispis");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let input = document.getElementById("input");
let timer = null; // Ako stavimo let timer; bice undefined, a u ovom slucaju mu je vrednost null (bolje da se stavi null nego da se ne definise!!!)
let clock = null;
let timer2 = null;

btn1.addEventListener("click", function()  {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(timer === null){
        timer = setTimeout(() => {
            div.innerHTML = `${sati}.${minuti}.${sekunde}`;
            timer = null;
        }, 2000);
    }
});

btn2.addEventListener("click", function(){
    clearTimeout(timer);
    timer = null;
});

btn3.addEventListener("click", function() {
    if(clock === null){
        clock = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}.${minuti}.${sekunde}`;
        }, 1000 / 10)
    }
});

btn4.addEventListener("click", function() {
    clearInterval(clock);
    // ispis.innerHTML = "";
    clock = null;
});


let i = 1;
btn5.addEventListener("click", () => {
    if(timer2 === null){
        timer2 = setInterval(() => {
            input.value = i;
            i++;
        }, 1000)
    }
});

btn6.addEventListener("click", () => {
    clearInterval(timer2);
    timer2 = null;
});




// function ispis() {
//     console.log("3");
// }

// setTimeout(ispis, 1000 * 2);


// setTimeout(function(){
//     console.log("3");
// }, 1000 * 2);
