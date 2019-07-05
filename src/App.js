import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            displayedValue: "0",
            storedValue: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
          if (this.state.displayedValue === "0") {
            this.setState({
                displayedValue: button
            })
          } else {

            this.setState({
                displayedValue: this.state.displayedValue + button
            })

          }
        }
    };


    calculate = () => {
        var checkdisplayedValue = ''
        if(this.state.displayedValue.includes('--')){
            checkdisplayedValue = this.state.displayedValue.replace('--','+')
        }

        else {
            checkdisplayedValue = this.state.displayedValue
        }

        try {
            this.setState({
                // eslint-disable-next-line
                displayedValue: (eval(checkdisplayedValue) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                displayedValue: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            displayedValue: "0"
        })
    };

    backspace = () => {
      if (this.state.displayedValue.slice(0, -1) === "") {
        this.setState({
            displayedValue: "0"
        })
      } else {
        this.setState({
            displayedValue: this.state.displayedValue.slice(0, -1)
        })
      }
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>InfoBlox Calculator</h1>
                    <ResultComponent displayedValue={this.state.displayedValue}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
