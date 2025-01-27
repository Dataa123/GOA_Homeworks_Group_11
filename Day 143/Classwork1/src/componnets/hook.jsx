import { useEffect } from "react";
import { useState } from "react"

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(responce => responce.json())
            .then(data => setProducts(data))
    },[])

    return (
        <div>
            <ul>
                {
                    products.map((item) => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList