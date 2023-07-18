import interccion from "./interseccion";
import union from "./union";
import diferencia from "./diferencia";
import diferenciaS from "./diferenciaS";
import productoCarteciano from "./productoCarteciano";
import potencia from "./potencia";
import crearConjunto from "./crearConjunto";

function definir(seleccion, datosA, datosB, datosU){
    const conjuntoA = crearConjunto(datosA);
    const conjuntoB = crearConjunto(datosB);
    const conjuntoU = crearConjunto(datosU);
    switch (seleccion){
        case 1:
            interccion(conjuntoA, conjuntoB);
            break;
        case 2:
            union (conjuntoA, conjuntoB);
            break;
        case 3:
            diferencia (conjuntoA, conjuntoB);
            break;
        case 4:
            diferencia (conjuntoB, conjuntoA);
            break;
        case 5:
            diferenciaS (conjuntoA, conjuntoB);
            break;
        case 6:
            diferencia (conjuntoU, conjuntoA);
            break;
        case 7:
            diferencia (conjuntoU, conjuntoB);
            break;
        case 8:
            productoCarteciano (conjuntoA, conjuntoB);
            break;
        case 9:
            productoCarteciano (conjuntoB, conjuntoA);
            break;
        case 10:
            productoCarteciano (conjuntoA, conjuntoA);
            break;
        case 11:
            productoCarteciano (conjuntoB, conjuntoB);
            break;
        case 12:
            potencia(conjuntoA);
            break;
        case 13:
            potencia(conjuntoB);
            break;
        case 14:
            if (conjuntoA[0]==''){
                document.getElementById('resultados').innerHTML=0;
            }else{
                const arregloSinRepetidos = [...new Set(conjuntoA)];
                document.getElementById('resultados').innerHTML=`${arregloSinRepetidos.length}`;
            }
            break;
        case 15:
            if (conjuntoB[0]==''){
                document.getElementById('resultados').innerHTML=0;
            }else{
                const arregloSinRepetidos = [...new Set(conjuntoB)];
                document.getElementById('resultados').innerHTML=`${arregloSinRepetidos.length}`;
            }
            break;
    }
}

export default definir;