import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.navVisible ? "calc(100% - 300px)" : "100%"};
    width: calc(100% - 300px);
    height: calc(100vh - 60px);
    background-color: white;
`