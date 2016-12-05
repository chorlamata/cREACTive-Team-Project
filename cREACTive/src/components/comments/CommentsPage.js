import React, { Component } from 'react';
import CommentForm from './CommentForm';
//import observer from '../../models/observer'
import {create} from '../../models/product'

export default class CreatePage extends Component{
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
        create(this.state.name, this.state.link, this.state.description, this.onCreateSuccess)
    }
    onCreateSuccess(result){
        this.context.router.push("/catalog")

    }
    render(){
        return(
            <div>
                <h1>Comment product</h1>
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
CommentPage.contextTypes = {
    router:React.PropTypes.object
};