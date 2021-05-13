import React from 'react'
import ExpenseForm from './ExpenseForm'
import{connect} from 'react-redux'
import {startAddExpense} from '../Actions/expenses'

const AddExpensePage = (props)=>{
    return(
        <div>
            AddExpensePage
            <ExpenseForm onSubmit = {(expense)=>{
                props.startAddExpense(expense)
                props.history.push('/')
            }}></ExpenseForm>

        </div>
    )
}

const mapDispatchToProps = (dispatch)=>(
    {
        startAddExpense:(expense)=>dispatch(startAddExpense(expense))
    }
)

export default connect(undefined, mapDispatchToProps) (AddExpensePage)