import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    border: 1px solid ${p=>p.theme.colors.primary};
    border-radius: 10px;
    font-size: 16px;
    padding: 8px 12px;
`
