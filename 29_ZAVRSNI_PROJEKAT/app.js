import Chatroom from "./chat.js";
import ChatUI from "./ui.js";

//DOM
let send = document.getElementById("send");
let inputSend = document.getElementById("inputSend")
let update = document.getElementById("update");
let inputUpdate = document.getElementById("inputUpdate");
let rooms = document.querySelectorAll("#rooms p");
let nameUpdate = document.querySelector("section p");
let ul = document.querySelector("ul");


//Objekti klasa
let chatroom = new Chatroom("general", "Jelena");
let chatUI = new ChatUI(ul);

//Postavljanje vrednosti u local storage
localStorage.setItem("nazivPromenljive", 5);
localStorage.setItem("nazivPromenljive", 6);
localStorage.setItem("nazivPromenljive", "Test string");
localStorage.setItem("x", 7);
localStorage.setItem("y", 10);

//Uzimanje vrednost iz local storage
let z = localStorage.x + localStorage.y;
console.log(z);

//Ispis dokumenata iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});




send.addEventListener("click", (e) => {
    e.preventDefault();
    let text = inputSend.value;
    if(text.trim() == ""){
        alert(`Nije moguce poslati praznu poruku`)
    }
    else{
        chatroom.addChat(text)
        .then(() => {
            inputSend.value = "";
        })
        .catch(err => {
            console.log(`Desila se neka greska : ${err}`);
        });
        
    }
    
});


update.addEventListener("click", (e) => {
    e.preventDefault();
    let username = chatroom.username;
    let text = inputUpdate.value;
    if(text == "admin" || text == "Admin"){
        let promptPass = prompt("Unesite lozinku");
        if(promptPass !== "admin1234"){
            alert("Pogresna lozinka");
        }
        else{
            alert("Uspesno ste se ulogovali kao admin");
            inputUpdate.value = "";
            chatroom.updateUsername(text);
        }
    }
    else{
        chatroom.updateUsername(text);
        if(username != chatroom.username){
            inputUpdate.value = "";
            nameUpdate.innerHTML = `Promenjeno korisnicko ime (${text})`;
            nameUpdate.style.display = "block";
            setTimeout(() => {
                nameUpdate.style.display = "none";
            }, 3000)
        }
        else{
            inputUpdate.value = "";
        }
    }
    
});


rooms.forEach(room => {
    room.addEventListener("click", () => {
        ul.innerHTML = "";
        let roomName = room.innerHTML.length -1;
        chatroom.updateRoom(room.innerHTML.slice(-roomName));
        chatroom.getChats(d => {
            chatUI.templateLI(d);
        });
    });
});

