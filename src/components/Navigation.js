import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// Contexts, imported named context
import { CartContext } from '../contexts/CartContext.js';

//removed props and used cartContext 'length'
const Navigation = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
