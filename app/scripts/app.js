import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Shop from './components/shop.js';

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Shop} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}
