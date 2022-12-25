import React, {useState} from 'react';
import'./ExpenseForm.css'

const ExpenseForm = (props) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value);
    };
    const AmountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };
    const DateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };
    const submitHandler = (event) =>
    {
        event.preventDefault();
        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        console.log('expenseData');
        setInputAmount ('');
        setInputDate  ('');
        setInputTitle  ('');
    }
   return <form onSubmit={submitHandler} >
        <div className = 'new-expense__controls'>
            <div className = 'new-expense__control'>
                <label> Title </label>
                <input type = 'text' value = {inputTitle} onChange = {titleChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
                <label> Amount </label>
                <input type = 'number' value = {inputAmount} min = "0.01" step = "0.01" onChange = {AmountChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
                <label> Date </label>
                <input type = 'date' value = {inputDate} min ="2019-01-01" max = "2022-12-12" onChange = {DateChangeHandler} />
            </div>
        </div>
        <div className = 'new-expense__actions'>
            <button type = 'submit'>Add Expense </button>
        </div>
    </form>
};


export default ExpenseForm;