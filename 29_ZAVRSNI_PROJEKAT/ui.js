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
        let li = `<li>${d.username}: ${d.message} <br> ${this.formatDate(d)}</li>`;
        this.lista.innerHTML += li;
    }

    formatDate(d) {
        let date = d.created_at.toDate();
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();
        day = String(day).padStart(2, "0");
        month = String(month).padStart(2, "0");
        let dateFormat = `${day}. ${month}. ${year} - ${hour}. ${minute}`;
        return dateFormat;
    }
}

export default ChatUI;