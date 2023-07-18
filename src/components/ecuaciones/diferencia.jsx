import ordenar from "./ordenar";

function diferencia (conjuntoA, conjuntoB) {
    const interseccionA_B=new Array;
    for (let j = 0; j<conjuntoB.length;j++){
        for (let i = 0; i<conjuntoA.length;i++){
            if (conjuntoB.toString().search(conjuntoA[i])==-1){
                if (interseccionA_B.toString().search(conjuntoA[i])==-1){
                    interseccionA_B[interseccionA_B.length]=conjuntoA[i];
                }
        }
        }
    }
    const ordenado=ordenar(interseccionA_B);
    document.getElementById('resultados').innerHTML=`{${ordenado}}`;
}
export default diferencia;