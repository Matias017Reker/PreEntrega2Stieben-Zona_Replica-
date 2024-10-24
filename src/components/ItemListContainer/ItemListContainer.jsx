import ItemList from "./ItemList.jsx"
import { useEffect, useState } from "react"
import "./itemlistcontainer.css"
import Loading from "../Loading/Loading.jsx"
import { getProducts } from "../../data/data.js"
import useProducts from "../../hooks/useProducts.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { products, loading } = useProducts();
    const { idcategory } = useParams();

    useEffect(() => {
    if (idcategory) {
        const filtered = products.filter((product) => product.category === idcategory);
        setFilteredProducts(filtered);
    } else {
        setFilteredProducts(products);
    }
    }, [idcategory, products]);

    return (
    <div>
        {loading ? <Loading /> : <ItemList products={filteredProducts} />}
    </div>
    );
};

export default ItemListContainer;