function filtro  (conjunto) {
    const patron=/[^\x2C0-9A-Za-z\xC0\xD6\xD8-\xF6\xF8-\xFF]/g;
    let correccion= conjunto.replace(patron, '');
    return correccion;
}
export default filtro;