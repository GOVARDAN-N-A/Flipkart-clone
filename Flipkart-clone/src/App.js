import React, { useEffect } from 'react'
import "./App.css"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { useDispatch } from 'react-redux';
import Cart from "./pages/Cart/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

import supabase from './supabase'
import { setUser } from './slices/userSlice';


const App = () => {

  const dispatch = useDispatch();
  const getUser = async () => {

    const { data, error } = await supabase.auth.getSession()
    if (data.session){
      dispatch(setUser(data.session.user))
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/products' element={<Products />} ></Route>
        <Route path='/productDetails/:id' element={<ProductDetails />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App