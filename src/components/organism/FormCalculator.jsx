import WrapperInput from "../molecules/WrapperInput";

function FormCalculator({change}) {
    return ( 
        <>
<<<<<<< HEAD
            <WrapperInput change={change} msn="Conjunto U" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_u'} />
            <label id="alertaU"></label>
            <WrapperInput change={change} msn="Conjunto A" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
            <label id="alertaA"></label>
            <WrapperInput change={change} msn="Conjunto B" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_b'} />
            <label id="alertaB"></label>
=======
            <WrapperInput msn="Conjunto A" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
            <WrapperInput msn="Conjunto B" type="text" placeholder="Ingresa un Conjunto" name={'conjunto_a'} />
            <WrapperInput msn="Conjunto Universal" type="text" placeholder="Ingresa un Conjunto" name={'conjuntoUniversal'} />
>>>>>>> 3ec02b2bc165b2c9561d709146ccf0a78ae0374e
        </>
     );
}

export default FormCalculator;