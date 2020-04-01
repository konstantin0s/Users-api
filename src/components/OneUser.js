import React, { Component } from 'react';
import './css/oneuser.css';
import axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
            .then(res => res.data)
            .then(data => {
                console.log(data);
                this.setState({
        
                    user: data
            
                })
                console.log(this.state.user);
            })
        }

    render() {

        console.log(this.props.items);

        console.log(this.state.user);
        const { id, name, email, username, website } = this.state.user;
        return (
      <div className="one-user">
                  <div className="user" key={id} >
   

   <img alt="user" src="https://picsum.photos/id/1011/200/200" />
   <li>
       Name: {name}

   </li>
   <li>
       Email: {email}
   </li>
   <li>
       Username: {username}
   </li>
   <li>
       Website: {website}
   </li>
  

</div>
      </div>
        );
    }
}

export default User;