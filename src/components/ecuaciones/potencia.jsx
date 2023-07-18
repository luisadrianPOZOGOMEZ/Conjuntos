import ordenar from "./ordenar";
function potencia (conjuntoA){
    const nuevoConjunto= new Array;
    if (conjuntoA[0]!=''){
        for (let i =0; i<conjuntoA.length; i++){
            nuevoConjunto[nuevoConjunto.length]=`{${conjuntoA[i]}}`;
        }
        let ordenado = ordenar(nuevoConjunto);
        for (let i =0; i<conjuntoA.length-1; i++){
            ordenado[ordenado.length]=`{${conjuntoA[i]}, ${conjuntoA[i+1]}}`;
        }
        ordenado = ordenar(ordenado);
        ordenado[ordenado.length]=`{${conjuntoA}}`;
        ordenado = ordenar(ordenado);
        document.getElementById('resultados').innerHTML=`{${ordenado}}`;
    }else
        document.getElementById('resultados').innerHTML='{{}}';
}
export default potencia;