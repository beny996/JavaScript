class Auto {
    constructor(m, b, ik, bv = 5){
        this.marka = m; //Poziva se seter marka
        this.boja = b; //Poziva se seter boja
        this.imaKrov = ik; //Poziva se seter imaKrov
        this.brojVrata = bv; //Poziva se seter brojVrata
    }

    sviraj() {
        console.log("Beep! Beep!");
    }

    vozi(x) {
        // let m = this._marka;
        console.log(`Auto ${this.marka} vozi ${x} km`);
    }

    stampaj() {
        console.log(`Auto marke: ${this.marka}, boje: ${this.boja}, ima krov: ${this.imaKrov}`);
        //Svuda su pozvani geteri
    }

   //Seter i geter za polje _marka
   set marka(m) {
        let m1 = m.trim();
        if(m1.length > 0){
            this._marka = m1;
        }
        else{
            this._marka = "Auto";
        }
    }

    get marka(){
        return this._marka;
    }

    //Seter i geter za polje _boja
    set boja(b) {
        this._boja = b;
    }

    get boja() {
        return this._boja;
    }

    //Seter i geter za polje _imaKrov
    set imaKrov(ik) {
        if(ik === true || ik === false){
            this._imaKrov = ik;
        }
        else{
            this._imaKrov = false;
        }
    }

    get imaKrov() {
        return this._imaKrov;
    }

    //Seter i geter za polje _brojVrata
    set brojVrata(bv) {
        if(bv > 0){
            this._brojVrata = bv;
        }
        else{
            this._brojVrata = 1;
        }
    }

    get brojVrata() {
        return this._brojVrata;
    }
}

export default Auto;

//PRAKSA
//Jedino geteri i seteri pristupaju poljima
//Ostale metode, kao i objekti van klase zovu getere i setere

/*
 //Metoda koja postavlja vrednost polja _marka
 postaviMarku(m) {
    let m1 = m.trim();
    if(m1.length > 0){
        this._marka = m1;
    }
    else{
        this._marka = "Auto";
    }
}

//Metoda koja cita vrednost polja
dohvatiMarku() {
    return this._marka;
}

Moze obicne metode, ali vizuelno nije dobro
*/