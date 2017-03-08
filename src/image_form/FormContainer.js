import React, { Component } from 'react';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                hello from FormContainer <br/>
                {this.props.message}
            </div>

        );
}
}

export default FormContainer;
