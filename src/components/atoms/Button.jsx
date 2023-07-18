import styled from "styled-components";

const StyledButton = styled.button`
    font-family: 'Roboto';
    height: 60px;
    width:${props => props.size ?'86%' : '50px'};
    padding-inline: 20px;
    position: relative; 
    left: 20px; 
    font-size: 1rem;
    background: #F1F8FF;
`;

function Button({type, handlerClick, size, value}) {
    return ( 
        <StyledButton type={type} onClick={handlerClick} size={size} >{value}</StyledButton>
    );
}

export default Button;