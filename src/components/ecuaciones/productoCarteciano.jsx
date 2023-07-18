import ordenar from "./ordenar";

function productoCarteciano (conjuntoA, conjuntoB) {
    const nuevoConjunto= new Array;
    let ordenado
    let mostrando=false
    if (conjuntoA[0]!=''){
        if (conjuntoB[0]!=''){
            for (let i =0; i<conjuntoA.length; i++){
                for (let j=0; j<conjuntoB.length; j++){
                    nuevoConjunto[nuevoConjunto.length]=`{${conjuntoA[i]}, ${conjuntoB[j]}}`;
                }
            }
        }else
            for (let i =0; i<conjuntoA.length; i++){
                for (let j=0; j<conjuntoB.length; j++){
                    nuevoConjunto[nuevoConjunto.length]=`{${conjuntoA[i]}}`;
                }
            }
    }else if(conjuntoB[0]==''){
        document.getElementById('resultados').innerHTML='{{}}';
        mostrando=true
    }else{
        for (let i =0; i<conjuntoA.length; i++){
            for (let j=0; j<conjuntoB.length; j++){
                nuevoConjunto[nuevoConjunto.length]=`{${conjuntoB[j]}}`;
            }
        }
    }
    if (!mostrando){
        ordenado= ordenar(nuevoConjunto);
        document.getElementById('resultados').innerHTML=`{${ordenado}}`
    }
}

export default productoCarteciano;