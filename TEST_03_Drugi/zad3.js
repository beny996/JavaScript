let visine = [
    { ime: "Pera", visina: 189, pol: "M", plate: [500, 700, 800, 900, 1100, 1100], razlika: function () {
        let min = this.plate[0];
        let maks = this.plate[0];
        this.plate.forEach(plate => {
            if(min > plate){
                min = plate;
            }
            if(maks < plate){
                maks = plate;
            }
        });
        return maks - min;
    } },
    { ime: "Laza", visina: 192, pol: "M", plate: [400, 600, 800, 900, 1100, 1200], razlika: function () {
        let min = this.plate[0];
        let maks = this.plate[0];
        this.plate.forEach(plate => {
            if(min > plate){
                min = plate;
            }
            if(maks < plate){
                maks = plate;
            }
        });
        return maks - min;
    } }, 
    { ime: "Milka", visina: 164, pol: "Z", plate: [700, 900, 900, 900, 1000, 1100], razlika: function () {
        let min = this.plate[0];
        let maks = this.plate[0];
        this.plate.forEach(plate => {
            if(min > plate){
                min = plate;
            }
            if(maks < plate){
                maks = plate;
            }
        });
        return maks - min;
    } }, 
    { ime: "Mika", visina: 176, pol: "M", plate: [800, 800, 800, 900, 1100, 1300], razlika: function () {
        let min = this.plate[0];
        let maks = this.plate[0];
        this.plate.forEach(plate => {
            if(min > plate){
                min = plate;
            }
            if(maks < plate){
                maks = plate;
            }
        });
        return maks - min;
    } },
    { ime: "Sonja", visina: 178, pol: "Z", plate: [600, 700, 800, 900, 1100, 1600], razlika: function () {
        let min = this.plate[0];
        let maks = this.plate[0];
        this.plate.forEach(plate => {
            if(min > plate){
                min = plate;
            }
            if(maks < plate){
                maks = plate;
            }
        });
        return maks - min;
    } },
    { ime: "Milica", visina: 166, pol: "Z", plate: [500, 700, 800, 1000, 1100, 1400], razlika: function () {
        let min = this.plate[0];
        let maks = this.plate[0];
        this.plate.forEach(plate => {
            if(min > plate){
                min = plate;
            }
            if(maks < plate){
                maks = plate;
            }
        });
        return maks - min;
    } }
];

let najvecaRazlika = niz => {
    let razlika = niz[0].razlika();
    let index = 0;
    niz.forEach((radnik, i) => {
        if(razlika < radnik.razlika()){
            razlika = radnik.razlika();
            index = i;
        }
    });
    console.log(niz[index]);
}
najvecaRazlika(visine);