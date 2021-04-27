import React from 'react'
import ExpenseList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashBoardPage = ()=>{
    return(
        <div>
            ExpenseDashBoardPage
            <ExpenseListFilters></ExpenseListFilters>
            <ExpenseList ></ExpenseList>
        </div>
    )
}

export default ExpenseDashBoardPage