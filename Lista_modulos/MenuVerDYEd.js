import prompt from "prompt-sync";
import chalk from "../node_modules/chalk/source/index.js";
import { AgregarTarea } from "./am.js";
import VerDetalles from "./VerDetalles.js";
import BuscarPor from "./BuscarPor.js";
const Scannf = prompt();
export default function MenuVerDYEd(op, tareas) {
    console.log(`¿Deseas ver los detalles de alguna?`);
    console.log(`Introduce el numero de tarea para verla o solo [ENTER] para volver...\n`);
    op = Scannf(`>`);
    if (op != ``) {
        let indice = parseInt(op) - 1;
        let existeTarea = BuscarPor(tareas, `0`, parseInt(op));
        if (existeTarea != -1) {
            VerDetalles((indice), tareas);
            console.log("Si deseas editarla ingresa [E] o solo [ENTER] para volver\n");
            op = Scannf(`>`);
            if (op == `E` || op == `e`) {
                let aux = AgregarTarea(`1`, tareas[indice]);
                if (aux.Ttitulo != ` `) {
                    tareas[indice] = aux;
                }
                else {
                    console.log(chalk.redBright(`Cancelado...`));
                }
            }
        }
    }
    return tareas;
}
