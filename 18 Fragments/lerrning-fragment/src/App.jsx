import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";

function App() {
  let foodItem = [
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
      <div>Healthy food</div>
      {foodItem.length === 0 ? <h3>I am still hungry</h3> : null}
      <ul class="list-group">
        {foodItem.map((item) => (
          <li keys={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
