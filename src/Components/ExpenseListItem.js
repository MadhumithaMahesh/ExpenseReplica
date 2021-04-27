
import {Link} from 'react-router-dom'

const ExpenseListItem = ({id,description,amount})=>{

    return(
    <div>
        
        <Link to = {`/edit/${id}`}>
        <h2>{description}</h2>
        </Link>
     
<p>{amount}</p>
    </div>
)
}

export default ExpenseListItem