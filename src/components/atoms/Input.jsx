import styled from 'styled-components';

const StyledInput = styled.input`
    font-family: 'Roboto';
    height: 60px;
    width: 80%;
    padding-inline: 20px;
    position: relative; 
    left: 20px; 
    font-size: 1rem;
    background: #F1F8FF;
    color: #2e97ff;
    border-radius: 8px;
    border: none;
`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function Input({type, placeholder, name}) {
    return ( 
        <StyledInput type={type} placeholder={placeholder} id={name} />
     );
}

export default Input;
