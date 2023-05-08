import React from "react";
import styled from "styled-components";
import {
  getBackgroundColor,
  getBorder,
  getBorderRadius,
  getColor,
} from "../utils/helpers";


const Button = ({
  variant = "contained",
  borderRadius = "rounded",
  icon,
  onClick,
  children,
  ...props
}) => {
  return (
    <MyButton
      borderRadius={borderRadius}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {icon} {children}
    </MyButton>
  );
};

export default Button;

const MyButton = styled.button`
  background-color: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  color: ${getColor};
  border: ${getBorder};

  font-weight: 700;
  font-size: 14px;
  padding: 10px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  :hover {
    background: #7e2a0a;
    color: #fff;
    svg {
      fill: #fff;
      stroke: #fff;
    }
  }
  :active {
    background: #993108;
  }
  :disabled {
    background: #cac6c4;
    color: #fff;
    border: none;
  }
  svg {
    fill: ${getColor};
    stroke: ${getColor};
  }
`;
