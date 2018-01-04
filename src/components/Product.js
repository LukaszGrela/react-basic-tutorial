import React, { Component } from 'react';

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick(id) {
        switch (id) {
            case 'buy':
                this.props.onBuy && this.props.onBuy(this.props.price);
                break;
            case 'show':
                this.props.onShow && this.props.onShow(this.props.name);
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className={'product'}>
                <div className={'title'}>{this.props.name}</div>
                <div className={'footer'}>
                    <div className={'price'}>{this.props.priceLabel}</div>
                    <div className={'buttons'}>
                        <button className={'buy-me'}
                            onClick={() => {
                                this.handleClick('buy');
                            }}>{'Buy'}</button>
                        <button className={'show-me'}
                            onClick={() => {
                                this.handleClick('show');
                            }}>{'Show'}</button>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Product;