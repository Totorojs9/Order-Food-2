import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/icons/Plus.svg";
import { ReactComponent as MinesIcon } from "../../assets/icons/Minus.svg";
import Button from "../UI/Button";
import { cartContext } from "../../store/cart-context";

const BasketItem = ({ title, price, amount, id }) => {
  const { decrementAmountHandler, incrementAmountHandler } =
    useContext(cartContext);

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        <InformationBlock>
          <p>${price}</p>
          <span>x {amount} </span>
        </InformationBlock>
        <ButtonBlock>
          <Button
            variant="outLine"
            borderRadius="squared"
            onClick={() => decrementAmountHandler(id)}
            icon={<MinesIcon />}
          ></Button>
          <Button
            variant="outLine"
            borderRadius="squared"
            onClick={() => incrementAmountHandler(id)}
            icon={<PlusIcon />}
          ></Button>
        </ButtonBlock>
      </Content>
    </Container>
  );
};
export default BasketItem;

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid #d6d6d6;
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;
const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonBlock = styled.aside`
  display: flex;
  gap: 15px;
`;

const InformationBlock = styled.article`
  display: flex;
  width: 155px;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 18px;
    color: #ad5502;
  }
  span {
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    font-weight: 600;
    font-size: 16px;
    padding: 6px 14px;
  }
`;
