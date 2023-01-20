import PizzaItem from "../PizzaItem/PizzaItem";
import './PizzaList.css';

function PizzaList ({pizzaListProp}) {
    return (
        <>            
                {/* {JSON.stringify({pizzaListProp})} */}
                <h2>PIZZA OPTIONS</h2>
            <div class="pizza-container">
                {pizzaListProp.map(pizza => (
        
                        <PizzaItem pizzaItemProp = {pizza} />
                
            
                )
                )}
            </div>
        </>
    )
}

export default PizzaList;