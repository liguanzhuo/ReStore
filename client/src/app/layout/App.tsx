import { useEffect, useState } from "react"
import { Product } from "../models/product";


function App() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProduct(data))
  }, [])

  function addProduct(){
    setProduct(prevState => [
      ...prevState, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      }])
  }


  return (
    <div className="app">
      <h1>Re-Store</h1>
      <ul>
        {products.map(product=> (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  )
}

export default App
