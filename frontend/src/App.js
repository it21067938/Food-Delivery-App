import React from 'react';
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from './pages/card/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';


function App() {
  return (
    <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/card' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
    </div>
  )
}

export default App