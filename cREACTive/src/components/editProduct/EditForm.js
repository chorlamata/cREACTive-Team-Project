import React, { Component } from 'react';

export default class EditForm extends Component{
    render(){
        return(

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                    <label>Product name</label>
                    <input type="text"
                           name="name"
                           value={this.props.name}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    </div>
                    <div className="form-group">
                        <label>Product photo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="link"
                            value={this.props.link}
                            onChange={this.props.onChange}
                            disabled={this.props.inputDisabled}/>
                    </div>
                    <div className="form-group">
                    <label>Product description</label>
                    <textarea className="form-control"
                              type="text"
                            name="description"
                            value={this.props.description}
                            onChange={this.props.onChange}
                            disabled={this.props.inputDisabled}
                    />
                    </div>
                    <input type="submit" value="Edit product" disabled={this.props.inputDisabled}/>
                </form>
            </div>
        )
    }
}