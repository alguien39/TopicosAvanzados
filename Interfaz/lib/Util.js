export function Promedio(Valores){
    let Sum = 0;
    for (let i = 0; i < Valores.length; i++) {
        Sum += Valores[i];
    }
    return (Sum / Valores.length);
}

export function GetValoracionText(varPromedio){
    varPromedio = Math.round(varPromedio);
    switch (varPromedio) {
        case 1:
            return "Pésimo";
        case 2:
            return "Malo";
        case 3:
            return "Regular";
        case 4:
            return "Bueno";
        case 5:
            return "Excelente";
        default: return "No hay valoraciones";
    }
}

export function ConstruirControlHtml(arrValores){
    const varPromedio = Math.round(Promedio(arrValores));
    const numOpiniones = arrValores.length;

    document.addEventListener('DOMContentLoaded', () => {
        const ContenedorEstrellas = document.getElementsByClassName('ContenedorEstrellas')[0];
        const ContenedorOpiniones = document.getElementsByClassName('ContenedorOpiniones')[0];

        if (ContenedorEstrellas && ContenedorOpiniones) {
            ContenedorEstrellas.innerHTML = '';
            ContenedorOpiniones.innerHTML = '';

            for (let i = 0; i < 5 - varPromedio; i++) {
                ContenedorEstrellas.innerHTML += '<label id="Negativo"></label>';
            }
            for (let i = 0; i < varPromedio; i++) {
                ContenedorEstrellas.innerHTML += '<label id="Positivo"></label>';
            }

            ContenedorOpiniones.innerHTML += `
                <label id="NumeroOpiniones">${numOpiniones}</label>
                <label id="Opiniones">Opiniones</label>
            `;
        } else {
            console.error('No se encontraron los contenedores necesarios en el DOM.');
        }
    });
}

export function LlenarHtmlDinamicamente(arrParametros){
    
}