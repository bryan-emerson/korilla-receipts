import React from 'react';
import App from './App';
import './Receipt.css';

function Receipt(props) {
  console.log(props.rec)
  return(
    <div className='receipt'>
      <h3>{props.rec.person}</h3>
      <h6><span>Main: </span>{props.rec.order.main}</h6>
      <h6><span>Protein: </span>{props.rec.order.protein}</h6>
      <h6><span>Rice: </span>{props.rec.order.rice}</h6>
      <h6><span>Sauce: </span>{props.rec.order.sauce}</h6>
      <h6><span>Drink: </span>{props.rec.order.drink}</h6>
      <h6><span>Cost: </span>{props.rec.order.cost}</h6>
    </div>
  )
}
export default Receipt;