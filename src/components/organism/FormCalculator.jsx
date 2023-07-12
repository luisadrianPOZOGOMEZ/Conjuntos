import WrapperInput from "../molecules/WrapperInput";

function FormCalculator() {
    return ( 
        <>
            <WrapperInput msn="Conjunto A" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
            <label id="alertaA"></label>
            <WrapperInput msn="Conjunto B" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_b'} />
            <label id="alertaB"></label>
            <WrapperInput msn="Conjunto u" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_u'} />
            <label id="alertaU"></label>
        </>
     );
}

export default FormCalculator;