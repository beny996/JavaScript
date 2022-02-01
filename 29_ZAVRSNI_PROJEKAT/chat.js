class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats");
    }

    set room(r) {
        this._room = r;
    }

    get room() {
        return this._room;
    }

    set username(u) {
        let uTrim = u.trim();
        if(uTrim.length < 2 || uTrim.length > 10){
            alert("Nevalidno korisnicko ime!");
        }
        else{
            this._username = uTrim;
        }
    }

    get username() {
        return this._username;
    }

    async addChat(msg) {
        let vreme = new Date();
        let vremeTS = firebase.firestore.Timestamp.fromDate(vreme);
        
        let response = await this.chats.add({
            message: msg,
            username: this.username,
            room: this.room,
            created_at: vremeTS
        });
        return response; // Vracam promise i mogu za njega da kazem .then() i .catch()    
    }

    getChats(callback) {
        this.chats
        .where("room", "==", this.room)
        .orderBy("created_at", "asc")
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                
                // Ispisati dokumente koji su dodati u bazu
                if(change.type == "added"){
                    // console.log(change.doc.data());
                    callback(change.doc.data());
                }
            });
        });
    }

}

export default Chatroom;