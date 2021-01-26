import React, { useState, useRef } from "react";
import { useOnClickOutside } from "shared/hooks/useOnClickOutside";

import {
  Wrapper,
  Arrow,
  Label,
  OptionsWrapper,
  Options,
  Option,
} from "./styles";

const Select = ({
  options,
  valueFrom,
  show,
  value,
  handleClick,
  multiple,
}: any) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  const handleChange = (value: any) => {
    handleClick(value);
    if (!multiple) {
      setOpen(false);
    }
  };

  return (
    <Wrapper ref={ref}>
      <Label open={open} onClick={() => setOpen(!open)}>
        {value.length !== 0
          ? multiple
            ? value
                .map(
                  (val: number) =>
                    options.find(
                      (option: any) => option[`${valueFrom}`] === val
                    )[`${show}`]
                )
                .join(", ")
            : options.find((option: any) => option[`${valueFrom}`] === value)[
                `${show}`
              ]
          : "Choose"}
        <Arrow open={open} />
      </Label>
      <OptionsWrapper open={open}>
        <Options>
          {options.map((item: any, index: number) => (
            <Option
              key={index}
              checked={multiple && value.includes(item[`${valueFrom}`])}
              onClick={() => {
                handleChange(item[`${valueFrom}`]);
              }}
            >
              {item[`${show}`]}
            </Option>
          ))}
        </Options>
      </OptionsWrapper>
    </Wrapper>
  );
};

export { Select };
