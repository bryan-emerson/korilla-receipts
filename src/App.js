import React, { Component } from 'react';
import './App.css';
import Receipt from './Receipt.js'

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
//console.log(receipts[0])
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      receipts: receipts
    };
  }

  handleChange = (e) => {
    e.preventDefault()
    let searchedReciept = [...this.state.receipts].filter(receipt => receipt.person.includes(e.target.value))
    if (e.target.value === "") {
      this.setState({
        receipts: receipts
      })
    } else {
    this.setState({
      receipts: searchedReciept
    })
  }
  }

  render () {
    console.log(this.state.receipts)
    let paid = [...this.state.receipts].map(receipt => !receipt.paid ? <Receipt rec = {receipt}/> : null)
    return (
      <div>
        <h1 className="truck-name">Korilla Receipts</h1>
          <div className='container'>
          {/* <Receipt rec = {this.state[0]}/>
          <Receipt rec = {this.state[1]}/>
          <Receipt rec = {this.state[2]}/> */}
          {paid}
          </div>
          <input type='text' onChange={this.handleChange} placeholder='Search Name'/>
      </div>
    )
  }
}

export default App;
