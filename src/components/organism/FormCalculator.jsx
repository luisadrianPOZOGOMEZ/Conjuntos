import WrapperInput from "../molecules/WrapperInput";

function FormCalculator({change}) {
    return ( 
        <>
            <WrapperInput change={change} msn="Conjunto A" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
            <WrapperInput change={change} msn="Conjunto B" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
            <WrapperInput change={change} msn="Conjunto Universal" type="text" placeholder="Ingresa un Conjunto" name={'conjuntoUniversal'} />
        </>
     );
}

export default FormCalculator;