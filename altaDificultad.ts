import pausa from "./pausa"
import prompt from "prompt-sync";
const Scannf = prompt();
export default function CargarDificultad(dificultad: string, f: string): string {
    console.clear();
    do {
        console.log(`[] Ingresa la dificultad o solo [Enter] para cancelar:\nDificultad [F]acil / [M]edio / [D]ificil:`);
        dificultad = Scannf(`>`);
        if(dificultad == ` ` && f == `1`){
            return ` `;
        }
        if (dificultad != "F" && dificultad != "M" && dificultad != "D" && dificultad != "") {
            console.log("Opción invalida, opciónes validas: F, M, D.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while (dificultad != "F" && dificultad != "M" && dificultad != "D" && dificultad != "");
    if (dificultad == "") {
        return `-1`;
    }
    else {
        switch (dificultad) {
            case `F`:
                dificultad = "🌑🌑🌑";
                break;
            case `M`:
                dificultad = "🌕🌕🌑";
                break;
            case `D`:
                dificultad = "🌕🌕🌕";
                break;
        }
        console.clear();
        return dificultad;
    }
}