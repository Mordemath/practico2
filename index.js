"use strict";

import { AgregarTarea } from "./am.js"; //Diria que es un ABM pero solo da alta y modificaxd
import prompt_sync_1 from "prompt-sync";
import index_1 from "./node_modules/chalk/source/index.js";
import pausa_1 from "./pausa.js";
var Scannf = (0, prompt_sync_1)();
export const tareas = [];
var aux;
var op = "1";
var hayTareas = false;
export const fTarea = {
    Ttitulo: "vacio",
    Tcreacion: "vacio",
    Tdificultad: "vaico",
    Testado: "vacio",
    Tdescripción: "vacio",
    TultimaEd: "vacio",
    Tvencimiento: "Vacio",
};
while (op != "0") {
    console.log(index_1.blueBright("Hola Olivia\n¿Qué deseas hacer?\n"));
    console.log("[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir");
    op = Scannf("Opci\u00F3n: ");
    switch (op) {
        case "0":
            console.log(index_1.blueBright("Hasta la proxima Olivia..."));
            break;
        case "1":
            if (hayTareas) {
                MenuVer.MenuVer();
            }
            else {
                console.log(index_1.redBright("No hay tareas a\u00FAn..."));
            }
            break;
        case "2":
            if (hayTareas) {
                MenuVer.BuscarPor(tareas, "1", 0);
            }
            else {
                console.log(index_1.redBright("No hay tareas a\u00FAn..."));
            }
            break;
        default:
            console.log(index_1.redBright("Opci\u00F3n invalida..."));
            op = -1;
            break;
        case "3":
            aux = AgregarTarea("0", fTarea);
            if (aux.Ttitulo == " ") {
                console.log(index_1.redBright("Cancelado..."));
            }
            else {
                tareas.push(aux);
                console.log(index_1.greenBright("\u00A1Datos guardados!"));
                MenuVer.VerDetalles(tareas.length - 1, tareas);
                hayTareas = true;
            }
            break;
    }
    (0, pausa_1)();
    console.clear();
}
