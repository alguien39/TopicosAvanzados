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
    const varPromedio = Promedio(arrValores);
    document.addEventListener('DOMContentLoaded', () => {
        const ContenedorEstrellas = document.getElementById('ContenedorEstrellas');
        for (let i = 0; i < varPromedio; i++) {
            ContenedorEstrellas.innerHTML = '<label for="" id="Positivo"></label>';
        }
        for (let i = 0; i < 5 - varPromedio; i++) {
            ContenedorEstrellas.innerHTML = '<label for="" id="Negativo"></label>';
        }
    });
}

export function LlenarHtmlDinamicamente(arrParametros){
    
}