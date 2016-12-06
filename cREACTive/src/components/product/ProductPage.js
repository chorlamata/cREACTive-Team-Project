import React, {Component} from 'react';
import Product from './Product';
import Comments from './Comments';
import PostCommentForm from './PostCommentForm';
import {loadDetails, loadComments, postComment} from '../../models/product';

export default class ProductPage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            name: '',
            description: '',
            image: '',
            author: sessionStorage.getItem('username'),
            comment: '',
            productId:'',
            comments: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onLoadCommentsSuccess = this.onLoadCommentsSuccess.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onCreateSuccess = this.onCreateSuccess.bind(this);
    }

    componentDidMount() {
        loadDetails(this.props.params.productId, this.onLoadSuccess);
        loadComments(this.props.params.productId, this.onLoadCommentsSuccess);
    }

    onLoadSuccess(response) {
        this.setState({
            name: response.name,
            description: response.description,
            image: response.image,
            productId: response._id
        });
    }

    onLoadCommentsSuccess(responsecomments) {
        this.setState({
            comments: responsecomments
        });
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;

        if(event.target.name === "comment") {
            if(event.target.value.length < 3) {
                newState.inputDisabled = true;
            } else {
                newState.inputDisabled = false;
            }
        }

        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        if(this.state.comment.length < 3) {
            alert('Comment must be at least 3 characters long.');
        }

        postComment(this.state.author,
            this.state.comment,
            this.state.productId,
            this.onCreateSuccess);
    }

    onCreateSuccess(result) {
        loadComments(this.props.params.productId, this.onLoadCommentsSuccess);
        this.state.comment = '';
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                <h1>Product Page</h1>
                <Product
                    name={this.state.name}
                    description={this.state.description}
                    image={this.state.image}
                />
                </div>
                <div className="col-md-8">
                <h2>Comments</h2>
                {this.state.comments.map((c, i)=>{
                    return <Comments
                        key={i}
                        author={c.author}
                        comment={c.comment}
                    />
                })}
                <h2>Post a comment</h2>
                <PostCommentForm
                    author={this.state.author}
                    comment={this.state.comment}
                    productId={this.state.productId}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
                </div>
            </div>
        );
    }
}

ProductPage.contextTypes = {
    router: React.PropTypes.object
};