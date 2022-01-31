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

}

export default Chatroom;