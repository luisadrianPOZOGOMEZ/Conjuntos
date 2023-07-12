import interccion from "./interseccion";
import union from "./union";
import diferencia from "./diferencia";
import diferenciaS from "./diferenciaS";
import productoCarteciano from "./productoCarteciano";
import potencia from "./potencia";

function definir(seleccion, conjuntoA, conjuntoB, conjuntoU){
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
            document.getElementById('resultados').innerHTML=`${conjuntoA.length}`;
            break;
        case 15:
            document.getElementById('resultados').innerHTML=`${conjuntoB.length}`;
            break;
    }
}

export default definir;