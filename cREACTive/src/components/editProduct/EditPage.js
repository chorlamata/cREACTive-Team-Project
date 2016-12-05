import React, {Component} from 'react';
import EditForm from './EditForm';
import {loadProductDetails, editProduct} from '../../models/product'

export default class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            link: "",
            description: "",
            inputDisabled: true
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onEditSuccess = this.onEditSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);

    }
    componentDidMount(){
        loadProductDetails(this.props.params.productId, this.onLoadSuccess)
    }
    onLoadSuccess (response){
        this.setState({
            name: response.name,
            link:response.link,
            description:response.description
        });
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
            editProduct(this.props.params.productId, this.state.name, this.state.link, this.state.description, this.onEditSuccess)
    }

    onEditSuccess(result) {
        this.context.router.push("/catalog")
    }
    render() {
        return (
            <div>
                <h1>Edit product</h1>
                <EditForm
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
EditPage.contextTypes = {
        router: React.PropTypes.object
    };