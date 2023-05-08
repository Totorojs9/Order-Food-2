import React, { useContext } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import { cartContext } from "../../../store/cart-context";

function MealItem({ meal }) {
  const context = useContext(cartContext);

  const addNewItem = (amount) => {
    const data = {
      title: meal.title,
      description: meal.description,
      price: meal.price,
      amount: +amount,
      id: meal.id,
    };

    context.addItem(data);
  };
  return (
    <Container>
      <Menu>
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </Menu>
      <MealItemForm inputId={meal.id} meal={meal} addNewItem={addNewItem} />
    </Container>
  );
}

export default MealItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #d6d6dd;
  margin-bottom: 20px;
`;

const Menu = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
  h3 {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
  }
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
`;
