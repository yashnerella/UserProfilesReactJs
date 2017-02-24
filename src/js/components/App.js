/**
 * Created by yashw on 10-02-2017.
 */
import React, {Component} from 'react';

import {UserInput} from './UserInput';
import {User} from './User';


export class App extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    newUserEntry(user){
        var usersArray = this.state.users;
        usersArray.push(user);
        this.setState({
            users: usersArray
        });
    }

    render() {
        console.log(this.state.users);
        return(
            <div>
                <h1>User Profiles App</h1>
                <hr className="linestyle"/>
                <UserInput newUser={this.newUserEntry.bind(this)}/>
                <div className="col-sm-4">
                    {this.state.users.map((user, i)=> <User key={i} userDetails={user}/>)}
                </div>
                <div className="col-sm-2">
                </div>
            </div>
        );
    }
}