import React from 'react'
import ExpenseForm from './ExpenseForm'
import{connect} from 'react-redux'
import {addExpense} from '../Actions/expenses'

const AddExpensePage = (props)=>{
    return(
        <div>
            AddExpensePage
            <ExpenseForm onSubmit = {(expense)=>{
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}></ExpenseForm>

        </div>
    )
}

export default connect() (AddExpensePage)