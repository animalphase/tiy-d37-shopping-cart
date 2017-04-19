import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import CartItem from './cart-item.js';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {}

  render() {
    this.fetchData();
    return (
      <main>
        <section className="cart-section">
          <div className="cart-list">
            <h3>Shopping Cart</h3>
            <table>
              {this.props.cart.map((item, index) => {
                return (
                  <CartItem
                    key={Math.random()}
                    type={item.type}
                    price={item.price}
                    cartPosition={index}
                  />
                );
              })}
              <hr />
              <tr>
                <td>Total:</td>
                <td>${this.props.cartTotal}</td>
              </tr>
            </table>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(Cart);
