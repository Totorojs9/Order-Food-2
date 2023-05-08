import { v4 } from "uuid";

export const DUMMY_MEALS = [
  {
    id: v4(),
    title: "Sushi",
    description: "finest fish and veggies",
    price: 22.99,
  },
  {
    id: v4(),
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: v4(),
    title: "Barbecue",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: v4(),
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

export const backdropElement = document.getElementById("backdrop");
export const ModalElement = document.getElementById("modal");

export const DUMMY_ITEMS = [
  {
    id: v4(),
    title: "Sushi",
    price: 22.99,
    amount: 12,
  },

  {
    id: v4(),
    title: "Barbecue",
    amount: 5,
    price: 12.99,
  },
];
