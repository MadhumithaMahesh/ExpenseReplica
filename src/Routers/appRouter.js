import  {BrowserRouter as Router,Switch,Route,} from 'react-router-dom'
import ExpenseDashBoardPage from '../Components/ExpenseDashBoardPage'
import AddExpensePage from '../Components/AddExpensePage'
import EditExpensePage from '../Components/EditExpensePage'
import NotFoundPage from '../Components/NotFoundPage'
import Header from '../Components/Header'
 const AppRouter = ()=>{
    return(
  
     
      <Router>
      <Header></Header>
    <Switch>
    <Route path = '/' component={ExpenseDashBoardPage} exact={true}></Route>  
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
 
    )
}

export default AppRouter