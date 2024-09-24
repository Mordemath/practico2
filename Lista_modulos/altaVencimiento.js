import pausa from "./pausa.js";
import prompt from "prompt-sync";
const Scannf = prompt();
export default function CargarVencimiento(vencimiento, f) {
    let año;
    let mes;
    let dia;
    let diasPorMes = [];
    let bisiesto = false;
    console.clear();
    //Pedimos el año**************************************************************************
    do {
        console.log(`[] Ingresa el año de vencimiento o solo [Enter] para cancelar:\n`);
        console.log(`[Ejemplo: 2021]`);
        año = Scannf(`>`);
        if (año == ` ` && f == `1`) {
            return ` `;
        }
        if (([año].length != 4 || isNaN(parseInt(año))) && año != "") {
            console.log("Año ingresado invalido, solo se admiten numeros de 4 digitos sin espacios.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
        else {
            bisiesto = (parseInt(año) % 4 === 0 && (parseInt(año) % 100 !== 0 || parseInt(año) % 400 === 0));
        }
    } while ([año].length != 4 || isNaN(parseInt(año)) && año != "");
    if (año == "") {
        return `-1`;
    }
    diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Ajustar febrero para años bisiestos
    if (bisiesto) {
        diasPorMes[1] = 29;
    }
    //Pedimos el mes**************************************************************************
    do {
        console.log(`[] Ingresa el mes de vencimiento o solo [Enter] para cancelar:\n`);
        console.log(`[Ejemplo: 03]`);
        mes = Scannf(`>`);
        if ((parseInt(mes) < 1 || parseInt(mes) > 12 || isNaN(parseInt(mes))) && mes != "") {
            console.log("Mes ingresado invalido, solo se admiten numeros del 1 al 12, de dos digitos y sin espacios.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while ((parseInt(mes) < 1 || parseInt(mes) > 12 || isNaN(parseInt(mes))) && mes != "");
    if (mes == "") {
        return `-1`;
    }
    //Pedimos el día**************************************************************************
    do {
        console.log(`[] Ingresa el día de vencimiento o solo [Enter] para cancelar:\n`);
        console.log(`[Ejemplo: 03]`);
        dia = Scannf(`>`);
        if ((parseInt(dia) < 1 || parseInt(dia) > diasPorMes[parseInt(mes) - 1] || isNaN(parseInt(dia))) && dia != "") {
            console.log(`Dia ingresado invalido, solo se admiten numeros del 1 al ${diasPorMes[parseInt(mes) - 1]}de dos digitos sin espacios.\nVuelva a intentarlo.`);
            pausa();
            console.clear();
        }
    } while ((parseInt(dia) < 1 || parseInt(dia) > diasPorMes[parseInt(mes) - 1] || isNaN(parseInt(dia))) && dia != "");
    if (dia == "") {
        return `-1`;
    }
    else {
        vencimiento = [dia + `/` + mes + `/` + año].toString();
        console.clear();
        return vencimiento;
    }
}
