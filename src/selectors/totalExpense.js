const totalExpense = (expenses)=>{
    if(expenses.length===0)
    return 0
    else{
        return expenses.map((expense)=>expense.amount)
        .reduce((sum,value)=>{
            return sum +value 
        },0)
    }
   
    
}

export default totalExpense