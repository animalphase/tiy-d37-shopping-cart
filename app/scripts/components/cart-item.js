import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        cart item
      </li>
    );
  }
}

export default CartItem;
