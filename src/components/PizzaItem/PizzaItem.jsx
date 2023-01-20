function PizzaItem({pizzaItemProp}){
    return(
        <>
            <div class="pizza-item">
                <img src={pizzaItemProp.image_path} />
                <h2>{pizzaItemProp.name}</h2> 
                <p>{pizzaItemProp.description}</p> 
                <p>{pizzaItemProp.price}</p>
            </div>
        </>
    )
}
export default PizzaItem;