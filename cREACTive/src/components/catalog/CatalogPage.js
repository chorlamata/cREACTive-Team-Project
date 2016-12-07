import React, {Component} from 'react';
import Product from './Product';
import {loadProducts} from '../../models/product';

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            canEdit: false
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadProducts(this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        let newState = {};
        this.setState({ products: response });
        if (response._acl.creator === sessionStorage.getItem('userId')) {
            newState.canEdit = true;
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className="row">
                <h1>Catalog</h1>
                {this.state.products.map((p, i)=>{
                    return <Product
                                key={i}
                                name={p.name}
                                description={p.description}
                                image={p.image}
                                productId={p._id}
                                creator={p._acl.creator}
                            />
                })}
            </div>
        );
    }
}