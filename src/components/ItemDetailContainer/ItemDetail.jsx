import "./itemdetail.css"

const ItemDetail = ({ product }) => {
    return (
        <div className="detail">
            <img className="img" src={product.image} width="25%"/>
            <div>
                <h3 className="name">{product.name}</h3>
                <p className="descr">{product.description}</p>
                <p className="price">Precio: {product.price}U$d</p>
                <button className='btn-2'>Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail
