import prompt from "prompt-sync";
import chalk from "../node_modules/chalk/source/index.js"
import { AgregarTarea } from "./am.js";
import { tarea } from "../Tarea.js";
import VerDetalles from "./VerDetalles.js";
import BuscarPor from "./BuscarPor.js";
const Scannf = prompt();
export default function MenuVerDYEd(op: string, tareas: tarea[]): tarea[] {
    console.log(`¿Deseas ver los detalles de alguna?`);
    console.log(`Introduce el numero de tarea para verla o solo [ENTER] para volver...\n`);
    op = Scannf(`>`);
    if (op != ``) {
        let indice: number = parseInt(op) - 1;
        let existeTarea: number = BuscarPor(tareas, `0`, parseInt(op));
        if (existeTarea != -1) {
            VerDetalles((indice), tareas);
            console.log("Si deseas editarla ingresa [E] o solo [ENTER] para volver\n");
            op = Scannf(`>`);
            if (op == `E` || op == `e`) {
                let aux: tarea = AgregarTarea(`1`, tareas[indice]);
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