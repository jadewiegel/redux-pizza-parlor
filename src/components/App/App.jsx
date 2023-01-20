import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  const [pizzaList, setPizzaList] = useState([]);

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

  return (    
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      {/* {JSON.stringify({pizzaList})} */}
      <PizzaList pizzaListProp={pizzaList}/>
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
