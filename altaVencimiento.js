"use strict";

const _default = CargarVencimiento;
export { _default as default };
import pausa_1 from "./pausa.js";
import prompt_sync_1 from "prompt-sync";
var Scannf = (0, prompt_sync_1)();
function CargarVencimiento(vencimiento, f) {
    var año;
    var mes;
    var dia;
    var diasPorMes = [];
    var bisiesto = false;
    console.clear();
    //Pedimos el año**************************************************************************
    do {
        console.log("[] Ingresa el a\u00F1o de vencimiento o solo [Enter] para cancelar:\n");
        console.log("[Ejemplo: 2021]");
        año = Scannf(">");
        if (año == " " && f == "1") {
            return " ";
        }
        if (([año].length != 4 || isNaN(parseInt(año))) && año != "") {
            console.log("Año ingresado invalido, solo se admiten numeros de 4 digitos sin espacios.\nVuelva a intentarlo.");
            (0, pausa_1)();
            console.clear();
        }
        else {
            bisiesto = (parseInt(año) % 4 === 0 && (parseInt(año) % 100 !== 0 || parseInt(año) % 400 === 0));
        }
    } while ([año].length != 4 || isNaN(parseInt(año)) && año != "");
    if (año == "") {
        return "-1";
    }
    diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Ajustar febrero para años bisiestos
    if (bisiesto) {
        diasPorMes[1] = 29;
    }
    //Pedimos el mes**************************************************************************
    do {
        console.log("[] Ingresa el mes de vencimiento o solo [Enter] para cancelar:\n");
        console.log("[Ejemplo: 03]");
        mes = Scannf(">");
        if ((parseInt(mes) < 1 || parseInt(mes) > 12 || isNaN(parseInt(mes))) && mes != "") {
            console.log("Mes ingresado invalido, solo se admiten numeros del 1 al 12, de dos digitos y sin espacios.\nVuelva a intentarlo.");
            (0, pausa_1)();
            console.clear();
        }
    } while ((parseInt(mes) < 1 || parseInt(mes) > 12 || isNaN(parseInt(mes))) && mes != "");
    if (mes == "") {
        return "-1";
    }
    //Pedimos el día**************************************************************************
    do {
        console.log("[] Ingresa el d\u00EDa de vencimiento o solo [Enter] para cancelar:\n");
        console.log("[Ejemplo: 03]");
        dia = Scannf(">");
        if ((parseInt(dia) < 1 || parseInt(dia) > diasPorMes[parseInt(mes) - 1] || isNaN(parseInt(dia))) && dia != "") {
            console.log("Dia ingresado invalido, solo se admiten numeros del 1 al ".concat(diasPorMes[parseInt(mes) - 1], "de dos digitos sin espacios.\nVuelva a intentarlo."));
            (0, pausa_1)();
            console.clear();
        }
    } while ((parseInt(dia) < 1 || parseInt(dia) > diasPorMes[parseInt(mes) - 1] || isNaN(parseInt(dia))) && dia != "");
    if (dia == "") {
        return "-1";
    }
    else {
        vencimiento = [dia + "/" + mes + "/" + año].toString();
        console.clear();
        return vencimiento;
    }
}
