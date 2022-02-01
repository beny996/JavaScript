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
        let li = `<li>${d.username}: ${d.message} <br> ${d.created_at}</li>`;
        this.lista.innerHTML += li;
    }
}

export default ChatUI;