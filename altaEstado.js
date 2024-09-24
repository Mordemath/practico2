"use strict";

const _default = CargarEstado;
export { _default as default };
import pausa_1 from "./pausa.js";
import prompt_sync_1 from "prompt-sync";
var Scannf = (0, prompt_sync_1)();
function CargarEstado(estado, f) {
    console.clear();
    do {
        console.log("[] Ingresa el estado o solo [Enter] para cancelar:\n([P]endiente) / [E]n curso / [T]erminada / [C]ancelada:");
        estado = Scannf(">");
        if (estado == " " && f == "1") {
            return " ";
        }
        if (estado != "P" && estado != "E" && estado != "T" && estado != "C" && estado != "") {
            console.log("Opción invalida, opciónes validas: P, E, T, C.\nVuelva a intentarlo.");
            (0, pausa_1)();
            console.clear();
        }
    } while (estado != "P" && estado != "E" && estado != "T" && estado != "C" && estado != "");
    if (estado == "") {
        return "-1";
    }
    else {
        switch (estado) {
            case "P":
                estado = "Pendiente";
                break;
            case "E":
                estado = "En curso";
                break;
            case "T":
                estado = "Terminada";
                break;
            case "C":
                estado = "Cancelada";
                break;
        }
        console.clear();
        return estado;
    }
}
