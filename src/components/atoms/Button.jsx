import styled from "styled-components";

const StyledButton = styled.button`
    font-family: 'Roboto';
    height:${props => props.altura ?'60px' : '30px'};
    width:${props => props.size ?'86%' : '100px'};
    padding-inline: 20px;
    position: relative; 
    left: 20px; 
    font-size: 1rem;
    background: #DB3F59;
    color: white;
    border: none;
`;

function  Button({type, handlerClick, size, altura, value}) {
    return ( 
        <StyledButton type={type} onClick={handlerClick} size={size} altura={altura}>{value}</StyledButton>
    );
}

export default Button;