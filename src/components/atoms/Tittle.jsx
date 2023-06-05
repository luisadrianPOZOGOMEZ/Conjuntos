import styled from "styled-components";

const StyledTittle = styled.h1`
    font-family: 'Roboto';
    color: #000000;
    text-align: center;
    display: flex;
    justify-content: column;
`;

function Tittle({msn}) {
    return ( 
        <StyledTittle>{msn}</StyledTittle>
     );
}

export default Tittle;