import React, { Component } from 'react';

import './App.css';
import { Total } from './components/Total';
import { ProductList } from './components/ProductList';
import { ProductForm } from './components/ProductForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      products: [
        {
          id: 'gp2-1',
          name: 'Google Pixel 2',
          price: 321.0
        },
        {
          id: 'ip5s-1',
          name: 'iPhone 5S',
          price: 45.0
        },
        {
          id: 'sgsiii-1',
          name: 'Samsung Galaxy SIII',
          price: 30.0
        },
      ]
    }
  }
  updateTotal(price) {
    const total = this.state.total;
    this.setState({ total: total + price });
  }
  addNewPhone(name, price) {
    const id = name[0] + '-' + Math.floor(Math.random() * 5000);
    let phones = this.state.products.concat();
    phones.push({
      id: id,
      name: name,
      price: price
    });

    this.setState({ products: phones });

  }

  render() {
    return (
      <div className={'app'}>
        <h1>Mobile Phones</h1>
        <ProductForm onNew={(name, price) => {
          console.log("Add New:", name, price)
          this.addNewPhone(name, price);
        }} />
        <hr />
        <ProductList
          products={this.state.products}
          onShow={(key, name) => {
            console.log(`${key}: Show ${name}`);
          }}
          onBuy={(key, price) => {

            console.log(`${key}: Buy for ${price}`);
            this.updateTotal(price);

          }} />
        <Total totalLabel={'£' + this.state.total} />
      </div>
    );
  }
}

export default App;
