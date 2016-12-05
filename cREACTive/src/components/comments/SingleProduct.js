import React, { Component } from 'react';

export default class SingleProduct extends Component{
    render(){
        return(
            <div >
                <label >Name</label>
                <p >{this.props.name}</p>
                <label >Link</label>
                <p>{this.props.link}</p>
                <label >Description</label>
                <p>{this.props.description || "No description"}</p>
            </div>
        )
    }
}