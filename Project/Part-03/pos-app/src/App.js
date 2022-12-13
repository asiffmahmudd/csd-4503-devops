import { useEffect, useState } from 'react';
import './App.css';
import AppBody from './components/AppBody/AppBody';
import AppHeader from './components/AppHeader/AppHeader';
import { serverurl } from './config';

function App() {

  let [products, setProducts] = useState([])

  const deleteProduct = (id) =>{
    setProducts(products.filter(product => product._id !== id))
  }

  const updateProduct = (id, newData) =>{
    const newProducts = products.map(product => {
      if(product._id === id){
        return {...product, ...newData}
      }
      return product
    })
    setProducts(newProducts)
  }

  useEffect(() => {
    fetch(serverurl+'/products',{
      method : "GET"
    })
    .then(data => data.json())
    .then(json => {
      setProducts(json.products)
      console.log(json.products)
    })
  }, [setProducts])

  return (
    <div className="App">
      <AppHeader/>
      <AppBody products={products} deleteProduct={deleteProduct} updateProduct={updateProduct}/>
    </div>
  );
}

export default App;
