import styled from "styled-components";

const StyledButton = styled.button`
    font-family: 'Roboto';
    height: 60px;
    width: 86%;
    padding-inline: 20px;
    position: relative; 
    left: 20px; 
    font-size: 1rem;
    background: #F1F8FF;
`;

function Button({type, handlerClick, value}) {
    return ( 
        <StyledButton type={type} onClick={handlerClick} >{value}</StyledButton>
    );
}

export default Button;