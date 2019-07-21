import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="about">
                <h3>This is the Users list app v1.0.0. It is part of
                    learning React.
                </h3>
            </div>
        );
    }
}

export default About;