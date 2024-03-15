let miturno = 0;

function previous(): void {
    // leer el valor
    const numeroTurno = document.getElementById("numero-turno");

    // cambiar valor y mostrar
    if(numeroTurno instanceof HTMLHeadingElement) {
        const resultadoprevious: string = `${--miturno}`.padStart(2,"0");

        numeroTurno.innerText = resultadoprevious;
    };
};

const botonAnterior = document.getElementById("previous");

if (botonAnterior !== null && botonAnterior !== undefined) {
botonAnterior.addEventListener("click", previous);
};


function next(): void {
    // leer el valor
    const numeroTurno = document.getElementById("numero-turno");

    // cambiar valor y mostrar
    if(numeroTurno instanceof HTMLHeadingElement) {
        const resultadonext: string = `${++miturno}`.padStart(2,"0");

        numeroTurno.innerText = resultadonext;
    };
};

const botonSiguiente = document.getElementById("next");
if (botonSiguiente !== null && botonSiguiente !== undefined) {
    botonSiguiente.addEventListener("click", next);
    };



function reset(): void {
    // leer el valor
    const numeroTurno = document.getElementById("numero-turno");

    // cambiar valor y mostrar
    if(numeroTurno instanceof HTMLHeadingElement) {
        numeroTurno.innerText = "00";
    }
};

const botonReset = document.getElementById("reset");
if (botonReset !== null && botonReset !== undefined) {
    botonReset.addEventListener("click", reset);
    };


    function operario(): void {
        // leer el valor y mostrar
        const añadeTuvalor = (document.getElementById("añadetuvalor") as HTMLInputElement).value;
        const numeroTurno = document.getElementById("numero-turno");

        if (añadeTuvalor !== undefined && añadeTuvalor !== null &&
            numeroTurno !== undefined && numeroTurno !== null
            ) {
            numeroTurno.innerText = añadeTuvalor.padStart(2,"0");
            }
    };

    const botonInsertar = document.getElementById("insertartuvalor");
    if (botonInsertar !== null && botonInsertar !== undefined) {
    botonInsertar.addEventListener("click", operario);
    };