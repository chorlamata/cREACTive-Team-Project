import React, {Component} from 'react';

export default class PostCommentForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>Author</label>
                    <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.props.author}
                        disabled="disabled"
                    />
                </div>
                <div className="form-group">
                    <label>Comment</label>
                    <textarea
                        className="form-control"
                        name="comment"
                        value={this.props.comment}
                        onChange={this.props.onChange}
                    />
                </div>
                <input
                    className="form-control"
                    type="hidden"
                    name="productId"
                    value={this.props.productId}
                    disabled="disabled"
                />
                <input
                    className="btn btn-default"
                    type="submit"
                    value="Post Comment"
                    disabled={this.props.inputDisabled}
                />
            </form>
        );
    }
}