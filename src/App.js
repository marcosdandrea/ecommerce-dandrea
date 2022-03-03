import './App.css';
import { useState } from 'react'
import Header from './components/header/header.jsx'
import Body from './components/body/Body'


function App() {

  let [itemsAmount, setItemsAmount] = useState(0)
  function changeAmount(amount){
    setItemsAmount(itemsAmount+amount);
  }

  return (
    <div>
      <Header itemsAmount={itemsAmount}/>
      <Body changeAmount={changeAmount}/>
    </div>
  );
}

export default App;
