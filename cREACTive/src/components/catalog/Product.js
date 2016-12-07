import React, {Component} from 'react';
import './Product.css'
import {Link} from 'react-router';

export default class Product extends Component {
    render() {
        let editProduct = null;
        let deleteProduct = null;

        if (this.props.creator === sessionStorage.getItem('userId')) {
            editProduct = <Link to={"edit/" + this.props.productId} className="btn btn-default">Edit</Link>;
            deleteProduct = <Link to={"delete/" + this.props.productId} className="btn btn-default">Delete</Link>
        }

        return (
            <div className="col-md-4 product-box">
                <div className="name-heading"><h4>{this.props.name}</h4></div>
                <img src={this.props.image} className="img-responsive img-rounded" />
                <span className="spanner">Management</span>
                <div className="management">
                    {editProduct}
                    {deleteProduct}
                    <Link to={"product/" + this.props.productId} className="btn btn-default">View Details</Link>
                </div>
            </div>
        )
    }
}