function diferencia2 (conjuntoA, conjuntoB) {
    const interseccionA_B=new Array;
    for (let i = 0; i<conjuntoA.length;i++){
        for (let j = 0; j<conjuntoB.length;j++){
            if (conjuntoA.toString().search(conjuntoB[j])==-1){
                if (interseccionA_B.toString().search(conjuntoB[j])==-1){
                    interseccionA_B[interseccionA_B.length]=conjuntoB[j];
                }
            }
        }
    }
    return interseccionA_B;
}
export default diferencia2;