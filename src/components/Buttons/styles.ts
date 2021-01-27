import styled from "styled-components"

interface Color {
    color?: string;
}

export const Submit = styled.button<Color>`
    background-color: ${p=> p.color ? p.color : p.theme.colors.primary};
    color: ${p=>p.theme.colors.white};
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &.ml {
        margin-left: 16px;
    }
`
