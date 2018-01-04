import React, { Component } from 'react';

export class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={'total'}>
                <h4>Total to pay: {this.props.totalLabel}</h4>
            </div>
        )
    }
}

export default Total;