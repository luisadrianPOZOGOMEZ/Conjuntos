import ordenar from "./ordenar";

function union (conjuntoA, conjuntoB) {
    const interseccionAB=new Array;
    for (let i = 0; i<conjuntoA.length;i++){
        for (let j = 0; j<conjuntoB.length;j++){
            if (conjuntoA[i]==conjuntoB[j]){
                if (interseccionAB.toString().search(conjuntoA[i])==-1){
                    interseccionAB[interseccionAB.length]=conjuntoA[i];
                }
            }else if (interseccionAB.toString().search(conjuntoB[j])==-1){
                interseccionAB[interseccionAB.length]=conjuntoB[j];
            } 
        }
    }
    const ordenado = ordenar(interseccionAB)
    return ordenado;
}
export default union;