import { useEffect, useState } from 'react';
import './App.css';
import AppBody from './components/AppBody/AppBody';
import AppHeader from './components/AppHeader/AppHeader';

function App() {

  let [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:2000/products',{
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
      <AppBody products={products}/>
    </div>
  );
}

export default App;
