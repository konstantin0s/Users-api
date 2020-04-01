import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/pages/About';
import './App.css';
import axios from 'axios';
import Users from './components/Users';
import Header from './components/layout/Header';
import AddUser from './components/AddUser';
import OneUser from './components/OneUser';
import Loading from './Loading';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            .then(data => {
                this.setState({
                    isLoaded: true,
                    items: data
                })
            })
    }

    delUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => this.setState({
                items: [...this.state.items.filter(item =>
                    item.id !== id)]
            }))
        // console.log(id);
    }

    //Add User
    addUser = (name, email) => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name: name,
            email: email,
        })
            .then(res => this.setState({
                items: [...this.state.items, res.data]
            }))
    }


    render() {
        let { isLoaded, items } = this.state;
        console.log(items);

        if (!isLoaded) {
            return (
           <Loading />
            )
        } else {
            return (
                <Router>
                    <div className="App">
                        <Header />
                        <Switch>
                            <Route exact path="/" render={props => (
                                <div className="container">

                                    <AddUser addUser={this.addUser} />
                                    <Users items={items}
                                        delUser={this.delUser} />

                                
                                </div>
                            )} />
                

                        <Route 
        path="/one/:id" 
        render={request => {
          const id = request.match.params.id;
          // console.log(id);
          return <OneUser id={id} />;
        }}
      />

</Switch>
                        <Route exact path="/about" component={About} />
                    </div>
                </Router>
            );
        }
    }
}

export default App;