import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log(this.props.items);
        return (
            <div className="flex">


                <ul className="item">
                    {this.props.items.map(item => (

                        <User key={item.id}
                            delUser={this.props.delUser}
                            item={item} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Users;