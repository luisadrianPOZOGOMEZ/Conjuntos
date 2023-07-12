import ordenar from "./ordenar";

function interccion (conjuntoA, conjuntoB) {
    const interseccionAB=new Array;
    for (let i = 0; i<conjuntoA.length;i++){
        for (let j = 0; j<conjuntoB.length;j++){
            if (conjuntoA[i]==conjuntoB[j]){
                if (interseccionAB.toString().search(conjuntoA[i])==-1){
                    interseccionAB[interseccionAB.length]=conjuntoA[i];
                }
            }
        }
    }
    const ordenado=ordenar(interseccionAB);
    document.getElementById('resultados').innerHTML=`{${ordenado}}`;
}
export default interccion;