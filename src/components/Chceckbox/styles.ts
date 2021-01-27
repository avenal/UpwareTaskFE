import styled from "styled-components";

interface Checked {
    checked?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
  @media screen and (max-width: ${(props) =>
        props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const Box = styled.div<Checked>`
  padding-right: 18px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    top: 50%;
    left: 50%;
    width: 9px;
    height: 9px;
    z-index: 2;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    transition: opacity 0.3s ease-in;
    background: ${(props) => props.theme.colors.primary};
  }
`;

export const Label = styled.span`
  font-size: 16px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
`;
