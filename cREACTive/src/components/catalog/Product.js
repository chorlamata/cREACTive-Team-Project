import React, {Component} from 'react';
import './Product.css'
import {Link} from 'react-router';

export default class Product extends Component {
    render() {
        return (
            <div className="product-box">
                <span className="spanner">Name</span>
                <span>{this.props.name}</span>
                <span className="spanner">Description</span>
                <p>{this.props.description || "No description"}</p>
                <span className="spanner">Image</span>
                <img src={this.props.image} />
                <span className="spanner">Management</span>
                <Link to={"edit/" + this.props.productId} className="btn btn-default">Edit</Link>
                <Link to={"delete/" + this.props.productId} className="btn btn-default">Delete</Link>
                <Link to={"product/" + this.props.productId} className="btn btn-default">View Details</Link>
            </div>
        )
    }
}