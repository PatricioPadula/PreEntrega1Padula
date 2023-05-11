

const ItemDetail = ({item}) => {
    console.log(item);
    return(

            <div className='col-3 mt-5'>
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio}</p>
                <img className="item" src={item.img} alt={item.nombre} />
                <p>{item.descripcion}</p>
                <p>Stock: {item.stock}</p>
                <p>Categoria: {item.category}</p>
                <button className="btn btn-primary">Agregar al carrito</button>
            </div>

    )

}

export default ItemDetail