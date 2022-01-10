function generateImage (src) {
    let slika = document.createElement("img");
    slika.src = src;
    slika.style.width = "200px";
    slika.style.height = "200px";
    return slika;
}

export{generateImage};