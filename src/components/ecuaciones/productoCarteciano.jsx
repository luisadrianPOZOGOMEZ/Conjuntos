import ordenar from "./ordenar";

function productoCarteciano (conjuntoA, conjuntoB) {
    const nuevoConjunto= new Array;
    for (let i =0; i<conjuntoA.length; i++){
        for (let j=0; j<conjuntoB.length; j++){
            nuevoConjunto[nuevoConjunto.length]=`{${conjuntoA[i]}, ${conjuntoB[j]}}`;
        }
    }
    const ordenado = ordenar(nuevoConjunto);
    document.getElementById('resultados').innerHTML=`{${ordenado}}`;
}

export default productoCarteciano;