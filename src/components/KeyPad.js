import React, {Component} from 'react'

class KeyPad extends Component{

    buttonPressed = (e) => {
        this.props.buttonPressed(e.target.id);
    };

    render() {
        return (
            <div className = "buttons">
                <button id = "0" onClick = {this.buttonPressed}>0</button>
                <button id = "1" onClick = {this.buttonPressed}>1</button>
                <button id = "2" onClick = {this.buttonPressed}>2</button>
                <button id = "3" onClick = {this.buttonPressed}>3</button>
                <button id = "4" onClick = {this.buttonPressed}>4</button>
                <button id = "5" onClick = {this.buttonPressed}>5</button>
                <button id = "6" onClick = {this.buttonPressed}>6</button>
                <button id = "7" onClick = {this.buttonPressed}>7</button>
                <button id = "8" onClick = {this.buttonPressed}>8</button>
                <button id = "9" onClick = {this.buttonPressed}>9</button>
                <button id = "+" onClick = {this.buttonPressed}>+</button>
                <button id = "-" onClick = {this.buttonPressed}>-</button>
                <button id = "/" onClick = {this.buttonPressed}>/</button>
                <button id = "*" onClick = {this.buttonPressed}>*</button>
                <button id = "=" onClick = {this.buttonPressed}>=</button>
                <button id = "CE" onClick = {this.buttonPressed}>CE</button>
                <button id = "SQ" onClick = {this.buttonPressed}>SQUARE</button>
                <button id = "SQRT" onClick = {this.buttonPressed}>SQ. ROOT</button>
                <button id = "(" onClick = {this.buttonPressed}>(</button>
                <button id = ")" onClick = {this.buttonPressed}>)</button>
                <button id = "x" onClick = {this.buttonPressed}>x</button>
            </div>
        )
    }
}

export default KeyPad;