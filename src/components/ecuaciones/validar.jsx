function validar (conjunto, nombre) {
    if (!conjunto.startsWith("{") || !conjunto.endsWith("}")) {
        document.getElementById(`alerta${nombre}`).innerHTML=`Le falta una "{" o una "}" en el conjunto ${nombre}`
        return false;
    }
    return true;
}
export default validar;