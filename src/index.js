import React from 'react';
import ReactDOM from 'react-dom';
import ShopContextProvider from './Context/ShopContext';
import App from './App';


ReactDOM.render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>,
    document.getElementById('root'));