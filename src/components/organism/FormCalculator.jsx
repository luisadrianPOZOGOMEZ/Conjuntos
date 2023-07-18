import WrapperInput from "../molecules/WrapperInput";

function FormCalculator({change}) {
    return ( 
        <>
            <WrapperInput change={change} msn="Conjunto U" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_u'} />
            <label id="alertaU"></label>
            <WrapperInput change={change} msn="Conjunto A" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
            <label id="alertaA"></label>
            <WrapperInput change={change} msn="Conjunto B" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_b'} />
            <label id="alertaB"></label>
        </>
     );
}

export default FormCalculator;