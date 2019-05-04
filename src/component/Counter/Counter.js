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

        this.changeColor();
    }

    changeColor = () => {
        if(this.state.counter <= 5){
            this.setState({
                color: 'red'
            })
        }else if(this.state.counter >= 15){
            this.setState({
                color: 'green'
            })
        }else{
            this.setState({
                color: 'black'
            })
        }
    }

    decrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })

        this.changeColor()
    }
    render() {
        return (
            <div style={{color: this.state.color}}>
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