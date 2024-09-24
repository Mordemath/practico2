"use strict";

const _default = CargarDescripción;
export { _default as default };
import pausa_1 from "./pausa.js";
import prompt_sync_1 from "prompt-sync";
var Scannf = (0, prompt_sync_1)();
function CargarDescripción(descripción, f) {
    console.clear();
    do {
        console.log("[] Ingresa la descripci\u00F3n o solo [Enter] para cancelar.\n");
        descripción = Scannf(">");
        if (descripción.length > 500) {
            console.log("La descripción no puede superar los 500 caracteres.\nVuelva a intentarlo.");
            (0, pausa_1)();
            console.clear();
        }
    } while ((descripción.length > 500) && descripción != "");
    if (descripción == "") {
        return "-1";
    }
    else {
        console.clear();
        return descripción;
    }
}
