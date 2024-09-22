import prompt from 'prompt-sync';
import chalk from './node_modules/chalk/source/index';
let Scannf = prompt();
export function Pausa(){
let a: string;
a = Scannf(chalk.yellowBright("Presione enter para continuar..."));
}