import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/card";
import Filter from './Filter'


const Expenses = (props) => {

const [selectedYear, setselectedYear] = useState('2020');
const item = props.expense;

const yearSelectHandler = (enteredYear) =>
{
  setselectedYear (enteredYear);
  //console.log(year);
}

  return (
    
    <Card className = "expenses">
      <Filter selected = {selectedYear} onYearSelected = {yearSelectHandler}></Filter>
      {
        item.map((expenses)=>
        <ExpenseItem
        title = {expenses.title}
        amount = {expenses.amount}
        date = {expenses.date}
        />
        )
      }
    </Card>
  );
}

export default Expenses;