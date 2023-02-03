import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
// import { useHistory } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import CustomerForm from '../CustomerForm/CustomerForm';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function App() {

  const [pizzaList, setPizzaList] = useState([]);
  const [orderCost, setOrderCost] = useState('');
  const [orderItem, setOrderItem] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [order, setOrder] = useState([]);
  // const [orderedItems, setOrderedItems] = useState([]);

  const history = useHistory();
  
  useEffect(() => {
    fetchPizzas();
  }, []);

  
  //GET request to pizza
  const fetchPizzas = () => {
    axios({
      method: 'GET',
      url: 'api/pizza'      
    })
    .then((response) => {
      console.log('response from fetchPizzas: ', response.data);
      setPizzaList(response.data);
    })
    .catch((error) => {
      console.log('error with GET pizza list: ', error);
    });
  }

  //POST
  const submitOrder = (customer_name, street_address, city, zip, type) => {
    axios ({
      mehtod: 'POST',
      url: '/api/order',
      data: {
        customer_name,
        street_address,
        city,
        zip,
        type,
      }
    })
  }

  
  const addCost = (() => {
    for (let i=0; i<order.length; i++){
    return (
      setTotalCost(Number(a) + Number(b))
    )
  }})
  
  const removeCost = ((a, b) => {
    return (
      setTotalCost(Number(a) - Number(b))
    )
  })

  const removeOrderItem = ((id) => {
    
    for (let i=0; i<order.length; i++){
        console.log('in loop with id of: ', order[i].id);
        
      
      // if (id != order[i].id) {
      //   // alert('This pizza it not in the cart');
      // } 
      if (id === order[i].id) {
        removeCost(Number(totalCost), Number(order[i].price));
      }}})
  
       
  
   

  //function to add pizza
  const addPizza = ((pizza) => {
    console.log('in add pizza with id: ', pizza.id);
    order.push(pizza);
    setTotalCost(Number(totalCost) + Number(pizza.price));
    addCost(totalCost, pizza.price);
  })
  
  
  //delete pizza
  const deletePizza = ((pizza) => {
    console.log('in delete pizza with pizza.id', pizza.id);
    setOrderCost('');
    setOrderItem('');
    removeOrderItem(pizza.id);
    })

    // route change to customer form on next click
    const routeChange = (()=> {
      console.log(history);
      // history.push('/customerForm');      
    })
    
  return (    
    <Router>
      <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
          </header>

          <div>
          {/* {JSON.stringify({order})} */}
            <h2>
              Total: {totalCost} 
            </h2>
            <br/>
            {/* {orderCost}
            <br />
          {orderItem} */}
          </div>

          {/* {JSON.stringify({pizzaList})} */}
          <Route path='/' exact>
            <PizzaList pizzaListProp={pizzaList} addPizzaProp={addPizza} deletePizzaProp={deletePizza} />
          </Route>
          <p>Pizza is great.</p>
            
          <Route path='/customerForm' exact>
            <CustomerForm submitOrder={submitOrder} totalCost={totalCost}/>
          </Route>
          <br />
          <nav>
            <button className='nextButton'>
              <Link to='/customerForm'>Next</Link>
            </button>
          </nav>
      </div>
    </Router>
  );
}


export default App;
