import React, { Component } from 'react';

export default class CreateForm extends Component{
    render(){
        return(

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                    <label>Product name</label>
                    <input className="form-control"
                           type="text"
                           name="name"
                           value={this.props.name}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    </div>
                    <div className="form-group">
                    <label>Product photo</label>
                    <input className="form-control"type="text"
                           name="link"
                           value={this.props.link}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    </div>
                    <div className="form-group">
                    <label>Product description</label>
                    <textarea className="form-control" type="text"
                            name="description"
                            value={this.props.description}
                            onChange={this.props.onChange}
                            disabled={this.props.inputDisabled}
                    />
                    </div>
                    <input type="submit" value="Create product" disabled={this.props.inputDisabled}/>
                </form>
            </div>
        )
    }
}