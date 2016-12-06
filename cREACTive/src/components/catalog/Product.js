import React, { Component } from 'react';

export default class Product extends Component{
    render(){
        return(
        <div className="card">
            <img className="card-img-top pr-image" src={this.props.link} alt="Card image cap"/>
            <div className="card-block">
                <h4 className="card-title">{this.props.name}</h4>
                <p className="card-text">{this.props.description || "No description"}</p>
            </div>
        </div>
        )
    }
}