let li = document.querySelectorAll("li");



//Prvi Nacin
// li.forEach(l => {
//     l.classList.add("kliknuto");
//     l.addEventListener("click", () => {
//         if(l.classList.contains("kliknuto")){
//             l.style.textDecoration = "line-through";
//             l.classList.toggle("kliknuto");
//         }
//         else{
//             l.style.textDecoration = "none";
//             l.classList.toggle("kliknuto");
//         }
//     });
// });


//Drugi Nacin
li.forEach(l => {
    l.addEventListener("click", () => {
        if(l.style.textDecoration == "line-through"){
            l.style.textDecoration = "none";
        }
        else{
            l.style.textDecoration = "line-through";
        }
    });
});