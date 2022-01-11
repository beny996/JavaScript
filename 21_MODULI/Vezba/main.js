// import{generateList, generateItem as generateListItem} from "./modules/list.js";
// import{generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";

// let list = generateList(document.body);
// generateListItem(list, "slike/slika1.png");
// generateListItem(list, "slike/slika2.png");
// generateListItem(list, "slike/slika3.png");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "slike/slika1.png");
// generateTableItem(tr, "slike/slika2.png");
// generateTableItem(tr, "slike/slika3.png");

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";
import * as Div from "./modules/div.js";

console.log(List);

let list = List.generateList(document.body);
List.generateItem(list, "slike/slika1.png");
List.generateItem(list, "slike/slika2.png");
List.generateItem(list, "slike/slika3.png");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "slike/slika1.png");
Table.generateItem(tr, "slike/slika2.png");
Table.generateItem(tr, "slike/slika3.png");

let div = Div.generateDiv(document.body);
Div.generateItem(div, "slike/slika1.png");
Div.generateItem(div, "slike/slika2.png");
Div.generateItem(div, "slike/slika3.png");