export function Promedio(Valores){
    let Sum = 0;
    for (let i = 0; i < Valores.length; i++) {
        Sum += Valores[i];
    }
    return Sum / Valores.length;
}