import './App.css';
import AppRouter from './Routers/appRouter'
import {Provider} from 'react-redux'
import configureStore from './selectors/configureStore'
import getVisibleExpenses from './selectors/visibleExpenses'
import {addExpense} from './Actions/expenses'
import {setTextFilter} from './Actions/filters'



//store.dispatch(addExpense({description:'water',amount:50}))

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill',amount:1000 }));
store.dispatch(addExpense({ description: 'Gas bill',amount:500 }));
store.dispatch(setTextFilter('bill'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
const App=()=> {
  return (
    <Provider store ={store} >
       <AppRouter></AppRouter>    
    </Provider>
     
  )
}

export default App;
