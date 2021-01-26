import React from "react"
import { Wrapper,  Box, Label } from "./styles"

const Checkbox = ({children, value, handleClick}:any) => {
    const toggle = () => {
        handleClick(!value)
    }
    return (
        <Wrapper onClick={toggle}>
            <Box checked={value} />
            <Label>
                {children}
            </Label>
        </Wrapper>
    )
}

export { Checkbox }
