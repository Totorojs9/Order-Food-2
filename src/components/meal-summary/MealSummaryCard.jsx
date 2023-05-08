import React from "react";
import styled from "styled-components";

function MealSummaryCard() {
  return (
    <Container>
      <h3>Delicious Food, Delivered To You</h3>
      <Paragraph>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Paragraph>
      <Paragraph>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Paragraph>
    </Container>
  );
}

export default MealSummaryCard;

const Container = styled.div`
  max-width: 856px;
  width: 100%;
  height: 270px;

  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;

  position: absolute;
  z-index: 10;
  top: 358px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 36px 40px;

  h3 {
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 36px;
  }
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;
