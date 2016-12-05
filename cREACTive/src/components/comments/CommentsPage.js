import React, { Component } from 'react';
import CommentForm from './CommentForm';
import {Link} from 'react-router'
import {leaveComment} from '../../models/comment'

export default class CommentsPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            content:"",
            postId:"",
            inputDisabled:true
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onCreateSuccess = this.onCreateSuccess.bind(this)
    }
    onChangeHandler(event){
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
    onSubmitHandler(event){
        event.preventDefault();
        leaveComment(this.state.content, this.state.postId, this.onCreateSuccess)
    }
    onCreateSuccess(result){
        this.context.router.push(`/catalog`)

    }
    render(){
        return(
            <div>
                <h1>Product details</h1>
                <div className="card">
                    <h2 className="card-title">{this.props.name}</h2>

                    <img className="card-img-top" src={this.props.link} alt="Card image cap"/>
                    <div className="card-block">
                        <p className="card-text">{this.props.description || "No description"}</p>
                    </div>
                </div>
                <CommentForm
                    content={this.state.content}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    disabled={this.state.inputDisabled}
                />
            </div>
        )
    }
}
CommentsPage.contextTypes = {
    router:React.PropTypes.object
};