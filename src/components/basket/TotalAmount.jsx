import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

 const TotalAmount = ({ totalPrice , onClose, onOrder }) => {
  const isOrderButton =
    totalPrice > 0 ? <Button onClick={onOrder}>Order</Button> : null;

  const fixedPrice = totalPrice.toFixed(2);

  return (
    <Container>
      <TextContaner>
        <h3>Total Amount</h3>
        <h4>$ {fixedPrice}</h4>
      </TextContaner>
      <ButtonContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {isOrderButton}
      </ButtonContainer>
    </Container>
  );
};
export default TotalAmount; 

const Container = styled.div`
  padding-top: 30px;
`;

const TextContaner = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin: 0;
  }
  h4 {
    font-weight: 600;
    font-size: 22px;
    color: #8a2b06;
    margin: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
  gap: 16px;
`;
