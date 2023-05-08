import styled from "styled-components";
import OrderBusket from "./OrderBusket";

function Header({ toggleModalHadler }) {
  return (
    <Container>
      <h1>ReactMeals</h1>
      <OrderBusket onClick={toggleModalHadler}>Your cart</OrderBusket>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  height: 101px;
  /* max-width: 1540px; */
  width: 100%;
  background: #8a2b06;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;
