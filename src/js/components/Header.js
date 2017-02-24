/**
 * Created by yashw on 09-02-2017.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

export class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/appinfo"} activeStyle={{color: "red"}}>AppInfo</Link></li>
                            <li><Link to={"/aboutus"} activeStyle={{color: "red"}}>About Us</Link></li>
                            <li><Link to={"/mainapp"} activeStyle={{color: "red"}}>Main App</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}