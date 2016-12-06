import React, {Component} from 'react';
import SingleProduct from './SingleProduct';
import CommentToList from '../comments/CommentToList';
import {loadProductDetails} from '../../models/product'
import {getAuthor} from '../../models/user'
import {loadComments, leaveComment} from '../../models/comment'
import $ from 'jquery'

export default class SingleProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            link: "",
            description: "",
            comments:[],
            inputDisabled: true
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onCommentsLoaded = this.onCommentsLoaded.bind(this);

    }
    componentDidMount(){
        loadProductDetails(this.props.params.productId, this.onLoadSuccess)
        loadComments(this.props.params.productId, this.onCommentsLoaded)

    }
    onLoadSuccess (response){
        this.setState({
            name: response.name,
            link:response.link,
            description:response.description
        });
    }

    onCommentsLoaded (response){
        this.setState({comments:response});
    }

    render() {
        return (
            <div>
                <h1>Product Details</h1>
                <SingleProduct
                    name={this.state.name}
                    link={this.state.link}
                    description={this.state.description}
                />
                <h2>Comments</h2>
                {this.state.comments.map((t,i) => {
                    return <CommentToList key={i} content={t.content} author={getAuthor(t._acl.creator, (response)=>response["username"])}/>
                })}
                <h3>Leave Comment</h3>
                <textarea id="comment"/>
                <p><input type="submit" value="Leave comment"onClick={
                ()=>leaveComment($('#comment').val(), this.props.params.productId) }/></p>
            </div>
        )
    }
}
SingleProductPage.contextTypes = {
    router: React.PropTypes.object
};