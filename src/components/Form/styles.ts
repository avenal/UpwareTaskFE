import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    border: 1px solid ${p => p.theme.colors.input_border};
    background: transparent;
    border-radius: 10px;
    font-size: 14px;
    padding: 6px 8px;
    width: 100%;
`

export const ErrorWrapper = styled.div`
    min-height: 24px;
    padding: 4px 0;
`

export const ErrorMessage = styled.p`
    color: ${p => p.theme.colors.error};
    font-size: 14px;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Label = styled.span`
    font-size: 20px;
    color: ${p => p.theme.colors.black};
`

export const SubmitWrapper = styled.div`
    margin-bottom: 50px;
`