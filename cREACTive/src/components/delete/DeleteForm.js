import React, {Component} from 'react';

export default class DeleteForm extends Component {

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
                        disabled="disabled"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={this.props.description}
                        disabled="disabled"
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={this.props.image}
                        disabled="disabled"
                    />
                </div>
                <input
                    className="btn btn-default"
                    type="submit"
                    value="Delete Product"
                    disabled={this.props.inputDisabled}
                />
            </form>
        );
    }
}