import ItemCard from "../ItemCard/ItemCard"


const ItemList = ( {items} ) =>{

    return(
        <div>
            <h2>Productos</h2>

            <div className="row">
                {
                    items.map((prod) => <ItemCard item={prod} key={prod.id} />)
                }
            </div>
        </div>
    )
}

export default ItemList