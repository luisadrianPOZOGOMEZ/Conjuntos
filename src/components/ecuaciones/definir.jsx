import interccion from "./interseccion";
import union from "./union";
import diferencia from "./diferencia";
import diferencia2 from "./diferencia2";
import diferenciaS from "./diferenciaS";

function definir(seleccion, conjuntoA, conjuntoB){
    if (seleccion=='interseccion'){
        const nuevoConjuntoI = interccion(conjuntoA, conjuntoB);
        document.getElementById('resultados').innerHTML=`{${nuevoConjuntoI}}`;
    }else if (seleccion=='Union'){
        const nuevoconjuntoU = union(conjuntoA, conjuntoB);
        document.getElementById('resultados').innerHTML=`{${nuevoconjuntoU}}`;
    }else if (seleccion=='Diferencia1'){
        const nuevoconjuntoD1 = diferencia(conjuntoA, conjuntoB);
        document.getElementById('resultados').innerHTML=`{${nuevoconjuntoD1}}`;
    }else if (seleccion=='Diferencia2'){
        const nuevoconjuntoD2 = diferencia2(conjuntoA, conjuntoB);
        document.getElementById('resultados').innerHTML=`{${nuevoconjuntoD2}}`;
    }else if (seleccion=='DiferenciaS'){
        const nuevoconjuntoDS = diferenciaS(conjuntoA, conjuntoB);
        document.getElementById('resultados').innerHTML=`{${nuevoconjuntoDS}}`;
    }
}

export default definir;