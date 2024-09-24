"use strict";

const _default = CargarDificultad;
export { _default as default };
import pausa_1 from "./pausa.js";
import prompt_sync_1 from "prompt-sync";
var Scannf = (0, prompt_sync_1)();
function CargarDificultad(dificultad, f) {
    console.clear();
    do {
        console.log("[] Ingresa la dificultad o solo [Enter] para cancelar:\nDificultad [F]acil / [M]edio / [D]ificil:");
        dificultad = Scannf(">");
        if (dificultad == " " && f == "1") {
            return " ";
        }
        if (dificultad != "F" && dificultad != "M" && dificultad != "D" && dificultad != "") {
            console.log("Opción invalida, opciónes validas: F, M, D.\nVuelva a intentarlo.");
            (0, pausa_1)();
            console.clear();
        }
    } while (dificultad != "F" && dificultad != "M" && dificultad != "D" && dificultad != "");
    if (dificultad == "") {
        return "-1";
    }
    else {
        switch (dificultad) {
            case "F":
                dificultad = "🌑🌑🌑";
                break;
            case "M":
                dificultad = "🌕🌕🌑";
                break;
            case "D":
                dificultad = "🌕🌕🌕";
                break;
        }
        console.clear();
        return dificultad;
    }
}
