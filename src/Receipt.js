import React from 'react';
import App from './App';

function Receipt(props) {
  console.log(props.rec)
  return(
    <div>
      <h1>{props.rec.person}</h1>
      <h4>Main: {props.rec.order.main}</h4>
      <h4>Protein: {props.rec.order.protein}</h4>
      <h4>Rice: {props.rec.order.rice}</h4>
      <h4>Sauce: {props.rec.order.sauce}</h4>
      <h4>Drink: {props.rec.order.drink}</h4>
      <h4>Cost: {props.rec.order.cost}</h4>
    </div>
  )
}
export default Receipt;