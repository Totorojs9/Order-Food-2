import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Group.svg";
import { cartContext } from "../../store/cart-context";

function OrderBusket({ children, onClick }) {
  const context = useContext(cartContext);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [context.addItem]);

  return (
    <Button className={animationClass} onClick={onClick}>
      <BasketIcon /> <OrderBasTit>{children}</OrderBasTit>
      <OrderBasCount>{context.totalAmount}</OrderBasCount>
    </Button>
  );
}

export default OrderBusket;

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #4d1601;
  }
  /* &:active {
    background: #993108;
  } */

  &.bump {
    animation: bump 300ms ease-out;
  }
  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const OrderBasTit = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #ffff;
  margin-left: 13px;
`;

const OrderBasCount = styled.span`
  padding: 5px 18px;
  background: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  margin-left: 24px;
`;
