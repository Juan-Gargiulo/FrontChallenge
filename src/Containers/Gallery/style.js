import styled from 'styled-components';


export const Container = styled.div`
    width: ${props => props.navVisible ? "calc(100% - 300px)" : "100%"};
    height: calc(100vh - 60px);
    background-color: white;

`

export const GalleryCont = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-flow: row wrap;
  justify-content: center;
  align-items: start;
  align-content: start;
`
