import './App.css';
import { Component } from 'react';
import KeyPad from "./components/KeyPad"
import Output from "./components/Output"

class calculator extends Component{

  state = {
    result: ""
  }

  buttonPressed = (buttonId) => {
    if(buttonId === "="){
      this.calculate();
    }
    else if(buttonId === "x"){
      let result = this.state.result;
      let length = result.length;
      result = result.toString().slice(0, length-1);
      this.setState({
        result: result
      })
    }
    else if(buttonId === "SQRT"){
      this.squareRoot();
    }
    else if(buttonId === "SQ"){
      this.square();
    }
    else if(buttonId === "CE"){
      this.setState({result: ""});
    }
    else{
      this.setState({result: this.state.result + buttonId});
    }
  }

  calculate = () => {
    if(this.state.result === ""){
      alert("Enter Data")
    }
    else{
      try{
        this.setState({
          result: eval(this.state.result)
        })
      }
      catch(error){
        alert("Please Enter Proper Syntax")
      }
    }
  }

  square = () => {
    let square = eval(this.state.result);
    square = square * square;
    this.setState({
      result: square
    })
  }

  squareRoot = () => {
    let sqrt = eval(this.state.result);
    sqrt = Math.sqrt(sqrt);
    this.setState({
      result: sqrt
    })
  }

  render() {
    return (
      <div className = "body">
        <Output result = {this.state.result}/>
        <KeyPad buttonPressed = {this.buttonPressed}/>
      </div>
      
    )
  }
}

export default calculator;
