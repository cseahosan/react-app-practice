import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return (
            <div>
                <h1>
                    <span onClick={ this.decrease }>- </span>
                    { this.state.counter }
                    <span onClick={ this.increase }> +</span>
                </h1>
            </div>
        )
    }
}

export default Counter