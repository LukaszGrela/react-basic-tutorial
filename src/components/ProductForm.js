import React, { Component } from 'react';

export class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0
        }
    }

    handleChange(id, value) {
        switch (id) {
            case 'name':
                this.setState({ name: value });
                break;
            case 'price':
                this.setState({ price: parseFloat(value) });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.onNew && this.props.onNew(this.state.name, this.state.price);
                this.setState({ name: '', price: 0 });
            }}>
                <label>
                    <input type='text' placeholder='Product Name'
                        value={this.state.name}
                        onChange={(e) => {
                            this.handleChange('name', e.target.value);
                        }} />
                </label>
                <label>
                    <input type='text' placeholder='Product Price'
                        value={this.state.price}
                        onChange={(e) => {
                            this.handleChange('price', e.target.value);
                        }} />
                </label>
                <button>Add</button>
            </form>
        )
    }
}

export default ProductForm;