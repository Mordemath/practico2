import pausa from "./pausa.js";
import prompt from "prompt-sync";
import * as index from "../index.js";
import chalk from "../node_modules/chalk/source/index.js";
import { AgregarTarea } from "./am.js";
import VerTarea from "./VerTarea.js";
import VerDetalles from "./VerDetalles.js";
import BuscarPor from "./BuscarPor.js";
const Scannf = prompt();
export default function MenuVer() {
    let tareas = index.tareas;
    let op = `-1`;
    while (op != `0`) {
        console.log(chalk.blueBright("¿Que tarea deseas ver?\n"));
        console.log("[1] Todas");
        console.log("[2] Pendientes");
        console.log("[3] En Curso");
        console.log("[4] Terminadas");
        console.log("[0] Volver");
        op = Scannf("Ingrese una opcion: ");
        switch (op) {
            case `1`:
                console.clear();
                console.log(chalk.blueBright(`Estas son todas tus [T]areas:`));
                for (let i = 0; i < tareas.length; i++) {
                    VerTarea(i, tareas);
                }
                break;
            case `2`:
                console.log(chalk.blueBright(`Estas son todas tus tareas [P]endientes:\n`));
                for (let i = 0; i < tareas.length; i++) {
                    if (tareas[i].Testado == `Pendiente`) {
                        VerTarea(i, tareas);
                    }
                }
                break;
            case `3`:
                console.log(chalk.blueBright(`Estas son todas tus tareas [E]n curso:\n`));
                for (let i = 0; i < tareas.length; i++) {
                    if (tareas[i].Testado == `En curso`) {
                        VerTarea(i, tareas);
                    }
                }
                break;
            case `4`:
                console.log(chalk.blueBright(`Estas son todas tus tareas [T]erminadas:\n`));
                for (let i = 0; i < tareas.length; i++) {
                    if (tareas[i].Testado == `Terminada`) {
                        VerTarea(i, tareas);
                    }
                }
                break;
            case `0`:
                break;
            default:
                console.log(chalk.redBright(`Opción invalida...`));
                op = `-1`;
                break;
        }
        if (op != `0` && op != `-1`) {
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
                            op = `-1`;
                        }
                    }
                    else {
                        op = `-1`;
                    }
                }
            }
            pausa();
        }
        console.clear();
    }
}
