import WrapperInput from "../molecules/WrapperInput";

function FormCalculator() {
    return ( 
        <>
            <WrapperInput msn="Conjunto A" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
            <WrapperInput msn="Conjunto B" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
        </>
     );
}

export default FormCalculator;