import './App.css';
import { useState } from 'react'
import Header from './components/header/header.jsx'
import HomeSection from './components/HomeSection/HomeSection'
import { Stack } from '@mui/material'

function App() {

  /*
    Tuve que agregar el state "number" que no hace nada porque
    este cambio de estado SI LLAMA AL RENDER pero cuando modifico
    el array "itemsInCart" NO LLAMA AL RENDER por si mismo.
    No entiendo que estoy haciendo mal.
  */

  let [itemsInCart, setItemsInCart] = useState([])

  let [number, setNumber] = useState(0)

  function onAdd(itemsToAdd){
    itemsInCart.push(itemsToAdd)
    setItemsInCart(itemsInCart)
    setNumber(number+1) //si elimino esta funcion, el componente no renderiza
  }

  return (
    <Stack
    direction="column"
    spacing={2}
    >
      <Header 
        itemsInCart={itemsInCart}/>
      <HomeSection 
        onAdd={onAdd}/>
    </Stack>
  );
}

export default App;
