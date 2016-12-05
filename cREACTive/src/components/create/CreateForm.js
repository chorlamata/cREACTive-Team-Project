import React, { Component } from 'react';

export default class CreateForm extends Component{
    render(){
        return(

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <label>Product name</label>
                    <input type="text"
                           name="name"
                           value={this.props.name}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    <label>Product photo</label>
                    <input type="text" 
                           name="link"
                           value={this.props.link}
                           onChange={this.props.onChange}
                           disabled={this.props.inputDisabled}/>
                    <label>Product description</label>
                    <textarea type="text"
                            name="description"
                            value={this.props.description}
                            onChange={this.props.onChange}
                            disabled={this.props.inputDisabled}
                    />
                    <input type="submit" value="Create product" disabled={this.props.inputDisabled}/>
                </form>
            </div>
        )
    }
}