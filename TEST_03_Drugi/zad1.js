let recepti = [
    { naziv: "kolac", sastojci: ["jaja", "brasno", "mleko", "secer"] },
    { naziv: "kajgana", sastojci: ["jaja", "so"] },
    { naziv: "pire",  sastojci: ["krompir", "mleko", "maslac", "so"] },
    { naziv: "espreso", sastojci: ["kafa", "mleko"] },
    { naziv: "kacamak", sastojci: ["palenta", "so", "mast"] }
  ];


recepti.forEach(recept =>{
    if(recept.naziv.includes("s") && recept.sastojci.length > 2){
        console.log(recept.naziv);
    }
})