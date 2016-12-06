import React, {Component} from 'react';
import EditForm from './EditForm';
import {loadDetails, edit} from '../../models/product';
import toastr from 'toastr';
//import observer from '../../models/observer';

export default class EditPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: '',
            inputDisabled: true
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onEditSuccess = this.onEditSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadDetails(this.props.params.productId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({
            name: response.name,
            description: response.description,
            image: response.image,
            inputDisabled: false
        });
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;

        if(event.target.name === "name") {
            if(event.target.value.length < 3) {
                newState.inputDisabled = true;
            } else {
                newState.inputDisabled = false;
            }
        }

        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        if(this.state.name.length < 3) {
            alert('Product name must be at least 3 characters long.');
        } else {
            edit(this.props.params.productId, this.state.name, this.state.description, this.state.image, this.onEditSuccess);
        }
    }

    onEditSuccess(result) {
        if(result) {
            toastr.success("Product edited.");
            this.context.router.push("/catalog");
        }else{
            toastr.error("Product wasn't edited.")
        }
    }

    render() {
        return (
            <div>
                <h1>Edit Page</h1>
                <EditForm
                    name={this.state.name}
                    description={this.state.description}
                    image={this.state.image}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>

        );
    }
}

EditPage.contextTypes = {
    router: React.PropTypes.object
};