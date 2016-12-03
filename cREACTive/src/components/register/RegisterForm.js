import React, { Component } from 'react';

export default class RegisterForm extends Component{
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
                    <label>Repeat password:</label>
                    <input type="password" 
                           name="repeat" 
                           value={this.props.repeat}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    <input type="submit" value="Register" disabled={this.props.inputDisabled}/>
                </form>
            </div>
        )
    }
}