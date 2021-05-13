import React from 'react'
import{connect} from 'react-redux'
import getVisibleExpenses from '../selectors/visibleExpenses'
import totalExpense from '../selectors/totalExpense'


const ExpenseSummary = ({expenseCount,expenseTotal})=>{
    const expenseWord = expenseCount===1?'expense':'expenses'    

    return(
    <div>
        You are Viewing {expenseCount} {expenseWord} with a total of {expenseTotal}
    </div>)
}

const mapStateToProps = (state)=>{
    const selectedExpenses = getVisibleExpenses(state.expenses,state.filters)
    return{
        expenseCount:selectedExpenses.length,
        expenseTotal:totalExpense(selectedExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)