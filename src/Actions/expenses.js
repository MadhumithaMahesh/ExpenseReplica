import { v4 as uuidv4 } from 'uuid'
import database from '../Firebase/firebase'

export const addExpense = (expense)=>( 
        {
            type:'ADD_EXPENSE',
            expense
            
        }
    );

    export const startAddExpense = (expenseData = {})=>{
        return(dispatch)=>{
            const {description='',notes='',amount=0,createdAt=0}=expenseData
            const expense = {description,notes,amount,createdAt}
            database.ref('expenses').push(expense).then((ref)=>{
               dispatch(addExpense({
                   id:ref.key,
                   ...expense
               }))
            })
        }
           
       
        
    }

export const removeExpense = ({id})=>({
    type:'REMOVE_EXPENSE',
    id
})

export const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})





