import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
            error: ''
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            error: error.message
        });
    }

    render() {
        if(this.hasError) {
            return(
                <h1>{this.error}</h1>
            );
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;