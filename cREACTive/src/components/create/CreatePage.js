import React, { Component } from 'react';
import CreateForm from './CreateForm';
//import observer from '../../models/observer'
import {create} from '../../models/product'

export default class CreatePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            link:"",
            description:"",
            inputDisabled:true
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onCreateSuccess = this.onCreateSuccess.bind(this)
    }
    onChangeHandler(event){
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
    onSubmitHandler(event){
        event.preventDefault();
        create(this.state.name, this.state.link, this.state.description, this.onCreateSuccess)
    }
    onCreateSuccess(result){
        this.context.router.push("/catalog")

    }
    render(){
        return(
            <div>
                <h1>Create product</h1>
                <CreateForm
                    name={this.state.name}
                    link={this.state.link}
                    description={this.state.description}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    disabled={this.state.inputDisabled}
                />
            </div>
        )
    }
}
CreatePage.contextTypes = {
    router:React.PropTypes.object
};