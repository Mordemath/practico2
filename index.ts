import * as am from './am';
import prompt from 'prompt-sync';
import chalk from './node_modules/chalk/source/index';
import { tarea } from './Tarea';
import Pausa from './pausa'
let Scannf = prompt();
export let tareas: tarea[];
let aux: tarea;
let op: string | number = `1`;
let hayTareas: boolean = false;
while (op != `0`) {
    console.log(chalk.blueBright("Hola Olivia\n¿Qué deseas hacer?\n"));
    console.log("[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir");
    op = Scannf(`Opción: `);

    switch (op) {
        case `0`:
            console.log(chalk.blueBright(`Hasta la proxima Olivia...`));
            break;
        case `1`:
            if (hayTareas) {
                MenuVer.MenuVer();
            }
            else {
                console.log(chalk.redBright(`No hay tareas aún...`));
            }
            break;
        case `2`:
            if (hayTareas) {
                MenuVer.BuscarPor(tareas, `1`, 0);
            }
            else {
                console.log(chalk.redBright(`No hay tareas aún...`));
            }
            break;
        default:
            console.log(chalk.redBright(`Opción invalida...`));
            op = -1;
            break;
        case `3`:
            aux = am.AgregarTarea(`0`, false);
            if (aux.Ttitulo == ` `) {
                console.log(chalk.redBright(`Cancelado...`));
            }
            else {
                tareas.push(aux);
                console.log(chalk.greenBright(`¡Datos guardados!`));
                MenuVer.VerDetalles(tareas.length - 1, tareas);
                hayTareas = true;
            }
            break;
    }
    Pausa();
    console.clear();
}