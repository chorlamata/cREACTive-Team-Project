import React, {Component} from 'react';
import DeleteForm from './DeleteForm';
import {loadDetails, deleteProduct} from '../../models/product';
//import observer from '../../models/observer';

export default class DeletePage extends Component {
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
        this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
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
        deleteProduct(this.props.params.productId, this.onDeleteSuccess);

    }

    onDeleteSuccess(result) {
        this.context.router.push("/catalog");
    }

    render() {
        return (
            <div>
                <h1>Delete Product Page</h1>
                <DeleteForm
                    name={this.state.name}
                    description={this.state.description}
                    image={this.state.image}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>

        );
    }
}

DeletePage.contextTypes = {
    router: React.PropTypes.object
};