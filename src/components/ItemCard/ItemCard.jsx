import { Link } from "react-router-dom";


const ItemDetail = ({item}) =>{

    return (

            <div className='col-3 mt-5'>
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio}</p>
                <img src={item.img} alt={item.nombre} />
                <p>{item.descripcion}</p>
                <p>Stock: {item.stock}</p>
                <p>Categoria: {item.category}</p>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
            </div>
    )
}

export default ItemDetail