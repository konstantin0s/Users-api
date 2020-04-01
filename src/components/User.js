import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    console.log(props.item);
    
    const { id, name, email } = props.item;
    return (
    
                <div className="user" >
       
           <Link className="linkz" id={id} to={`/one/${id}`}>
                    <img  alt="user" src="https://picsum.photos/id/1011/200/200" />
                    <li>
                        Name: {name}
    
                    </li>
                    <li>
                        Email: {email}
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
                    <button onClick={props.delUser.bind(id)} className="btn btn-danger"
                        type="submit">X</button>
    
    <button className="btn btn-success">Check out</button>
    </Link>
         
    
                </div>
        
    
    );
  }




export default User;