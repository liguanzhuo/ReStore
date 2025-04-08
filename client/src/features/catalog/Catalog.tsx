import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


function Catalog() {
    const [products, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])


    return (
        <>
            <ProductList products={products} />
        </>
    )
}

export default Catalog

