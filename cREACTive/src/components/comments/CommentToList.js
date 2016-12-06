import React, { Component } from 'react';

export default class CommentToList extends Component{
    render(){
        return(
            <div>
                <label>Author</label>
                <div>{this.props.author}</div>
                <label>Comment</label>
                <div>{this.props.content}</div>
            </div>
        )
    }
}