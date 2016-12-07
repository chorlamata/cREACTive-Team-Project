import React, {Component} from 'react';
import Greeting from './Greeting';
import './header.css'
import '../catalog/Product.css'

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron"  id="navigation">
                <h1>cREACTive</h1>
                <Greeting loggedIn={this.props.loggedIn} username={this.props.username}/>
                <p></p>
                <div className="toolbar">
                    {this.props.children}
                </div>
            </div>
        );
    }
}