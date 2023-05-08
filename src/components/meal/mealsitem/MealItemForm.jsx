import React, { useState } from "react";
import Button from "../../UI/Button";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../../assets/icons/Plus.svg";

function MealItemForm({ inputId, addNewItem }) {
  const [amount, setAmount] = useState(1);

  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const addItemHandler = () => {
    addNewItem(amount);
  };

  return (
    <Container>
      <FormSection>
        <label htmlFor={inputId}>Amount</label>
        <input
          type="number"
          id={inputId}
          value={amount}
          onChange={changeAmountHandler}
        />
      </FormSection>
      <Button icon={<Plus />} onClick={addItemHandler}>
        Add
      </Button>
    </Container>
  );
}

export default MealItemForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const FormSection = styled.section`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
  }
  input {
    width: 60px;
    height: 32px;
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    outline: none;
    font-family: inherit;
    padding: 4px 12px;
    margin-left: 20px;
  }
`;
