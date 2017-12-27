import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.visible ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100%;
    background-color: black;
`