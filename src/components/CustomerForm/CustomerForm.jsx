import {useState, useEffect} from 'react';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";


const CustomerForm = ({submitOrder, totalCost}) => {
    const [customerName, setCustomerName] = useState();
    const [customerAddress, setCustomerAddress] = useState();
    const [customerCity, setCustomerCity] = useState();
    const [customerZipcode, setCustomerZipcode] = useState();
    const [type, setType] = useState();

    const history = useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in customerForm');
        submitOrder(customerName, customerAddress, customerCity, customerZipcode, type);
        // history.push('');
    }

    return (
        <Router>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(event) => setCustomerName(event.target.value)}
                    value={customerName}
                    placeholder="Name"
                />
                <br /><br />
                  <input
                    onChange={(event) => setCustomerAddress(event.target.value)}
                    value={customerAddress}
                    placeholder="Street Address"
                />
                <br /><br />
                <input
                    onChange={(event) => setCustomerCity(event.target.value)}
                    value={customerCity}
                    placeholder="City"
                />
                <br /><br />
                <input
                    onChange={(event) => setCustomerZipcode(event.target.value)}
                    value={customerZipcode}
                    placeholder="Zipcode"
                />
                <br /><br />
                <select value={(event) => setType(event.target.value)}>
                    <option value="Pickup">Pickup</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </form>

            
        </div>
        <Checkout customerName={customerName} customerAddress={customerAddress} customerCity={customerCity} customerZipcode={customerZipcode} type={type} />
        </Router>

    )
}

export default CustomerForm;


//id - customer_name - street_address - city - zip - type - total - time