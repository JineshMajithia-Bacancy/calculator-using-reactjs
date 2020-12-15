import logo from './logo.svg';
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
    else if(buttonId === "CE"){
      this.setState({result: ""});
    }
    else{
      this.setState({result: this.state.result + buttonId});
    }
  }

  calculate = () => {
    this.setState({
      result: eval(this.state.result)
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
