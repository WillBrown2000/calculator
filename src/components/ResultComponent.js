import React, {Component} from 'react';

class ResultComponent extends Component {

    constructor(){
        super();

        this.state = {
            resultClass: 'result', //here just to handle the edge case of an initial negative number
        }
    }

    componentWillReceiveProps(props){
      let newResultClass = ''
      if (props.displayedValue.length < 10) {
        newResultClass = 'result'
      } else if (props.displayedValue.length >= 10 && props.displayedValue.length < 20)
        newResultClass = 'result-small'
      else {
        newResultClass = 'result-very-small'
      }
      this.setState({
        resultClass: newResultClass
      })

    }
    render() {
        let { displayedValue } = this.props;
        let { resultClass } = this.state;

        return (
            <div className={ resultClass }>
                <p>{ displayedValue }</p>
            </div>
    )
        ;
    }
}


export default ResultComponent;
