import Chatroom from "./chat.js";
import ChatUI from "./ui.js";

let chat1 = new Chatroom("general", "Jelena");
let chat2 = new Chatroom("js", "Stefan");
let chat3 = new Chatroom("test", "Nikola");
let chat4 = new Chatroom("homeworks", "Kristian");


let ul = document.querySelector("ul");
let chat = new ChatUI(ul);

chat1.getChats(d => {
    chat.templateLI(d);
});

let send = document.getElementById("send");
let inputSend = document.getElementById("inputSend")
let update = document.getElementById("update");
let inputUpdate = document.getElementById("inputUpdate");


send.addEventListener("click", (e) => {
    e.preventDefault();
    let text = inputSend.value;
    if(text.trim() == ""){
        alert(`Nije moguce poslati praznu poruku`)
    }
    else{
        chat1.addChat(text)
        .then(() => {
            inputSend.value = "";
        })
        .catch(err => {
            console.log(`Desila se neka greska : ${err}`);
        });
        
    }
    
});

let nameUpdate = document.querySelector("section p");


update.addEventListener("click", (e) => {
    e.preventDefault();
    let text = inputUpdate.value;
    if(text == "admin" || text == "Admin"){
        let promptPass = prompt("Unesite lozinku");
        if(promptPass !== "admin1234"){
            alert("Pogresna lozinka");
        }
        else{
            alert("Uspesno ste se ulogovali kao admin");
            inputUpdate.value = "";
            chat1.updateUsername(text);
        }
    }
    else{
        chat1.updateUsername(text);
        inputUpdate.value = "";
        nameUpdate.innerHTML = `Promenjeno korisnicko ime (${text})`;
        nameUpdate.style.display = "block";
        setTimeout(() => {
            nameUpdate.style.display = "none";
        }, 3000)
    }
});

let rooms = document.querySelectorAll("#rooms p");

rooms.forEach(room => {
    room.addEventListener("click", () => {
        ul.innerHTML = "";
        let roomName = room.innerHTML.length -1;
        chat1.updateRoom(room.innerHTML.slice(-roomName));
        chat1.getChats(d => {
            chat.templateLI(d);
        });
    });
});

