import validar from "./validar";
import validarSubconjunto from "./validarSubconjunto";
import filtro from "./filtro";

function validarConjunto (datosU, datosA, datosB)  {
    let valido=false
    if (validar(datosU, 'U')){
        document.getElementById('alertaU').innerHTML='';
        const correccionU = filtro(datosU);
        if (validar(datosA, 'A')){
            document.getElementById('alertaA').innerHTML=''
            const correccionA = filtro(datosA);
            const conjuntoA=correccionA.split(',');
            if (validar(datosB, 'B')){
                document.getElementById('alertaB').innerHTML=''
                const correccionB = filtro(datosB);
                const conjuntoB=correccionB.split(',');
                if(validarSubconjunto(correccionU, conjuntoA, 'A')){
                    document.getElementById('alertaA').innerHTML=''
                    if(validarSubconjunto(correccionU, conjuntoB, 'B')){
                        document.getElementById('alertaB').innerHTML=''
                        valido = true
                    }
                }
            }
        }
    }
    return valido
}
export default validarConjunto;