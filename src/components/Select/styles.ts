import styled from "styled-components";

interface OpenProps {
    open?: boolean;
}
interface Checked {
  checked?:boolean;
}

export const Wrapper = styled.div`
  box-sizing: content-box;
  display: block;
  position: relative;
  width: 100%;
  min-height: 40px;
  color: #35495e;
`;

export const Arrow = styled.div<OpenProps>`
  position: relative;

  &::after {
    transform-origin: center;
    transform: ${(props) => (props.open ? "rotateZ(180deg)" : "rotateZ(0)")};
    transition: transform 0.3s ease-in;
    content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEwcHgiIGhlaWdodD0iYXV0byIgdmlld0JveD0iMCAwIDQ1MS44NDcgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NyA0NTEuODQ3OyINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjNTM1MzUzIiBkPSJNMjI1LjkyMywzNTQuNzA2Yy04LjA5OCwwLTE2LjE5NS0zLjA5Mi0yMi4zNjktOS4yNjNMOS4yNywxNTEuMTU3Yy0xMi4zNTktMTIuMzU5LTEyLjM1OS0zMi4zOTcsMC00NC43NTENCgkJYzEyLjM1NC0xMi4zNTQsMzIuMzg4LTEyLjM1NCw0NC43NDgsMGwxNzEuOTA1LDE3MS45MTVsMTcxLjkwNi0xNzEuOTA5YzEyLjM1OS0xMi4zNTQsMzIuMzkxLTEyLjM1NCw0NC43NDQsMA0KCQljMTIuMzY1LDEyLjM1NCwxMi4zNjUsMzIuMzkyLDAsNDQuNzUxTDI0OC4yOTIsMzQ1LjQ0OUMyNDIuMTE1LDM1MS42MjEsMjM0LjAxOCwzNTQuNzA2LDIyNS45MjMsMzU0LjcwNnoiLz4NCjwvZz4NCjwvc3ZnPg0K");
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const Label = styled.div<OpenProps>`
  border: 1px solid
    ${(props) =>
      props.open ? props.theme.colors.primary : props.theme.colors.input_border};
  padding: 7px 6px;
  border-radius: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.placeholder};
  font-weight: 400;
  cursor: pointer;
`;

export const OptionsWrapper = styled.div<OpenProps>`
  position: absolute;
  overflow: auto;
  z-index: 4;
  border: 1px solid #e8e8e8;
  width: 100%;
  max-height: 240px;
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const Options = styled.ul`
  list-style: none;
  width: 100%;
  display: inline-block;
`;

export const Option = styled.li<Checked>`
  padding: 12px 6px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.placeholder};
  font-size: 16px;
  background: ${(props) => props.checked ? props.theme.colors.primary : props.theme.colors.white };
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.black};
  }
`;
