import React from 'react';
import { connect } from 'react-redux';
import container from '../containers/all.js';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(itemArrayPosition) {
    console.log(itemArrayPosition);
    this.props.dispatch({
      type: 'REMOVE_CART_ITEM',
      itemArrayPosition: itemArrayPosition
    });
  }

  render() {
    let cartPosition = this.props.cartPosition;
    return (
      <tr>
        <td>{this.props.type}</td>
        <td>{this.props.price}</td>
        <td>
          <button
            onClick={() => this.handleDeleteClick(this.props.cartPosition)}
          >
            ✖️
          </button>
        </td>
      </tr>
    );
  }
}

export default connect()(CartItem);
