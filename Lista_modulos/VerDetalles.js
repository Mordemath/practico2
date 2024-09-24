import chalk from "../node_modules/chalk/source/index.js";
export default function VerDetalles(i, tareas) {
    console.log(chalk.blueBright(`Esta es la tarea.`));
    console.log(chalk.blueBright(`*************************************************************`));
    console.log(chalk.blueBright(`Tarea N° [${i + 1}]`));
    console.log(chalk.greenBright(`Titulo: ${tareas[i].Ttitulo}`));
    console.log(chalk.greenBright(`Descripción: ${tareas[i].Tdescripción}`));
    console.log(chalk.greenBright(`Estado: ${tareas[i].Testado}`));
    console.log(chalk.greenBright(`Dificultad: ${tareas[i].Tdificultad}`));
    console.log(chalk.greenBright(`Vencimiento: ${tareas[i].Tvencimiento}`));
    console.log(chalk.greenBright(`Fecha de creación: ${tareas[i].Tcreacion}\n`));
    console.log(chalk.greenBright(`Ultima edición: ${tareas[i].TultimaEd}`));
}
