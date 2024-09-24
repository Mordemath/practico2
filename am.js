"use strict";

const _AgregarTarea = AgregarTarea;
export { _AgregarTarea as AgregarTarea };
import prompt_sync_1 from "prompt-sync";
import index_1 from "./node_modules/chalk/source/index.js";
import pausa_1 from "./pausa.js";
import altaTitulo_1 from "./altaTitulo.js";
import altaDescripcion_1 from "./altaDescripcion.js";
import altaEstado_1 from "./altaEstado.js";
import altaDificultad_1 from "./altaDificultad.js";
import altaVencimiento_1 from "./altaVencimiento.js";
var Scannf = (0, prompt_sync_1)();
function AgregarTarea(f, tareaM) {
    console.clear();
    var op = "1";
    var fechaHoy = new Date();
    var fechaActual = fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    var titulo = "----------";
    var estado = "Pendiente";
    var descripción = "----------";
    var vencimiento = "----------";
    var dificultad = "🌑🌑🌑";
    var ultimaEd = fechaActual;
    var creación = fechaActual;
    var Auxtarea;
    var tTituloVacio = true;
    var aux;
    if (f == "0") {
        Auxtarea = {
            Ttitulo: titulo,
            Tdescripción: descripción,
            Testado: estado,
            Tdificultad: dificultad,
            Tvencimiento: vencimiento,
            TultimaEd: ultimaEd,
            Tcreacion: creación,
        };
    }
    else {
        tTituloVacio = false;
        Auxtarea = {
            Ttitulo: tareaM.Ttitulo,
            Tdescripción: tareaM.Tdescripción,
            Testado: tareaM.Testado,
            Tdificultad: tareaM.Tdificultad,
            Tvencimiento: tareaM.Tvencimiento,
            TultimaEd: tareaM.TultimaEd,
            Tcreacion: tareaM.Tcreacion,
        };
    }
    //DEclaraciónes de variables inicializadas
    while (op != "0" && op != "-1") {
        if (f == "0") {
            console.log("\n\n");
            console.log(index_1.greenBright("Estas creando una tarea\n"));
            console.log("*************************\n1. Asignar titulo.\n2. Asignar descripci\u00F3n.\n3. Asignar Estado.\n4. Asignar dificultad.\n5. Asignar vencimiento.\n6. Guardar Cambios.\n7. Cancelar.");
        }
        else {
            console.log("\n\n");
            console.log(index_1.greenBright("Estas editando una tarea"));
            console.log("Si deseas mantener los valores de un atributo simplemente dejalo en blanco.");
            console.log("Si deseas dejar en blanco un atributo escribe un espacio.");
            console.log("*************************\n1. Editar titulo.\n2. Editar descripci\u00F3n.\n3. Editar Estado.\n4. Editar dificultad.\n5. Editar vencimiento.\n6. Guardar Cambios.\n7. Cancelar.");
        }
        op = Scannf("Opci\u00F3n: ");
        console.clear();
        switch (op) {
            case "1":
                aux = (0, altaTitulo_1)(titulo, f);
                if (aux == "-1") {
                    console.clear();
                    console.log(index_1.redBright("Cancelado..."));
                }
                else {
                    Auxtarea.Ttitulo = aux;
                    tTituloVacio = false;
                    console.log(index_1.greenBright("Titulo Guardado: ".concat(aux)));
                }
                break;
            case "2":
                aux = (0, altaDescripcion_1)(descripción, f);
                if (aux == "-1") {
                    console.clear();
                    console.log(index_1.redBright("Cancelado..."));
                }
                else {
                    if (aux == " " && f != "0") {
                        aux = descripción;
                    }
                    Auxtarea.Tdescripción = aux;
                    console.log(index_1.greenBright("Descripci\u00F3n guardada: ".concat(aux)));
                }
                break;
            case "3":
                aux = (0, altaEstado_1)(estado, f);
                if (aux == "-1") {
                    console.clear();
                    console.log(index_1.redBright("Cancelado..."));
                }
                else {
                    if (aux == " " && f != "0") {
                        aux = estado;
                    }
                    Auxtarea.Testado = aux;
                    console.log(index_1.greenBright("Estado guardado: ".concat(aux)));
                }
                break;
            case "4":
                aux = (0, altaDificultad_1)(dificultad, f);
                if (aux == "-1") {
                    console.clear();
                    console.log(index_1.redBright("Cancelado..."));
                }
                else {
                    if (aux == " " && f != "0") {
                        aux = dificultad;
                    }
                    Auxtarea.Tdificultad = aux;
                    console.log(index_1.greenBright("Dificultad guardada: ".concat(aux)));
                }
                break;
            case "5":
                aux = (0, altaVencimiento_1)(vencimiento, f).toString();
                if (aux == "-1") {
                    console.clear();
                    console.log(index_1.redBright("Cancelado..."));
                }
                else {
                    if (aux == " " && f != "0") {
                        aux = vencimiento.toString();
                    }
                    Auxtarea.Tvencimiento = aux;
                    console.log(index_1.greenBright("Vencimiento guardado: ".concat(aux)));
                }
                break;
            case "6":
                if (tTituloVacio) {
                    console.log(index_1.redBright("Primero debe ingresar un Titulo de tarea."));
                    break;
                }
                else {
                    console.log(index_1.greenBright("Datos guardados!"));
                    op = "0";
                }
                break;
            case "7":
                op = "-1";
                break;
            default:
                console.log(index_1.redBright("Opci\u00F3n invalida..."));
                break;
        }
        (0, pausa_1)();
        console.clear();
    }
    if (op != "-1") {
        if (f == "1") {
            Auxtarea.TultimaEd = fechaActual;
        }
        return Auxtarea;
    }
    else {
        Auxtarea.Ttitulo = " ";
        return Auxtarea;
    }
}
