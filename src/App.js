import React, { Component } from 'react';
import './App.css';

let receipts = [
  {
    person: "Karolin",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Korchata",
      cost: 22
    },
    paid: false
  },
  {
    person: "Jerrica",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19
    },
    paid: false
  },
  {
    person: "Matt",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20
    },
    paid: false
  }
]
console.log(receipts[0])
class App extends Component {
  constructor(props) {
    super(props);
    this.state = receipts[0];
  }

  render () {
    return (
      <div>
        <h1 className="truck-name">Korilla Receipts</h1>
      </div>
    )
  }
}

export default App;
