import React, { Component } from 'react';
import {Link} from 'react-router';
import Product from './Product'
import {loadProducts, deleteProduct} from '../../models/product'
import "./Product.css"

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
                    if(t._acl.creator === sessionStorage.getItem("userId")) {
                        return(
                            <div className="product-in-calalog">
                                <Product key={i}
                                         name={t.name}
                                         link={t.link}
                                         description={t.description}
                                         productId={t._id}/>
                                <Link to={'/products/' + t._id} className="btn btn-primary">View details</Link>
                                <Link to={"/edit/"+t._id} className="btn btn-primary">Edit</Link>
                                <input type="submit"
                                       value='Delete'
                                       className="btn btn-primary"
                                       onClick={()=>deleteProduct(t._id, (response) => loadProducts(this.onLoadSuccess))}/>

                            </div>
                        )
                    }else{
                        return(
                            <div className="product-in-calalog">
                                <Product key={i}
                                         name={t.name}
                                         link={t.link}
                                         description={t.description}
                                         productId={t._id}/>
                                <Link to={'/products/' + t._id} className="btn btn-primary">View details</Link>
                            </div>
                        )
                    }

                })}
            </div>
        )
    }
}