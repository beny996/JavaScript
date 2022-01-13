class Film {
    constructor (n, r, g, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzadnja = g;
        this.ocene = o;
    }

    set naslov(n) {
        this._naslov = n;
    }

    get naslov() {
        return this._naslov;
    }

    set reziser(r) {
        this._reziser = r;
    }

    get reziser() {
        return this._reziser;
    }

    set godinaIzadnja(g) {
        if(g > 1800) {
            this._godinaIzdanja = g;
        }
        else{
            this._godinaIzdanja = 1800;
        }
    }

    get godinaIzadnja() {
        return this._godinaIzdanja;
    }

    set ocene(o) {
        this._ocene = o;
    }

    get ocene() {
        return this._ocene;
    }

    //Dodavanje jedne ocene
    dodajOcenu(novaOcena) {
        this._ocene.push(novaOcena);
    }

    stampaj() {
        console.log(this);
    }
}

export default Film;