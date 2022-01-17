let ul = document.getElementById("lista");
let forma = document.querySelector("form");
let radio = document.querySelectorAll("input[type='radio']");
let inputTekst = document.getElementById("inputTekst");

inputTekst.addEventListener("keyup", e => {
e.preventDefault();
let noviLi = document.createElement("li");
if(e.keyCode == 13){
    let vrednost = inputTekst.value;
    vrednost = vrednost.trim();
    if(vrednost == "" || vrednost == null){
        alert(`Morate uneti tekst zadatka`);
    }
    else{
        noviLi.innerHTML = vrednost;
        if(radio[0].checked){
        ul.prepend(noviLi);
        }
        else{
        ul.appendChild(noviLi);
        }
    }
    inputTekst.value = "";
}
});

ul.addEventListener("click", e => {
    if(e.target.tagName == "LI"){
        e.target.remove();
    }
});


