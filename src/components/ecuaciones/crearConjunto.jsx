import filtro from "./filtro";

function crearConjunto (datos) {
    const correccion = filtro(datos);
    const conjunto=correccion.split(',');
    return conjunto
}
export default crearConjunto;