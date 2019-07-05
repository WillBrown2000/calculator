import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            displayedValue: '',
            entries: [],
            newEntry: false,
            firstEntryMade: false, //here just to handle the edge case of an initial negative number
        }
    }

    onClick = button => {

        if(button === "=") {

          if (this.isEntriesFull()) {
            this.calculate(button, this.state.displayedValue)
          }

          else if (this.containsFirstOperandOnly()) {
            this.setState({
              displayedValue: this.state.entries[0]
            })

          }

          else {
            return //do nothing this is not a valid operation
          }

        }

        else if (button === '.' && this.state.newEntry === false){

          this.setState({
            displayedValue: '0.',
            newEntry: true,
            firstEntryMade: true,

          })

        }

        else if(button === "C"){
            this.reset()
        }

        else if(button === "CE"){
            this.backspace()
        }
        // handle + and - and edge cases
        else if (button === "+" || button === "-") {

          if (this.state.firstEntryMade === true &&  // user is repeatedly hitting the + or - button and an inital entry has been made
            this.state.newEntry === false &&
            this.isEntriesFull()) {

            this.setOperand(button)
            console.log(this.state)

            return
          }
          let temp = []
          console.log('store:',this.state.entries, 'display:',this.state.displayedValue)
          if (this.state.firstEntryMade === false && button === '-') { //allow negative numbers as first entry if not previous entries
            this.setState({
              displayedValue: button,
              newEntry: true,
            })
          }

          else if (this.isEntriesEmpty()) {
            temp.push(this.state.displayedValue)
            temp.push(button)
            this.setState({
              entries: temp,
              newEntry: false,
              firstEntryMade: true,
            })
          }

          else if (this.isEntriesFull()) {
              this.calculate(button, this.state.displayedValue)
          }

          else if (this.containsFirstOperandOnly()) {
              console.log('first operand')
              temp = this.state.entries.slice(0)
              temp.push(button)
              this.setState({
                entries: temp,
                newEntry: false,
                firstEntryMade: true,
              })
          }
        }

        // handle all other button presses
        else {
          if (this.state.newEntry === false) {  // set viewing pane when no value is displayed
            this.setState({
                displayedValue: button,
                newEntry: true,
                firstEntryMade: true,
            })
          } else {                                 // set normally
            this.setState({
                displayedValue: this.state.displayedValue + button,
                newEntry: true,
                firstEntryMade: true,
            })
          }
        }
      // handle decimals
      // handle really big numbers
    };

    isEntriesFull = () => {
      return this.state.entries.length === 2
    }

    setOperand = (button) => {
      let temp = this.state.entries.slice(0,1)
      temp.push(button)
      console.log(temp)

      this.setState({
        entries: temp,
      })
    }

    isValidOperation = (operationArray) => {
      let firstNum = operationArray[0]
      let operator = operationArray[1]
      let secondNum = operationArray[2]
      let regExTestForNum = /^-?[0-9]\d*(\.\d+)?$/

      return regExTestForNum.test(firstNum) &&
             regExTestForNum.test(secondNum) &&
             (operator === '+' || operator === '-')
    }

    containsFirstOperandOnly = () => {
      return this.state.entries.length === 1
    }

    isEntriesEmpty = () => {
      return this.state.entries.length === 0
    }

    checkDisplayedValue = () => {
      return this.state.entries[0] === this.state.displayedValue
    }

    calculate = (button, lastValue) => {

        let newEntries = []
        let expression = this.state.entries.slice(0)
        expression.push(lastValue)

        if (this.isValidOperation(expression)) {
          let result = eval(expression.join(''))
          newEntries.push(result)
        } else {
          console.log('there was a problem with your expression.  Clear inputs and try again')
          console.log(expression)
          return
        }

        if (button !== '=') {
          newEntries.push(button)
        }

        this.setState({
          entries: newEntries,
          displayedValue: newEntries[0],
          newEntry: false,
        })
    };

    reset = () => {
        this.setState({
            displayedValue: '',
            entries: [],
            newEntry: false,
            firstEntryMade: false,
        })
    };

    backspace = () => {

      // clear current entry, if entry is clear, delete current operand

      console.log(this.state)

      if (this.state.displayedValue === '' && this.isEntriesFull()) {
        let temp = this.state.entries.slice(0,1)
        this.setState({
          entries: temp,
        })
      } else {
        this.setState({
            displayedValue: '',
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
