export function formatarPreco(valor){
    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return "0,00";
    }
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}