import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function CustomerForm ({submitOrder, totalCost}) {
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(event) => setCustomerName(event.target.value)}
                    value={customerName}
                    placeholder="Name"
                />
                <br />
                  <input
                    onChange={(event) => setCustomerAddress(event.target.value)}
                    value={customerAddress}
                    placeholder="Street Address"
                />
                <br />
                <input
                    onChange={(event) => setCustomerCity(event.target.value)}
                    value={customerCity}
                    placeholder="City"
                />
                <br />
                <input
                    onChange={(event) => setCustomerZipcode(event.target.value)}
                    value={customerZipcode}
                    placeholder="Zipcode"
                />
                <br />
                <select value={(event) => setType(event.target.value)}>
                    <option value="Pickup">Pickup</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </form>
        </div>
    )
}
export default CustomerForm;


//id - customer_name - street_address - city - zip - type - total - time