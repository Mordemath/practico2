import pausa from "./pausa"
import prompt from "prompt-sync";
const Scannf = prompt();
export default function CargarEstado(estado: string, f: string): string {
    console.clear();
    do {
        console.log(`[] Ingresa el estado o solo [Enter] para cancelar:\n([P]endiente) / [E]n curso / [T]erminada / [C]ancelada:`);
        estado = Scannf(`>`);
        if(estado == ` ` && f == `1`){
            return ` `;
        }
        if (estado != "P" && estado != "E" && estado != "T" && estado != "C" && estado != "") {
            console.log("Opción invalida, opciónes validas: P, E, T, C.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while (estado != "P" && estado != "E" && estado != "T" && estado != "C" && estado != "");
    if (estado == "") {
        return `-1`;
    }
    else {
        switch (estado) {
            case `P`:
                estado = `Pendiente`;
                break;
            case `E`:
                estado = `En curso`;
                break;
            case `T`:
                estado = `Terminada`;
                break;
            case `C`:
                estado = `Cancelada`;
                break;
        }
        console.clear();
        return estado;
    }
}