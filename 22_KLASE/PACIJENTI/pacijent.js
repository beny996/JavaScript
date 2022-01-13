class Pacijent {
    constructor (i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    set ime(i) {
        this._ime = i;
    }

    get ime() {
        return this._ime;
    }

    set visina(v) {
        if(v > 0 && v <= 250) {
            this._visina = v;
        }
        else{
            this._visina = 170;
        }
    }

    get visina() {
        return this._visina;
    }

    set tezina(t) {
        if(t > 0 && t <= 550) {
            this._tezina = t;
        }
        else{
            this._tezina = 80;
        }
    }

    get tezina() {
        return this._tezina;
    }

    stampaj() {
        console.log(this);
    }

    stampajListu() {
        let htmlLista = 
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>
        `;
        return htmlLista;
    }

    bmi() {
        let visina = this.visina / 100;
        let tezina = this.tezina;
        let bmi = tezina / (visina * visina);
        return bmi;
    }

    kritican() {
        let bmi = this.bmi();
        if(bmi < 15 || bmi > 40){
            return true;
        }
        else{
            return false;
        }
    }



}

export default Pacijent;