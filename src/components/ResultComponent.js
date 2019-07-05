import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let { displayedValue } = this.props;
        return (
            <div className="result">
                <p>{ displayedValue }</p>
            </div>
    )
        ;
    }
}


export default ResultComponent;
