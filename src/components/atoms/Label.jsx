import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: 'Roboto';
    font-size: 1.4rem;
    height: 35%;
    /* color: #db3f59; */
    margin-bottom: -6px;
    display: flex;
    padding-inline: 20px;
`;


function Label( {msn} ) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
     );
}

export default Label;