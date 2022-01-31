import Chatroom from "./chat.js";

// db.collection("chats")
// .get()
// .then(snapshot => {
//     if(!snapshot.empty) {
//         snapshot.docs.forEach(doc => {
//             let obj = doc.data();
//             console.log(obj);
//         });
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska : ${err}`);
// });

let chat1 = new Chatroom("js", "Jelena");
let chat2 = new Chatroom("general", "Stefan");
let chat3 = new Chatroom("test", "Nikola");
let chat4 = new Chatroom("homeworks", "Kristian");

console.log(chat1.username, chat1.room); // Testiranje getera
chat1.username = "Jelenaa"; // Testiram seter za username
chat1.room = "general"; // Testiram seter za room
console.log(chat1.username, chat1.room) // Proveravam da li rade seteri

// chat1.addChat("Trening u sredu od 18h")
// .then(() => {
//     console.log("Uspesno dodat chat");
// })
// .catch(err => {
//     console.log(`Desila se neka greska : ${err}`);
// });

