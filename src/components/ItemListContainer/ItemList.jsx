import React from 'react'
import Item from './item'
const ItemList = ({ products }) => {
    return (
    <div className='container'>
    {
        products.map( (product)=>(
            <Item product={product} key={product.id}/>
        ))
    }
    </div>
    )
}

export default ItemList
