import React from 'react'
import ExpenseList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'

const ExpenseDashBoardPage = ()=>{
    return(
        <div>
            ExpenseDashBoardPage
            <ExpenseSummary></ExpenseSummary>
            <ExpenseListFilters></ExpenseListFilters>
            <ExpenseList ></ExpenseList>
        </div>
    )
}

export default ExpenseDashBoardPage