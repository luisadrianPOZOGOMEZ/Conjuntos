import ordenar from "./ordenar";

function union (conjuntoA, conjuntoB) {
    const interseccionAB=new Array;
        for (let j = 0; j<conjuntoB.length;j++){
            if (interseccionAB.toString().search(conjuntoB[j])==-1){
                interseccionAB[interseccionAB.length]=conjuntoB[j];
            }if (interseccionAB.toString().search(conjuntoA[j])==-1){
                interseccionAB[interseccionAB.length]=conjuntoA[j];
            }
        }
    const ordenado = ordenar(interseccionAB);
    document.getElementById('resultados').innerHTML=`{${ordenado}}`;
}
export default union;