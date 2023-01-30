import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  const [pizzaList, setPizzaList] = useState([]);
  const [orderCost, setOrderCost] = useState('');
  const [orderItem, setOrderItem] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [order, setOrder] = useState([]);
  // const [orderedItems, setOrderedItems] = useState([]);

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
    setTotalCost(totalCost + pizza.price);
    addCost(totalCost, pizza.price);
  })
  
  
  //delete pizza
  const deletePizza = ((pizza) => {
    console.log('in delete pizza with pizza.id', pizza.id);
    setOrderCost('');
    setOrderItem('');
    removeOrderItem(pizza.id);
    })
    
  return (    
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <div>
      {JSON.stringify({order})}
        <h2>
          Total: {totalCost} 
        </h2>
        <br/>
        {/* {orderCost}
        <br />
        {orderItem} */}
      </div>

      {/* {JSON.stringify({pizzaList})} */}
      <PizzaList pizzaListProp={pizzaList} addPizzaProp={addPizza} deletePizzaProp={deletePizza} />

      <p>Pizza is great.</p>
      <button class='nextButton' onClick="">Next</button>
    </div>
  );
}

export default App;
