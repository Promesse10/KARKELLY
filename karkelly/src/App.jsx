import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Food from './Components/Food';
import Construction from './Components/Construction';
import Cart from './Components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Food addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} />
        </Route>
        <Route path="/construction" component={Construction} />
      </Switch>
    </Router>
  );
}

export default App;
