import React from "react";
import styled from "styled-components";
import { DUMMY_MEALS } from "../utils/constant";
import MealItem from "./mealsitem/MealItem";

const Meal = () => {
  return (
    <Container>
      {DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </Container>
  );
};

export default Meal;

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 40px;
  max-width: 1039px;
`;
