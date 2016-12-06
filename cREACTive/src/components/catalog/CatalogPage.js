import React, {Component} from 'react';
import Product from './Product';
import {loadProducts} from '../../models/product';

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadProducts(this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({ products: response });
    }

    render() {
        return (
            <div>
                <h1>Catalog Page</h1>
                {this.state.products.map((p, i)=>{
                    return <Product
                                key={i}
                                name={p.name}
                                description={p.description}
                                image={p.image}
                                productId={p._id}
                            />
                })}
            </div>
        );
    }
}