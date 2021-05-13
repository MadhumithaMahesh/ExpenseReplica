import {createStore,combineReducers,applyMiddleware} from 'redux'
import expenseReducer from '../Reducers/expenses'
import filterReducer from '../Reducers/filters'
import thunk from 'redux-thunk'

export default ()=>{

   
    const store = createStore(combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    }),
    applyMiddleware(thunk))
    return store
}
 
