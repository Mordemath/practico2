import chalk from "../node_modules/chalk/source/index.js";
export default function VerTarea(i, tareas) {
    console.log(chalk.blueBright(`*************************************************************`));
    console.log(chalk.blueBright(`Tarea N° [${i + 1}]`));
    console.log(chalk.greenBright(`${tareas[i].Ttitulo}`));
}
