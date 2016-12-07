import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Comments extends Component {
    render() {
        return (
            <div className="comment">
                <span className="spanner">Author</span>
                <span>{this.props.author}</span>
                <span className="spanner">Comment</span>
                <p>{this.props.comment}</p>
            </div>
        )
    }
}