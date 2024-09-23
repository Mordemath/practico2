import pausa from "./pausa"
import prompt from "prompt-sync";
const Scannf = prompt();
//CargarTitulo*************************************************************************************************************************
export default function CargarTitulo(titulo: string, f: string): string {
    console.clear();
    do {
        console.log(`[] Ingresa el titulo o solo [Enter] para cancelar.\n`);
        titulo = Scannf(`>`);
        if (titulo == " " || titulo == "  " || titulo == "   ") {
            console.log("Eltitulo no puede estar vacío.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
        if (titulo.length > 100) {
            console.log("El titulo no puede superar los 100 caracteres.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while (titulo == " " || titulo == "  " || titulo == "   " || titulo.length > 100);
    if (titulo == "") {
        return `-1`;
    }
    else {
        console.clear();
        return titulo;
    }
}