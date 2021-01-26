import styled from "styled-components"

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 320px;
    overflow: auto;
`

export const ListElement = styled.li`
display: grid;
grid-template-columns: repeat(10, minmax(100px, 1fr));
padding: 0;
`