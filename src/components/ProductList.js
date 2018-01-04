import React, { Component } from 'react';
import { Product } from './Product';


export class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleShow(key, name) {

        this.props.onShow && this.props.onShow(key, name);
    }
    handleBuy(key, price) {

        this.props.onBuy && this.props.onBuy(key, price);
    }


    render() {
        let i = 0;
        return (
            <div className={'product-list'}>
                {
                    /* children create */
                    this.props.products &&
                    this.props.products.map((product) => {
                        const { name, price, id } = product;
                        const key = ++i;
                        return <Product
                            key={key}
                            name={name}
                            price={price}
                            priceLabel={'£' + price}
                            onShow={(name) => {
                                this.handleShow(id, name);
                            }}
                            onBuy={(price) => {
                                this.handleBuy(id, price);

                            }} />
                    })
                }
            </div>
        )
    }
}

export default ProductList;
