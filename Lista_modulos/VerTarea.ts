import chalk from "../node_modules/chalk/source/index.js"
import { tarea } from '../Tarea.js';
export default function VerTarea(i: number, tareas: tarea[]) {
    console.log(chalk.blueBright(`*************************************************************`));
    console.log(chalk.blueBright(`Tarea N° [${i + 1}]`));
    console.log(chalk.greenBright(`${tareas[i].Ttitulo}`));
}