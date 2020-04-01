import React, { Component } from 'react';
import './css/adduser.css';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.name, this.state.email);
        this.setState({ name: '', email: '' });
    }

    render() {
        return (
            <div className="add">
                <form className="form-style-10" 
                onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="name"
                            placeholder="Add User..."
                            onChange={this.onChange}
                            value={this.state.name} />
                        <input type="email" className="form-control" name="email"
                            placeholder="Add Email..."
                            onChange={this.onChange}
                            value={this.state.email} />
                        <input className="btn btn-primary"
                            type="submit" value="Submit"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUser;