import Basket from "./components/basket/Basket";
import { useState } from "react";
import Header from "./components/headers/Header";
import MealSummary from "./components/meal-summary/MealSummary";
import Meal from "./components/meal/Meal";
import { CartProvider } from "./store/cart-context";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleModalHadler = () => {
    setToggle(!toggle);
  };
  return (
    <CartProvider>
      <Header toggleModalHadler={toggleModalHadler} />
      <MealSummary />
      <Meal />
      {toggle && <Basket toggleModalHadler={toggleModalHadler} />}
    </CartProvider>
  );
}

export default App;
