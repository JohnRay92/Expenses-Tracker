import React, { useState} from 'react'
import './ExpenseItem.css'
import Card from '../UI/card';
import ExpenseDate from '../Expenses/ExpenseDate';

function ExpenseItem (props) {
  
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Tomato');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date = {props.date} />
      </div>
      
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className = "expense-item__price">{props.amount}</div>
      </div>
      <button onClick = {clickHandler} >change title</button>
    </Card>
  );
}

export default ExpenseItem;