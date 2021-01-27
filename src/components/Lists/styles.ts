import styled from "styled-components"

interface Header{
    header?: boolean;
}

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 320px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ListElement = styled.li<Header>`
display: grid;
grid-template-columns: repeat(10, minmax(80px, 1fr));
width: 100%;
padding: 0;
justify-content: center;
align-items: center;
padding: 16px 0;
transition: background-color 0.4s ease-in;
will-change: background-color;
&.header {
    background-color: ${p=>p.theme.colors.primary};
    color: ${p=>p.theme.colors.white};
    font-weight: 700;
    &:hover {
        background-color: ${p=>p.theme.colors.primary};
    }
}
&:hover {
    background-color: ${p=>p.theme.colors.placeholder};
}
`

export const TagListElement = styled(ListElement)`
grid-template-columns: repeat(3, minmax(80px, 1fr));
width: 600px;
`

export const BtnMargin = styled.div`
    margin-right: 12px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`