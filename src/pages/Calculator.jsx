import Tittle from "../components/atoms/Tittle";
import FormCalculator from "../components/organism/FormCalculator";
import definir from "../components/ecuaciones/definir";
import Navbar from "../components/atoms/Navbar";
import Button from "../components/atoms/Button";
import '../assets/styles/Calculator.css';

function Calculator() {
    const obtnerConjuntos=()=>{
        const datosA=document.getElementById("conjunto_a").value;
        const datosB= document.getElementById('conjunto_b').value;
        const datosU= document.getElementById("conjunto_u").value;
        const seleccion = parseInt(document.getElementById('operacion').value);
        if (validar(datosA, 'A')){
            document.getElementById(`alertaA`).innerHTML='';
            const correccionA = filtro(datosA);
            const conjuntoA=correccionA.split(',');
            if (validar(datosB, 'B')){
                document.getElementById(`alertaB`).innerHTML=''
                const correccionB = filtro(datosB);
                const conjuntoB=correccionB.split(',');
                if (validar(datosU, 'U')){
                    document.getElementById(`alertaU`).innerHTML=''
                    const correccionU= filtro(datosU);
                    const conjuntoU= correccionU.split(',');
                    definir(seleccion, conjuntoA, conjuntoB, conjuntoU);
                }
            }
        }
    }
    const filtro = (conjunto) =>{
        const patron=/[^\x2C0-9A-Za-z\xC0\xD6\xD8-\xF6\xF8-\xFF]/g;
        let correccion= conjunto.replace(patron, '');
        return correccion;
    }
    const validar=(conjunto, nombre)=>{
        if (!conjunto.startsWith("{") || !conjunto.endsWith("}")) {
            document.getElementById(`alerta${nombre}`).innerHTML=`Le falta una "{" o una "}" en el conjunto ${nombre}`
            return false;
        }
        return true;
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="Tittle">
            <Tittle msn="Calculadora de Conjuntos"></Tittle>
            </div>
            <div className="div-0">
                <div className="div-1">
                    <form action="">
                        <label className="label">Selecciona el tipo de operación</label>
                        <select className="tipoOperación" id='operacion' name='operacion' required>
                                    <option className="inmuebleselect" value='1'>Interseccion A y B</option>
                                    <option className="inmuebleselect" value='2'>Unión A y B</option>
                                    <option className="inmuebleselect" value='3'>Diferencia A - B</option>
                                    <option className="inmuebleselect" value='4'>Diferencia B - A</option>
                                    <option className="inmuebleselect" value='5'>Diferencia simetrica (A con B)</option>
                                    <option className="inmuebleselect" value='6'>Complemento A</option>
                                    <option className="inmuebleselect" value='7'>Complemento B</option>
                                    <option className="inmuebleselect" value='8'>Producto Cartesiano A x B</option>
                                    <option className="inmuebleselect" value='9'>Producto Cartesiano B x A</option>
                                    <option className="inmuebleselect" value='10'>Producto Cartesiano A x A</option>
                                    <option className="inmuebleselect" value='11'>Producto Cartesiano B x B</option>
                                    <option className="inmuebleselect" value='12'>Conjunto Potenciado de A</option>
                                    <option className="inmuebleselect" value='13'>Conjunto Potenciado de B</option>
                                    <option className="inmuebleselect" value='14'>Cardinalidad de A</option>
                                    <option className="inmuebleselect" value='15'>Cardinalidad de B</option>
                        </select>
                    </form>
                    <div className="WrapperForm">
                        <FormCalculator></FormCalculator>
                        <Button type="button" value="Calcular" handlerClick={obtnerConjuntos}/>
                    </div>
                </div>
                <div className="div-2"> {/* este div es para mostrar el resultado*/}
                    <label className="label-2">Resultado de la operación</label>
                    <p className="resultado" id="resultados"></p>
                </div>
            </div>
        </>
    );
}

export default Calculator;