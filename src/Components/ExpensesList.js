import{connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/visibleExpenses'

const ExpensesList = (props)=>(

   <div>
       {props.expenses.map((expense)=>{
           return <ExpenseListItem  key = {expense.id}{...expense}></ExpenseListItem>
       })}
      
    </div>
    
    
)
const mapStateToProps = (state)=>{
    return{
        expenses:getVisibleExpenses(state.expenses,state.filters)
    }
    
}
 export default connect(mapStateToProps)(ExpensesList)
