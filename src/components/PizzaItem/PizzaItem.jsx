import './PizzaItem.css';

function PizzaItem(props){

    const addPizza = (pizzaItem) => {
        props.addPizzaProp(pizzaItem)
    }

    const removePizza = (pizzaItem) => {
        props.deletePizzaProp(pizzaItem)
    }

    return(
        <>
            <div class="pizza-item">
                <img src={props.pizzaItemProp.image_path} />
                <h2>{props.pizzaItemProp.name}</h2> 
                <p>{props.pizzaItemProp.description}</p> 
                <p>{props.pizzaItemProp.price}</p>
                <button
                    id={props.pizzaItemProp.id}
                    onClick={
                        () => {addPizza(props.pizzaItemProp)}
                    }
                >ADD PIZZA</button>
                <button
                    id={props.pizzaItemProp.id}
                    onClick={
                        () => {removePizza(props.pizzaItemProp)}
                    }
                >REMOVE PIZZA</button>
            </div>
        </>
    )
}
export default PizzaItem;