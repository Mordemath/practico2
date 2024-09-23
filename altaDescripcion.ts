import pausa from "./pausa"
import prompt from "prompt-sync";
const Scannf = prompt();
export default function CargarDescripción(descripción: string, f: string) {
    console.clear();
    do {
        console.log(`[] Ingresa la descripción o solo [Enter] para cancelar.\n`);
        descripción = Scannf(`>`);
        if (descripción.length > 500) {
            console.log("La descripción no puede superar los 500 caracteres.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while ((descripción.length > 500) && descripción != "");
    if (descripción == "") {
        return `-1`;
    }
    else {
        console.clear();
        return descripción;
    }
}