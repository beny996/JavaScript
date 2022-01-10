import {ime, zdravo} from "./moduli/zdravo.js";

// ime = "Zdravko"; - Nije moguce menjati vrednosti promenljivih iz modula
// let ime = "Glisa"; - Nije moguce imati "lokalnu" promenljivu  sa istim imenom
zdravo("Pera");
console.log(ime);