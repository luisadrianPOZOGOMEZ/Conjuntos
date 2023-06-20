import Tittle from "../components/atoms/Tittle";
import FormCalculator from "../components/organism/FormCalculator";
import definir from "../components/ecuaciones/definir";
import Navbar from "../components/atoms/Navbar";
import Button from "../components/atoms/Button";
import '../assets/styles/Calculator.css';

function Calculator() {
    const obtnerConjuntos=()=>{
        const datosA=document.getElementById("conjunto_a").value
        const datosB= document.getElementById('conjunto_b').value
        const seleccion = document.getElementById('operacion').value;
        if (validar(datosA)){
            const correccionA = filtro(datosA);
            const conjuntoA=correccionA.split(',');
            if (validar(datosB)){
                const correccionB = filtro(datosB);
                const conjuntoB=correccionB.split(',');
                definir(seleccion, conjuntoA, conjuntoB);
            }
        }
    }
    const filtro = (conjunto) =>{
        const patron=/[^\x2C0-9A-Za-z\xC0\xD6\xD8-\xF6\xF8-\xFF]/g;
        let correccion= conjunto.replace(patron, '');
        return correccion;
    }
    const validar=(conjunto)=>{
        if (!conjunto.startsWith("{") || !conjunto.endsWith("}")) {
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
                                    <option className="inmuebleselect" value='interseccion'>Interseccion A y B</option>
                                    <option className="inmuebleselect" value='Union'>Unión A y B</option>
                                    <option className="inmuebleselect" value='Diferencia1'>Diferencia A - B</option>
                                    <option className="inmuebleselect" value='Diferencia2'>Diferencia B - A</option>
                                    <option className="inmuebleselect" value='DiferenciaS'>Diferencia simetrica (A con B)</option>
                                    <option className="inmuebleselect" value='ComplementoA'>Complemento A</option>
                                    <option className="inmuebleselect" value='ComplementoB'>Complemento B</option>
                                    <option className="inmuebleselect" value='Producto Cartesiano1'>Producto Cartesiano A x B</option>
                                    <option className="inmuebleselect" value='Producto Cartesiano2'>Producto Cartesiano B x A</option>
                                    <option className="inmuebleselect" value='Producto Cartesiano3'>Producto Cartesiano A x A</option>
                                    <option className="inmuebleselect" value='Producto Cartesiano4'>Producto Cartesiano B x B</option>
                                    <option className="inmuebleselect" value='Conjunto PotenciadoA'>Conjunto Potenciado de A</option>
                                    <option className="inmuebleselect" value='Conjunto PotenciadoB'>Conjunto Potenciado de B</option>
                                    <option className="inmuebleselect" value='CardinalidadA'>Cardinalidad de A</option>
                                    <option className="inmuebleselect" value='CardinalidadB'>Cardinalidad de B</option>
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