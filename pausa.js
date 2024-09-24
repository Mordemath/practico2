"use strict";

const _default = Pausa;
export { _default as default };
import prompt_sync_1 from "prompt-sync";
import index_1 from "./node_modules/chalk/source/index.js";
var Scannf = (0, prompt_sync_1)();
export function Pausa() {
    var a;
    a = Scannf(index_1.yellowBright("Presione enter para continuar..."));
}
