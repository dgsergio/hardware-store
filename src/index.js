import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './store/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
