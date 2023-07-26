import validarConjunto from "../components/ecuaciones/validarConjunto";
import definir from "../components/ecuaciones/definir";
import Tittle from "../components/atoms/Tittle";
import FormCalculator from "../components/organism/FormCalculator";
import Navbar from "../components/atoms/Navbar";
import Button from "../components/atoms/Button";
import '../assets/styles/Calculator.css';

function Calculator() {
    const validarAutomatico = () =>{
        const datosA=document.getElementById("conjunto_a").value;
        const datosB= document.getElementById('conjunto_b').value;
        const datosU= document.getElementById("conjunto_u").value;
        validarConjunto(datosU, datosA, datosB);
    }
    const realisarOperaciones = () =>{
        const datosA=document.getElementById("conjunto_a").value;
        const datosB= document.getElementById('conjunto_b').value;
        const datosU= document.getElementById("conjunto_u").value;
        const seleccion = parseInt(document.getElementById('operacion').value);
        if (validarConjunto(datosU, datosA, datosB)){
            definir(seleccion,datosA,datosB, datosU);
        }
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
                                    <option className="inmuebleselect" value='1' >Interseccion A y B</option>
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
                        <FormCalculator change={validarAutomatico}></FormCalculator>
                        <Button handlerClick={realisarOperaciones} type="button" altura={true} size={true} value="Calcular"/>
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