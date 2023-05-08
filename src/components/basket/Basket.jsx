import React, { useContext } from "react";
import { DUMMY_ITEMS } from "../utils/constant";
import styled from "styled-components";
import Modal from "../UI//Modal";
import TotalAmount from "./TotalAmount";
import BasketItem from "./BasketItem";
import { cartContext } from "../../store/cart-context";

const Basket = ({ toggleModalHadler }) => {
  const { cartItems, getTotalAmountHandler } = useContext(cartContext);

  return (
    <Modal toggleModalHadler={toggleModalHadler}>
      <Content>
        {DUMMY_ITEMS.length ? (
          <FixedWidthContainer>
            {cartItems.map((item) => {
              if (item.amount > 0) {
                return (
                  <BasketItem
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                    id={item.id}
                    key={item.id}
                  />
                );
              }
              return null;
            })}
          </FixedWidthContainer>
        ) : null}

        <TotalAmount
          totalPrice={getTotalAmountHandler()}
          onClose={toggleModalHadler}
        />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const FixedWidthContainer = styled.div`
  max-height: 245px;
  overflow-y: auto;
`;
