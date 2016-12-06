import React, {Component} from 'react';

export default class EditForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={this.props.name}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={this.props.description}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={this.props.image}
                        onChange={this.props.onChange}
                    />
                </div>
                <input
                    className="btn btn-default"
                    type="submit"
                    value="Edit Product"
                    disabled={this.props.inputDisabled}
                />
            </form>
        );
    }
}