import React, { Component } from 'react';

export default class LoginForm extends Component{
    render(){
        return(

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <label>Username:</label>
                    <input type="text" 
                           name="username"
                           value={this.props.username}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    <label>Password:</label>
                    <input type="password" 
                           name="password" 
                           value={this.props.password}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}