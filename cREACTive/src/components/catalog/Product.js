import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Product extends Component{
    render(){
        return(

            <div>
                <span className="spanner">Name</span>
                <span>{this.props.name}</span>
                <span>{this.props.link}</span>
                <span className="spanner">Description</span>
                <p>{this.props.description || "No description"}</p>
                <span className="spanner">Management</span>
                <Link to={'/edit/' + this.props.productId} className="btn btn-default">Edit</Link>
            </div>
        )
    }
}