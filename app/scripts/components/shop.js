import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import Cart from './cart.js';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.props.dispatch({ type: 'ADD_ITEM', item: item });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Shopping for cyborgs</h1>
          <hr />
        </header>
        <main className="main-wrapper">
          <section className="shopping-section">
            <h2>Store List</h2>
            <table>
              {this.props.storeItems.map((item, index) => {
                return (
                  <tr key={Math.random()}>
                    <td>
                      <button onClick={() => this.addItem(item)}>+</button>
                    </td>
                    <td>{item.type}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </table>
          </section>
          <Cart />
        </main>
      </div>
    );
  }
}

export default connect(container.allState)(Shop);
