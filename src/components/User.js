import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props.item);
        const { id, name } = this.props.item;
        return (
            <div className="user">
                <img src="https://picsum.photos/id/1011/200/200" />
                <li>
                    Name: {this.props.item.name}

                </li>
                <li>
                    Email: {this.props.item.email}
                </li>
                {/* <li>
                    City: {this.props.item.address.city}
                </li>
                <li>
                    Website: {this.props.item.website}
                </li>
                <li>
                    Catch Phrase: {this.props.item.company.catchPhrase}
                </li> */}
                <button onClick={this.props.delUser.bind(this, id)} className="btn btn-danger"
                    type="submit">X</button>
            </div>
        );
    }
}

export default User;