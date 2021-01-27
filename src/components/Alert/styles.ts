import styled from "styled-components"
import { Variant } from "store/alerts"

interface Colors {
    variant: Variant;
}
export const Container = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 4;
    display: flex;
    flex-direction: column;
`

export const AlertWrapper = styled.span<Colors>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 12px;
    color: ${p => p.theme.colors.white};
    background-color: ${p=>p.variant};
    border-radius: 10px;
    margin-bottom: 16px;
`