import {useState} from 'react';
import { Link, Router, Route } from "react-router-dom";
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';

const postOrder = () => {
    return (
        console.log('In postOrder request')
    )
}

const NextButton = ({submitOrder, totalCost}) => {
    const [navigateTo, setNavigateTo] = useState('CustomerForm');

    if (navigateTo === 'CustomerForm') {
        
        return (
            <Router>
                <div>
                    <Route path='/customerForm' exact>
                        <CustomerForm submitOrder={submitOrder} totalCost={totalCost}/>
                    </Route>
                    <nav>
                        <button onClick={()=> {(setNavigateTo('Checkout'))}}>
                            <Link to='/customerForm'>Next</Link>
                        </button>
                    </nav>
                </div>
            </Router>
        )
    // } else if (navigateTo === 'Checkout') {
    //         return (
    //             <Router>
    //                 <div>
    //                     <Route path='/checkout' exact>
    //                         <Checkout />
    //                     </Route>
    //                     <nav>
    //                         <button onClick={postOrder}>
    //                             Checkout
    //                         </button>
    //                     </nav>
    //                     <h2>hello</h2>
    //                 </div>
    //             </Router>
    //         )
     } 
 }

 export default NextButton;



