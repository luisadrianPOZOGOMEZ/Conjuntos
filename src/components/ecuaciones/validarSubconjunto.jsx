function validarSubconjunto (correccionU, conjunto, letra) {
    let correcto=true
    for (let i=0; i<conjunto.length;i++){
        if(correccionU.search(conjunto[i])==-1){
            document.getElementById(`alerta${letra}`).innerHTML=`El elemento ${conjunto[i]} del conjuto ${letra} no es elemento del conjunto U`
            correcto=false;
        }
    }
    return correcto;
}
export default validarSubconjunto;