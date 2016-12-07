import React, {Component} from 'react';
import '../catalog/Product.css'
import {Link} from 'react-router';

export default class Product extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description || "No description"}</p>
                <img src={this.props.image} className="img-responsive img-rounded" />
            </div>
        )
    }
}