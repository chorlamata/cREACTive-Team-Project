import React, { Component } from 'react';

export default class CommentForm extends Component{
    render(){
        return(

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <label>Author</label>
                    <input type="text"
                           name="name"
                           value={this.props.author}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    <label>Comment</label>
                    <textarea type="text"
                            name="description"
                            value={this.props.content}
                            onChange={this.props.onChange}
                            disabled={this.props.inputDisabled}
                    />
                    <input type="submit" value="Leave comment" disabled={this.props.inputDisabled}/>
                </form>
            </div>
        )
    }
}