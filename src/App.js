import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_womens.png';
import kid_banner from './Components/Assets/banner_kids.png';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route exact path='/men' element={<ShopCategory banner={men_banner} category='men' />} />
          <Route exact path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
          <Route exact path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />

          <Route exact path='product' element={<Product />}>
            <Route exact path=':productId' element={<Product />} />
          </Route>

          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;