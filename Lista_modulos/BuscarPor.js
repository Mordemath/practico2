import chalk from "../node_modules/chalk/source/index.js";
import prompt from 'prompt-sync';
import VerTarea from "./VerTarea.js";
import VerDetalles from "./VerDetalles.js";
import { AgregarTarea } from "./am.js";
const Scannf = prompt();
export default function BuscarPor(tareas, op, i) {
    i = i - 1;
    switch (op) {
        case `0`: //Buscamos por indice en el array tareas*****************
            if (i > tareas.length || i < 0 || isNaN(i)) {
                console.log(chalk.redBright(`No se encuentran resultados para el indice ingresado...`));
                return -1;
            }
            return i;
        case `1`:
            while (op != ``) {
                console.log(chalk.greenBright(`Escriba el titulo o una palabra clave del titulo de tarea a buscar o [ENTER] para volver\n`));
                let clave = Scannf(`>`);
                if (clave != ``) {
                    let contador = 0;
                    for (let i = 0; i < tareas.length; i++) {
                        if (tareas[i].Ttitulo.includes(clave)) {
                            VerTarea(i, tareas);
                            contador = contador + 1;
                        }
                    }
                    if (contador == 0) {
                        console.log(chalk.redBright(`No se encontraron coincidencias...`));
                    }
                    else {
                        console.log(chalk.greenBright(`${contador} coincidencias encontradas...`));
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
                        console.clear();
                    }
                }
                else {
                    break;
                }
            }
            break;
    }
    return 1;
}
