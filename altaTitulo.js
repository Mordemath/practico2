"use strict";

const _default = CargarTitulo;
export { _default as default };
import pausa_1 from "./pausa.js";
import prompt_sync_1 from "prompt-sync";
var Scannf = (0, prompt_sync_1)();
//CargarTitulo*************************************************************************************************************************
function CargarTitulo(titulo, f) {
    console.clear();
    do {
        console.log("[] Ingresa el titulo o solo [Enter] para cancelar.\n");
        titulo = Scannf(">");
        if (titulo == " " || titulo == "  " || titulo == "   ") {
            console.log("Eltitulo no puede estar vacío.\nVuelva a intentarlo.");
            (0, pausa_1)();
            console.clear();
        }
        if (titulo.length > 100) {
            console.log("El titulo no puede superar los 100 caracteres.\nVuelva a intentarlo.");
            (0, pausa_1)();
            console.clear();
        }
    } while (titulo == " " || titulo == "  " || titulo == "   " || titulo.length > 100);
    if (titulo == "") {
        return "-1";
    }
    else {
        console.clear();
        return titulo;
    }
}
