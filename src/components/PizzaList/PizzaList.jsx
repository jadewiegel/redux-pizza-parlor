import PizzaItem from "../PizzaItem/PizzaItem";
import './PizzaList.css';

function PizzaList (props) {
    return (
        <>            
            {/* {JSON.stringify({pizzaListProp})} */}
            <h2>PIZZA OPTIONS</h2>
                <div className="pizza-container">
                    {props.pizzaListProp.map(pizza => (            
                            <PizzaItem pizzaItemProp = {pizza} addPizzaProp={props.addPizzaProp} deletePizzaProp={props.deletePizzaProp} />                
                    )
                    )}
                </div>
        </>
    )
}

export default PizzaList;