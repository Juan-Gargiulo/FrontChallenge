import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    height: 60px;
    width: 100%;
    background-color: black;

`

export const Logo = styled.img.attrs({
    src: 'img/avalith.png'
})`
    height: 39px;
    width: 35px;
`