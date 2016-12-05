import React, { Component } from 'react';
import {Link} from 'react-router'
import{deleteProduct, loadProducts} from '../../models/product'

export default class Product extends Component{
    render(){
        return(
        <div className="card">
            <img className="card-img-top" src={this.props.link} alt="Card image cap"/>
            <div className="card-block">
                <h4 className="card-title">{this.props.name}</h4>
                <p className="card-text">{this.props.description || "No description"}</p>
                <Link to={"/edit/"+this.props.productId} className="btn btn-primary">Edit</Link>
                <input type="submit" value='Delete' className="btn btn-primary" onClick={()=>deleteProduct(this.props.productId)}/>
                <Link to={'/products/' + this.props.productId} className="btn btn-primary">View details</Link>
            </div>
        </div>
        )
    }
}