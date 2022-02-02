class ChatUI {
    constructor(l) {
        this.list = l;
    }

    set list(l) {
        this._list = l;
    }

    get list() {
        return this._list;
    }

    templateLI(d) {
        let li = `<li>${d.username}: ${d.message} <br> ${this.formatDate(d)}</li>`;
        this.list.innerHTML += li;
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
        minute = String(minute).padStart(2, "0");
        if(day == new Date().getDate()){
            let dateFormat = `${hour}.${minute}`;
            return dateFormat;
        }
        else{
            let dateFormat = `${day}. ${month}. ${year} - ${hour}.${minute}`;
            return dateFormat;
        }
        
    }
}

export default ChatUI;