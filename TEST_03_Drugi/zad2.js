let visine = [
    { ime: "Pera", visina: 189, pol: "M", plate: [500, 700, 800, 900, 1100, 1300] },
    { ime: "Laza", visina: 192, pol: "M", plate: [400, 600, 800, 900, 1100, 1200]  }, 
    { ime: "Milka", visina: 164, pol: "Z", plate: [700, 900, 900, 900, 1000, 1100]  },
    { ime: "Mika", visina: 176, pol: "M", plate: [800, 800, 800, 900, 1100, 1300]  },
    { ime: "Sonja", visina: 178, pol: "Z", plate: [600, 700, 800, 900, 1100, 1600]  },
    { ime: "Milica", visina: 166, pol: "Z", plate: [500, 700, 800, 1000, 1100, 1400]  }
];

let prosek = niz => {
    let br1 = 0;
    let br2 = 0;
    let visinaM = 0;
    let visinaZ = 0;
    niz.forEach(elem => {
        if(elem.pol == "M"){
            br1++;
            visinaM += elem.visina;
        }
        else{
            br2++;
            visinaZ += elem.visina;
        }
    });
    return ((visinaM / br1) > (visinaZ / br2)) ? true : false;
}

console.log(prosek(visine));