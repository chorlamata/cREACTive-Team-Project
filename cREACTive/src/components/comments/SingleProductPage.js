import React, {Component} from 'react';
import SingleProduct from './SingleProduct';
import Comment from './CommentForm';
import {loadProductDetails} from '../../models/product'
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
                {/*{this.state.comments.map((t,i) => {*/}
                    {/*return console.log(<Comment key={i} content={t.content} author={t.creator} productId={t._id}/>)*/}
                {/*})}*/}
                <textarea id="comment"/>
                <input type="submit" value="Leave comment"onClick={()=>leaveComment($('#comment').val(), this.props.params.productId) }/>
            </div>
        )
    }
}
SingleProductPage.contextTypes = {
    router: React.PropTypes.object
};