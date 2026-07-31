// ===== Preparación del sobre =====

let sobreAbierto = false;

function abrirSobre(){
    if(sobreAbierto) return;

    sobreAbierto = true;

    console.log("El sobre se abrirá aquí.");
}
