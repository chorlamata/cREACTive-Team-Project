import React, { Component } from 'react';
import Product from './Product'
import {loadProducts, deleteProduct} from '../../models/product'

export default class Catalog extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    componentDidMount(){
        loadProducts(this.onLoadSuccess)
    }
    onLoadSuccess (response){
        this.setState({products:response});
    }
    render(){
        return(
            <div className="container">
                <h1>Catalog</h1>
                {this.state.products.map((t,i) => {
                    return <Product key={i} name={t.name} link={t.link} description={t.description} productId={t._id}/>
                })}
            </div>
        )
    }
}