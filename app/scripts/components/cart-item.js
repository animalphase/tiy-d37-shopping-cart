import React from 'react';
import { connect } from 'react-redux';
import container from '../containers/all.js';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.type}</td>
        <td>{this.props.price}</td>
        <td><button>✖️</button></td>
      </tr>
    );
  }
}

export default connect()(CartItem);
