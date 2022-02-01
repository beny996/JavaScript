class ChatUI {
    constructor(l) {
        this.lista = l;
    }

    set lista(l) {
        this._lista = l;
    }

    get lista() {
        return this._lista;
    }

    templateLI(d) {
        let li = document.createElement("li");
        
    }
}

export default ChatUI;