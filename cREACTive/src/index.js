import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Catalog from './components/catalog/CatalogPage';
import Register from './components/register/RegisterPage';
import Login from './components/login/LoginPage';
import Create from './components/create/CreatePage';
import SingleProduct from './components/catalog/SingleProductPage'
import Edit from './components/editProduct/EditPage';
import Home from './components/home/HomePage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="catalog" component={Catalog}/>
            <Route path="create" component={Create}/>
            <Route path="edit/:productId" component={Edit}/>
            <Route path="products/:productId" component={SingleProduct}/>

        </Route>
    </Router>,
  document.getElementById('root')
);
