import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = [
    "Dal",
    "Green Vegetable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
    "Apple",
  ];

  //let foodItem = [];

  return (
    <React.Fragment>
      <></>
      <div className="food-heading">Healthy food</div>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
