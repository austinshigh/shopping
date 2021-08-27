import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={ Homepage } />
            <Route exact path="/shop" component={ ShopPage } />
        </BrowserRouter>
    </div>
  );
}

export default App;
