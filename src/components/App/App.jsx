import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  const [pizzaList, setPizzaList] = useState([]);
  const [orderCost, setOrderCost] = useState('');
  const [orderItem, setOrderItem] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  // let totalCost = 0;
  
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
  
  const addCost = ((a, b) => {
    return (
      setTotalCost(Number(a) + Number(b))
    )
  })
  
  const removeCost = ((a, b) => {
    return (
      setTotalCost(Number(a) - Number(b))
    )
  })

  //function to add pizza
  const addPizza = ((pizza) => {
    setOrderCost(pizza.price);
    setOrderItem(pizza.name);
    // setTotalCost(totalCost + pizza.price);
    addCost(totalCost, pizza.price);
  })
  
  
  //delete pizza
  const deletePizza = ((pizza) => {
    setOrderCost('');
    setOrderItem('');    
    removeCost(totalCost, pizza.price);

  })
  
  return (    
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <div>
      {/* {JSON.stringify({pizzaOrder})} */}
        <h2>
          Total: {totalCost} 
        </h2>
        <br/>
        {orderCost}
        <br />
        {orderItem}
      </div>

      {/* {JSON.stringify({pizzaList})} */}
      <PizzaList pizzaListProp={pizzaList} addPizzaProp={addPizza} deletePizzaProp={deletePizza} />

      <p>Pizza is great.</p>
      <button class='nextButton' onClick="">Next</button>
    </div>
  );
}

export default App;
