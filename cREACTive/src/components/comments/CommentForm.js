import React, { Component } from 'react';

export default class CommentForm extends Component{
    render(){
        return(

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <label>Comment</label>
                    <textarea type="text"
                            name="content"
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