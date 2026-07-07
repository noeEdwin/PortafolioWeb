document.addEventListener('DOMContentLoaded', function() {
    const elementoEscritura = document.getElementById('typing-text');
    if (!elementoEscritura) return;

    const palabras = ['Desarrollador', 'Estudiante de IA', 'Ingeniero en Sistemas', 'Apasionado por la Tecnologia'];
    let indicePalabra = 0;
    let indiceCaracter = 0;
    let estaBorrando = false;
    let velocidadEscritura = 100;

    function escribir() {
        const palabraActual = palabras[indicePalabra];

        if (estaBorrando) {
            elementoEscritura.textContent = palabraActual.substring(0, indiceCaracter - 1);
            indiceCaracter--;
            velocidadEscritura = 50;
        } else {
            elementoEscritura.textContent = palabraActual.substring(0, indiceCaracter + 1);
            indiceCaracter++;
            velocidadEscritura = 100;
        }

        if (!estaBorrando && indiceCaracter === palabraActual.length) {
            estaBorrando = true;
            velocidadEscritura = 2000; // Pausa al final
        } else if (estaBorrando && indiceCaracter === 0) {
            estaBorrando = false;
            indicePalabra = (indicePalabra + 1) % palabras.length;
            velocidadEscritura = 500; // Pausa antes de siguiente palabra
        }

        setTimeout(escribir, velocidadEscritura);
    }

    escribir();
});
