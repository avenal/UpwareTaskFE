import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:2;
    background-color: ${p => p.theme.colors.white};
`

export const Wrapper = styled.div`
    width: 100%;    
    padding-top: 100px;
    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
        width: 550px;
    }
`

export const CloseButtonWrapper = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
`