import React, { Component } from 'react';

export default class LoginForm extends Component{
    render(){
        return(

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <label>Username:</label>
                    <div className="form-group">
                    <input className="form-control"
                           type="text"
                           name="username"
                           value={this.props.username}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    </div>
                    <div className="form-group">
                    <label>Password:</label>
                    <input className="form-control"
                           type="password"
                           name="password" 
                           value={this.props.password}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}