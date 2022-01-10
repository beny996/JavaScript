import{generateList, generateListItem} from "./modules/list.js";
import{generateTable, generateTableRow, generateTableItem} from "./modules/table.js";

let list = generateList(document.body);
generateListItem(list, "slike/slika1.png");
generateListItem(list, "slike/slika2.png");
generateListItem(list, "slike/slika3.png");